-- Gerado por tools/gen_seed.py — NÃO editar à mão.
-- Seed OPCIONAL das 3 provas. Rode no SQL Editor do Supabase DEPOIS de schema.sql.
-- Alternativa: usar o botão "Carregar provas iniciais" na página do Administrador.
-- Idempotente: pode rodar mais de uma vez (ON CONFLICT DO NOTHING).

insert into public.provas (area, codigo, titulo, descricao, nota_minima) values ('solda', 'A', 'Prova A — Fundamentos, Preparação e Segurança', 'Fundamentos do procedimento, requisitos de equipe, ferramentas e segurança na soldagem aluminotérmica de trilhos.', 7) on conflict (area, codigo) do nothing;
insert into public.provas (area, codigo, titulo, descricao, nota_minima) values ('solda', 'B', 'Prova B — Execução, Montagem e Parâmetros', 'Tolerâncias de montagem, preparação da junta, parâmetros de corte, nivelamento e pressão dos gases.', 7) on conflict (area, codigo) do nothing;
insert into public.provas (area, codigo, titulo, descricao, nota_minima) values ('solda', 'C', 'Prova C — Acabamento, Qualidade e Tempos', 'Tempos de processo, acabamento, esmerilhamento, tagueamento, registro no SIV e liberação da via.', 7) on conflict (area, codigo) do nothing;

