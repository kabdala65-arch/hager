import { motion } from 'framer-motion'
import './MissingYouSection.css'

const lines = [
  'يعني البيت بيبقى ساكت أوي من غير صوتك',
  'يعني بدوّر عليكي في كل زحمة، حتى وأنا عارف إنك مش هنا',
  'يعني بمسك التليفون كل شوية أشوف رسالتك وصلت ولا لسه',
  'يعني بفتكر كلمة قلتيها فأبتسم لوحدي زي المجنون',
  'يعني حتى وسط الناس، بيبقى عقلي وقلبي عندك',
  'يعني أي حاجة حلوة تحصل، أول ما أفكر فيه أحكيهالك',
  'يعني كل حاجة حواليا بتفكّرني بيكي',
  'يعني إنتي أول حد بفكر فيه لما أصحى، وآخر حد قبل ما أنام',
  'يعني يومي من غير سماع صوتك ناقص حاجة مش عارف أكمّلها',
  'يعني من غيرك أنا بتوه، وإنتي اللي بترجّعيني لنفسي',
]

export default function MissingYouSection() {
  return (
    <section className="missing-section">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span className="section-tag">وحشتيني</span>
        <h2 className="section-title">كلمة "وحشتيني" دي مش بسيطة خالص</h2>
        <p className="section-subtitle">
          فيها معاني كتير أوي، خليكي معايا لحد آخرها ♥
        </p>
      </motion.div>

      <div className="missing-list">
        {lines.map((line, i) => (
          <motion.div
            key={i}
            className="missing-line"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: i * 0.06 }}
          >
            <span className="missing-heart">♥</span>
            <span className="missing-word">وحشتيني</span>
            <span className="missing-text">{line}</span>
          </motion.div>
        ))}
      </div>

      <motion.p
        className="missing-closing"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        وخلاصة الكلام كله يا هاجر.. وحشتيني أكتر من أي كلام ♥♥
      </motion.p>
    </section>
  )
}
