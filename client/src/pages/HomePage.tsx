import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { motion } from "framer-motion";
import { AuthModal } from "@/components/authentication/authmodal";
import { useAtom } from "jotai";
import { authmodalAtom } from "@/state/modal_state/authmodalAtom";

export default function HomePage() {
  const [auth, setAuth] = useAtom(authmodalAtom);
  console.log(auth);
  return (

    <div>
      <div className="flex justify-center items-center pt-28"><AuthModal /></div>

      <div className="relative min-h-screen w-full overflow-x-hidden text-white bg-gradient-to-b from-black via-[#0a0014] to-[#1a001f]">
        {/* Floating neon fog animation */}
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(162,0,255,0.15),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(255,0,180,0.1),transparent_40%)]"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />

        {/* Navbar */}
        <nav className="flex items-center justify-between px-8 py-6 z-10 relative backdrop-blur-md bg-black/30 border-b border-white/10">
          <h1 className="text-3xl font-extrabold tracking-wide drop-shadow-[0_0_15px_rgba(255,0,150,0.8)]">
            <span className="text-purple-400">Bun</span>
            <span className="text-pink-500">Draw</span>
          </h1>

          <div className="flex gap-4 items-center">
            <Button
              variant="outline"
              className="bg-black/30 cursor-pointer border-white/30 text-white hover:bg-purple-700/40 hover:text-white transition"
            >
              Log In
            </Button>
            <Button onClick={() => {setAuth(true)}} className="bg-gradient-to-r cursor-pointer from-fuchsia-500 via-purple-600 to-indigo-700 text-white font-bold hover:scale-105 transition-transform shadow-[0_0_15px_rgba(255,0,200,0.5)]">
              Get Started
            </Button>
            <a
              href="https://github.com/Aritra640/BunDraw"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-6 h-6 hover:text-purple-400 hover:scale-110 transition-transform" />
            </a>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative flex flex-col items-center justify-center text-center px-8 py-32 z-10">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-6xl md:text-8xl font-extrabold mb-6 drop-shadow-[0_0_25px_rgba(255,0,200,0.7)]"
          >
            <span className="text-purple-400">Draw</span>,{" "}
            <span className="text-pink-500">Create</span>,{" "}
            <span className="text-blue-400">Shine</span>.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="max-w-2xl text-lg md:text-2xl text-white/80 mb-10"
          >
            <span className="font-bold text-purple-400">BunDraw</span> — the
            next-gen neon drawing studio for creators who thrive in the dark.
            Built with speed, precision, and pure aesthetic power.
          </motion.p>
          <Button
            size="lg"
            className="bg-gradient-to-r cursor-pointer from-pink-500 via-purple-600 to-blue-600 text-white text-xl font-bold px-10 py-6 rounded-full hover:scale-110 transition-all shadow-[0_0_30px_rgba(200,0,255,0.5)]"
          >
            Start Drawing Now ⚡
          </Button>
        </section>

        {/* Features Section */}
        <section className="py-32 bg-gradient-to-b from-[#100018] via-[#150021] to-black relative z-10 border-t border-white/10">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-5xl font-extrabold mb-16 text-center text-white drop-shadow-[0_0_15px_rgba(200,0,255,0.5)]">
              Powering Your Creativity 💫
            </h2>
            <div className="grid md:grid-cols-3 gap-10">
              {[
                {
                  title: "⚡ Ultra Fast",
                  desc: "Powered by Bun for lightning-fast rendering and startup speeds.",
                },
                {
                  title: "🎨 Fluid Canvas",
                  desc: "Smooth, responsive, zero-lag drawing experience using Konva + WebGL.",
                },
                {
                  title: "🧠 Smart Layers",
                  desc: "Non-destructive editing and real-time brush blending powered by AI logic.",
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05, rotate: 1 }}
                  className="bg-black/40 rounded-2xl p-8 shadow-[0_0_20px_rgba(150,0,255,0.3)] border border-white/10 backdrop-blur-lg"
                >
                  <h3 className="text-2xl font-bold mb-3 text-purple-300">
                    {item.title}
                  </h3>
                  <p className="text-white/70">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Neon Divider */}
        <motion.div
          className="h-32 w-full bg-gradient-to-r from-purple-700 via-pink-600 to-indigo-700"
          animate={{ backgroundPosition: ["0% 0%", "100% 0%"] }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "mirror",
          }}
        />

        {/* Gallery Section */}
        <section className="py-40 bg-gradient-to-b from-black via-[#0a0014] to-[#150021] relative text-center z-10">
          <h2 className="text-6xl font-extrabold mb-10 text-purple-300 drop-shadow-[0_0_25px_rgba(255,0,200,0.5)]">
            Artist Showcase 🎆
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-16">
            Upload your creations, connect with other artists, and inspire the
            world with your neon touch.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.1, rotate: 2 }}
                className="w-64 h-40 bg-gradient-to-br from-purple-900/60 to-pink-900/60 rounded-2xl border border-white/20 shadow-[0_0_25px_rgba(200,0,255,0.3)] backdrop-blur-md"
              />
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="py-10 text-center bg-black/80 backdrop-blur-md border-t border-white/10 text-white/60">
          <p className="text-sm">
            © {new Date().getFullYear()}{" "}
            <span className="text-purple-400">BunDraw</span> — Made with ⚡ by{" "}
            <a
              href="https://github.com/Aritra640"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-400 hover:underline"
            >
              Aritra Chatterjee
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
