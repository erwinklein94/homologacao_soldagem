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
      "codigo": "ATT4-1",
      "subarea": "alivio_termico",
      "titulo": "Prova ATT 4 — Parte 1",
      "descricao": "Questões 1 a 10 da planilha PROVA DE ATT 4 RUMO_004 - Rev3, adaptadas para o modelo objetivo do sistema.",
      "nota_minima": 7,
      "questoes": [
        {
          "ordem": 1,
          "enunciado": "Qual é o procedimento que determina os serviços de ATT na RUMO? (Marcar com \"X\" a ÚNICA resposta CORRETA)",
          "alternativas": [
            {
              "id": "a",
              "texto": "Nenhum;"
            },
            {
              "id": "b",
              "texto": "ENG-FRM-Limites na Rumo;"
            },
            {
              "id": "c",
              "texto": "ENG-ETS - E0011 - Limistes necessários para a linha ficar boa na RUMO;"
            },
            {
              "id": "d",
              "texto": "MAN-VP-L-PRO-TR-0036-01 - Alívio De Tensões Térmicas Em Trilhos;"
            },
            {
              "id": "e",
              "texto": "Nenhuma resposta anterior."
            }
          ],
          "correta": "d",
          "justificativa": "Gabarito da planilha: alternativa d."
        },
        {
          "ordem": 2,
          "enunciado": "Qual é o procedimento que determina os limites de temperatura para serviços de trilho na RUMO?",
          "alternativas": [
            {
              "id": "a",
              "texto": "Qualquer coisa, tanto faz, como tanto fez!!!"
            },
            {
              "id": "b",
              "texto": "Escolher a temperatura conforme que sempre foi usada;"
            },
            {
              "id": "c",
              "texto": "ENG-ETS-ON-T001 - Temperaturas de Serviço na Ferrovia;"
            },
            {
              "id": "d",
              "texto": "ES-SPE-070-R4 - Temperaturas neutras de referência para serviços de trilhos;"
            },
            {
              "id": "e",
              "texto": "Nenhum."
            }
          ],
          "correta": "d",
          "justificativa": "Gabarito da planilha: alternativa d."
        },
        {
          "ordem": 3,
          "enunciado": "Qual é a sequência correta? Use C para afirmação correta e E para afirmação errada.\nA) Calor no trilho faz com que ele dilate e diminua de tamanho;\nB) Frio no trilho faz com que ele contraia e diminua de tamanho;\nC) Frio no trilho faz com que ele dilate e diminua de tamanho;\nD) Calor no trilho faz com que ele contraia e aumente de tamanho;\nE) Calor no trilho faz com que ele dilate e aumente de tamanho;",
          "alternativas": [
            {
              "id": "a",
              "texto": "Sequência: C - C - E - E - C"
            },
            {
              "id": "b",
              "texto": "Sequência: E - C - E - E - C"
            },
            {
              "id": "c",
              "texto": "Sequência: E - E - E - E - C"
            },
            {
              "id": "d",
              "texto": "Sequência: E - C - C - E - C"
            },
            {
              "id": "e",
              "texto": "Sequência: E - C - E - C - C"
            }
          ],
          "correta": "b",
          "justificativa": "Gabarito da planilha: sequência E-C-E-E-C."
        },
        {
          "ordem": 4,
          "enunciado": "Qual é a sequência correta? Use C para afirmação correta e E para afirmação errada.\nA) ATT significa Alívio de Tensões Térmicas;\nB) FTN significa Faixa de Temperatura Negativa;\nC) TN significa a Temperatura Neutra dos Trilhos;\nD) VERSE é um carro;\nE) Faixa de Temperatura Neutra é a Temperatura Neutra + ou - 5°C.",
          "alternativas": [
            {
              "id": "a",
              "texto": "Sequência: E - E - C - E - C"
            },
            {
              "id": "b",
              "texto": "Sequência: C - C - C - E - C"
            },
            {
              "id": "c",
              "texto": "Sequência: C - E - C - E - C"
            },
            {
              "id": "d",
              "texto": "Sequência: C - E - E - E - C"
            },
            {
              "id": "e",
              "texto": "Sequência: C - E - C - C - C"
            }
          ],
          "correta": "c",
          "justificativa": "Gabarito da planilha: sequência C-E-C-E-C."
        },
        {
          "ordem": 5,
          "enunciado": "Qual é a sequência correta? Use C para afirmação correta e E para afirmação errada.\nA) O ATT deve ser feito em linhas novas, na instalação de TLS e quando o VERSE apontar;\nB) É importante passarmos o VERSE nas cristas e vales do perfil longitudinal da linha;\nC) É muito importante, colocar a mão embaixo do trilho;\nD) É muito importante que a turma seja homologada para fazer serviços de ATT;\nE) É proibido usar marreta que não seja de broze para aliviar o trilho.",
          "alternativas": [
            {
              "id": "a",
              "texto": "Sequência: E - C - E - C - C"
            },
            {
              "id": "b",
              "texto": "Sequência: C - E - E - C - C"
            },
            {
              "id": "c",
              "texto": "Sequência: C - C - C - C - C"
            },
            {
              "id": "d",
              "texto": "Sequência: C - C - E - C - C"
            },
            {
              "id": "e",
              "texto": "Sequência: C - C - E - E - C"
            }
          ],
          "correta": "d",
          "justificativa": "Gabarito da planilha: sequência C-C-E-C-C."
        },
        {
          "ordem": 6,
          "enunciado": "Qual é a sequência correta? Use C para afirmação correta e E para afirmação errada.\nA) Flambagem em reta tem a forma de C;\nB) Flambagem em curva tem forma de S;\nC) Flambagem ocorre com pouquíssima frequência em pontos fixos;\nD) Flambagem não deixa marcas nos trilhos de caminhamento e arraste de dormentes;\nE) Se tivermos um desalinhamento provocado pela flambagem >128mm na corda de 20m devemos interditar a linha.",
          "alternativas": [
            {
              "id": "a",
              "texto": "Sequência: C - E - E - E - C"
            },
            {
              "id": "b",
              "texto": "Sequência: E - C - E - E - C"
            },
            {
              "id": "c",
              "texto": "Sequência: E - E - C - E - C"
            },
            {
              "id": "d",
              "texto": "Sequência: E - E - E - C - C"
            },
            {
              "id": "e",
              "texto": "Sequência: E - E - E - E - C"
            }
          ],
          "correta": "e",
          "justificativa": "Gabarito da planilha: sequência E-E-E-E-C."
        },
        {
          "ordem": 7,
          "enunciado": "Qual é a sequência correta? Use C para afirmação correta e E para afirmação errada.\nA) Flambagem é muito fácil de prever;\nB) Fratura só acontece devido a problemas nos vagões;\nC) Fratura não é detectada por DTQ, nem circuito de via;\nD) O Verse mede a STF, que é a temperatura onde o trilho não terá nenhum esforço;\nE) Junta de dilatação não permite o caminhamento do trilho.",
          "alternativas": [
            {
              "id": "a",
              "texto": "Sequência: E - E - E - C - E"
            },
            {
              "id": "b",
              "texto": "Sequência: C - E - E - C - E"
            },
            {
              "id": "c",
              "texto": "Sequência: E - C - E - C - E"
            },
            {
              "id": "d",
              "texto": "Sequência: E - E - C - C - E"
            },
            {
              "id": "e",
              "texto": "Sequência: E - E - E - E - E"
            }
          ],
          "correta": "a",
          "justificativa": "Gabarito da planilha: sequência E-E-E-C-E."
        },
        {
          "ordem": 8,
          "enunciado": "Qual é a sequência correta? Use C para afirmação correta e E para afirmação errada.\nA) Amplitude térmica não provoca tensões nos trilhos.\nB) Quanto maior a amplitude térmica maior são as tensões geradas nos trilhos\nC) Para uma temperatura mínima de 10°C e uma temperatura máxima de 60°C, a amplitude térmica é de 50°C.\nD) Para uma temperatura mínima de -5°C e uma temperatura máxima de 50°C, a amplitude térmica é de 55°C.\nE) Para uma temperatura mínima de -5°C e uma temperatura máxima de 5°C, a amplitude térmica é de 5°C.",
          "alternativas": [
            {
              "id": "a",
              "texto": "Sequência: C - C - C - C - E"
            },
            {
              "id": "b",
              "texto": "Sequência: E - C - C - C - E"
            },
            {
              "id": "c",
              "texto": "Sequência: E - E - C - C - E"
            },
            {
              "id": "d",
              "texto": "Sequência: E - C - E - C - E"
            },
            {
              "id": "e",
              "texto": "Sequência: E - C - C - E - E"
            }
          ],
          "correta": "b",
          "justificativa": "Gabarito da planilha: sequência E-C-C-C-E."
        },
        {
          "ordem": 9,
          "enunciado": "Informação para a questão: Temperatura Neutra = 33°C.\nQual é a sequência correta? Use C para afirmação correta e E para afirmação errada.\nA) A Faixa de Temperatura nesse local será de 23°C a 43°C;\nB) A Faixa de Temperatura nesse local será de 30°C a 35°C;\nC) Qualquer serviço feito acima de 39°C estará acima da Faixa de Temperatura;\nD) Qualquer serviço feito abaixo de 27°C estará abaixo da Faixa de Temperatura;\nE) Qualquer serviço feito dentro da faixa de 30°C a 35°C, estará dentro da Faixa.",
          "alternativas": [
            {
              "id": "a",
              "texto": "Sequência: C - E - C - C - C"
            },
            {
              "id": "b",
              "texto": "Sequência: E - C - C - C - C"
            },
            {
              "id": "c",
              "texto": "Sequência: E - E - C - C - C"
            },
            {
              "id": "d",
              "texto": "Sequência: E - E - E - C - C"
            },
            {
              "id": "e",
              "texto": "Sequência: E - E - C - E - C"
            }
          ],
          "correta": "c",
          "justificativa": "Gabarito da planilha: sequência E-E-C-C-C."
        },
        {
          "ordem": 10,
          "enunciado": "Qual é a sequência correta? Use C para afirmação correta e E para afirmação errada.\nA) É melhor fraturar do que flambar;\nB) Só é permitido trabalhar com temperatura caindo; quando não usar tensor;\nC) É ótimo trabalhar acima da faixa de temperatura;\nD) Tensor hidráulico é usado abaixo da faixa e com temperatura caindo;\nE) O termômetro deve ficar exposto ao sol.",
          "alternativas": [
            {
              "id": "a",
              "texto": "Sequência: E - E - E - C - E"
            },
            {
              "id": "b",
              "texto": "Sequência: C - C - E - C - E"
            },
            {
              "id": "c",
              "texto": "Sequência: C - E - C - C - E"
            },
            {
              "id": "d",
              "texto": "Sequência: C - E - E - C - E"
            },
            {
              "id": "e",
              "texto": "Sequência: C - E - E - E - E"
            }
          ],
          "correta": "d",
          "justificativa": "Gabarito da planilha: sequência C-E-E-C-E."
        }
      ]
    },
    {
      "codigo": "ATT4-2",
      "subarea": "alivio_termico",
      "titulo": "Prova ATT 4 — Parte 2",
      "descricao": "Questões 11 a 20 da planilha PROVA DE ATT 4 RUMO_004 - Rev3, incluindo análise de gráficos, deslocamento e tensor hidráulico.",
      "nota_minima": 7,
      "questoes": [
        {
          "ordem": 1,
          "enunciado": "Qual é a sequência correta? Use C para afirmação correta e E para afirmação errada.\nA) Trilho curto é aquele que movimenta TODA a sua extenção;\nB) Trilho curto é aquele que tem junta numa das extremidadas;\nC) TLS é aquele que tem uma grande região com os esforços balanceados;\nD) TCS é o trilho que sempre terá menos que 600 metros;\nE) TLS é o trilho que tem no mínimo 2 vezes o comprimento de movimentação;",
          "alternativas": [
            {
              "id": "a",
              "texto": "Sequência: E - E - C - E - C"
            },
            {
              "id": "b",
              "texto": "Sequência: C - C - C - E - C"
            },
            {
              "id": "c",
              "texto": "Sequência: C - E - E - E - C"
            },
            {
              "id": "d",
              "texto": "Sequência: C - E - C - C - C"
            },
            {
              "id": "e",
              "texto": "Sequência: C - E - C - E - C"
            }
          ],
          "correta": "e",
          "justificativa": "Gabarito da planilha: sequência C-E-C-E-C."
        },
        {
          "ordem": 2,
          "enunciado": "Qual é a sequência correta? Use C para afirmação correta e E para afirmação errada.\nA) Processo de meia barra é aquele que faz o alívio em apenas um sentido;\nB) Processo de barra inteira é aquele que faz o alívio em apenas um sentido;\nC) Existem 2 principais tipos de modo de fazer alívio, forçado e natural;\nD) O método forçado é feito sem o uso de tensor hidráulico;\nE) Todas estão erradas.",
          "alternativas": [
            {
              "id": "a",
              "texto": "Sequência: E - C - C - E - E"
            },
            {
              "id": "b",
              "texto": "Sequência: C - C - C - E - E"
            },
            {
              "id": "c",
              "texto": "Sequência: E - E - C - E - E"
            },
            {
              "id": "d",
              "texto": "Sequência: E - C - E - E - E"
            },
            {
              "id": "e",
              "texto": "Sequência: E - C - C - C - E"
            }
          ],
          "correta": "a",
          "justificativa": "Gabarito da planilha: sequência E-C-C-E-E."
        },
        {
          "ordem": 3,
          "enunciado": "Qual é a sequência correta? Use C para afirmação correta e E para afirmação errada.\nA) Trilho topado deve ser cortado de policorte de qualquer forma;\nB) O uso de policorte é bom sem o bracinho;\nC) O corte com maçarico deve ser iniciado pelo boleto, depois pela alma e por último o patim;\nD) Não é necessário se preocupar com o perfil longitudinal da linha para fazer ATT;\nE) Os pontos de VERSE dentro da faixa da FTN são obrigatórios a execução de ATT;",
          "alternativas": [
            {
              "id": "a",
              "texto": "Sequência: C - E - C - E - E"
            },
            {
              "id": "b",
              "texto": "Sequência: E - E - C - E - E"
            },
            {
              "id": "c",
              "texto": "Sequência: E - C - C - E - E"
            },
            {
              "id": "d",
              "texto": "Sequência: E - E - E - E - E"
            },
            {
              "id": "e",
              "texto": "Sequência: E - E - C - C - E"
            }
          ],
          "correta": "b",
          "justificativa": "Gabarito da planilha: sequência E-E-C-E-E."
        },
        {
          "ordem": 4,
          "enunciado": "Gráficos do perfil longitudinal para análise:\nGráfico a: [imagem:assets/provas-att4/grafico-a.png]\nGráfico b: [imagem:assets/provas-att4/grafico-b.png]\nGráfico c: [imagem:assets/provas-att4/grafico-c.png]\nGráfico d - com tensor: [imagem:assets/provas-att4/grafico-d.png]\nQual é a sequência correta? Use C para afirmação correta e E para afirmação errada.\nA) O gráfico \"a\" é melhor fazer o processo da meia barra;\nB) O gráfico \"b\" é melhor fazer o processo de meia barra;\nC) O gráfico \"c\" pode ser feito pelos dois processos;\nD) O gráfico \"d\" só pode ser feito pelo metodo da barra inteira;\nE) Todos acima estão errados.",
          "alternativas": [
            {
              "id": "a",
              "texto": "Sequência: C - C - C - E - E"
            },
            {
              "id": "b",
              "texto": "Sequência: E - E - C - E - E"
            },
            {
              "id": "c",
              "texto": "Sequência: E - C - C - E - E"
            },
            {
              "id": "d",
              "texto": "Sequência: E - C - E - E - E"
            },
            {
              "id": "e",
              "texto": "Sequência: E - C - C - C - E"
            }
          ],
          "correta": "c",
          "justificativa": "Gabarito da planilha: sequência E-C-C-E-E."
        },
        {
          "ordem": 5,
          "enunciado": "Qual é a sequência correta? Use C para afirmação correta e E para afirmação errada.\nA) Não precisa se preocupar com o rolete próximo de soldas;\nB) A marreta não precisa ser de bronze ou cobre;\nC) Deve fazer marcações nos trilhos para verificar o caminhamento da barra;\nD) Deve-se colocar a mão embaixo do trilho;\nE) É proibido colocar a mão embaixo do trilho;",
          "alternativas": [
            {
              "id": "a",
              "texto": "Sequência: C - E - C - E - C"
            },
            {
              "id": "b",
              "texto": "Sequência: E - C - C - E - C"
            },
            {
              "id": "c",
              "texto": "Sequência: E - E - E - E - C"
            },
            {
              "id": "d",
              "texto": "Sequência: E - E - C - E - C"
            },
            {
              "id": "e",
              "texto": "Sequência: E - E - C - C - C"
            }
          ],
          "correta": "d",
          "justificativa": "Gabarito da planilha: sequência E-E-C-E-C."
        },
        {
          "ordem": 6,
          "enunciado": "Qual é a sequência correta? Use C para afirmação correta e E para afirmação errada.\nA) O caminhamento da barra deve ser proporcional;\nB) O ideal é aplicar grampos velhos na região da junta após o alívio, pois assim fica muito bom o serviço;\nC) O uso do tensor permite o alívo em qualquer situação entre 10°C a 55°C;\nD) Os roletes devem ser colocados conforme espaçamento do procedimento;\nE) Não deve ser usado rolete travado.",
          "alternativas": [
            {
              "id": "a",
              "texto": "Sequência: E - E - E - C - C"
            },
            {
              "id": "b",
              "texto": "Sequência: C - C - E - C - C"
            },
            {
              "id": "c",
              "texto": "Sequência: C - E - C - C - C"
            },
            {
              "id": "d",
              "texto": "Sequência: C - E - E - E - C"
            },
            {
              "id": "e",
              "texto": "Sequência: C - E - E - C - C"
            }
          ],
          "correta": "e",
          "justificativa": "Gabarito da planilha: sequência C-E-E-C-C."
        },
        {
          "ordem": 7,
          "enunciado": "Tabela de ATT para análise: posição 0 m = real 2 / projetado 0; 50 m = real 16 / projetado 15; 100 m = real 29 / projetado 30; 150 m = real 33 / projetado 45; 200 m = real 57 / projetado 60; 250 m = real 74 / projetado 75; 300 m = real 90 / projetado 90.\nAo comparar deslocamento real x projetado, onde possivelmente existe um travamento ou problema?",
          "alternativas": [
            {
              "id": "a",
              "texto": "Na posição 0 m, porque o real está 2 mm acima do projetado."
            },
            {
              "id": "b",
              "texto": "Na posição 100 m, porque o real está 1 mm abaixo do projetado."
            },
            {
              "id": "c",
              "texto": "Na posição 150 m, onde o deslocamento real fica muito abaixo do projetado."
            },
            {
              "id": "d",
              "texto": "Na posição 250 m, porque o real está 1 mm abaixo do projetado."
            },
            {
              "id": "e",
              "texto": "Não há nenhum ponto com possível travamento ou problema."
            }
          ],
          "correta": "c",
          "justificativa": "Adaptação da questão aberta da planilha para múltipla escolha; maior desvio ocorre em 150 m."
        },
        {
          "ordem": 8,
          "enunciado": "Conforme a fôrmula abaixo, qual é o valor do deslocamento esperado? (Marcar com \"X\" a ÚNICA resposta CORRETA)\nL = 300m | α=0,0115°C-1 | TN = 35°C | Temp = 25°C",
          "alternativas": [
            {
              "id": "a",
              "texto": "51,75mm"
            },
            {
              "id": "b",
              "texto": "50mm"
            },
            {
              "id": "c",
              "texto": "20mm"
            },
            {
              "id": "d",
              "texto": "34,5cm"
            },
            {
              "id": "e",
              "texto": "34,5mm"
            }
          ],
          "correta": "e",
          "justificativa": "Gabarito da planilha: alternativa e."
        },
        {
          "ordem": 9,
          "enunciado": "Conforme a fôrmula abaixo, qual é o valor do corte e puxamento esperado com uso do Tensor Hidráulico?\nL = 300m | α=0,0115°C-1 | TN = 35°C | Temp = 25°C\nFolga após abertura da Junta = 10mm | Corte = ∆l + Gap da solda - 3mm | *Observação: considedar a folga da junta no corte",
          "alternativas": [
            {
              "id": "a",
              "texto": "34,5mm de corte e 34,5mm de puxamento"
            },
            {
              "id": "b",
              "texto": "46,5mm de corte e 21,5mm de puxamento"
            },
            {
              "id": "c",
              "texto": "56,5mm de corte e 31,5mm de puxamento"
            },
            {
              "id": "d",
              "texto": "25mm de corte e 10mm de puxamento"
            },
            {
              "id": "e",
              "texto": "34,5mm de corte e 10mm de puxamento"
            }
          ],
          "correta": "b",
          "justificativa": "Gabarito da planilha: alternativa b."
        },
        {
          "ordem": 10,
          "enunciado": "Qual é a sequência correta? Use C para afirmação correta e E para afirmação errada.\nA) Quando tivermos um ponto fora do caminhamento devemos ver os roletes;\nB) Quando tivermos um ponto fora do caminhamento devemos ver objetos perto do trilho;\nC) Quando tivermos um ponto fora do caminhamento devemos verificar e rebater novamente;\nD) Quando tivermos um ponto fora do caminhamento devemos entender o que acontece;\nE) Todas acima estão certas.",
          "alternativas": [
            {
              "id": "a",
              "texto": "Sequência: C - C - C - C - C"
            },
            {
              "id": "b",
              "texto": "Sequência: E - C - C - C - C"
            },
            {
              "id": "c",
              "texto": "Sequência: C - E - C - C - C"
            },
            {
              "id": "d",
              "texto": "Sequência: C - C - E - C - C"
            },
            {
              "id": "e",
              "texto": "Sequência: C - C - C - E - C"
            }
          ],
          "correta": "a",
          "justificativa": "Gabarito da planilha: sequência C-C-C-C-C."
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
