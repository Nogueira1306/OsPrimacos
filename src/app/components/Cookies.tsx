function CookiesPolicy() {
  const handleBack = () => window.history.back();

  const text = {
    title: 'Política de Cookies',
    intro:
      'Esta Política de Cookies explica como utilizamos cookies para melhorar a tua experiência de navegação e para compreender como o site é utilizado.',
    section1Title: '1. O que são cookies?',
    section1Body:
      'Cookies são pequenos ficheiros de texto guardados no teu dispositivo quando visitas um website. Servem para memorizar preferências e melhorar funcionalidades.',
    section2Title: '2. Que tipos de cookies usamos?',
    section2Body:
      'Podemos usar cookies essenciais para o funcionamento do site, cookies de desempenho para análise estatística e cookies de funcionalidade para personalização.',
    section3Title: '3. Como gerir cookies?',
    section3Body:
      'Podes aceitar ou recusar cookies no banner apresentado no site e também alterar as tuas preferências no navegador a qualquer momento.',
    section4Title: '4. Alterações a esta política',
    section4Body:
      'Podemos atualizar esta Política de Cookies periodicamente. Recomendamos que consultes esta página de forma regular para ficares a par de eventuais alterações.',
    lastUpdated: 'Última atualização: Março de 2026',
    backAria: 'Voltar para a página anterior',
  };

  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <main className="flex-grow flex items-center justify-center px-4 mt-20 mb-10">
        <div className="max-w-3xl mx-auto bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">{text.title}</h1>

          <p className="mb-6 text-gray-300">{text.intro}</p>

          <h2 className="text-xl md:text-2xl font-semibold mb-3">{text.section1Title}</h2>
          <p className="mb-4 text-gray-300">{text.section1Body}</p>

          <h2 className="text-xl md:text-2xl font-semibold mb-3">{text.section2Title}</h2>
          <p className="mb-4 text-gray-300">{text.section2Body}</p>

          <h2 className="text-xl md:text-2xl font-semibold mb-3">{text.section3Title}</h2>
          <p className="mb-4 text-gray-300">{text.section3Body}</p>

          <h2 className="text-xl md:text-2xl font-semibold mb-3">{text.section4Title}</h2>
          <p className="mb-4 text-gray-300">{text.section4Body}</p>

          <div className="flex items-center justify-between mt-6">
            <p className="text-sm text-gray-400 text-center w-full">{text.lastUpdated}</p>
            <button
              onClick={handleBack}
              className="ml-auto flex items-center text-white text-2xl font-bold hover:text-gray-400 transition-colors"
              aria-label={text.backAria}
              style={{ minWidth: 0 }}
            >
              &lt;
            </button>
          </div>
        </div>
      </main>
      {/* Footer removido para evitar duplicidade, pois ja esta no App */}
    </div>
  );
}

export default CookiesPolicy;
