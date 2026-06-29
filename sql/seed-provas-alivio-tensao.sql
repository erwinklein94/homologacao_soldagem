-- =====================================================================
-- Seed das 3 provas de Homologacao Alivio de Tensao
-- Baseado no procedimento MAN-VP-L-PRO-TR-0036-01 - Alivio de Tensoes
--
-- Como usar:
-- 1) Rode sql/schema.sql se o banco ainda nao estiver configurado.
-- 2) Rode sql/alivio-tensao-area.sql se a area alivio_tensao ainda nao existir.
-- 3) Rode este arquivo no SQL Editor do Supabase.
--
-- O script deixa inativas as provas antigas da area alivio_tensao
-- e cria/atualiza as provas A, B e C com as novas questoes.
-- O historico de tentativas permanece preservado.
-- =====================================================================

begin;

-- Esconde provas antigas da area para que o aluno veja apenas as 3 novas provas ativas.
update public.provas
set ativo = false, atualizado_em = now()
where area = 'alivio_tensao';

insert into public.provas (area, codigo, titulo, descricao, nota_minima, ativo)
values ('alivio_tensao', 'A', 'Prova A — Fundamentos, TNR/FTN e Homologação', 'Conceitos essenciais do alívio de tensões térmicas em trilhos, cálculo de temperatura neutra, faixa neutra, zonas do TLS e requisitos mínimos de qualificação.', 7, true)
on conflict (area, codigo) do update
set titulo = excluded.titulo,
    descricao = excluded.descricao,
    nota_minima = excluded.nota_minima,
    ativo = true,
    atualizado_em = now();

insert into public.provas (area, codigo, titulo, descricao, nota_minima, ativo)
values ('alivio_tensao', 'B', 'Prova B — Segurança, Ferramentas e Critérios de Intervenção', 'Avaliação sobre ferramental obrigatório, segurança operacional, condições de via, corte de trilho, uso do VERSE e critérios que exigem ou orientam o ATT.', 7, true)
on conflict (area, codigo) do update
set titulo = excluded.titulo,
    descricao = excluded.descricao,
    nota_minima = excluded.nota_minima,
    ativo = true,
    atualizado_em = now();

insert into public.provas (area, codigo, titulo, descricao, nota_minima, ativo)
values ('alivio_tensao', 'C', 'Prova C — Execução do ATT, Roletes, Tensor e Aceitação', 'Questões sobre execução prática do alívio, controle de temperatura, corte, fixação, roletes, formas natural/artificial, uso de tensor hidráulico e critérios de controle/aceitação.', 7, true)
on conflict (area, codigo) do update
set titulo = excluded.titulo,
    descricao = excluded.descricao,
    nota_minima = excluded.nota_minima,
    ativo = true,
    atualizado_em = now();

-- Substitui as questoes das 3 provas padrao da area.
delete from public.questoes q
using public.provas p
where q.prova_id = p.id
  and p.area = 'alivio_tensao'
  and p.codigo in ('A','B','C');

insert into public.questoes (prova_id, ordem, enunciado, alternativas, correta, justificativa)
select p.id, 1, 'Qual é o objetivo principal do procedimento de Alívio de Tensões Térmicas em trilhos?', '[{"id": "a", "texto": "Apenas definir o padrão visual das juntas de trilho."}, {"id": "b", "texto": "Fixar condições técnicas para execução do ATT, dando mais estabilidade à via, menores tensões longitudinais e mais segurança."}, {"id": "c", "texto": "Substituir a necessidade de inspeção ultrassônica dos trilhos."}, {"id": "d", "texto": "Definir exclusivamente o cadastro de OS no SIV."}, {"id": "e", "texto": "Padronizar somente a soldagem aluminotérmica de fechamento."}]'::jsonb, 'b', 'Item 1 — Objetivo.'
from public.provas p where p.area = 'alivio_tensao' and p.codigo = 'A';

