import { DescriptionProject } from "../../components/DescriptionProject";
import "./styles.scss";
import ilustraCheck from "@/assets/ilustraCheck.svg";
import pc from "@/assets/pc.svg";
import { Colaboration } from "../../components/Colaboration";
import { WithScrollReveal } from "@/components/WithScrollReveal";

export function AboutProject() {
  return (
    <div className="header">
      <div className="content-wrapper">
        <div className="content-about">
          <h2 className="title-about">Sobre o acervo</h2>
          <p className="descrition-about">
            Este projeto é o fruto de um trabalho de conclusão de curso
            elaborado durante o período de graduação
            <br /> no curso de Design Digital na Universidade Federal do Ceará
            (UFC).
          </p>
        </div>
      </div>
      <WithScrollReveal>
        <div className="DescriptionPages">
          <DescriptionProject
            title="O que é avaliaí?"
            paragraphs={[
              "Os 8 checklists fornecidos são formados a partir de heurísticas e itens de verificação de design relacionados a usabilidade, visual, experiência, arquitetura da informação entre vários outros temas, afim de colaborar no processo de inspeção e avaliação das interfaces do software.",
              "O avaliaí é um acervo digital com checklists de design e usabilidade destinado a ajudar designers de UX e outros profissionais da área a avaliarem, de maneira mais fácil e de baixo custo, as suas interfaces. Esse estilo de método de avaliação pode ser comumente chamado de avaliação heurística, na qual não precisa da necessidade do usuário.",
            ]}
            image={ilustraCheck}
          />
          <div className="row2">
            <DescriptionProject
              title="Mas o que são heurísticas de design?"
              paragraphs={[
                "Heurísticas de design são métricas formadas a partir da soma de experiências de um determinado grupo ou pessoa na vivência como designer. Elas funcionam como princípios ou padrões observaveis que auxiliam no processo de construção interfaces. Afim de minimizar problemas de interação, você deve evitar violá-las. ",
                "Vale ressaltar que elas não são leis absolutas universais que devem ser seguidas a risca, mas sim como boas práticas ou caminhos a se seguir no campo do design de interfaces. ",
              ]}
            />
            <DescriptionProject
              title="De onde vem as heurísticas do acervo?"
              paragraphs={[
                "Todas as heurísticas fornecidas nos checklists foram extraídas de artigos, livros ou sites, nada foi criado por nós. O nosso papel é fazer com que esses conteúdos sejam alcançados de maneira mais fácil por designers que, pela correria do dia-a-dia, não conseguem encontrá-los, normalmente.",
                "Em cada heurística é fornecido a fonte da mesma com o objetivo de permitir ao designer, caso queira, conhecer de maneira mais profunda sobre ela.",
              ]}
            />
          </div>
          <DescriptionProject
            title="E como usufruir disso?"
            paragraphs={[
              "Com as explicações acima, não fica dificil de entender como você pode usufruir deste acervo. Basta, a priori, entender sobre seu próprio software e ter em mente suas caracteristicas.",
              "Após isso, basta utilizar os checklists prontos que disponibilizamos ou buscar por heurísticas ou categorias específicas que atendem melhor os critérios que deseja avaliar, organiza-las em um documento e inspecionar a interface a partir da ótica delas, listando as telas e componentes que violaram as heurísticas que escolheu, propor soluções para o problema e estimar o tempo de desenvolvimento realizar a correção.",
              ,
              "Para facilitar essa avaliação, fornecemos um documento que pode ajudar na hora de preencher e organizar as informações das heurísticas, itens de verificação, identificação da tela com problema etc. Para vê-lo basta acessar nosso template.",
            ]}
            image={pc}
          />
        </div>
      </WithScrollReveal>
      <WithScrollReveal>
        <Colaboration
          title="Entendeu sobre o projeto?"
          subtitle="Que tal agora nos ajudar a torná-lo cada vez maior e colaborativo? Conhece algum tipo de conteúdo assim que possamos disponibilizar aqui?"
        />
      </WithScrollReveal>
    </div>
  );
}
