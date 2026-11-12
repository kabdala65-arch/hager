import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './LoveCardsSection.css'

const cards = [
  { id: 1, icon: '♡', title: 'بحبك', message: 'بحبك يا هاجر بطريقة معرفش أوصفها، بس كل يوم بتزيد عن اللي قبله' },
  { id: 2, icon: '✧', title: 'يا نور عيني', message: 'إنتي اللي بتنوّريلي أيامي حتى لما تبقى تقيلة عليا' },
  { id: 3, icon: '☾', title: 'يا أماني', message: 'جنبك بحس إني في أأمن مكان في الدنيا، وإن مفيش حاجة تقدر توجعني' },
  { id: 4, icon: '✦', title: 'يا روحي', message: 'إنتي مش بس أهم حاجة في حياتي، إنتي الحاجة اللي بتخليها حياة أصلاً' },
  { id: 5, icon: '❀', title: 'يا أملي', message: 'بسببك بقيت عايز أبقى أحسن، وأحقق كل حاجة نفسنا فيها سوا' },
  { id: 6, icon: '★', title: 'يا حلمي', message: 'كنت بدعي ربنا بحد زيك، ولما جيتي عرفت إن دعوتي اتسمعت' },
]

export default function LoveCardsSection() {
  const [activeCard, setActiveCard] = useState(null)

  return (
    <section className="cards-section" id="cards">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span className="section-tag">رسائل من القلب</span>
        <h2 className="section-title">دوسي على الكروت وشوفي اللي جواها</h2>
        <p className="section-subtitle">كل كرت فيه كلمة من قلبي ليكي ♥</p>
      </motion.div>

      <div className="cards-grid">
        {cards.map((card, i) => (
          <motion.div
            key={card.id}
            className="love-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ y: -6, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveCard(card)}
          >
            <span className="card-icon">{card.icon}</span>
            <span className="card-title">{card.title}</span>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {activeCard && (
          <motion.div
            className="card-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveCard(null)}
          >
            <motion.div
              className="card-modal"
              initial={{ scale: 0.5, opacity: 0, rotateY: -90 }}
              animate={{ scale: 1, opacity: 1, rotateY: 0 }}
              exit={{ scale: 0.5, opacity: 0, rotateY: 90 }}
              transition={{ type: 'spring', damping: 20 }}
              onClick={e => e.stopPropagation()}
            >
              <button className="close-btn" onClick={() => setActiveCard(null)}>×</button>
              <div className="modal-icon">{activeCard.icon}</div>
              <h3 className="modal-title">{activeCard.title}</h3>
              <p className="modal-message">{activeCard.message}</p>
              <div className="modal-heart">♥</div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
