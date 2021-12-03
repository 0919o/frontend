import { css, html, LitElement, TemplateResult } from "lit";
import { customElement } from "lit/decorators";
import "../../../src/components/ha-card";
import "../../../src/components/ha-faded";
import "../../../src/components/ha-markdown";

const LONG_TEXT = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc laoreet velit ut elit volutpat, eget ultrices odio lacinia. In imperdiet malesuada est, nec sagittis metus ultricies quis. Sed nisl ex, convallis porttitor ante quis, hendrerit tristique justo. Mauris pharetra venenatis augue, eu maximus sem cursus in. Quisque sed consequat risus. Suspendisse facilisis ligula a odio consectetur condimentum. Curabitur vehicula elit nec augue mollis, et volutpat massa dictum.

Nam pellentesque auctor rutrum. Suspendisse elit est, sodales vel diam nec, porttitor faucibus massa. Ut pretium ac orci eu pharetra. Praesent in nibh at magna viverra rutrum eu vitae tortor. Etiam eget sem ex. Fusce tristique odio nec lacus mattis, vitae tempor nunc malesuada. Maecenas faucibus magna vel libero maximus egestas. Vestibulum luctus semper velit, in lobortis risus tempus non. Curabitur bibendum ornare commodo. Quisque commodo neque sit amet tincidunt lacinia. Proin elementum ante velit, eu congue nulla semper quis. Pellentesque consequat vel nunc at scelerisque. Mauris sit amet venenatis diam, blandit viverra leo. Integer commodo laoreet orci.

Curabitur ipsum tortor, sodales ut augue sed, commodo porttitor libero. Pellentesque molestie vitae mi consectetur tempor. In sed lectus consequat, lobortis neque non, semper ipsum. Etiam eget ex et nibh sagittis pulvinar lacinia ac mauris. Aenean ligula eros, viverra ac nibh at, venenatis semper quam. Sed interdum ligula sit amet massa tincidunt tincidunt. Suspendisse potenti. Aliquam egestas facilisis est, sed faucibus erat scelerisque id. Duis dolor quam, viverra vitae orci euismod, laoreet pellentesque justo. Nunc malesuada non erat at ullamcorper. Mauris eget posuere odio. Vestibulum turpis nunc, pharetra eget ante in, feugiat mollis justo. Proin porttitor, diam nec vulputate pretium, tellus arcu rhoncus turpis, a blandit nisi nulla quis arcu. Nunc ac ullamcorper ligula, nec facilisis leo.

In vitae eros sollicitudin, iaculis ex eget, egestas orci. Etiam sed pretium lorem. Nam nisi enim, consectetur sit amet semper ac, semper pharetra diam. In pulvinar neque sapien, ac ullamcorper est lacinia a. Etiam tincidunt velit sed diam malesuada, eu ornare ex consectetur. Phasellus in imperdiet tellus. Sed bibendum, dui sit amet fringilla aliquet, enim odio sollicitudin lorem, vel semper turpis mauris vel mauris. Aenean congue magna ac massa cursus, in dictum orci commodo. Pellentesque mollis velit in sollicitudin tincidunt. Vestibulum et efficitur nulla.

Quisque posuere, velit sed porttitor dapibus, neque augue fringilla felis, eu luctus nisi nisl nec ipsum. Curabitur pellentesque ac lectus eget ultricies. Vestibulum est dolor, lacinia pharetra vulputate a, facilisis a magna. Nam vitae arcu nibh. Praesent finibus blandit ante, ac gravida ex mollis eget. Donec quam est, pulvinar vitae neque ut, bibendum aliquam erat. Nullam mollis arcu at sem tincidunt, in tristique lectus facilisis. Aenean ut lacus vel nisl finibus iaculis non a turpis. Integer eget ipsum ante. Donec nunc neque, vestibulum ac magna ac, posuere scelerisque dui. Pellentesque massa nibh, rhoncus id dolor quis, placerat posuere turpis. Donec aliquet augue nisi, eu finibus dui auctor et. Vestibulum eu varius lorem. Quisque lectus ante, malesuada pretium risus eget, interdum mattis enim.
`;

const SMALL_TEXT = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

@customElement("demo-ha-faded")
export class DemoHaFaded extends LitElement {
  protected render(): TemplateResult {
    return html`
      <ha-card header="ha-faded demo">
        <div class="card-content">
          <h3>Long text directly as slotted content</h3>
          <ha-faded>${LONG_TEXT}</ha-faded>
          <h3>Long text with slotted element</h3>
          <ha-faded><span>${LONG_TEXT}</span></ha-faded>
          <h3>No text</h3>
          <ha-faded><span></span></ha-faded>
          <h3>Smal text</h3>
          <ha-faded><span>${SMALL_TEXT}</span></ha-faded>
          <h3>Long text in markdown</h3>
          <ha-faded>
            <ha-markdown .content=${LONG_TEXT}> </ha-markdown>
          </ha-faded>
          <h3>Missing 1px from hiding</h3>
          <ha-faded faded-height="87">
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              laoreet velit ut elit volutpat, eget ultrices odio lacinia. In
              imperdiet malesuada est, nec sagittis metus ultricies quis. Sed
              nisl ex, convallis porttitor ante quis, hendrerit tristique justo.
              Mauris pharetra venenatis augue, eu maximus sem cursus in. Quisque
              sed consequat risus. Suspendisse facilisis ligula a odio
              consectetur condimentum. Curabitur vehicula elit nec augue mollis,
              et volutpat massa dictum. Nam pellentesque auctor rutrum.
              Suspendisse elit est, sodales vel diam nec, porttitor faucibus
              massa. Ut pretium ac orci eu pharetra.
            </span>
          </ha-faded>
          <h3>1px over hiding point</h3>
          <ha-faded faded-height="85">
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              laoreet velit ut elit volutpat, eget ultrices odio lacinia. In
              imperdiet malesuada est, nec sagittis metus ultricies quis. Sed
              nisl ex, convallis porttitor ante quis, hendrerit tristique justo.
              Mauris pharetra venenatis augue, eu maximus sem cursus in. Quisque
              sed consequat risus. Suspendisse facilisis ligula a odio
              consectetur condimentum. Curabitur vehicula elit nec augue mollis,
              et volutpat massa dictum. Nam pellentesque auctor rutrum.
              Suspendisse elit est, sodales vel diam nec, porttitor faucibus
              massa. Ut pretium ac orci eu pharetra.
            </span>
          </ha-faded>
        </div>
      </ha-card>
    `;
  }

  static get styles() {
    return css`
      ha-card {
        max-width: 600px;
        margin: 24px auto;
      }
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "demo-ha-faded": DemoHaFaded;
  }
}
