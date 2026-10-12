import { useEffect, useState } from 'react';
import { CanonicalSiteContentResponse } from '../data/trimindsData';

const SITE_CONTENT_URL = 'https://triminds-ecosystem-audit-72mbkllrqa-ew.a.run.app/api/v1/site-content';

let cachedContent: CanonicalSiteContentResponse | null = null;
let pendingRequest: Promise<CanonicalSiteContentResponse> | null = null;

async function fetchCanonicalSiteContent(): Promise<CanonicalSiteContentResponse> {
  if (cachedContent) return cachedContent;
  if (!pendingRequest) {
    pendingRequest = fetch(SITE_CONTENT_URL, { headers: { Accept: 'application/json' } })
      .then(async (response) => {
        if (!response.ok) throw new Error(`Ecosystem Audit site-content API respondeu com HTTP ${response.status}`);
        const data = await response.json() as CanonicalSiteContentResponse;
        if (!data || !data.site_modules || !data.site_content_status) {
          throw new Error('A resposta de site-content não corresponde ao contrato esperado.');
        }
        cachedContent = data;
        return data;
      })
      .catch((error) => {
        pendingRequest = null;
        throw error;
      });
  }
  return pendingRequest;
}

export function useAuditSiteContent() {
  const [content, setContent] = useState<CanonicalSiteContentResponse | null>(cachedContent);
  const [loading, setLoading] = useState(!cachedContent);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    if (cachedContent) {
      setContent(cachedContent);
      setLoading(false);
      return () => { active = false; };
    }
    void fetchCanonicalSiteContent()
      .then((data) => {
        if (active) {
          setContent(data);
          setError(null);
        }
      })
      .catch((reason) => {
        if (active) setError(reason instanceof Error ? reason.message : 'Não foi possível carregar o conteúdo canônico do Audit.');
      })
      .finally(() => {
        if (active) setLoading(false);
      });
    return () => { active = false; };
  }, []);

  return { content, loading, error };
}
