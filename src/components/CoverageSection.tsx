import { MapPin } from "lucide-react";
import { motion } from "framer-motion";

const groups = [
  {
    title: "Ústecký kraj",
    towns: ["Podbořany", "Žatec", "Louny", "Chomutov", "Kadaň", "Blšany", "Vroutek", "Lubenec"],
  },
  {
    title: "Středočeský kraj",
    towns: ["Rakovník", "Jesenice", "Nové Strašecí", "Mutějovice", "Kolešovice"],
  },
  {
    title: "Plzeňský kraj",
    towns: ["Kralovice", "Plasy", "Kaznějov"],
  },
  {
    title: "Karlovarský kraj",
    towns: ["Žlutice", "Bochov", "Toužim"],
  },
];

export function CoverageSection() {
  return (
    <section
      id="oblast"
      className="scroll-mt-20 border-y border-border bg-card py-20 md:py-28 overflow-hidden"
    >
      <div className="mx-auto max-w-6xl px-4 2xl:max-w-7xl">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-ember">Kde působíme</p>
          <h2 className="mt-2 text-4xl font-extrabold text-soot md:text-5xl">
            Do 45 km od města Kryry
          </h2>
          <p className="mt-3 text-muted-foreground">
            Pokrýváme široké okolí od Podbořan, Žatce, Rakovníka až po Kralovice a Žlutice. Nejste
            si jistí, jestli k vám dojedu? Zavolejte — větší zakázky řeším i mimo tento rádius.
          </p>
        </motion.header>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="grid gap-4 sm:grid-cols-2">
            {groups.map((g, i) => (
              <motion.div
                key={g.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md cursor-default"
              >
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-ember" />
                  <h3 className="font-extrabold text-soot">{g.title}</h3>
                </div>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {g.towns.map((t) => (
                    <li
                      key={t}
                      className="rounded-full bg-muted px-3 py-1 text-sm text-soot transition-colors hover:bg-ember/10 hover:text-ember"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative rounded-2xl border border-border bg-card shadow-sm overflow-hidden min-h-[250px] md:min-h-[300px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d163740.97059714884!2d13.23847847953049!3d50.17700206123498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470a6c22ddc39fb1%3A0x400af0f6615b100!2sKryry!5e0!3m2!1sen!2scz!4v1718912345678!5m2!1sen!2scz"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Oblast působnosti - Kryry"
              className="absolute inset-0"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
