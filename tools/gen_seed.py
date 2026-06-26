#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Fonte canônica das 3 provas do simulado de Soldagem Aluminotérmica.
Gera dois arquivos a partir DESTA lista (sem duplicar conteúdo):
  - ../js/seed-data.js   -> window.PROVAS_SEED (usado pelo botão "Carregar provas" no admin)
  - ../sql/seed-provas.sql -> seed opcional via SQL Editor do Supabase

Base: Procedimento MAN-VP-T-PRO-SO-0001 (R3 - 08/05/2025).
Rodar:  python3 tools/gen_seed.py
"""
import json
import os

# ordem das letras das alternativas
LETRAS = ["a", "b", "c", "d", "e"]


def q(ordem, enunciado, alts, correta, justificativa):
    return {
        "ordem": ordem,
        "enunciado": enunciado,
        "alternativas": [{"id": LETRAS[i], "texto": t} for i, t in enumerate(alts)],
        "correta": correta,
        "justificativa": justificativa,
    }


PROVAS = [
    {
        "codigo": "A",
        "titulo": "Prova A — Fundamentos, Preparação e Segurança",
        "descricao": "Fundamentos do procedimento, requisitos de equipe, ferramentas e segurança na soldagem aluminotérmica de trilhos.",
        "nota_minima": 7,
        "questoes": [
            q(1, "O que significa a sigla ZTA no contexto do procedimento de soldagem aluminotérmica?",
              ["Zona de Trabalho Autorizado", "Zona Termicamente Afetada", "Zona de Tensão Aplicada",
               "Zona Térmica Adjacente", "Zona de Transição do Aço"], "b", "Item 3 do procedimento."),
            q(2, "Qual a composição mínima obrigatória de uma turma para a execução da solda aluminotérmica?",
              ["3 colaboradores: 1 soldador, 1 operador e 1 ajudante",
               "5 colaboradores: 1 soldador, 2 operadores e 2 ajudantes",
               "4 colaboradores: 1 soldador, 1 operador e 2 ajudantes",
               "4 colaboradores: 2 soldadores, 1 operador e 1 ajudante",
               "6 colaboradores: 1 soldador, 1 operador e 4 ajudantes"], "c", "Item 7.1."),
            q(3, "Qual a experiência mínima exigida para o profissional soldador?",
              ["6 meses em manutenção de Via Permanente", "1 ano em qualquer função ferroviária",
               "2 anos em execução de solda aluminotérmica", "3 anos em manutenção de via",
               "Não há exigência de experiência mínima"], "c", "Item 7.1."),
            q(4, "Qual o prazo de validade da calibração do manômetro de oxigênio (escala em bar)?",
              ["180 dias", "1 ano", "90 dias", "120 dias", "60 dias"], "d", "Tabela 1."),
            q(5, "Em uma inspeção de ferramentas realizada no mês de junho, com qual cor as ferramentas devem ser identificadas?",
              ["Amarelo", "Verde", "Azul", "Vermelho", "Branco"], "b", "Tabela de cores de inspeção."),
            q(6, "A junta a ser soldada deve estar, no mínimo, a qual distância de outra solda aluminotérmica no mesmo trilho?",
              ["3,5 m", "4 m", "5 m", "6 m", "10 m"], "d", "Item 7.2a."),
            q(7, "Por que o soldador nunca deve executar solda aluminotérmica em região com bolsão com presença de água sem antes eliminá-lo?",
              ["Risco de oxidação da solda", "Risco de explosão", "Risco de descarrilamento imediato",
               "Risco de contaminação ambiental", "Risco de perda de nivelamento"], "b", "Item 8.1e."),
            q(8, "Qual tipo de termômetro é permitido para a execução da solda aluminotérmica?",
              ["Termômetro a laser (pirômetro)", "Termômetro infravermelho portátil",
               "Termômetro digital de contato magnético homologado", "Termômetro de mercúrio",
               "Qualquer termômetro, desde que calibrado"], "c", "Item 8.1i."),
            q(9, "Nas regiões de dormentes de concreto e aço, quantas palmilhas novas devem ser fornecidas para cada solda a ser executada?",
              ["2 palmilhas", "4 palmilhas", "6 palmilhas", "8 palmilhas", "Não é necessário trocar as palmilhas"],
              "c", "Item 7.2e."),
            q(10, "Se uma solda for iniciada e começar a chover antes de ser concluída, qual a extensão mínima do trilho que deve ser protegida (com lona) de cada lado?",
               ["0,5 m", "1,0 m", "1,5 m", "2,0 m", "3,0 m"], "c", "Item 8.1f."),
        ],
    },
    {
        "codigo": "B",
        "titulo": "Prova B — Execução, Montagem e Parâmetros",
        "descricao": "Tolerâncias de montagem, preparação da junta, parâmetros de corte, nivelamento e pressão dos gases.",
        "nota_minima": 7,
        "questoes": [
            q(1, "Qual a tolerância de posicionamento da solda em relação ao centro do vão dos dormentes?",
              ["50 mm para cada lado", "80 mm para cada lado", "100 mm para cada lado",
               "120 mm para cada lado", "160 mm para cada lado"], "b", "Figura 2 / item 7.2."),
            q(2, "A partir de qual diferença de desgaste vertical entre trilhos NÃO se deve realizar solda comum, sendo obrigatório o uso de tampão de transição?",
              ["Maior que 3 mm", "Maior que 5 mm", "Maior que 7 mm", "Maior que 10 mm", "Maior que 15 mm"],
              "c", "Figura 4, observação."),
            q(3, "Qual a distância mínima recomendável do furo até o topo/face do trilho a ser soldada (linhas da larga)?",
              ["60 mm", "80 mm", "100 mm", "120 mm", "150 mm"], "c", "Item 9.1."),
            q(4, "Qual a espessura mínima do disco para o corte de trilhos?",
              ["2 mm", "3 mm", "4 mm", "5 mm", "6 mm"], "c", "Página 18."),
            q(5, "Qual a profundidade mínima de desguarnecimento da \"casa\" entre os dormentes, medida abaixo do patim do trilho?",
              ["10 cm", "15 cm", "20 cm", "25 cm", "30 cm"], "b", "Desguarnecimento."),
            q(6, "Em tangente, de quantos dormentes de cada lado devem ser retiradas as fixações para garantir o correto alinhamento?",
              ["Mínimo 2 dormentes", "Mínimo 3 dormentes", "Mínimo 4 dormentes",
               "Mínimo 5 dormentes", "Mínimo 6 dormentes"], "b", "Item 12.1a."),
            q(7, "Qual a contra flecha que deve ser obtida nas extremidades da régua de 1 m durante o nivelamento dos trilhos?",
              ["0,3 a 0,5 mm", "0,4 a 0,6 mm", "1,5 a 1,7 mm", "2,0 a 2,5 mm", "1,0 a 1,2 mm"],
              "c", "Item 10.2."),
            q(8, "Qual a espessura do calibre de folga usado para verificar se há possibilidade de vazamento entre o trilho e a fôrma?",
              ["0,05 mm", "0,1 mm", "0,5 mm", "1,0 mm", "2,0 mm"], "a", "Item 10.4 ii."),
            q(9, "Qual deve ser o comprimento da chama na coloração azul (chama neutra) durante o ajuste do maçarico no pré-aquecimento?",
              ["5 a 10 mm", "10 a 15 mm", "15 a 20 mm", "25 a 30 mm", "40 a 50 mm"], "c", "Item 10.7b."),
            q(10, "Qual a pressão dos gases para soldas Thermit SKV nas linhas da larga?",
               ["Oxigênio 5 Bar / GLP 2 Bar", "Oxigênio 5 Bar / GLP 1,4 Bar", "Oxigênio 2 Bar / GLP 5 Bar",
                "Oxigênio 3 Bar / GLP 1 Bar", "Oxigênio 4 Bar / GLP 2 Bar"], "a", "Item 13.2."),
        ],
    },
    {
        "codigo": "C",
        "titulo": "Prova C — Acabamento, Qualidade e Tempos",
        "descricao": "Tempos de processo, acabamento, esmerilhamento, tagueamento, registro no SIV e liberação da via.",
        "nota_minima": 7,
        "questoes": [
            q(1, "Após a corrida do aço, com quantos minutos deve-se retirar o cadinho com suporte?",
              ["1 min", "2 min", "3 min", "5 min", "7 min"], "b", "Item 11.1a."),
            q(2, "Após quantos minutos do fim da corrida do aço deve ser realizada a rebarbagem da solda (solda normal)?",
              ["2 min", "3 min", "5 min", "7 min", "10 min"], "d", "Item 11.2a."),
            q(3, "O esmerilhamento da solda deve ser iniciado após quanto tempo, no mínimo?",
              ["10 minutos", "20 minutos", "30 minutos", "35 minutos", "38 minutos"], "c", "Item 11.3c."),
            q(4, "Qual a contra flecha que deve ser deixada no esmerilhamento da solda (ainda com os cavaletes), não se permitindo flecha negativa?",
              ["0,0 a 0,3 mm", "0,4 a 0,6 mm", "1,5 a 1,7 mm", "0,3 a 0,5 mm", "1,0 a 1,2 mm"],
              "b", "Item 12.1g."),
            q(5, "Qual o tempo mínimo após a corrida do aço para que uma composição possa passar sobre a solda?",
              ["30 minutos", "35 minutos", "38 minutos", "40 minutos", "45 minutos"], "c", "Item 12.3f."),
            q(6, "No tagueamento da solda, o que representam os dois primeiros caracteres?",
              ["A numeração da solda", "As iniciais do nome do soldador", "As iniciais da empresa",
               "O ano de execução", "A quilometragem"], "c", "Item 12.4c."),
            q(7, "Qual o tamanho das punções utilizadas para o tagueamento da solda?",
              ["10 mm", "12,5 mm", "15 mm", "20 mm", "8 mm"], "b", "Item 12.4c."),
            q(8, "A altura do corte do jito deve estar entre qual faixa de distância da base do jito?",
              ["2 mm e 5 mm", "5 mm e 20 mm", "10 mm e 30 mm", "20 mm e 50 mm", "50 mm e 100 mm"],
              "b", "Corte dos jitos."),
            q(9, "Em até quantos dias cada solda realizada deve ser inserida no SIV (tela 113)?",
              ["24 horas", "2 dias", "4 dias", "7 dias", "10 dias"], "c", "Item 12.5f."),
            q(10, "Para uma solda que NÃO é de fechamento (parâmetro Thermit SKV — larga), em qual faixa de temperatura ela deve ser executada?",
               ["Crescente, acima de 10 °C e abaixo de 50 °C", "Decrescente, abaixo de 10 °C",
                "Sempre dentro da FTN", "Acima de 50 °C", "Qualquer temperatura, desde que crescente"],
               "a", "Item 13.2."),
        ],
    },
]


def sql_escape(s):
    return s.replace("'", "''")


def main():
    here = os.path.dirname(os.path.abspath(__file__))
    root = os.path.dirname(here)

    # ---- seed-data.js ----
    js_path = os.path.join(root, "js", "seed-data.js")
    payload = json.dumps(PROVAS, ensure_ascii=False, indent=2)
    js = (
        "// Gerado por tools/gen_seed.py — NÃO editar à mão.\n"
        "// Conteúdo das 3 provas iniciais do simulado de Soldagem Aluminotérmica.\n"
        "// Usado pelo botão \"Carregar provas iniciais\" na página do Administrador.\n"
        "window.PROVAS_SEED = " + payload + ";\n"
    )
    with open(js_path, "w", encoding="utf-8") as f:
        f.write(js)

    # ---- seed-provas.sql ----
    sql_path = os.path.join(root, "sql", "seed-provas.sql")
    lines = [
        "-- Gerado por tools/gen_seed.py — NÃO editar à mão.",
        "-- Seed OPCIONAL das 3 provas. Rode no SQL Editor do Supabase DEPOIS de schema.sql.",
        "-- Alternativa: usar o botão \"Carregar provas iniciais\" na página do Administrador.",
        "-- Idempotente: pode rodar mais de uma vez (ON CONFLICT DO NOTHING).",
        "",
    ]
    for p in PROVAS:
        lines.append(
            "insert into public.provas (area, codigo, titulo, descricao, nota_minima) values "
            f"('solda', '{p['codigo']}', '{sql_escape(p['titulo'])}', '{sql_escape(p['descricao'])}', {p['nota_minima']}) "
            "on conflict (area, codigo) do nothing;"
        )
    lines.append("")
    for p in PROVAS:
        for qq in p["questoes"]:
            alt_json = json.dumps(qq["alternativas"], ensure_ascii=False)
            lines.append(
                "insert into public.questoes (prova_id, ordem, enunciado, alternativas, correta, justificativa)\n"
                f"select p.id, {qq['ordem']}, '{sql_escape(qq['enunciado'])}', "
                f"'{sql_escape(alt_json)}'::jsonb, '{qq['correta']}', '{sql_escape(qq['justificativa'])}'\n"
                f"from public.provas p where p.area = 'solda' and p.codigo = '{p['codigo']}'\n"
                "on conflict (prova_id, ordem) do nothing;"
            )
        lines.append("")
    with open(sql_path, "w", encoding="utf-8") as f:
        f.write("\n".join(lines))

    print(f"OK -> {js_path}")
    print(f"OK -> {sql_path}")
    n = sum(len(p["questoes"]) for p in PROVAS)
    print(f"{len(PROVAS)} provas, {n} questões.")


if __name__ == "__main__":
    main()