insert into public.questoes (prova_id, ordem, enunciado, alternativas, correta, justificativa)
select p.id, 1, 'O que significa a sigla ZTA no contexto do procedimento de soldagem aluminotérmica?', '[{"id": "a", "texto": "Zona de Trabalho Autorizado"}, {"id": "b", "texto": "Zona Termicamente Afetada"}, {"id": "c", "texto": "Zona de Tensão Aplicada"}, {"id": "d", "texto": "Zona Térmica Adjacente"}, {"id": "e", "texto": "Zona de Transição do Aço"}]'::jsonb, 'b', 'Item 3 do procedimento.'
from public.provas p where p.area = 'solda' and p.codigo = 'A'
on conflict (prova_id, ordem) do nothing;
insert into public.questoes (prova_id, ordem, enunciado, alternativas, correta, justificativa)
select p.id, 2, 'Qual a composição mínima obrigatória de uma turma para a execução da solda aluminotérmica?', '[{"id": "a", "texto": "3 colaboradores: 1 soldador, 1 operador e 1 ajudante"}, {"id": "b", "texto": "5 colaboradores: 1 soldador, 2 operadores e 2 ajudantes"}, {"id": "c", "texto": "4 colaboradores: 1 soldador, 1 operador e 2 ajudantes"}, {"id": "d", "texto": "4 colaboradores: 2 soldadores, 1 operador e 1 ajudante"}, {"id": "e", "texto": "6 colaboradores: 1 soldador, 1 operador e 4 ajudantes"}]'::jsonb, 'c', 'Item 7.1.'
from public.provas p where p.area = 'solda' and p.codigo = 'A'
on conflict (prova_id, ordem) do nothing;
insert into public.questoes (prova_id, ordem, enunciado, alternativas, correta, justificativa)
select p.id, 3, 'Qual a experiência mínima exigida para o profissional soldador?', '[{"id": "a", "texto": "6 meses em manutenção de Via Permanente"}, {"id": "b", "texto": "1 ano em qualquer função ferroviária"}, {"id": "c", "texto": "2 anos em execução de solda aluminotérmica"}, {"id": "d", "texto": "3 anos em manutenção de via"}, {"id": "e", "texto": "Não há exigência de experiência mínima"}]'::jsonb, 'c', 'Item 7.1.'
from public.provas p where p.area = 'solda' and p.codigo = 'A'
on conflict (prova_id, ordem) do nothing;
insert into public.questoes (prova_id, ordem, enunciado, alternativas, correta, justificativa)
select p.id, 4, 'Qual o prazo de validade da calibração do manômetro de oxigênio (escala em bar)?', '[{"id": "a", "texto": "180 dias"}, {"id": "b", "texto": "1 ano"}, {"id": "c", "texto": "90 dias"}, {"id": "d", "texto": "120 dias"}, {"id": "e", "texto": "60 dias"}]'::jsonb, 'd', 'Tabela 1.'
from public.provas p where p.area = 'solda' and p.codigo = 'A'
on conflict (prova_id, ordem) do nothing;
insert into public.questoes (prova_id, ordem, enunciado, alternativas, correta, justificativa)
select p.id, 5, 'Em uma inspeção de ferramentas realizada no mês de junho, com qual cor as ferramentas devem ser identificadas?', '[{"id": "a", "texto": "Amarelo"}, {"id": "b", "texto": "Verde"}, {"id": "c", "texto": "Azul"}, {"id": "d", "texto": "Vermelho"}, {"id": "e", "texto": "Branco"}]'::jsonb, 'b', 'Tabela de cores de inspeção.'
from public.provas p where p.area = 'solda' and p.codigo = 'A'
on conflict (prova_id, ordem) do nothing;
insert into public.questoes (prova_id, ordem, enunciado, alternativas, correta, justificativa)
select p.id, 6, 'A junta a ser soldada deve estar, no mínimo, a qual distância de outra solda aluminotérmica no mesmo trilho?', '[{"id": "a", "texto": "3,5 m"}, {"id": "b", "texto": "4 m"}, {"id": "c", "texto": "5 m"}, {"id": "d", "texto": "6 m"}, {"id": "e", "texto": "10 m"}]'::jsonb, 'd', 'Item 7.2a.'
from public.provas p where p.area = 'solda' and p.codigo = 'A'
on conflict (prova_id, ordem) do nothing;
insert into public.questoes (prova_id, ordem, enunciado, alternativas, correta, justificativa)
select p.id, 7, 'Por que o soldador nunca deve executar solda aluminotérmica em região com bolsão com presença de água sem antes eliminá-lo?', '[{"id": "a", "texto": "Risco de oxidação da solda"}, {"id": "b", "texto": "Risco de explosão"}, {"id": "c", "texto": "Risco de descarrilamento imediato"}, {"id": "d", "texto": "Risco de contaminação ambiental"}, {"id": "e", "texto": "Risco de perda de nivelamento"}]'::jsonb, 'b', 'Item 8.1e.'
from public.provas p where p.area = 'solda' and p.codigo = 'A'
on conflict (prova_id, ordem) do nothing;
insert into public.questoes (prova_id, ordem, enunciado, alternativas, correta, justificativa)
select p.id, 8, 'Qual tipo de termômetro é permitido para a execução da solda aluminotérmica?', '[{"id": "a", "texto": "Termômetro a laser (pirômetro)"}, {"id": "b", "texto": "Termômetro infravermelho portátil"}, {"id": "c", "texto": "Termômetro digital de contato magnético homologado"}, {"id": "d", "texto": "Termômetro de mercúrio"}, {"id": "e", "texto": "Qualquer termômetro, desde que calibrado"}]'::jsonb, 'c', 'Item 8.1i.'
from public.provas p where p.area = 'solda' and p.codigo = 'A'
on conflict (prova_id, ordem) do nothing;
insert into public.questoes (prova_id, ordem, enunciado, alternativas, correta, justificativa)
select p.id, 9, 'Nas regiões de dormentes de concreto e aço, quantas palmilhas novas devem ser fornecidas para cada solda a ser executada?', '[{"id": "a", "texto": "2 palmilhas"}, {"id": "b", "texto": "4 palmilhas"}, {"id": "c", "texto": "6 palmilhas"}, {"id": "d", "texto": "8 palmilhas"}, {"id": "e", "texto": "Não é necessário trocar as palmilhas"}]'::jsonb, 'c', 'Item 7.2e.'
from public.provas p where p.area = 'solda' and p.codigo = 'A'
on conflict (prova_id, ordem) do nothing;
insert into public.questoes (prova_id, ordem, enunciado, alternativas, correta, justificativa)
select p.id, 10, 'Se uma solda for iniciada e começar a chover antes de ser concluída, qual a extensão mínima do trilho que deve ser protegida (com lona) de cada lado?', '[{"id": "a", "texto": "0,5 m"}, {"id": "b", "texto": "1,0 m"}, {"id": "c", "texto": "1,5 m"}, {"id": "d", "texto": "2,0 m"}, {"id": "e", "texto": "3,0 m"}]'::jsonb, 'c', 'Item 8.1f.'
from public.provas p where p.area = 'solda' and p.codigo = 'A'
on conflict (prova_id, ordem) do nothing;

