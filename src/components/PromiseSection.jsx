import { motion } from 'framer-motion'
import './PromiseSection.css'

export default function PromiseSection() {
  return (
    <section className="promise-section">
      <motion.div
        className="promise-block"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
      >
        <span className="section-tag">وعد</span>
        <p className="promise-text">
          أوعدك يا هاجر إني أفضل جنبك في الفرح قبل التعب، وأكون سندك وضهرك،
          والكتف اللي تسندي عليه لما الدنيا تتقل. وعد مني أحافظ عليكي وعلى حبنا،
          وأخليكي دايمًا مطمّنة إن ليكي حد في الدنيا مش هيسيبك ♥
        </p>
      </motion.div>

      <motion.div
        className="poem-block"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.2 }}
      >
        <span className="section-tag">طول العمر</span>
        <p className="poem-text">
          هفضل أحبك بنفس الصدق ده، وأكتر كل يوم<br />
          وهفضل أشوفك بيتي وأماني، والمكان اللي قلبي بيرجعله ♥<br /><br />
          مهما الأيام اتبدلت، ومهما الدنيا شالتنا وحطتنا<br />
          هفضل شايفك زي أول يوم بالظبط<br />
          وحتى لما نكبر وكل حاجة حوالينا تتغيّر<br />
          هيفضل حبي ليكي هو الحاجة الوحيدة الثابتة<br /><br />
          هفضل مبسوط إني عرفتك، وشاكر ربنا إنه اختارك ليا<br />
          ومستنيك في كل مرحلة جاية، وإيدي في إيدك<br /><br />
          ولو تعبنا، ولو الظروف قست علينا<br />
          هفضل ماسك إيدك وكملين<br />
          لحد ما نبقى عواجيز قاعدين جنب بعض<br />
          نفتكر كل ده ونضحك عليه<br /><br />
          وكل ما أبص لاسمك أفتكر إن هاجر مشيت بيقين وربنا كرمها<br />
          وأنا يقيني إن ربنا كرمني بيكي أنا ♥♥♥
        </p>
      </motion.div>
    </section>
  )
}
