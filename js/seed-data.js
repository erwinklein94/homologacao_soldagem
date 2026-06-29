// Gerado para o site de Homologações Rumo.
// Contém os seeds por área: Soldagem Aluminotérmica e Alívio de Tensão.
// O administrador carrega no Supabase as provas correspondentes à área do perfil logado.
window.PROVAS_SEEDS = {
  "solda": [
    {
      "codigo": "A",
      "titulo": "Prova A — Fundamentos, Preparação e Segurança",
      "descricao": "Fundamentos do procedimento, requisitos de equipe, ferramentas e segurança na soldagem aluminotérmica de trilhos.",
      "nota_minima": 7,
      "questoes": [
        {
          "ordem": 1,
          "enunciado": "O que significa a sigla ZTA no contexto do procedimento de soldagem aluminotérmica?",
          "alternativas": [
            {
              "id": "a",
              "texto": "Zona de Trabalho Autorizado"
            },
            {
              "id": "b",
              "texto": "Zona Termicamente Afetada"
            },
            {
              "id": "c",
              "texto": "Zona de Tensão Aplicada"
            },
            {
              "id": "d",
              "texto": "Zona Térmica Adjacente"
            },
            {
              "id": "e",
              "texto": "Zona de Transição do Aço"
            }
          ],
          "correta": "b",
          "justificativa": "Item 3 do procedimento."
        },
        {
          "ordem": 2,
          "enunciado": "Qual a composição mínima obrigatória de uma turma para a execução da solda aluminotérmica?",
          "alternativas": [
            {
              "id": "a",
              "texto": "3 colaboradores: 1 soldador, 1 operador e 1 ajudante"
            },
            {
              "id": "b",
              "texto": "5 colaboradores: 1 soldador, 2 operadores e 2 ajudantes"
            },
            {
              "id": "c",
              "texto": "4 colaboradores: 1 soldador, 1 operador e 2 ajudantes"
            },
            {
              "id": "d",
              "texto": "4 colaboradores: 2 soldadores, 1 operador e 1 ajudante"
            },
            {
              "id": "e",
              "texto": "6 colaboradores: 1 soldador, 1 operador e 4 ajudantes"
            }
          ],
          "correta": "c",
          "justificativa": "Item 7.1."
        },
        {
          "ordem": 3,
          "enunciado": "Qual a experiência mínima exigida para o profissional soldador?",
          "alternativas": [
            {
              "id": "a",
              "texto": "6 meses em manutenção de Via Permanente"
            },
            {
              "id": "b",
              "texto": "1 ano em qualquer função ferroviária"
            },
            {
              "id": "c",
              "texto": "2 anos em execução de solda aluminotérmica"
            },
            {
              "id": "d",
              "texto": "3 anos em manutenção de via"
            },
            {
              "id": "e",
              "texto": "Não há exigência de experiência mínima"
            }
          ],
          "correta": "c",
          "justificativa": "Item 7.1."
        },
        {
          "ordem": 4,
          "enunciado": "Qual o prazo de validade da calibração do manômetro de oxigênio (escala em bar)?",
          "alternativas": [
            {
              "id": "a",
              "texto": "180 dias"
            },
            {
              "id": "b",
              "texto": "1 ano"
            },
            {
              "id": "c",
              "texto": "90 dias"
            },
            {
              "id": "d",
              "texto": "120 dias"
            },
            {
              "id": "e",
              "texto": "60 dias"
            }
          ],
          "correta": "d",
          "justificativa": "Tabela 1."
        },
        {
          "ordem": 5,
          "enunciado": "Em uma inspeção de ferramentas realizada no mês de junho, com qual cor as ferramentas devem ser identificadas?",
          "alternativas": [
            {
              "id": "a",
              "texto": "Amarelo"
            },
            {
              "id": "b",
              "texto": "Verde"
            },
            {
              "id": "c",
              "texto": "Azul"
            },
            {
              "id": "d",
              "texto": "Vermelho"
            },
            {
              "id": "e",
              "texto": "Branco"
            }
          ],
          "correta": "b",
          "justificativa": "Tabela de cores de inspeção."
        },
        {
          "ordem": 6,
          "enunciado": "A junta a ser soldada deve estar, no mínimo, a qual distância de outra solda aluminotérmica no mesmo trilho?",
          "alternativas": [
            {
              "id": "a",
              "texto": "3,5 m"
            },
            {
              "id": "b",
              "texto": "4 m"
            },
            {
              "id": "c",
              "texto": "5 m"
            },
            {
              "id": "d",
              "texto": "6 m"
            },
            {
              "id": "e",
              "texto": "10 m"
            }
          ],
          "correta": "d",
          "justificativa": "Item 7.2a."
        },
        {
          "ordem": 7,
          "enunciado": "Por que o soldador nunca deve executar solda aluminotérmica em região com bolsão com presença de água sem antes eliminá-lo?",
          "alternativas": [
            {
              "id": "a",
              "texto": "Risco de oxidação da solda"
            },
            {
              "id": "b",
              "texto": "Risco de explosão"
            },
            {
              "id": "c",
              "texto": "Risco de descarrilamento imediato"
            },
            {
              "id": "d",
              "texto": "Risco de contaminação ambiental"
            },
            {
              "id": "e",
              "texto": "Risco de perda de nivelamento"
            }
          ],
          "correta": "b",
          "justificativa": "Item 8.1e."
        },
        {
          "ordem": 8,
          "enunciado": "Qual tipo de termômetro é permitido para a execução da solda aluminotérmica?",
          "alternativas": [
            {
              "id": "a",
              "texto": "Termômetro a laser (pirômetro)"
            },
            {
              "id": "b",
              "texto": "Termômetro infravermelho portátil"
            },
            {
              "id": "c",
              "texto": "Termômetro digital de contato magnético homologado"
            },
            {
              "id": "d",
              "texto": "Termômetro de mercúrio"
            },
            {
              "id": "e",
              "texto": "Qualquer termômetro, desde que calibrado"
            }
          ],
          "correta": "c",
          "justificativa": "Item 8.1i."
        },
        {
          "ordem": 9,
          "enunciado": "Nas regiões de dormentes de concreto e aço, quantas palmilhas novas devem ser fornecidas para cada solda a ser executada?",
          "alternativas": [
            {
              "id": "a",
              "texto": "2 palmilhas"
            },
            {
              "id": "b",
              "texto": "4 palmilhas"
            },
            {
              "id": "c",
              "texto": "6 palmilhas"
            },
            {
              "id": "d",
              "texto": "8 palmilhas"
            },
            {
              "id": "e",
              "texto": "Não é necessário trocar as palmilhas"
            }
          ],
          "correta": "c",
          "justificativa": "Item 7.2e."
        },
        {
          "ordem": 10,
          "enunciado": "Se uma solda for iniciada e começar a chover antes de ser concluída, qual a extensão mínima do trilho que deve ser protegida (com lona) de cada lado?",
          "alternativas": [
            {
              "id": "a",
              "texto": "0,5 m"
            },
            {
              "id": "b",
              "texto": "1,0 m"
            },
            {
              "id": "c",
              "texto": "1,5 m"
            },
            {
              "id": "d",
              "texto": "2,0 m"
            },
            {
              "id": "e",
              "texto": "3,0 m"
            }
          ],
          "correta": "c",
          "justificativa": "Item 8.1f."
        }
      ]
    },
    {
      "codigo": "B",
      "titulo": "Prova B — Execução, Montagem e Parâmetros",
      "descricao": "Tolerâncias de montagem, preparação da junta, parâmetros de corte, nivelamento e pressão dos gases.",
      "nota_minima": 7,
      "questoes": [
        {
          "ordem": 1,
          "enunciado": "Qual a tolerância de posicionamento da solda em relação ao centro do vão dos dormentes?",
          "alternativas": [
            {
              "id": "a",
              "texto": "50 mm para cada lado"
            },
            {
              "id": "b",
              "texto": "80 mm para cada lado"
            },
            {
              "id": "c",
              "texto": "100 mm para cada lado"
            },
            {
              "id": "d",
              "texto": "120 mm para cada lado"
            },
            {
              "id": "e",
              "texto": "160 mm para cada lado"
            }
          ],
          "correta": "b",
          "justificativa": "Figura 2 / item 7.2."
        },
        {
          "ordem": 2,
          "enunciado": "A partir de qual diferença de desgaste vertical entre trilhos NÃO se deve realizar solda comum, sendo obrigatório o uso de tampão de transição?",
          "alternativas": [
            {
              "id": "a",
              "texto": "Maior que 3 mm"
            },
            {
              "id": "b",
              "texto": "Maior que 5 mm"
            },
            {
              "id": "c",
              "texto": "Maior que 7 mm"
            },
            {
              "id": "d",
              "texto": "Maior que 10 mm"
            },
            {
              "id": "e",
              "texto": "Maior que 15 mm"
            }
          ],
          "correta": "c",
          "justificativa": "Figura 4, observação."
        },
        {
          "ordem": 3,
          "enunciado": "Qual a distância mínima recomendável do furo até o topo/face do trilho a ser soldada (linhas da larga)?",
          "alternativas": [
            {
              "id": "a",
              "texto": "60 mm"
            },
            {
              "id": "b",
              "texto": "80 mm"
            },
            {
              "id": "c",
              "texto": "100 mm"
            },
            {
              "id": "d",
              "texto": "120 mm"
            },
            {
              "id": "e",
              "texto": "150 mm"
            }
          ],
          "correta": "c",
          "justificativa": "Item 9.1."
        },
        {
          "ordem": 4,
          "enunciado": "Qual a espessura mínima do disco para o corte de trilhos?",
          "alternativas": [
            {
              "id": "a",
              "texto": "2 mm"
            },
            {
              "id": "b",
              "texto": "3 mm"
            },
            {
              "id": "c",
              "texto": "4 mm"
            },
            {
              "id": "d",
              "texto": "5 mm"
            },
            {
              "id": "e",
              "texto": "6 mm"
            }
          ],
          "correta": "c",
          "justificativa": "Página 18."
        },
        {
          "ordem": 5,
          "enunciado": "Qual a profundidade mínima de desguarnecimento da \"casa\" entre os dormentes, medida abaixo do patim do trilho?",
          "alternativas": [
            {
              "id": "a",
              "texto": "10 cm"
            },
            {
              "id": "b",
              "texto": "15 cm"
            },
            {
              "id": "c",
              "texto": "20 cm"
            },
            {
              "id": "d",
              "texto": "25 cm"
            },
            {
              "id": "e",
              "texto": "30 cm"
            }
          ],
          "correta": "b",
          "justificativa": "Desguarnecimento."
        },
        {
          "ordem": 6,
          "enunciado": "Em tangente, de quantos dormentes de cada lado devem ser retiradas as fixações para garantir o correto alinhamento?",
          "alternativas": [
            {
              "id": "a",
              "texto": "Mínimo 2 dormentes"
            },
            {
              "id": "b",
              "texto": "Mínimo 3 dormentes"
            },
            {
              "id": "c",
              "texto": "Mínimo 4 dormentes"
            },
            {
              "id": "d",
              "texto": "Mínimo 5 dormentes"
            },
            {
              "id": "e",
              "texto": "Mínimo 6 dormentes"
            }
          ],
          "correta": "b",
          "justificativa": "Item 12.1a."
        },
        {
          "ordem": 7,
          "enunciado": "Qual a contra flecha que deve ser obtida nas extremidades da régua de 1 m durante o nivelamento dos trilhos?",
          "alternativas": [
            {
              "id": "a",
              "texto": "0,3 a 0,5 mm"
            },
            {
              "id": "b",
              "texto": "0,4 a 0,6 mm"
            },
            {
              "id": "c",
              "texto": "1,5 a 1,7 mm"
            },
            {
              "id": "d",
              "texto": "2,0 a 2,5 mm"
            },
            {
              "id": "e",
              "texto": "1,0 a 1,2 mm"
            }
          ],
          "correta": "c",
          "justificativa": "Item 10.2."
        },
        {
          "ordem": 8,
          "enunciado": "Qual a espessura do calibre de folga usado para verificar se há possibilidade de vazamento entre o trilho e a fôrma?",
          "alternativas": [
            {
              "id": "a",
              "texto": "0,05 mm"
            },
            {
              "id": "b",
              "texto": "0,1 mm"
            },
            {
              "id": "c",
              "texto": "0,5 mm"
            },
            {
              "id": "d",
              "texto": "1,0 mm"
            },
            {
              "id": "e",
              "texto": "2,0 mm"
            }
          ],
          "correta": "a",
          "justificativa": "Item 10.4 ii."
        },
        {
          "ordem": 9,
          "enunciado": "Qual deve ser o comprimento da chama na coloração azul (chama neutra) durante o ajuste do maçarico no pré-aquecimento?",
          "alternativas": [
            {
              "id": "a",
              "texto": "5 a 10 mm"
            },
            {
              "id": "b",
              "texto": "10 a 15 mm"
            },
            {
              "id": "c",
              "texto": "15 a 20 mm"
            },
            {
              "id": "d",
              "texto": "25 a 30 mm"
            },
            {
              "id": "e",
              "texto": "40 a 50 mm"
            }
          ],
          "correta": "c",
          "justificativa": "Item 10.7b."
        },
        {
          "ordem": 10,
          "enunciado": "Qual a pressão dos gases para soldas Thermit SKV nas linhas da larga?",
          "alternativas": [
            {
              "id": "a",
              "texto": "Oxigênio 5 Bar / GLP 2 Bar"
            },
            {
              "id": "b",
              "texto": "Oxigênio 5 Bar / GLP 1,4 Bar"
            },
            {
              "id": "c",
              "texto": "Oxigênio 2 Bar / GLP 5 Bar"
            },
            {
              "id": "d",
              "texto": "Oxigênio 3 Bar / GLP 1 Bar"
            },
            {
              "id": "e",
              "texto": "Oxigênio 4 Bar / GLP 2 Bar"
            }
          ],
          "correta": "a",
          "justificativa": "Item 13.2."
        }
      ]
    },
    {
      "codigo": "C",
      "titulo": "Prova C — Acabamento, Qualidade e Tempos",
      "descricao": "Tempos de processo, acabamento, esmerilhamento, tagueamento, registro no SIV e liberação da via.",
      "nota_minima": 7,
      "questoes": [
        {
          "ordem": 1,
          "enunciado": "Após a corrida do aço, com quantos minutos deve-se retirar o cadinho com suporte?",
          "alternativas": [
            {
              "id": "a",
              "texto": "1 min"
            },
            {
              "id": "b",
              "texto": "2 min"
            },
            {
              "id": "c",
              "texto": "3 min"
            },
            {
              "id": "d",
              "texto": "5 min"
            },
            {
              "id": "e",
              "texto": "7 min"
            }
          ],
          "correta": "b",
          "justificativa": "Item 11.1a."
        },
        {
          "ordem": 2,
          "enunciado": "Após quantos minutos do fim da corrida do aço deve ser realizada a rebarbagem da solda (solda normal)?",
          "alternativas": [
            {
              "id": "a",
              "texto": "2 min"
            },
            {
              "id": "b",
              "texto": "3 min"
            },
            {
              "id": "c",
              "texto": "5 min"
            },
            {
              "id": "d",
              "texto": "7 min"
            },
            {
              "id": "e",
              "texto": "10 min"
            }
          ],
          "correta": "d",
          "justificativa": "Item 11.2a."
        },
        {
          "ordem": 3,
          "enunciado": "O esmerilhamento da solda deve ser iniciado após quanto tempo, no mínimo?",
          "alternativas": [
            {
              "id": "a",
              "texto": "10 minutos"
            },
            {
              "id": "b",
              "texto": "20 minutos"
            },
            {
              "id": "c",
              "texto": "30 minutos"
            },
            {
              "id": "d",
              "texto": "35 minutos"
            },
            {
              "id": "e",
              "texto": "38 minutos"
            }
          ],
          "correta": "c",
          "justificativa": "Item 11.3c."
        },
        {
          "ordem": 4,
          "enunciado": "Qual a contra flecha que deve ser deixada no esmerilhamento da solda (ainda com os cavaletes), não se permitindo flecha negativa?",
          "alternativas": [
            {
              "id": "a",
              "texto": "0,0 a 0,3 mm"
            },
            {
              "id": "b",
              "texto": "0,4 a 0,6 mm"
            },
            {
              "id": "c",
              "texto": "1,5 a 1,7 mm"
            },
            {
              "id": "d",
              "texto": "0,3 a 0,5 mm"
            },
            {
              "id": "e",
              "texto": "1,0 a 1,2 mm"
            }
          ],
          "correta": "b",
          "justificativa": "Item 12.1g."
        },
        {
          "ordem": 5,
          "enunciado": "Qual o tempo mínimo após a corrida do aço para que uma composição possa passar sobre a solda?",
          "alternativas": [
            {
              "id": "a",
              "texto": "30 minutos"
            },
            {
              "id": "b",
              "texto": "35 minutos"
            },
            {
              "id": "c",
              "texto": "38 minutos"
            },
            {
              "id": "d",
              "texto": "40 minutos"
            },
            {
              "id": "e",
              "texto": "45 minutos"
            }
          ],
          "correta": "c",
          "justificativa": "Item 12.3f."
        },
        {
          "ordem": 6,
          "enunciado": "No tagueamento da solda, o que representam os dois primeiros caracteres?",
          "alternativas": [
            {
              "id": "a",
              "texto": "A numeração da solda"
            },
            {
              "id": "b",
              "texto": "As iniciais do nome do soldador"
            },
            {
              "id": "c",
              "texto": "As iniciais da empresa"
            },
            {
              "id": "d",
              "texto": "O ano de execução"
            },
            {
              "id": "e",
              "texto": "A quilometragem"
            }
          ],
          "correta": "c",
          "justificativa": "Item 12.4c."
        },
        {
          "ordem": 7,
          "enunciado": "Qual o tamanho das punções utilizadas para o tagueamento da solda?",
          "alternativas": [
            {
              "id": "a",
              "texto": "10 mm"
            },
            {
              "id": "b",
              "texto": "12,5 mm"
            },
            {
              "id": "c",
              "texto": "15 mm"
            },
            {
              "id": "d",
              "texto": "20 mm"
            },
            {
              "id": "e",
              "texto": "8 mm"
            }
          ],
          "correta": "b",
          "justificativa": "Item 12.4c."
        },
        {
          "ordem": 8,
          "enunciado": "A altura do corte do jito deve estar entre qual faixa de distância da base do jito?",
          "alternativas": [
            {
              "id": "a",
              "texto": "2 mm e 5 mm"
            },
            {
              "id": "b",
              "texto": "5 mm e 20 mm"
            },
            {
              "id": "c",
              "texto": "10 mm e 30 mm"
            },
            {
              "id": "d",
              "texto": "20 mm e 50 mm"
            },
            {
              "id": "e",
              "texto": "50 mm e 100 mm"
            }
          ],
          "correta": "b",
          "justificativa": "Corte dos jitos."
        },
        {
          "ordem": 9,
          "enunciado": "Em até quantos dias cada solda realizada deve ser inserida no SIV (tela 113)?",
          "alternativas": [
            {
              "id": "a",
              "texto": "24 horas"
            },
            {
              "id": "b",
              "texto": "2 dias"
            },
            {
              "id": "c",
              "texto": "4 dias"
            },
            {
              "id": "d",
              "texto": "7 dias"
            },
            {
              "id": "e",
              "texto": "10 dias"
            }
          ],
          "correta": "c",
          "justificativa": "Item 12.5f."
        },
        {
          "ordem": 10,
          "enunciado": "Para uma solda que NÃO é de fechamento (parâmetro Thermit SKV — larga), em qual faixa de temperatura ela deve ser executada?",
          "alternativas": [
            {
              "id": "a",
              "texto": "Crescente, acima de 10 °C e abaixo de 50 °C"
            },
            {
              "id": "b",
              "texto": "Decrescente, abaixo de 10 °C"
            },
            {
              "id": "c",
              "texto": "Sempre dentro da FTN"
            },
            {
              "id": "d",
              "texto": "Acima de 50 °C"
            },
            {
              "id": "e",
              "texto": "Qualquer temperatura, desde que crescente"
            }
          ],
          "correta": "a",
          "justificativa": "Item 13.2."
        }
      ]
    }
  ],
  "alivio_tensao": [
    {
      "codigo": "A",
      "titulo": "Prova A — Fundamentos, TNR/FTN e Homologação",
      "descricao": "Conceitos essenciais do alívio de tensões térmicas em trilhos, cálculo de temperatura neutra, faixa neutra, zonas do TLS e requisitos mínimos de qualificação.",
      "nota_minima": 7,
      "questoes": [
        {
          "ordem": 1,
          "enunciado": "Qual é o objetivo principal do procedimento de Alívio de Tensões Térmicas em trilhos?",
          "alternativas": [
            {
              "id": "a",
              "texto": "Apenas definir o padrão visual das juntas de trilho."
            },
            {
              "id": "b",
              "texto": "Fixar condições técnicas para execução do ATT, dando mais estabilidade à via, menores tensões longitudinais e mais segurança."
            },
            {
              "id": "c",
              "texto": "Substituir a necessidade de inspeção ultrassônica dos trilhos."
            },
            {
              "id": "d",
              "texto": "Definir exclusivamente o cadastro de OS no SIV."
            },
            {
              "id": "e",
              "texto": "Padronizar somente a soldagem aluminotérmica de fechamento."
            }
          ],
          "correta": "b",
          "justificativa": "Item 1 — Objetivo."
        },
        {
          "ordem": 2,
          "enunciado": "A qual público e operação o procedimento se aplica?",
          "alternativas": [
            {
              "id": "a",
              "texto": "Somente equipes próprias da Malha Paulista."
            },
            {
              "id": "b",
              "texto": "Somente terceiros que atuam em construção de linha nova."
            },
            {
              "id": "c",
              "texto": "Colaboradores próprios e terceiros que realizem ATT na Rumo — Operação Norte, incluindo Malha Paulista, Central, Norte, Métrica Norte e FMT."
            },
            {
              "id": "d",
              "texto": "Apenas operadores de equipamentos de grande porte."
            },
            {
              "id": "e",
              "texto": "Somente equipes de solda aluminotérmica em oficina."
            }
          ],
          "correta": "c",
          "justificativa": "Item 2 — Aplicação e vigência."
        },
        {
          "ordem": 3,
          "enunciado": "O que significa a sigla VERSE no contexto do procedimento?",
          "alternativas": [
            {
              "id": "a",
              "texto": "Equipamento de medição da tensão térmica longitudinal do trilho."
            },
            {
              "id": "b",
              "texto": "Sistema de abertura de OS para equipes homologadas."
            },
            {
              "id": "c",
              "texto": "Tipo de junta isolante usada em trechos sinalizados."
            },
            {
              "id": "d",
              "texto": "Método de soldagem de fechamento de trilho."
            },
            {
              "id": "e",
              "texto": "Ferramenta usada apenas para inspeção ultrassônica."
            }
          ],
          "correta": "a",
          "justificativa": "Item 3 — Definições e siglas."
        },
        {
          "ordem": 4,
          "enunciado": "No procedimento, o que é flambagem de linha?",
          "alternativas": [
            {
              "id": "a",
              "texto": "A perda de material no boleto por desgaste ondulatório."
            },
            {
              "id": "b",
              "texto": "A formação de desalinhamento lateral severo causado por excessivas forças de compressão nos trilhos soldados."
            },
            {
              "id": "c",
              "texto": "O deslocamento vertical do dormente por socaria inadequada."
            },
            {
              "id": "d",
              "texto": "A abertura normal de folga em trilho curto."
            },
            {
              "id": "e",
              "texto": "O aquecimento controlado do trilho antes da soldagem."
            }
          ],
          "correta": "b",
          "justificativa": "Item 3 — Definição de flambagem de linha."
        },
        {
          "ordem": 5,
          "enunciado": "Como é calculada a Temperatura Neutra de Referência (TNR) indicada no procedimento?",
          "alternativas": [
            {
              "id": "a",
              "texto": "TNR = Tmax − Tmin."
            },
            {
              "id": "b",
              "texto": "TNR = (Tmax + Tmin) / 2 + 5 °C."
            },
            {
              "id": "c",
              "texto": "TNR = Tmax + 5 °C."
            },
            {
              "id": "d",
              "texto": "TNR = Tmin − 5 °C."
            },
            {
              "id": "e",
              "texto": "TNR = FTN × 2."
            }
          ],
          "correta": "b",
          "justificativa": "Item 4.1 — Cálculo de temperatura neutra de referência."
        },
        {
          "ordem": 6,
          "enunciado": "Qual é a expressão da Faixa de Temperatura Neutra (FTN) para assentamento e execução de ATT sem tensor térmico?",
          "alternativas": [
            {
              "id": "a",
              "texto": "FTN = TNR ± 5 °C."
            },
            {
              "id": "b",
              "texto": "FTN = TNR ± 15 °C."
            },
            {
              "id": "c",
              "texto": "FTN = Tmax ± 5 °C."
            },
            {
              "id": "d",
              "texto": "FTN = Tmin + 10 °C."
            },
            {
              "id": "e",
              "texto": "FTN = temperatura ambiente ± 5 °C."
            }
          ],
          "correta": "a",
          "justificativa": "Item 4.1 — FTN = TNR ± 5 °C."
        },
        {
          "ordem": 7,
          "enunciado": "Segundo o procedimento, quando o alívio de tensão for executado abaixo da faixa de temperatura neutra, o que passa a ser obrigatório?",
          "alternativas": [
            {
              "id": "a",
              "texto": "Executar apenas com marreta comum."
            },
            {
              "id": "b",
              "texto": "Utilizar tensores hidráulicos."
            },
            {
              "id": "c",
              "texto": "Suspender definitivamente o serviço."
            },
            {
              "id": "d",
              "texto": "Trocar todos os dormentes do trecho."
            },
            {
              "id": "e",
              "texto": "Executar somente com junta metálica definitiva."
            }
          ],
          "correta": "b",
          "justificativa": "Item 4.1 — temperaturas inferiores exigem tensores hidráulicos."
        },
        {
          "ordem": 8,
          "enunciado": "O que é Zona de Respiração (ZR) no TLS?",
          "alternativas": [
            {
              "id": "a",
              "texto": "A parte central do TLS que não apresenta tendência a deslocamento longitudinal."
            },
            {
              "id": "b",
              "texto": "A extensão mínima a partir das extremidades onde o retensionamento da fixação resiste à tensão gerada pela variação de temperatura."
            },
            {
              "id": "c",
              "texto": "O ponto em que o trilho deve ser cortado obrigatoriamente com policorte."
            },
            {
              "id": "d",
              "texto": "A região da solda afetada termicamente pelo corte com maçarico."
            },
            {
              "id": "e",
              "texto": "O trecho exclusivo de passagem de máquinas de grande porte."
            }
          ],
          "correta": "b",
          "justificativa": "Item 4.2 — Zona de Respiração."
        },
        {
          "ordem": 9,
          "enunciado": "Qual é a experiência mínima exigida para Líder de Via / Encarregado de Via nos serviços correlatos de via permanente?",
          "alternativas": [
            {
              "id": "a",
              "texto": "6 meses."
            },
            {
              "id": "b",
              "texto": "1 ano."
            },
            {
              "id": "c",
              "texto": "2 anos."
            },
            {
              "id": "d",
              "texto": "3 anos."
            },
            {
              "id": "e",
              "texto": "5 anos."
            }
          ],
          "correta": "d",
          "justificativa": "Item 5 — Qualificação mínima do Líder/Encarregado."
        },
        {
          "ordem": 10,
          "enunciado": "Qual é a experiência mínima indicada para Trabalhador de Via Permanente atuar no procedimento?",
          "alternativas": [
            {
              "id": "a",
              "texto": "6 meses em manutenção de Via Permanente e treinamento neste procedimento."
            },
            {
              "id": "b",
              "texto": "1 ano em manutenção de Via Permanente e certificação em EGP."
            },
            {
              "id": "c",
              "texto": "2 anos em serviços de alívio e substituição de trilhos."
            },
            {
              "id": "d",
              "texto": "3 anos em manutenção de Via Permanente."
            },
            {
              "id": "e",
              "texto": "5 anos comprovados por empresa especializada."
            }
          ],
          "correta": "a",
          "justificativa": "Item 5 — Qualificação mínima do Trabalhador de Via Permanente."
        }
      ]
    },
    {
      "codigo": "B",
      "titulo": "Prova B — Segurança, Ferramentas e Critérios de Intervenção",
      "descricao": "Avaliação sobre ferramental obrigatório, segurança operacional, condições de via, corte de trilho, uso do VERSE e critérios que exigem ou orientam o ATT.",
      "nota_minima": 7,
      "questoes": [
        {
          "ordem": 1,
          "enunciado": "Qual dos itens abaixo aparece na lista de materiais, equipamentos e ferramentas do ATT?",
          "alternativas": [
            {
              "id": "a",
              "texto": "Tensor hidráulico e termômetro de contato calibrado."
            },
            {
              "id": "b",
              "texto": "Somente trena e nível óptico."
            },
            {
              "id": "c",
              "texto": "Equipamento de ultrassom como ferramenta obrigatória do ATT."
            },
            {
              "id": "d",
              "texto": "Pirômetro infravermelho sem contato como item obrigatório."
            },
            {
              "id": "e",
              "texto": "Máquina de solda elétrica orbital."
            }
          ],
          "correta": "a",
          "justificativa": "Item 6 — Materiais, equipamentos e ferramentas."
        },
        {
          "ordem": 2,
          "enunciado": "Em inspeção mensal de ferramentas no mês de junho, qual cor deve ser usada para identificação?",
          "alternativas": [
            {
              "id": "a",
              "texto": "Amarelo."
            },
            {
              "id": "b",
              "texto": "Verde."
            },
            {
              "id": "c",
              "texto": "Azul."
            },
            {
              "id": "d",
              "texto": "Vermelho."
            },
            {
              "id": "e",
              "texto": "Branco."
            }
          ],
          "correta": "b",
          "justificativa": "Item 6 — tabela de cores: fevereiro, junho e outubro = verde."
        },
        {
          "ordem": 3,
          "enunciado": "O que o procedimento exige das máquinas de pequeno porte que se apoiam nos dois trilhos?",
          "alternativas": [
            {
              "id": "a",
              "texto": "Devem possuir isolamento adequado para evitar ocupação de linha/sinalização."
            },
            {
              "id": "b",
              "texto": "Devem sempre trabalhar sem aterramento."
            },
            {
              "id": "c",
              "texto": "Devem ser usadas somente em linhas não sinalizadas."
            },
            {
              "id": "d",
              "texto": "Devem ser operadas exclusivamente por EGP."
            },
            {
              "id": "e",
              "texto": "Devem ser retiradas da via a cada 5 minutos."
            }
          ],
          "correta": "a",
          "justificativa": "Item 6 — exigência de isolamento adequado."
        },
        {
          "ordem": 4,
          "enunciado": "No içamento manual do trilho, qual limite de carga por pessoa deve ser respeitado conforme NR17 citado no procedimento?",
          "alternativas": [
            {
              "id": "a",
              "texto": "15 kg por pessoa."
            },
            {
              "id": "b",
              "texto": "18 kg por pessoa."
            },
            {
              "id": "c",
              "texto": "20 kg por pessoa."
            },
            {
              "id": "d",
              "texto": "23 kg por pessoa."
            },
            {
              "id": "e",
              "texto": "30 kg por pessoa."
            }
          ],
          "correta": "d",
          "justificativa": "Item 6 — limite de 23 kg por pessoa."
        },
        {
          "ordem": 5,
          "enunciado": "Para rebatimento de trilho acima de 12 metros de comprimento, o que é obrigatório?",
          "alternativas": [
            {
              "id": "a",
              "texto": "Uso de roletes."
            },
            {
              "id": "b",
              "texto": "Uso de marreta comum no boleto."
            },
            {
              "id": "c",
              "texto": "Execução sem ferramentas para reduzir atrito."
            },
            {
              "id": "d",
              "texto": "Uso de solda de fechamento antes do ATT."
            },
            {
              "id": "e",
              "texto": "Retirada total do lastro."
            }
          ],
          "correta": "a",
          "justificativa": "Item 6 — rebatimento acima de 12 m exige roletes."
        },
        {
          "ordem": 6,
          "enunciado": "Sobre o uso de marreta em trilho, qual alternativa está correta?",
          "alternativas": [
            {
              "id": "a",
              "texto": "É proibido usar qualquer marreta em qualquer etapa."
            },
            {
              "id": "b",
              "texto": "É permitido usar marreta comum livremente na região do boleto."
            },
            {
              "id": "c",
              "texto": "É proibido o uso de marreta em trilho, exceto marreta de bronze ou cobre para execução de ATT."
            },
            {
              "id": "d",
              "texto": "A marreta comum é obrigatória para eliminar a ZTA."
            },
            {
              "id": "e",
              "texto": "A marreta só pode ser usada em trilhos curtos de até 12 m."
            }
          ],
          "correta": "c",
          "justificativa": "Item 6 — proibição e exceção para marreta de bronze/cobre no ATT."
        },
        {
          "ordem": 7,
          "enunciado": "Antes de iniciar o corte de trilho, qual distância mínima os funcionários devem manter do local da operação?",
          "alternativas": [
            {
              "id": "a",
              "texto": "5 metros."
            },
            {
              "id": "b",
              "texto": "10 metros."
            },
            {
              "id": "c",
              "texto": "12 metros."
            },
            {
              "id": "d",
              "texto": "15 metros."
            },
            {
              "id": "e",
              "texto": "20 metros."
            }
          ],
          "correta": "d",
          "justificativa": "Item 7 — distância mínima de 15 m antes do corte."
        },
        {
          "ordem": 8,
          "enunciado": "Em linhas já existentes, quando medições do VERSE identificarem níveis de tensão na faixa Amarela em curva, qual providência o procedimento indica?",
          "alternativas": [
            {
              "id": "a",
              "texto": "Acompanhar somente pelo ronda de linha, sem intervenção."
            },
            {
              "id": "b",
              "texto": "Efetuar alívio completo de tensão em toda a extensão da curva."
            },
            {
              "id": "c",
              "texto": "Executar apenas inspeção visual mensal."
            },
            {
              "id": "d",
              "texto": "Substituir apenas as talas isolantes."
            },
            {
              "id": "e",
              "texto": "Fazer ATT apenas no primeiro vão de dormente."
            }
          ],
          "correta": "b",
          "justificativa": "Item 8 — critérios com medições do VERSE."
        },
        {
          "ordem": 9,
          "enunciado": "Quando o VERSE não acusar medição e as condições de fixação e dormentação estiverem deficientes, o que deve ser recomendado?",
          "alternativas": [
            {
              "id": "a",
              "texto": "Serviço de consolidação da fixação e substituição de dormentes para melhoria do retensionamento."
            },
            {
              "id": "b",
              "texto": "Execução imediata de solda, sem tratamento da via."
            },
            {
              "id": "c",
              "texto": "Somente pintura do patim para acompanhar deslocamento."
            },
            {
              "id": "d",
              "texto": "Liberação automática do trecho sem acompanhamento."
            },
            {
              "id": "e",
              "texto": "Retirada definitiva do TLS."
            }
          ],
          "correta": "a",
          "justificativa": "Item 8, alínea b — procedimento quando o VERSE não acusa medição."
        },
        {
          "ordem": 10,
          "enunciado": "Quando o VERSE não acusar medição, em trechos circulares de curva com raio menor ou igual a 300 m, qual é a orientação?",
          "alternativas": [
            {
              "id": "a",
              "texto": "Acompanhar apenas pelo ronda de linha."
            },
            {
              "id": "b",
              "texto": "Fazer alívio completo em toda a extensão da curva."
            },
            {
              "id": "c",
              "texto": "Executar apenas socaria mecanizada."
            },
            {
              "id": "d",
              "texto": "Não realizar nenhum serviço em curvas desse raio."
            },
            {
              "id": "e",
              "texto": "Instalar juntas isolantes antes de qualquer análise."
            }
          ],
          "correta": "b",
          "justificativa": "Item 8, alínea b — curvas com raios ≤ 300 m."
        }
      ]
    },
    {
      "codigo": "C",
      "titulo": "Prova C — Execução do ATT, Roletes, Tensor e Aceitação",
      "descricao": "Questões sobre execução prática do alívio, controle de temperatura, corte, fixação, roletes, formas natural/artificial, uso de tensor hidráulico e critérios de controle/aceitação.",
      "nota_minima": 7,
      "questoes": [
        {
          "ordem": 1,
          "enunciado": "Na execução do ATT, como deve ser feito o controle da temperatura do trilho?",
          "alternativas": [
            {
              "id": "a",
              "texto": "Com termômetro de contato posicionado na alma do trilho, protegido de sol direto, com monitoramento a cada 10 minutos na mesma posição."
            },
            {
              "id": "b",
              "texto": "Com pirômetro a laser apontado para o boleto, a cada 60 minutos."
            },
            {
              "id": "c",
              "texto": "Somente pela temperatura ambiente informada pela meteorologia."
            },
            {
              "id": "d",
              "texto": "Com termômetro de contato no patim, uma única vez antes do corte."
            },
            {
              "id": "e",
              "texto": "Com qualquer instrumento calibrado, sem posição definida."
            }
          ],
          "correta": "a",
          "justificativa": "Item 8.1, operação I — controle da temperatura do trilho."
        },
        {
          "ordem": 2,
          "enunciado": "Em pontos onde o VERSE apontou excesso de trilho, o que o procedimento indica como entendimento para a execução?",
          "alternativas": [
            {
              "id": "a",
              "texto": "Que haverá corte de trilho."
            },
            {
              "id": "b",
              "texto": "Que a solda de fechamento fica proibida por 30 dias."
            },
            {
              "id": "c",
              "texto": "Que o trecho deve ser apenas acompanhado pelo ronda."
            },
            {
              "id": "d",
              "texto": "Que o ATT deve ser executado acima da FTN."
            },
            {
              "id": "e",
              "texto": "Que não há necessidade de abrir junta."
            }
          ],
          "correta": "a",
          "justificativa": "Item 8.1, operação II — observação importante sobre excesso de trilho."
        },
        {
          "ordem": 3,
          "enunciado": "Ao inspecionar trilhos tensionados, quais evidências devem ser procuradas?",
          "alternativas": [
            {
              "id": "a",
              "texto": "Apenas pintura antiga no boleto."
            },
            {
              "id": "b",
              "texto": "Deslocamentos laterais da grade e marcas de deslocamentos longitudinais, como marcas dos grampos no patim ou deslocamento sobre placas."
            },
            {
              "id": "c",
              "texto": "Somente desgaste vertical maior que 7 mm."
            },
            {
              "id": "d",
              "texto": "Apenas presença de junta isolante na mesma linha do sinal."
            },
            {
              "id": "e",
              "texto": "Somente variação de bitola em tangente."
            }
          ],
          "correta": "b",
          "justificativa": "Item 8.1 — cuidados com trilhos tensionados."
        },
        {
          "ordem": 4,
          "enunciado": "Em uma barra tensionada, qual sequência de corte com maçarico é indicada para criar a junta de alívio?",
          "alternativas": [
            {
              "id": "a",
              "texto": "Patim, alma e boleto."
            },
            {
              "id": "b",
              "texto": "Alma, patim e boleto."
            },
            {
              "id": "c",
              "texto": "Boleto, alma e patim."
            },
            {
              "id": "d",
              "texto": "Boleto e patim simultaneamente, sem cortar a alma."
            },
            {
              "id": "e",
              "texto": "Somente alma, mantendo boleto e patim íntegros."
            }
          ],
          "correta": "c",
          "justificativa": "Item 8.1 — barra tensionada: primeiro boleto, depois alma e por fim patim."
        },
        {
          "ordem": 5,
          "enunciado": "Após o corte com maçarico em barra tensionada, o que é obrigatório eliminar na barra que permanecerá na linha?",
          "alternativas": [
            {
              "id": "a",
              "texto": "A ZTA, com 35 mm para cada lado a partir do ponto de corte, usando policorte."
            },
            {
              "id": "b",
              "texto": "A alma do trilho por 50 mm de cada lado."
            },
            {
              "id": "c",
              "texto": "Todo o trecho de 12 m de fixação completa."
            },
            {
              "id": "d",
              "texto": "O boleto por 70 m de cada lado."
            },
            {
              "id": "e",
              "texto": "A zona neutra integral do TLS."
            }
          ],
          "correta": "a",
          "justificativa": "Item 8.1 — eliminação da ZTA após corte com maçarico."
        },
        {
          "ordem": 6,
          "enunciado": "Qual condição mínima de fixação deve existir para cada lado da junta aliviada antes do corte do trilho?",
          "alternativas": [
            {
              "id": "a",
              "texto": "3 m de fixação completa."
            },
            {
              "id": "b",
              "texto": "6 m de fixação completa."
            },
            {
              "id": "c",
              "texto": "9 m de fixação completa."
            },
            {
              "id": "d",
              "texto": "12 m de fixação completa."
            },
            {
              "id": "e",
              "texto": "70 m de fixação nova."
            }
          ],
          "correta": "d",
          "justificativa": "Item 8.1, operação III — mínimo de 12 m de fixação completa para cada lado."
        },
        {
          "ordem": 7,
          "enunciado": "Qual é a diferença entre a forma natural e a forma artificial/forçada de execução do ATT?",
          "alternativas": [
            {
              "id": "a",
              "texto": "Natural ocorre dentro da FTN; artificial/forçada ocorre abaixo da FTN com tensor hidráulico tracionando a barra."
            },
            {
              "id": "b",
              "texto": "Natural ocorre acima da FTN; artificial ocorre sem tensor dentro da FTN."
            },
            {
              "id": "c",
              "texto": "Natural usa tensor hidráulico; artificial dispensa qualquer rolete."
            },
            {
              "id": "d",
              "texto": "Natural é apenas para pontes sem lastro; artificial é apenas para túneis."
            },
            {
              "id": "e",
              "texto": "Não há diferença técnica entre as duas formas."
            }
          ],
          "correta": "a",
          "justificativa": "Item 8.1.3 — formas de execução do ATT."
        },
        {
          "ordem": 8,
          "enunciado": "Para tangentes e curvas com raios maiores que 1000 m, qual quantidade de roletes é indicada?",
          "alternativas": [
            {
              "id": "a",
              "texto": "Um rolete a cada 4 dormentes."
            },
            {
              "id": "b",
              "texto": "Um rolete a cada 6 dormentes."
            },
            {
              "id": "c",
              "texto": "Um rolete a cada 8 dormentes."
            },
            {
              "id": "d",
              "texto": "Um rolete a cada 12 dormentes."
            },
            {
              "id": "e",
              "texto": "Um rolete a cada 20 dormentes."
            }
          ],
          "correta": "d",
          "justificativa": "Item 8.1.1, letra b — quantidade de roletes."
        },
        {
          "ordem": 9,
          "enunciado": "Na utilização do tensor hidráulico, qual capacidade mínima de tração é exigida e qual capacidade é considerada ideal?",
          "alternativas": [
            {
              "id": "a",
              "texto": "Mínima de 30 t; ideal de 40 t."
            },
            {
              "id": "b",
              "texto": "Mínima de 40 t; ideal de 60 t."
            },
            {
              "id": "c",
              "texto": "Mínima de 60 t; ideal de 80 t."
            },
            {
              "id": "d",
              "texto": "Mínima de 80 t; ideal de 100 t."
            },
            {
              "id": "e",
              "texto": "Mínima de 100 t; ideal de 120 t."
            }
          ],
          "correta": "c",
          "justificativa": "Item 8.1.3 — utilização do tensor hidráulico."
        },
        {
          "ordem": 10,
          "enunciado": "Qual é a fórmula do alongamento quando for necessário usar tensor hidráulico?",
          "alternativas": [
            {
              "id": "a",
              "texto": "ΔL = 0,0115 × L × Δθ."
            },
            {
              "id": "b",
              "texto": "ΔL = L / Δθ."
            },
            {
              "id": "c",
              "texto": "ΔL = 24,7 × S × ΔT / Ro."
            },
            {
              "id": "d",
              "texto": "ΔL = TNR ± 5 °C."
            },
            {
              "id": "e",
              "texto": "ΔL = Tmax − Tmin + 5 °C."
            }
          ],
          "correta": "a",
          "justificativa": "Item 8.1.3 — fórmula de alongamento com tensor hidráulico."
        }
      ]
    }
  ]
};

// Compatibilidade com versões antigas do admin.js.
window.PROVAS_SEED = window.PROVAS_SEEDS.solda;

window.getProvasSeed = function getProvasSeed(area) {
  if (window.PROVAS_SEEDS && Array.isArray(window.PROVAS_SEEDS[area])) return window.PROVAS_SEEDS[area];
  return Array.isArray(window.PROVAS_SEED) ? window.PROVAS_SEED : [];
};
