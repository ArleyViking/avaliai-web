import {
  ArrowRight,
  CloudArrowUp,
  FileText,
  FolderOpen,
  ListChecks,
  SquaresFour,
  PaperPlaneTilt,
  EnvelopeSimple,
} from "phosphor-react";
import "./styles.scss";
import imgColaborations from "@/assets/img-colaborations-page.png";
import { Step } from "./Step";

export function Contribute() {
  return (
    <div className="Contribute">
      <div className="header-contribute">
        <div className="content-wrapper-contribute">
          <div className="content-contribute">
            <h2 className="title-contribute">Contribua conosco</h2>
            <p className="description-contribute">
              Para este acervo crescer e atinjir novos designers precisamos
              fornecer mais checklists e heurísticas
              <br /> diversas que estejam conectados a outros tipos de
              softwares, temas ou usuários. (UFC).
            </p>
          </div>
        </div>
      </div>
      <article className="update-section">
        <div className="update-col1">
          <div className="text-contribute-up">
            <h5>
              Para isso, precisamos da <span>colaboração</span> de
              <br />
              <span>designers</span> que possam nos ajudar a encontrar esse
              conteúdo.
            </h5>
            <p>Caso você seja um deles, por favor envie seu conteúdo.</p>
          </div>
          <div>
            <div className="update-button">
              <div className="container">
                <EnvelopeSimple size="32px" />
              </div>
              <p>
                <span>Mande o documento por email</span> com o conteúdo
                <br />
                que tiver e algum dado seu para contato.
              </p>
            </div>
            <p className="pfvr">
              Por favor siga as instruções abaixo para organizar o documento.
            </p>
          </div>
        </div>

        <div className="col2">
          <img src={imgColaborations} />
        </div>
      </article>

      <div className="steps-send">
        <div className="header-ss">
          <p className="title-ss">Instruções de organização do envio</p>
          <p className="subtitle">
            Sobre a organização do seu arquivo, solicitamos apenas que responda
            as perguntas abaixo e identifique cada uma delas no seu arquivo.
            Isso será útil para colocarmos no acervo.
          </p>
        </div>

        <div className="steps">
          <Step
            title="Qual seria o nome desse checklist, baseado nas heurísticas que irá enviar?"
            subtitle="Pode ser algum já existente no acervo."
            icon={FolderOpen}
          />
          <ArrowRight className="arrow" />
          <Step
            title="Você consegue dividir em categorias as
            heurísticas desse checklist?"
            subtitle="Use as nossas como referência."
            icon={SquaresFour}
          />
          <ArrowRight className="arrow" />
          <Step
            title="Para cada heurística, você pode citar seus
            itens de verificação?"
            subtitle="Caso não tenha, informe."
            icon={ListChecks}
          />
          <ArrowRight className="arrow" />
          <Step
            title="Por fim, você pode dizer a fonte em que extraiu
            essas heurísticas?"
            subtitle="Por favor enviar o link da fonte."
            icon={FileText}
          />
        </div>
        <p className="obs">
          <span>Lembrete:</span> O checklist é basicamente a soma de várias
          categorias diferentes de heurísticas.
        </p>
      </div>
    </div>
  );
}
