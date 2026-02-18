import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

interface EventDetails {
  id: string;
  title: string;
  description: string;
  date: string;
  image: string;
}

interface EventsLocationState {
  event?: EventDetails;
}

function Events() {
  const location = useLocation();
  const state = location.state as EventsLocationState | null;
  const selectedEvent = state?.event;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#edf6ff] to-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-3xl font-bold text-slate-900 md:text-4xl"
        >
          Event Details
        </motion.h1>

        {selectedEvent ? (
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="overflow-hidden rounded-2xl border border-[#00629B]/20 bg-white shadow-xl"
          >
            <img
              src={selectedEvent.image}
              alt={selectedEvent.title}
              className="h-64 w-full object-cover md:h-80"
            />
            <div className="p-6 md:p-8">
              <p className="mb-2 text-sm font-semibold text-[#00629B]">
                {selectedEvent.date}
              </p>
              <h2 className="mb-4 text-2xl font-semibold text-slate-900">
                {selectedEvent.title}
              </h2>
              <p className="leading-relaxed text-slate-700">
                {selectedEvent.description}
              </p>
            </div>
          </motion.article>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-dashed border-[#00629B]/30 bg-white p-10 text-center text-slate-600"
          >
            Select an event from the Home page to view detailed information.
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default Events;
