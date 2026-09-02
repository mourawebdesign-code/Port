# INVENTÁRIO DE ASSETS (atualizado — materiais reais fornecidos pela cliente)

A cliente enviou diretamente, dentro da pasta do projeto, o logotipo oficial, fotos e vídeos reais do
espaço e dos atendimentos. Esses materiais substituíram integralmente os assets genéricos usados na
primeira versão da demonstração. Cada arquivo é usado em exatamente um lugar do site (sem repetição).

## LOGO

ARQUIVO: `logo-adriane-silva-dark.png`
ORIGEM: logo oficial enviado pela cliente (`Logo.png`)
TIPO: logotipo (monograma "A" + "ADRIANE SILVA · ESTÉTICA FACIAL E CORPORAL")
PROCESSAMENTO: o arquivo original é branco/prateado sobre fundo transparente — ilegível sobre o
fundo claro do site. Foi gerada uma versão sólida escura (mesmo desenho, preenchida com a cor
`--text-primary`) preservando o traçado exato do logotipo original.
USO: Navbar
STATUS: em uso

## HERO / SOBRE

ARQUIVO: `hero-adriane-escritorio.jpg`
ORIGEM: foto enviada pela cliente (`Hero.png`), mesa/escritório com a sinalização da marca ao fundo
USO: Hero (imagem de fundo)
STATUS: em uso

ARQUIVO: `about-adriane-atendimento.jpg`
ORIGEM: foto enviada pela cliente (`ChatGPT Image...`), Adriane sorrindo durante atendimento
USO: Seção Sobre
STATUS: em uso

## RESULTADO REAL

ARQUIVO: `resultado-antes-depois-01.jpg`
ORIGEM: print do Instagram oficial enviado pela cliente, antes/depois de cliente real após protocolo
corporal — agora legítimo como resultado, pois foi fornecido diretamente pela própria empresa (não
mais um antes/depois de terceiros)
USO: Galeria editorial (seção "cuidado pensado para você")
STATUS: em uso

## TRATAMENTOS (4 confirmados — ver research/empresa.md)

ARQUIVO: `treatments/cintura-fina.jpg`
ORIGEM: print do Instagram enviado pela cliente — Adriane com jaleco de marca aplicando aparelho
USO: card "Método Cintura Fina"

ARQUIVO: `treatments/drenagem-linfatica.jpg`
ORIGEM: frame extraído do vídeo real enviado pela cliente (drenagem manual no abdômen, manta térmica)
USO: card "Drenagem Linfática"

ARQUIVO: `treatments/lipodetox.jpg`
ORIGEM: frame extraído do vídeo real enviado pela cliente (aparelho a laser na perna)
USO: card "Lipodetox"

ARQUIVO: `treatments/limpeza-de-pele.jpg`
ORIGEM: frame extraído do vídeo real enviado pela cliente (Adriane aplicando aparelho facial, jaleco
com bordado "Adriane Silva | Esteticista")
USO: card "Limpeza de Pele"

## ESPAÇO / GALERIA

ARQUIVO: `gallery/espaco-entrada.jpg`
ORIGEM: frame extraído do vídeo de tour do espaço enviado pela cliente
USO: galeria editorial

ARQUIVO: `gallery/espaco-tratamento.jpg`
ORIGEM: frame extraído do mesmo vídeo de tour (sala de atendimento, macas e aparelhos)
USO: galeria editorial

ARQUIVO: `gallery/cliente-feliz.jpg`
ORIGEM: frame extraído do mesmo vídeo de tour (cliente recebendo brinde de boas-vindas)
USO: galeria editorial

## VÍDEOS-FONTE (não incorporados diretamente no site)

Os 3 vídeos originais enviados pela cliente foram usados apenas como fonte para extração de frames
estáticos (acima) e foram movidos para `/assets-source/videos-instagram/` (fora da pasta `public`,
portanto não fazem parte do build/deploy). Não foram incorporados como `<video>` no site nesta
demonstração para manter carregamento leve e previsível; podem ser usados numa fase seguinte
(pós-venda) se a cliente confirmar interesse em vídeo no site.

## TRATAMENTOS CONFIRMADOS x SITE — CONFERÊNCIA

Fontes cruzadas (bio do Instagram + 7 destaques fixados no perfil):
- Autodrenagem (destaque, 2x) → conteúdo educativo de autocuidado, NÃO é serviço prestado no espaço
- Feedback (destaque) → depoimentos, não é serviço
- Cintura fina (destaque + bio "criadora do Cintura fina") → SERVIÇO — no site ✅
- Drenagem (destaque) → SERVIÇO — no site ✅
- Lipodetox (destaque + bio "criadora do... Lipodetox") → SERVIÇO — no site ✅
- Limpeza de pele (destaque) → SERVIÇO — no site ✅

Não foi identificado nenhum destaque ou menção na bio a um 5º serviço distinto. Os vídeos mostram
aparelhos (laser corporal, laser facial) que ilustram tecnicamente os protocolos Lipodetox e Limpeza
de Pele — não indicam um serviço adicional com nome próprio ainda não confirmado.
Conclusão: os 4 serviços confirmados estão todos representados no site.