insert into public.questoes (prova_id, ordem, enunciado, alternativas, correta, justificativa)
select p.id, 2, 'A qual público e operação o procedimento se aplica?', '[{"id": "a", "texto": "Somente equipes próprias da Malha Paulista."}, {"id": "b", "texto": "Somente terceiros que atuam em construção de linha nova."}, {"id": "c", "texto": "Colaboradores próprios e terceiros que realizem ATT na Rumo — Operação Norte, incluindo Malha Paulista, Central, Norte, Métrica Norte e FMT."}, {"id": "d", "texto": "Apenas operadores de equipamentos de grande porte."}, {"id": "e", "texto": "Somente equipes de solda aluminotérmica em oficina."}]'::jsonb, 'c', 'Item 2 — Aplicação e vigência.'
from public.provas p where p.area = 'alivio_tensao' and p.codigo = 'A';

insert into public.questoes (prova_id, ordem, enunciado, alternativas, correta, justificativa)
select p.id, 3, 'O que significa a sigla VERSE no contexto do procedimento?', '[{"id": "a", "texto": "Equipamento de medição da tensão térmica longitudinal do trilho."}, {"id": "b", "texto": "Sistema de abertura de OS para equipes homologadas."}, {"id": "c", "texto": "Tipo de junta isolante usada em trechos sinalizados."}, {"id": "d", "texto": "Método de soldagem de fechamento de trilho."}, {"id": "e", "texto": "Ferramenta usada apenas para inspeção ultrassônica."}]'::jsonb, 'a', 'Item 3 — Definições e siglas.'
from public.provas p where p.area = 'alivio_tensao' and p.codigo = 'A';

insert into public.questoes (prova_id, ordem, enunciado, alternativas, correta, justificativa)
select p.id, 4, 'No procedimento, o que é flambagem de linha?', '[{"id": "a", "texto": "A perda de material no boleto por desgaste ondulatório."}, {"id": "b", "texto": "A formação de desalinhamento lateral severo causado por excessivas forças de compressão nos trilhos soldados."}, {"id": "c", "texto": "O deslocamento vertical do dormente por socaria inadequada."}, {"id": "d", "texto": "A abertura normal de folga em trilho curto."}, {"id": "e", "texto": "O aquecimento controlado do trilho antes da soldagem."}]'::jsonb, 'b', 'Item 3 — Definição de flambagem de linha.'
from public.provas p where p.area = 'alivio_tensao' and p.codigo = 'A';

insert into public.questoes (prova_id, ordem, enunciado, alternativas, correta, justificativa)
select p.id, 5, 'Como é calculada a Temperatura Neutra de Referência (TNR) indicada no procedimento?', '[{"id": "a", "texto": "TNR = Tmax − Tmin."}, {"id": "b", "texto": "TNR = (Tmax + Tmin) / 2 + 5 °C."}, {"id": "c", "texto": "TNR = Tmax + 5 °C."}, {"id": "d", "texto": "TNR = Tmin − 5 °C."}, {"id": "e", "texto": "TNR = FTN × 2."}]'::jsonb, 'b', 'Item 4.1 — Cálculo de temperatura neutra de referência.'
from public.provas p where p.area = 'alivio_tensao' and p.codigo = 'A';

insert into public.questoes (prova_id, ordem, enunciado, alternativas, correta, justificativa)
select p.id, 6, 'Qual é a expressão da Faixa de Temperatura Neutra (FTN) para assentamento e execução de ATT sem tensor térmico?', '[{"id": "a", "texto": "FTN = TNR ± 5 °C."}, {"id": "b", "texto": "FTN = TNR ± 15 °C."}, {"id": "c", "texto": "FTN = Tmax ± 5 °C."}, {"id": "d", "texto": "FTN = Tmin + 10 °C."}, {"id": "e", "texto": "FTN = temperatura ambiente ± 5 °C."}]'::jsonb, 'a', 'Item 4.1 — FTN = TNR ± 5 °C.'
from public.provas p where p.area = 'alivio_tensao' and p.codigo = 'A';

