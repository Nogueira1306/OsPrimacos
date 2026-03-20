function Terms() {
  const handleBack = () => window.history.back();

  const text = {
    title: 'Termos e Condicoes',
    intro:
      'Ao utilizar este website, aceitas os presentes Termos e Condicoes. Se nao concordares com algum ponto, deves interromper a utilizacao do site.',
    section1Title: '1. Utilizacao do website',
    section1Body:
      'Concordas em utilizar este site de forma responsavel e em conformidade com a legislacao aplicavel, sem prejudicar o funcionamento da plataforma.',
    section2Title: '2. Propriedade intelectual',
    section2Body:
      'Os conteudos deste website, incluindo textos, imagens e elementos graficos, sao protegidos por direitos de autor e nao podem ser reproduzidos sem autorizacao.',
    section3Title: '3. Limitacao de responsabilidade',
    section3Body:
      'Empenhamos esforcos para manter a informacao atualizada, mas nao garantimos ausencia total de erros. Nao nos responsabilizamos por danos resultantes da utilizacao do site.',
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

export default Terms;