insert into public.questoes (prova_id, ordem, enunciado, alternativas, correta, justificativa)
select p.id, 1, 'Qual a tolerância de posicionamento da solda em relação ao centro do vão dos dormentes?', '[{"id": "a", "texto": "50 mm para cada lado"}, {"id": "b", "texto": "80 mm para cada lado"}, {"id": "c", "texto": "100 mm para cada lado"}, {"id": "d", "texto": "120 mm para cada lado"}, {"id": "e", "texto": "160 mm para cada lado"}]'::jsonb, 'b', 'Figura 2 / item 7.2.'
from public.provas p where p.area = 'solda' and p.codigo = 'B'
on conflict (prova_id, ordem) do nothing;
insert into public.questoes (prova_id, ordem, enunciado, alternativas, correta, justificativa)
select p.id, 2, 'A partir de qual diferença de desgaste vertical entre trilhos NÃO se deve realizar solda comum, sendo obrigatório o uso de tampão de transição?', '[{"id": "a", "texto": "Maior que 3 mm"}, {"id": "b", "texto": "Maior que 5 mm"}, {"id": "c", "texto": "Maior que 7 mm"}, {"id": "d", "texto": "Maior que 10 mm"}, {"id": "e", "texto": "Maior que 15 mm"}]'::jsonb, 'c', 'Figura 4, observação.'
from public.provas p where p.area = 'solda' and p.codigo = 'B'
on conflict (prova_id, ordem) do nothing;
insert into public.questoes (prova_id, ordem, enunciado, alternativas, correta, justificativa)
select p.id, 3, 'Qual a distância mínima recomendável do furo até o topo/face do trilho a ser soldada (linhas da larga)?', '[{"id": "a", "texto": "60 mm"}, {"id": "b", "texto": "80 mm"}, {"id": "c", "texto": "100 mm"}, {"id": "d", "texto": "120 mm"}, {"id": "e", "texto": "150 mm"}]'::jsonb, 'c', 'Item 9.1.'
from public.provas p where p.area = 'solda' and p.codigo = 'B'
on conflict (prova_id, ordem) do nothing;
insert into public.questoes (prova_id, ordem, enunciado, alternativas, correta, justificativa)
select p.id, 4, 'Qual a espessura mínima do disco para o corte de trilhos?', '[{"id": "a", "texto": "2 mm"}, {"id": "b", "texto": "3 mm"}, {"id": "c", "texto": "4 mm"}, {"id": "d", "texto": "5 mm"}, {"id": "e", "texto": "6 mm"}]'::jsonb, 'c', 'Página 18.'
from public.provas p where p.area = 'solda' and p.codigo = 'B'
on conflict (prova_id, ordem) do nothing;
insert into public.questoes (prova_id, ordem, enunciado, alternativas, correta, justificativa)
select p.id, 5, 'Qual a profundidade mínima de desguarnecimento da "casa" entre os dormentes, medida abaixo do patim do trilho?', '[{"id": "a", "texto": "10 cm"}, {"id": "b", "texto": "15 cm"}, {"id": "c", "texto": "20 cm"}, {"id": "d", "texto": "25 cm"}, {"id": "e", "texto": "30 cm"}]'::jsonb, 'b', 'Desguarnecimento.'
from public.provas p where p.area = 'solda' and p.codigo = 'B'
on conflict (prova_id, ordem) do nothing;
insert into public.questoes (prova_id, ordem, enunciado, alternativas, correta, justificativa)
select p.id, 6, 'Em tangente, de quantos dormentes de cada lado devem ser retiradas as fixações para garantir o correto alinhamento?', '[{"id": "a", "texto": "Mínimo 2 dormentes"}, {"id": "b", "texto": "Mínimo 3 dormentes"}, {"id": "c", "texto": "Mínimo 4 dormentes"}, {"id": "d", "texto": "Mínimo 5 dormentes"}, {"id": "e", "texto": "Mínimo 6 dormentes"}]'::jsonb, 'b', 'Item 12.1a.'
from public.provas p where p.area = 'solda' and p.codigo = 'B'
on conflict (prova_id, ordem) do nothing;
insert into public.questoes (prova_id, ordem, enunciado, alternativas, correta, justificativa)
select p.id, 7, 'Qual a contra flecha que deve ser obtida nas extremidades da régua de 1 m durante o nivelamento dos trilhos?', '[{"id": "a", "texto": "0,3 a 0,5 mm"}, {"id": "b", "texto": "0,4 a 0,6 mm"}, {"id": "c", "texto": "1,5 a 1,7 mm"}, {"id": "d", "texto": "2,0 a 2,5 mm"}, {"id": "e", "texto": "1,0 a 1,2 mm"}]'::jsonb, 'c', 'Item 10.2.'
from public.provas p where p.area = 'solda' and p.codigo = 'B'
on conflict (prova_id, ordem) do nothing;
insert into public.questoes (prova_id, ordem, enunciado, alternativas, correta, justificativa)
select p.id, 8, 'Qual a espessura do calibre de folga usado para verificar se há possibilidade de vazamento entre o trilho e a fôrma?', '[{"id": "a", "texto": "0,05 mm"}, {"id": "b", "texto": "0,1 mm"}, {"id": "c", "texto": "0,5 mm"}, {"id": "d", "texto": "1,0 mm"}, {"id": "e", "texto": "2,0 mm"}]'::jsonb, 'a', 'Item 10.4 ii.'
from public.provas p where p.area = 'solda' and p.codigo = 'B'
on conflict (prova_id, ordem) do nothing;
insert into public.questoes (prova_id, ordem, enunciado, alternativas, correta, justificativa)
select p.id, 9, 'Qual deve ser o comprimento da chama na coloração azul (chama neutra) durante o ajuste do maçarico no pré-aquecimento?', '[{"id": "a", "texto": "5 a 10 mm"}, {"id": "b", "texto": "10 a 15 mm"}, {"id": "c", "texto": "15 a 20 mm"}, {"id": "d", "texto": "25 a 30 mm"}, {"id": "e", "texto": "40 a 50 mm"}]'::jsonb, 'c', 'Item 10.7b.'
from public.provas p where p.area = 'solda' and p.codigo = 'B'
on conflict (prova_id, ordem) do nothing;
insert into public.questoes (prova_id, ordem, enunciado, alternativas, correta, justificativa)
select p.id, 10, 'Qual a pressão dos gases para soldas Thermit SKV nas linhas da larga?', '[{"id": "a", "texto": "Oxigênio 5 Bar / GLP 2 Bar"}, {"id": "b", "texto": "Oxigênio 5 Bar / GLP 1,4 Bar"}, {"id": "c", "texto": "Oxigênio 2 Bar / GLP 5 Bar"}, {"id": "d", "texto": "Oxigênio 3 Bar / GLP 1 Bar"}, {"id": "e", "texto": "Oxigênio 4 Bar / GLP 2 Bar"}]'::jsonb, 'a', 'Item 13.2.'
from public.provas p where p.area = 'solda' and p.codigo = 'B'
on conflict (prova_id, ordem) do nothing;