insert into public.questoes (prova_id, ordem, enunciado, alternativas, correta, justificativa)
select p.id, 7, 'Segundo o procedimento, quando o alívio de tensão for executado abaixo da faixa de temperatura neutra, o que passa a ser obrigatório?', '[{"id": "a", "texto": "Executar apenas com marreta comum."}, {"id": "b", "texto": "Utilizar tensores hidráulicos."}, {"id": "c", "texto": "Suspender definitivamente o serviço."}, {"id": "d", "texto": "Trocar todos os dormentes do trecho."}, {"id": "e", "texto": "Executar somente com junta metálica definitiva."}]'::jsonb, 'b', 'Item 4.1 — temperaturas inferiores exigem tensores hidráulicos.'
from public.provas p where p.area = 'alivio_tensao' and p.codigo = 'A';

insert into public.questoes (prova_id, ordem, enunciado, alternativas, correta, justificativa)
select p.id, 8, 'O que é Zona de Respiração (ZR) no TLS?', '[{"id": "a", "texto": "A parte central do TLS que não apresenta tendência a deslocamento longitudinal."}, {"id": "b", "texto": "A extensão mínima a partir das extremidades onde o retensionamento da fixação resiste à tensão gerada pela variação de temperatura."}, {"id": "c", "texto": "O ponto em que o trilho deve ser cortado obrigatoriamente com policorte."}, {"id": "d", "texto": "A região da solda afetada termicamente pelo corte com maçarico."}, {"id": "e", "texto": "O trecho exclusivo de passagem de máquinas de grande porte."}]'::jsonb, 'b', 'Item 4.2 — Zona de Respiração.'
from public.provas p where p.area = 'alivio_tensao' and p.codigo = 'A';

insert into public.questoes (prova_id, ordem, enunciado, alternativas, correta, justificativa)
select p.id, 9, 'Qual é a experiência mínima exigida para Líder de Via / Encarregado de Via nos serviços correlatos de via permanente?', '[{"id": "a", "texto": "6 meses."}, {"id": "b", "texto": "1 ano."}, {"id": "c", "texto": "2 anos."}, {"id": "d", "texto": "3 anos."}, {"id": "e", "texto": "5 anos."}]'::jsonb, 'd', 'Item 5 — Qualificação mínima do Líder/Encarregado.'
from public.provas p where p.area = 'alivio_tensao' and p.codigo = 'A';

insert into public.questoes (prova_id, ordem, enunciado, alternativas, correta, justificativa)
select p.id, 10, 'Qual é a experiência mínima indicada para Trabalhador de Via Permanente atuar no procedimento?', '[{"id": "a", "texto": "6 meses em manutenção de Via Permanente e treinamento neste procedimento."}, {"id": "b", "texto": "1 ano em manutenção de Via Permanente e certificação em EGP."}, {"id": "c", "texto": "2 anos em serviços de alívio e substituição de trilhos."}, {"id": "d", "texto": "3 anos em manutenção de Via Permanente."}, {"id": "e", "texto": "5 anos comprovados por empresa especializada."}]'::jsonb, 'a', 'Item 5 — Qualificação mínima do Trabalhador de Via Permanente.'
from public.provas p where p.area = 'alivio_tensao' and p.codigo = 'A';

insert into public.questoes (prova_id, ordem, enunciado, alternativas, correta, justificativa)
select p.id, 1, 'Qual dos itens abaixo aparece na lista de materiais, equipamentos e ferramentas do ATT?', '[{"id": "a", "texto": "Tensor hidráulico e termômetro de contato calibrado."}, {"id": "b", "texto": "Somente trena e nível óptico."}, {"id": "c", "texto": "Equipamento de ultrassom como ferramenta obrigatória do ATT."}, {"id": "d", "texto": "Pirômetro infravermelho sem contato como item obrigatório."}, {"id": "e", "texto": "Máquina de solda elétrica orbital."}]'::jsonb, 'a', 'Item 6 — Materiais, equipamentos e ferramentas.'
from public.provas p where p.area = 'alivio_tensao' and p.codigo = 'B';

