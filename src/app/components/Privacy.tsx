function Privacy() {
  const handleBack = () => window.history.back();

  const text = {
    title: 'Politica de Privacidade',
    intro:
      'Esta Politica de Privacidade explica como recolhemos, utilizamos e protegemos os teus dados pessoais quando navegas no nosso site.',
    section1Title: '1. Dados que recolhemos',
    section1Body:
      'Podemos recolher informacoes tecnicas de navegacao, dados fornecidos por ti em formularios e dados anonimos de utilizacao para melhorar os nossos servicos.',
    section2Title: '2. Como utilizamos os dados',
    section2Body:
      'Os dados recolhidos sao utilizados para funcionamento do site, comunicacao, melhoria de conteudos e cumprimento de obrigacoes legais aplicaveis.',
    section3Title: '3. Direitos do utilizador',
    section3Body:
      'Tens o direito de aceder, retificar ou solicitar a eliminacao dos teus dados, bem como limitar o tratamento quando legalmente aplicavel.',
    lastUpdated: 'Ultima atualizacao: Marco de 2026',
    backAria: 'Voltar para a pagina anterior',
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

      {/* Footer removido, agora e global pelo App */}
    </div>
  );
}

export default Privacy;
