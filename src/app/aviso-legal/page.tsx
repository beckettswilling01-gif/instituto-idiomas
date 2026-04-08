import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Aviso Legal | Instituto Diplomático de Idiomas",
  description: "Aviso legal del Instituto Diplomático de Idiomas.",
};

export default function AvisoLegal() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-navy py-20 lg:py-28">
          <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
            <h1 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Aviso Legal
            </h1>
          </div>
        </section>

        <section className="bg-warm-white py-20 lg:py-28">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <div className="prose prose-slate max-w-none font-[family-name:var(--font-body)] text-slate-blue [&_h2]:font-[family-name:var(--font-heading)] [&_h2]:text-navy">
              <h2>1. Datos identificativos</h2>
              <p>
                En cumplimiento del deber de información recogido en el artículo
                10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad
                de la Información y del Comercio Electrónico, a continuación se
                reflejan los datos del titular de este sitio web:
              </p>
              <ul>
                <li><strong>Denominación social:</strong> [Pendiente]</li>
                <li><strong>NIF/CIF:</strong> [Pendiente]</li>
                <li><strong>Domicilio:</strong> [Pendiente], Madrid, España</li>
                <li><strong>Correo electrónico:</strong> info@institutodiplomatico.es</li>
              </ul>

              <h2>2. Objeto</h2>
              <p>
                El presente aviso legal regula el uso y utilización del sitio web
                institutodiplomatico.es, del que es titular la entidad arriba
                identificada. La navegación por el sitio web atribuye la condición
                de usuario del mismo e implica la aceptación plena y sin reservas
                de todas y cada una de las disposiciones incluidas en este aviso
                legal.
              </p>

              <h2>3. Propiedad intelectual e industrial</h2>
              <p>
                El sitio web, incluyendo a título enunciativo pero no limitativo su
                programación, edición, compilación y demás elementos necesarios
                para su funcionamiento, los diseños, logotipos, textos y/o
                gráficos, son propiedad del titular o, en su caso, dispone de
                licencia o autorización expresa por parte de los autores.
              </p>

              <h2>4. Condiciones de uso</h2>
              <p>
                El usuario se compromete a hacer un uso adecuado de los contenidos
                y servicios que el titular ofrece a través de su sitio web y, con
                carácter enunciativo pero no limitativo, a no emplearlos para
                actividades ilícitas o contrarias a la buena fe y al ordenamiento
                legal.
              </p>

              <h2>5. Legislación aplicable y jurisdicción</h2>
              <p>
                Para la resolución de todas las controversias o cuestiones
                relacionadas con el presente sitio web o de las actividades en él
                desarrolladas, será de aplicación la legislación española, a la que
                se someten expresamente las partes, siendo competentes para la
                resolución de todos los conflictos derivados o relacionados con su
                uso los Juzgados y Tribunales de Madrid.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