insert into public.questoes (prova_id, ordem, enunciado, alternativas, correta, justificativa)
select p.id, 2, 'Em inspeção mensal de ferramentas no mês de junho, qual cor deve ser usada para identificação?', '[{"id": "a", "texto": "Amarelo."}, {"id": "b", "texto": "Verde."}, {"id": "c", "texto": "Azul."}, {"id": "d", "texto": "Vermelho."}, {"id": "e", "texto": "Branco."}]'::jsonb, 'b', 'Item 6 — tabela de cores: fevereiro, junho e outubro = verde.'
from public.provas p where p.area = 'alivio_tensao' and p.codigo = 'B';

insert into public.questoes (prova_id, ordem, enunciado, alternativas, correta, justificativa)
select p.id, 3, 'O que o procedimento exige das máquinas de pequeno porte que se apoiam nos dois trilhos?', '[{"id": "a", "texto": "Devem possuir isolamento adequado para evitar ocupação de linha/sinalização."}, {"id": "b", "texto": "Devem sempre trabalhar sem aterramento."}, {"id": "c", "texto": "Devem ser usadas somente em linhas não sinalizadas."}, {"id": "d", "texto": "Devem ser operadas exclusivamente por EGP."}, {"id": "e", "texto": "Devem ser retiradas da via a cada 5 minutos."}]'::jsonb, 'a', 'Item 6 — exigência de isolamento adequado.'
from public.provas p where p.area = 'alivio_tensao' and p.codigo = 'B';

insert into public.questoes (prova_id, ordem, enunciado, alternativas, correta, justificativa)
select p.id, 4, 'No içamento manual do trilho, qual limite de carga por pessoa deve ser respeitado conforme NR17 citado no procedimento?', '[{"id": "a", "texto": "15 kg por pessoa."}, {"id": "b", "texto": "18 kg por pessoa."}, {"id": "c", "texto": "20 kg por pessoa."}, {"id": "d", "texto": "23 kg por pessoa."}, {"id": "e", "texto": "30 kg por pessoa."}]'::jsonb, 'd', 'Item 6 — limite de 23 kg por pessoa.'
from public.provas p where p.area = 'alivio_tensao' and p.codigo = 'B';

insert into public.questoes (prova_id, ordem, enunciado, alternativas, correta, justificativa)
select p.id, 5, 'Para rebatimento de trilho acima de 12 metros de comprimento, o que é obrigatório?', '[{"id": "a", "texto": "Uso de roletes."}, {"id": "b", "texto": "Uso de marreta comum no boleto."}, {"id": "c", "texto": "Execução sem ferramentas para reduzir atrito."}, {"id": "d", "texto": "Uso de solda de fechamento antes do ATT."}, {"id": "e", "texto": "Retirada total do lastro."}]'::jsonb, 'a', 'Item 6 — rebatimento acima de 12 m exige roletes.'
from public.provas p where p.area = 'alivio_tensao' and p.codigo = 'B';

insert into public.questoes (prova_id, ordem, enunciado, alternativas, correta, justificativa)
select p.id, 6, 'Sobre o uso de marreta em trilho, qual alternativa está correta?', '[{"id": "a", "texto": "É proibido usar qualquer marreta em qualquer etapa."}, {"id": "b", "texto": "É permitido usar marreta comum livremente na região do boleto."}, {"id": "c", "texto": "É proibido o uso de marreta em trilho, exceto marreta de bronze ou cobre para execução de ATT."}, {"id": "d", "texto": "A marreta comum é obrigatória para eliminar a ZTA."}, {"id": "e", "texto": "A marreta só pode ser usada em trilhos curtos de até 12 m."}]'::jsonb, 'c', 'Item 6 — proibição e exceção para marreta de bronze/cobre no ATT.'
from public.provas p where p.area = 'alivio_tensao' and p.codigo = 'B';

