import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Política de Privacidad | Instituto Diplomático de Idiomas",
  description:
    "Política de privacidad y protección de datos del Instituto Diplomático de Idiomas.",
};

export default function PoliticaPrivacidad() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-navy py-20 lg:py-28">
          <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
            <h1 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Política de Privacidad
            </h1>
          </div>
        </section>

        <section className="bg-warm-white py-20 lg:py-28">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <div className="prose prose-slate max-w-none font-[family-name:var(--font-body)] text-slate-blue [&_h2]:font-[family-name:var(--font-heading)] [&_h2]:text-navy">
              <h2>1. Responsable del tratamiento</h2>
              <ul>
                <li><strong>Identidad:</strong> [Pendiente]</li>
                <li><strong>NIF/CIF:</strong> [Pendiente]</li>
                <li><strong>Dirección:</strong> [Pendiente], Madrid, España</li>
                <li><strong>Correo electrónico:</strong> info@institutodiplomatico.es</li>
              </ul>

              <h2>2. Finalidad del tratamiento de datos</h2>
              <p>
                Los datos personales recogidos a través del formulario de contacto
                de este sitio web serán tratados con las siguientes finalidades:
              </p>
              <ul>
                <li>
                  Gestionar las solicitudes de información y diagnóstico realizadas
                  por los usuarios.
                </li>
                <li>
                  Enviar comunicaciones relacionadas con los servicios solicitados.
                </li>
                <li>
                  Mantener la relación comercial y de prestación de servicios
                  educativos.
                </li>
              </ul>

              <h2>3. Legitimación</h2>
              <p>
                La base legal para el tratamiento de sus datos es el consentimiento
                del interesado, otorgado al completar y enviar el formulario de
                contacto, así como el interés legítimo del responsable en atender
                las consultas recibidas.
              </p>

              <h2>4. Conservación de datos</h2>
              <p>
                Los datos personales proporcionados se conservarán mientras se
                mantenga la relación comercial o durante los años necesarios para
                cumplir con las obligaciones legales. Una vez finalizada la
                relación, los datos serán suprimidos conforme a lo dispuesto en la
                normativa de protección de datos.
              </p>

              <h2>5. Derechos del usuario</h2>
              <p>
                El usuario puede ejercer los siguientes derechos dirigiéndose al
                responsable del tratamiento a través del correo electrónico
                indicado:
              </p>
              <ul>
                <li>Derecho de acceso a sus datos personales.</li>
                <li>Derecho de rectificación de datos inexactos.</li>
                <li>Derecho de supresión de sus datos.</li>
                <li>Derecho de limitación del tratamiento.</li>
                <li>Derecho de portabilidad de los datos.</li>
                <li>Derecho de oposición al tratamiento.</li>
              </ul>
              <p>
                Asimismo, el usuario tiene derecho a presentar una reclamación ante
                la Agencia Española de Protección de Datos (AEPD) si considera que
                el tratamiento de sus datos no se ajusta a la normativa vigente.
              </p>

              <h2>6. Seguridad</h2>
              <p>
                El responsable del tratamiento ha adoptado las medidas técnicas y
                organizativas necesarias para garantizar la seguridad de los datos
                personales y evitar su alteración, pérdida, tratamiento o acceso no
                autorizado.
              </p>

              <h2>7. Modificaciones</h2>
              <p>
                El responsable se reserva el derecho a modificar la presente
                política de privacidad para adaptarla a novedades legislativas o
                jurisprudenciales, así como a prácticas de la industria. En dichos
                supuestos, se anunciarán los cambios introducidos con razonable
                antelación a su puesta en práctica.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
