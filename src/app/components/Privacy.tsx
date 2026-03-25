function Privacy() {
  const handleBack = () => window.history.back();

  const text = {
    title: 'Política de Privacidade',
    intro:
      'Esta Política de Privacidade explica como recolhemos, utilizamos e protegemos os teus dados pessoais quando navegas no nosso site.',
    section1Title: '1. Dados que recolhemos',
    section1Body:
      'Podemos recolher informações técnicas de navegação, dados fornecidos por ti em formulários e dados anónimos de utilização para melhorar os nossos serviços.',
    section2Title: '2. Como utilizamos os dados',
    section2Body:
      'Os dados recolhidos são utilizados para funcionamento do site, comunicação, melhoria de conteúdos e cumprimento de obrigações legais aplicáveis.',
    section3Title: '3. Direitos do utilizador',
    section3Body:
      'Tens o direito de aceder, retificar ou solicitar a eliminação dos teus dados, bem como limitar o tratamento quando legalmente aplicável.',
    lastUpdated: 'Última atualização: Março de 2026',
    backAria: 'Voltar para a página anterior',
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-black via-gray-950 to-[#2b1300] text-white">
      <main className="flex-grow flex items-center justify-center px-4 mt-20 mb-10">
        <div className="max-w-3xl mx-auto bg-gray-900/90 backdrop-blur-sm p-8 rounded-xl shadow-2xl border border-[#FF6B00]/35">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 text-[#FF6B00]">{text.title}</h1>

          <p className="mb-6 text-gray-200">{text.intro}</p>

          <h2 className="text-xl md:text-2xl font-semibold mb-3 text-[#FF6B00]">{text.section1Title}</h2>
          <p className="mb-4 text-gray-200">{text.section1Body}</p>

          <h2 className="text-xl md:text-2xl font-semibold mb-3 text-[#FF6B00]">{text.section2Title}</h2>
          <p className="mb-4 text-gray-200">{text.section2Body}</p>

          <h2 className="text-xl md:text-2xl font-semibold mb-3 text-[#FF6B00]">{text.section3Title}</h2>
          <p className="mb-4 text-gray-200">{text.section3Body}</p>

          <div className="flex items-center justify-between mt-6">
            <p className="text-sm text-gray-300 text-center w-full">{text.lastUpdated}</p>
            <button
              onClick={handleBack}
              className="ml-auto flex items-center text-[#FF6B00] text-2xl font-bold hover:text-[#FF8C3A] transition-colors"
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