insert into public.questoes (prova_id, ordem, enunciado, alternativas, correta, justificativa)
select p.id, 7, 'Antes de iniciar o corte de trilho, qual distância mínima os funcionários devem manter do local da operação?', '[{"id": "a", "texto": "5 metros."}, {"id": "b", "texto": "10 metros."}, {"id": "c", "texto": "12 metros."}, {"id": "d", "texto": "15 metros."}, {"id": "e", "texto": "20 metros."}]'::jsonb, 'd', 'Item 7 — distância mínima de 15 m antes do corte.'
from public.provas p where p.area = 'alivio_tensao' and p.codigo = 'B';

insert into public.questoes (prova_id, ordem, enunciado, alternativas, correta, justificativa)
select p.id, 8, 'Em linhas já existentes, quando medições do VERSE identificarem níveis de tensão na faixa Amarela em curva, qual providência o procedimento indica?', '[{"id": "a", "texto": "Acompanhar somente pelo ronda de linha, sem intervenção."}, {"id": "b", "texto": "Efetuar alívio completo de tensão em toda a extensão da curva."}, {"id": "c", "texto": "Executar apenas inspeção visual mensal."}, {"id": "d", "texto": "Substituir apenas as talas isolantes."}, {"id": "e", "texto": "Fazer ATT apenas no primeiro vão de dormente."}]'::jsonb, 'b', 'Item 8 — critérios com medições do VERSE.'
from public.provas p where p.area = 'alivio_tensao' and p.codigo = 'B';

insert into public.questoes (prova_id, ordem, enunciado, alternativas, correta, justificativa)
select p.id, 9, 'Quando o VERSE não acusar medição e as condições de fixação e dormentação estiverem deficientes, o que deve ser recomendado?', '[{"id": "a", "texto": "Serviço de consolidação da fixação e substituição de dormentes para melhoria do retensionamento."}, {"id": "b", "texto": "Execução imediata de solda, sem tratamento da via."}, {"id": "c", "texto": "Somente pintura do patim para acompanhar deslocamento."}, {"id": "d", "texto": "Liberação automática do trecho sem acompanhamento."}, {"id": "e", "texto": "Retirada definitiva do TLS."}]'::jsonb, 'a', 'Item 8, alínea b — procedimento quando o VERSE não acusa medição.'
from public.provas p where p.area = 'alivio_tensao' and p.codigo = 'B';

insert into public.questoes (prova_id, ordem, enunciado, alternativas, correta, justificativa)
select p.id, 10, 'Quando o VERSE não acusar medição, em trechos circulares de curva com raio menor ou igual a 300 m, qual é a orientação?', '[{"id": "a", "texto": "Acompanhar apenas pelo ronda de linha."}, {"id": "b", "texto": "Fazer alívio completo em toda a extensão da curva."}, {"id": "c", "texto": "Executar apenas socaria mecanizada."}, {"id": "d", "texto": "Não realizar nenhum serviço em curvas desse raio."}, {"id": "e", "texto": "Instalar juntas isolantes antes de qualquer análise."}]'::jsonb, 'b', 'Item 8, alínea b — curvas com raios ≤ 300 m.'
from public.provas p where p.area = 'alivio_tensao' and p.codigo = 'B';

insert into public.questoes (prova_id, ordem, enunciado, alternativas, correta, justificativa)
select p.id, 1, 'Na execução do ATT, como deve ser feito o controle da temperatura do trilho?', '[{"id": "a", "texto": "Com termômetro de contato posicionado na alma do trilho, protegido de sol direto, com monitoramento a cada 10 minutos na mesma posição."}, {"id": "b", "texto": "Com pirômetro a laser apontado para o boleto, a cada 60 minutos."}, {"id": "c", "texto": "Somente pela temperatura ambiente informada pela meteorologia."}, {"id": "d", "texto": "Com termômetro de contato no patim, uma única vez antes do corte."}, {"id": "e", "texto": "Com qualquer instrumento calibrado, sem posição definida."}]'::jsonb, 'a', 'Item 8.1, operação I — controle da temperatura do trilho.'
from public.provas p where p.area = 'alivio_tensao' and p.codigo = 'C';

