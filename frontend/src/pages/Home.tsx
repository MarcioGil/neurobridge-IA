import React from 'react';
import { Button } from '@components/Button';

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              NeuroBridge+
            </span>
            <br />
            <span className="text-3xl md:text-5xl">IA pela Inclusão de Todos</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            Promovendo inclusão profissional e educacional real de pessoas com deficiência, 
            usando <strong>Inteligência Artificial</strong> para remover barreiras e conectar talentos.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" variant="primary">
              Começar Agora
            </Button>
            <Button size="lg" variant="outline">
              Sou uma Empresa
            </Button>
          </div>

          <div className="flex items-center justify-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>100% Acessível</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Gratuito</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Personalizado por IA</span>
            </div>
          </div>
        </div>
      </section>

      {/* Problemas que Resolvemos */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Problemas que o NeuroBridge+ Resolve
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl" role="img" aria-label="Barreira">🚫</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Barreiras de Comunicação
              </h3>
              <p className="text-gray-600">
                Auditiva, visual, cognitiva ou social
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl" role="img" aria-label="Ferramentas">🧱</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Falta de Adaptação
              </h3>
              <p className="text-gray-600">
                Processos seletivos não adaptados a diferentes perfis
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl" role="img" aria-label="Empresa">🏢</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Empresas Despreparadas
              </h3>
              <p className="text-gray-600">
                Querem incluir, mas não sabem como preparar o ambiente
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl" role="img" aria-label="Alvo">🎯</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Falta de Personalização
              </h3>
              <p className="text-gray-600">
                Ausência de plataformas que personalizem oportunidades
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Como o NeuroBridge+ Funciona
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Um ecossistema inclusivo que usa IA para <strong>avaliar</strong>, <strong>capacitar</strong>, 
            <strong> conectar</strong>, <strong>apoiar</strong> e <strong>educar</strong>.
          </p>

          <div className="max-w-5xl mx-auto space-y-8">
            <div className="flex flex-col md:flex-row gap-6 items-start bg-white p-6 rounded-xl shadow-soft">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  🧩 Avaliar - Perfil Personalizado
                </h3>
                <p className="text-gray-600">
                  A IA compreende seu perfil, limitações e pontos fortes através de um questionário adaptativo. 
                  Cria um perfil cognitivo e de acessibilidade único para você.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start bg-white p-6 rounded-xl shadow-soft">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  🎓 Capacitar - Aprendizado Adaptado
                </h3>
                <p className="text-gray-600">
                  Recomenda cursos e atividades compatíveis com seu modo de aprendizado. 
                  Conteúdo com transcrição, audiodescrição, Libras e texto simplificado.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start bg-white p-6 rounded-xl shadow-soft">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  💼 Conectar - Matching Inteligente
                </h3>
                <p className="text-gray-600">
                  Faz o match entre você e empresas inclusivas, considerando acessibilidade física, 
                  sensorial e cognitiva. Contratações reais e sustentáveis.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start bg-white p-6 rounded-xl shadow-soft">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                4
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  🗣️ Apoiar - Comunicação Inclusiva
                </h3>
                <p className="text-gray-600">
                  Assistente de IA facilita a comunicação entre você e recrutadores através de voz, 
                  texto, Libras e linguagem simples. Reduz ruídos e preconceitos.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start bg-white p-6 rounded-xl shadow-soft">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                5
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  🏢 Educar - Empresas Preparadas
                </h3>
                <p className="text-gray-600">
                  Fornece relatórios e recomendações de acessibilidade para empresas. 
                  Ambientes corporativos mais acolhedores e preparados para a diversidade.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impacto Social */}
      <section className="bg-gradient-to-br from-primary-600 to-secondary-600 py-16 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Impacto Social Real
          </h2>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="text-4xl mb-2" role="img" aria-label="Neurodiversidade">🧠</div>
              <h3 className="font-semibold mb-1">Neurodiversidade</h3>
              <p className="text-sm opacity-90">Autistas, TDAH, Disléxicos</p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-2" role="img" aria-label="Visual">👀</div>
              <h3 className="font-semibold mb-1">Visual</h3>
              <p className="text-sm opacity-90">Interfaces e leitores automáticos</p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-2" role="img" aria-label="Auditiva">🦻</div>
              <h3 className="font-semibold mb-1">Auditiva</h3>
              <p className="text-sm opacity-90">Libras e legendas automáticas</p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-2" role="img" aria-label="Motora">🦾</div>
              <h3 className="font-semibold mb-1">Motora</h3>
              <p className="text-sm opacity-90">Controle por voz e teclado</p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-2" role="img" aria-label="Educação">🧩</div>
              <h3 className="font-semibold mb-1">Educação</h3>
              <p className="text-sm opacity-90">Aprendizado adaptado por IA</p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-2" role="img" aria-label="Trabalho">💼</div>
              <h3 className="font-semibold mb-1">Trabalho</h3>
              <p className="text-sm opacity-90">Conexão justa e personalizada</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center bg-white p-8 md:p-12 rounded-2xl shadow-medium">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pronto para Começar?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Junte-se a nós e faça parte de uma comunidade que acredita que 
              <strong> deficiência não é incapacidade</strong>, mas sim uma diferença 
              que pode ser respeitada, acolhida e valorizada.
            </p>
            <Button size="lg" variant="primary">
              Criar Minha Conta Gratuita
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

