import { motion } from 'framer-motion'
import './MeaningSection.css'

const letters = [
  { l: 'ه', text: 'هدوء قلبي.. ولما بكون معاكي الدنيا كلها بتهدى' },
  { l: 'ا', text: 'أمان.. إنتي البيت اللي برتاح فيه مهما الدنيا زحمت' },
  { l: 'ج', text: 'جمال روحك قبل شكلك، وده اللي خلاني أحبك' },
  { l: 'ر', text: 'رحمة من ربنا بعتك ليا.. وهفضل أشكره عليكي العمر كله' },
]

export default function MeaningSection() {
  return (
    <section className="meaning-section">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span className="section-tag">اسمك</span>
        <h2 className="section-title">هاجر.. اسم له حكاية</h2>
        <p className="section-subtitle">
          كل حرف في اسمك ليه معنى عندي ♥
        </p>
      </motion.div>

      <motion.div
        className="meaning-origin"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <span className="meaning-origin-title">معنى اسم هاجر</span>
        <p>
          «هاجر» من الهجرة، يعني اللي سابت كل حاجة وراها ومشيت بإيمان وصبر وتوكّل على ربنا.
          وهو كمان اسم السيدة هاجر أم سيدنا إسماعيل عليه السلام، اللي بقى سعيها بين الصفا والمروة
          رمز للصبر واليقين، وربنا كافأها بزمزم.
        </p>
        <p>
          وأنا لما أبص لاسمك، بلاقيه شبهك بالظبط يا هاجر: قوة وطيبة وقلب كبير،
          ويقين إن ربنا مبيضيّعش حد. ♥
        </p>
      </motion.div>

      <div className="meaning-grid">
        {letters.map((item, i) => (
          <motion.div
            key={i}
            className="meaning-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: i * 0.12 }}
          >
            <span className="meaning-letter">{item.l}</span>
            <span className="meaning-text">{item.text}</span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