insert into public.questoes (prova_id, ordem, enunciado, alternativas, correta, justificativa)
select p.id, 2, 'Em pontos onde o VERSE apontou excesso de trilho, o que o procedimento indica como entendimento para a execução?', '[{"id": "a", "texto": "Que haverá corte de trilho."}, {"id": "b", "texto": "Que a solda de fechamento fica proibida por 30 dias."}, {"id": "c", "texto": "Que o trecho deve ser apenas acompanhado pelo ronda."}, {"id": "d", "texto": "Que o ATT deve ser executado acima da FTN."}, {"id": "e", "texto": "Que não há necessidade de abrir junta."}]'::jsonb, 'a', 'Item 8.1, operação II — observação importante sobre excesso de trilho.'
from public.provas p where p.area = 'alivio_tensao' and p.codigo = 'C';

insert into public.questoes (prova_id, ordem, enunciado, alternativas, correta, justificativa)
select p.id, 3, 'Ao inspecionar trilhos tensionados, quais evidências devem ser procuradas?', '[{"id": "a", "texto": "Apenas pintura antiga no boleto."}, {"id": "b", "texto": "Deslocamentos laterais da grade e marcas de deslocamentos longitudinais, como marcas dos grampos no patim ou deslocamento sobre placas."}, {"id": "c", "texto": "Somente desgaste vertical maior que 7 mm."}, {"id": "d", "texto": "Apenas presença de junta isolante na mesma linha do sinal."}, {"id": "e", "texto": "Somente variação de bitola em tangente."}]'::jsonb, 'b', 'Item 8.1 — cuidados com trilhos tensionados.'
from public.provas p where p.area = 'alivio_tensao' and p.codigo = 'C';

insert into public.questoes (prova_id, ordem, enunciado, alternativas, correta, justificativa)
select p.id, 4, 'Em uma barra tensionada, qual sequência de corte com maçarico é indicada para criar a junta de alívio?', '[{"id": "a", "texto": "Patim, alma e boleto."}, {"id": "b", "texto": "Alma, patim e boleto."}, {"id": "c", "texto": "Boleto, alma e patim."}, {"id": "d", "texto": "Boleto e patim simultaneamente, sem cortar a alma."}, {"id": "e", "texto": "Somente alma, mantendo boleto e patim íntegros."}]'::jsonb, 'c', 'Item 8.1 — barra tensionada: primeiro boleto, depois alma e por fim patim.'
from public.provas p where p.area = 'alivio_tensao' and p.codigo = 'C';

insert into public.questoes (prova_id, ordem, enunciado, alternativas, correta, justificativa)
select p.id, 5, 'Após o corte com maçarico em barra tensionada, o que é obrigatório eliminar na barra que permanecerá na linha?', '[{"id": "a", "texto": "A ZTA, com 35 mm para cada lado a partir do ponto de corte, usando policorte."}, {"id": "b", "texto": "A alma do trilho por 50 mm de cada lado."}, {"id": "c", "texto": "Todo o trecho de 12 m de fixação completa."}, {"id": "d", "texto": "O boleto por 70 m de cada lado."}, {"id": "e", "texto": "A zona neutra integral do TLS."}]'::jsonb, 'a', 'Item 8.1 — eliminação da ZTA após corte com maçarico.'
from public.provas p where p.area = 'alivio_tensao' and p.codigo = 'C';

insert into public.questoes (prova_id, ordem, enunciado, alternativas, correta, justificativa)
select p.id, 6, 'Qual condição mínima de fixação deve existir para cada lado da junta aliviada antes do corte do trilho?', '[{"id": "a", "texto": "3 m de fixação completa."}, {"id": "b", "texto": "6 m de fixação completa."}, {"id": "c", "texto": "9 m de fixação completa."}, {"id": "d", "texto": "12 m de fixação completa."}, {"id": "e", "texto": "70 m de fixação nova."}]'::jsonb, 'd', 'Item 8.1, operação III — mínimo de 12 m de fixação completa para cada lado.'
from public.provas p where p.area = 'alivio_tensao' and p.codigo = 'C';