insert into public.questoes (prova_id, ordem, enunciado, alternativas, correta, justificativa)
select p.id, 1, 'Após a corrida do aço, com quantos minutos deve-se retirar o cadinho com suporte?', '[{"id": "a", "texto": "1 min"}, {"id": "b", "texto": "2 min"}, {"id": "c", "texto": "3 min"}, {"id": "d", "texto": "5 min"}, {"id": "e", "texto": "7 min"}]'::jsonb, 'b', 'Item 11.1a.'
from public.provas p where p.area = 'solda' and p.codigo = 'C'
on conflict (prova_id, ordem) do nothing;
insert into public.questoes (prova_id, ordem, enunciado, alternativas, correta, justificativa)
select p.id, 2, 'Após quantos minutos do fim da corrida do aço deve ser realizada a rebarbagem da solda (solda normal)?', '[{"id": "a", "texto": "2 min"}, {"id": "b", "texto": "3 min"}, {"id": "c", "texto": "5 min"}, {"id": "d", "texto": "7 min"}, {"id": "e", "texto": "10 min"}]'::jsonb, 'd', 'Item 11.2a.'
from public.provas p where p.area = 'solda' and p.codigo = 'C'
on conflict (prova_id, ordem) do nothing;
insert into public.questoes (prova_id, ordem, enunciado, alternativas, correta, justificativa)
select p.id, 3, 'O esmerilhamento da solda deve ser iniciado após quanto tempo, no mínimo?', '[{"id": "a", "texto": "10 minutos"}, {"id": "b", "texto": "20 minutos"}, {"id": "c", "texto": "30 minutos"}, {"id": "d", "texto": "35 minutos"}, {"id": "e", "texto": "38 minutos"}]'::jsonb, 'c', 'Item 11.3c.'
from public.provas p where p.area = 'solda' and p.codigo = 'C'
on conflict (prova_id, ordem) do nothing;
insert into public.questoes (prova_id, ordem, enunciado, alternativas, correta, justificativa)
select p.id, 4, 'Qual a contra flecha que deve ser deixada no esmerilhamento da solda (ainda com os cavaletes), não se permitindo flecha negativa?', '[{"id": "a", "texto": "0,0 a 0,3 mm"}, {"id": "b", "texto": "0,4 a 0,6 mm"}, {"id": "c", "texto": "1,5 a 1,7 mm"}, {"id": "d", "texto": "0,3 a 0,5 mm"}, {"id": "e", "texto": "1,0 a 1,2 mm"}]'::jsonb, 'b', 'Item 12.1g.'
from public.provas p where p.area = 'solda' and p.codigo = 'C'
on conflict (prova_id, ordem) do nothing;
insert into public.questoes (prova_id, ordem, enunciado, alternativas, correta, justificativa)
select p.id, 5, 'Qual o tempo mínimo após a corrida do aço para que uma composição possa passar sobre a solda?', '[{"id": "a", "texto": "30 minutos"}, {"id": "b", "texto": "35 minutos"}, {"id": "c", "texto": "38 minutos"}, {"id": "d", "texto": "40 minutos"}, {"id": "e", "texto": "45 minutos"}]'::jsonb, 'c', 'Item 12.3f.'
from public.provas p where p.area = 'solda' and p.codigo = 'C'
on conflict (prova_id, ordem) do nothing;
insert into public.questoes (prova_id, ordem, enunciado, alternativas, correta, justificativa)
select p.id, 6, 'No tagueamento da solda, o que representam os dois primeiros caracteres?', '[{"id": "a", "texto": "A numeração da solda"}, {"id": "b", "texto": "As iniciais do nome do soldador"}, {"id": "c", "texto": "As iniciais da empresa"}, {"id": "d", "texto": "O ano de execução"}, {"id": "e", "texto": "A quilometragem"}]'::jsonb, 'c', 'Item 12.4c.'
from public.provas p where p.area = 'solda' and p.codigo = 'C'
on conflict (prova_id, ordem) do nothing;
insert into public.questoes (prova_id, ordem, enunciado, alternativas, correta, justificativa)
select p.id, 7, 'Qual o tamanho das punções utilizadas para o tagueamento da solda?', '[{"id": "a", "texto": "10 mm"}, {"id": "b", "texto": "12,5 mm"}, {"id": "c", "texto": "15 mm"}, {"id": "d", "texto": "20 mm"}, {"id": "e", "texto": "8 mm"}]'::jsonb, 'b', 'Item 12.4c.'
from public.provas p where p.area = 'solda' and p.codigo = 'C'
on conflict (prova_id, ordem) do nothing;
insert into public.questoes (prova_id, ordem, enunciado, alternativas, correta, justificativa)
select p.id, 8, 'A altura do corte do jito deve estar entre qual faixa de distância da base do jito?', '[{"id": "a", "texto": "2 mm e 5 mm"}, {"id": "b", "texto": "5 mm e 20 mm"}, {"id": "c", "texto": "10 mm e 30 mm"}, {"id": "d", "texto": "20 mm e 50 mm"}, {"id": "e", "texto": "50 mm e 100 mm"}]'::jsonb, 'b', 'Corte dos jitos.'
from public.provas p where p.area = 'solda' and p.codigo = 'C'
on conflict (prova_id, ordem) do nothing;
insert into public.questoes (prova_id, ordem, enunciado, alternativas, correta, justificativa)
select p.id, 9, 'Em até quantos dias cada solda realizada deve ser inserida no SIV (tela 113)?', '[{"id": "a", "texto": "24 horas"}, {"id": "b", "texto": "2 dias"}, {"id": "c", "texto": "4 dias"}, {"id": "d", "texto": "7 dias"}, {"id": "e", "texto": "10 dias"}]'::jsonb, 'c', 'Item 12.5f.'
from public.provas p where p.area = 'solda' and p.codigo = 'C'
on conflict (prova_id, ordem) do nothing;
insert into public.questoes (prova_id, ordem, enunciado, alternativas, correta, justificativa)
select p.id, 10, 'Para uma solda que NÃO é de fechamento (parâmetro Thermit SKV — larga), em qual faixa de temperatura ela deve ser executada?', '[{"id": "a", "texto": "Crescente, acima de 10 °C e abaixo de 50 °C"}, {"id": "b", "texto": "Decrescente, abaixo de 10 °C"}, {"id": "c", "texto": "Sempre dentro da FTN"}, {"id": "d", "texto": "Acima de 50 °C"}, {"id": "e", "texto": "Qualquer temperatura, desde que crescente"}]'::jsonb, 'a', 'Item 13.2.'
from public.provas p where p.area = 'solda' and p.codigo = 'C'
on conflict (prova_id, ordem) do nothing;
