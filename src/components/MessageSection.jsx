import { motion } from 'framer-motion'
import './MessageSection.css'

export default function MessageSection() {
  return (
    <section className="message-section">
      <motion.div
        className="message-wrapper"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="ring-glow-wrapper">
          <div className="ring-glow">
            <span className="ring-heart">♥</span>
          </div>
        </div>

        <h2 className="message-title">
          <span className="message-lead">يا أغلى إنسانة في حياتي...</span>
          <span className="signature">هاجر ❤️</span>
        </h2>

        <motion.p
          className="message-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          مش هعرف أعبّرلك بالكلام، بس حبيت أعملّك المكان ده عشان تعرفي إنتي قد إيه غالية عندي.<br /><br />
          من يوم 11/9/2026 وأنا كل يوم بكتشف سبب جديد يخليني أحبك أكتر.
          ضحكتك بتفرّحني، وكلامك بيطمّني، وأي يوم تقيل بيهون أول ما أسمع صوتك.<br /><br />
          ولو الزمن رجع بيا ألف مرة، هختارك إنتي تاني ومن غير تفكير.<br /><br />
          وعد مني يا هاجر: هفضل جنبك، وأحترمك وأقدّرك، وأكون معاكي في كل الظروف
          الحلو منها والصعب، وربنا يديمك في حياتي ويجمعنا على كل خير.
        </motion.p>

        <motion.div
          className="message-signature-line"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        />

        <motion.p
          className="message-from"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
        >
          بحبك يا هاجر من قلبي، وربنا يخليكي ليا ويفضّل ضحكتك منوّرة طول عمرك ❤️🌹
        </motion.p>
      </motion.div>
    </section>
  )
}