insert into public.questoes (prova_id, ordem, enunciado, alternativas, correta, justificativa)
select p.id, 7, 'Qual é a diferença entre a forma natural e a forma artificial/forçada de execução do ATT?', '[{"id": "a", "texto": "Natural ocorre dentro da FTN; artificial/forçada ocorre abaixo da FTN com tensor hidráulico tracionando a barra."}, {"id": "b", "texto": "Natural ocorre acima da FTN; artificial ocorre sem tensor dentro da FTN."}, {"id": "c", "texto": "Natural usa tensor hidráulico; artificial dispensa qualquer rolete."}, {"id": "d", "texto": "Natural é apenas para pontes sem lastro; artificial é apenas para túneis."}, {"id": "e", "texto": "Não há diferença técnica entre as duas formas."}]'::jsonb, 'a', 'Item 8.1.3 — formas de execução do ATT.'
from public.provas p where p.area = 'alivio_tensao' and p.codigo = 'C';

insert into public.questoes (prova_id, ordem, enunciado, alternativas, correta, justificativa)
select p.id, 8, 'Para tangentes e curvas com raios maiores que 1000 m, qual quantidade de roletes é indicada?', '[{"id": "a", "texto": "Um rolete a cada 4 dormentes."}, {"id": "b", "texto": "Um rolete a cada 6 dormentes."}, {"id": "c", "texto": "Um rolete a cada 8 dormentes."}, {"id": "d", "texto": "Um rolete a cada 12 dormentes."}, {"id": "e", "texto": "Um rolete a cada 20 dormentes."}]'::jsonb, 'd', 'Item 8.1.1, letra b — quantidade de roletes.'
from public.provas p where p.area = 'alivio_tensao' and p.codigo = 'C';

insert into public.questoes (prova_id, ordem, enunciado, alternativas, correta, justificativa)
select p.id, 9, 'Na utilização do tensor hidráulico, qual capacidade mínima de tração é exigida e qual capacidade é considerada ideal?', '[{"id": "a", "texto": "Mínima de 30 t; ideal de 40 t."}, {"id": "b", "texto": "Mínima de 40 t; ideal de 60 t."}, {"id": "c", "texto": "Mínima de 60 t; ideal de 80 t."}, {"id": "d", "texto": "Mínima de 80 t; ideal de 100 t."}, {"id": "e", "texto": "Mínima de 100 t; ideal de 120 t."}]'::jsonb, 'c', 'Item 8.1.3 — utilização do tensor hidráulico.'
from public.provas p where p.area = 'alivio_tensao' and p.codigo = 'C';

insert into public.questoes (prova_id, ordem, enunciado, alternativas, correta, justificativa)
select p.id, 10, 'Qual é a fórmula do alongamento quando for necessário usar tensor hidráulico?', '[{"id": "a", "texto": "ΔL = 0,0115 × L × Δθ."}, {"id": "b", "texto": "ΔL = L / Δθ."}, {"id": "c", "texto": "ΔL = 24,7 × S × ΔT / Ro."}, {"id": "d", "texto": "ΔL = TNR ± 5 °C."}, {"id": "e", "texto": "ΔL = Tmax − Tmin + 5 °C."}]'::jsonb, 'a', 'Item 8.1.3 — fórmula de alongamento com tensor hidráulico.'
from public.provas p where p.area = 'alivio_tensao' and p.codigo = 'C';

commit;

-- Conferencia rapida:
select p.codigo, p.titulo, p.ativo, count(q.id) as questoes
from public.provas p
left join public.questoes q on q.prova_id = p.id
where p.area = 'alivio_tensao'
group by p.codigo, p.titulo, p.ativo
order by p.codigo;