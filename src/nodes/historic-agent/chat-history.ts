import { HumanMessage, AIMessage } from "langchain/schema";

export const BASE_CHAT_HISTORY = [
  new HumanMessage(
    "Salut, j'ai besoin d'aide pour mon devoir d'histoire sur la mondialisation. Je ne sais pas par où commencer."
  ),
  new AIMessage(
    "Bonjour ! Je serais ravie de t'aider avec ton devoir sur la mondialisation. Pour commencer, il serait bon de définir ce que la mondialisation signifie. La mondialisation fait référence au processus d'intégration et d'interdépendance des économies, sociétés, cultures et politiques mondiales. On la considère souvent comme résultant de l'augmentation du commerce international et des échanges culturels. Quel aspect de la mondialisation t'intéresse le plus ?"
  ),
  new HumanMessage(
    "Je suis intéressé par les effets de la mondialisation sur les cultures locales."
  ),
  new AIMessage(
    "C'est un sujet fascinant ! La mondialisation a eu un impact significatif sur les cultures locales à travers le monde. Elle a entraîné une diffusion plus rapide des idées, des valeurs et des pratiques culturelles. Cela a conduit à une plus grande diversité culturelle, mais aussi à des préoccupations concernant l'homogénéisation culturelle. Comment souhaites-tu aborder ce sujet dans ton devoir ?"
  ),
  new HumanMessage(
    "Je veux explorer comment la mondialisation a affecté la cuisine traditionnelle dans différentes régions du monde."
  ),
  new AIMessage(
    "Une approche intéressante ! La mondialisation a eu un impact majeur sur la cuisine traditionnelle en favorisant l'échange de recettes, d'ingrédients et de techniques culinaires à l'échelle mondiale. Cela a entraîné une diversification des options alimentaires disponibles, mais aussi des préoccupations concernant la perte de traditions culinaires locales. Comment comptes-tu aborder cette question dans ton devoir ?"
  ),
  new HumanMessage(
    "Je veux me concentrer sur l'influence de la mondialisation sur la cuisine italienne traditionnelle."
  ),
  new AIMessage(
    "Un excellent choix ! La cuisine italienne est mondialement connue pour sa richesse et sa diversité. La mondialisation a eu un impact significatif sur la cuisine italienne en favorisant l'exportation de produits italiens, la diffusion de recettes traditionnelles et l'adaptation de plats italiens pour les marchés internationaux. Comment comptes-tu explorer cette question dans ton devoir ?"
  ),
  new HumanMessage(
    "Je veux examiner comment la mondialisation a influencé les ingrédients utilisés dans la cuisine italienne traditionnelle."
  ),
];

export const BASE_CHAT_HISTORY_ARR = [
  "Salut, j'ai besoin d'aide pour mon devoir d'histoire sur la mondialisation. Je ne sais pas par où commencer.",
  "Bonjour ! Je serais ravie de t'aider avec ton devoir sur la mondialisation. Pour commencer, pourrais-tu me dire ce que tu sais déjà sur le sujet ?",
  "Eh bien, je sais que la mondialisation concerne les échanges entre les pays et qu'elle affecte l'économie, la culture, et la politique.",
  "C'est un bon début ! La mondialisation implique en effet les échanges économiques, culturels, et politiques à l'échelle mondiale. Un aspect intéressant à explorer pourrait être l'impact de la mondialisation sur les différentes cultures. Qu'en penses-tu ?",
  "Ça semble intéressant. Comment la mondialisation affecte-t-elle les cultures ?",
  "La mondialisation peut conduire à une uniformisation culturelle, où des pratiques, des valeurs, et même des produits deviennent similaires partout dans le monde. Cependant, elle peut aussi favoriser l'échange culturel et la diversité, permettant aux cultures de s'enrichir mutuellement. Veux-tu explorer un exemple spécifique de cet impact ?",
  "Oui, j'aimerais voir un exemple de la façon dont la mondialisation a influencé une culture spécifique.",
  "Parfait ! Prenons l'exemple de la cuisine. La mondialisation a facilité la diffusion des cuisines du monde entier, permettant aux gens de découvrir des plats d'autres cultures. Cela peut conduire à une appréciation et une intégration de diverses traditions culinaires, enrichissant la culture locale. Comment aimerais-tu approfondir ce sujet dans ton devoir ?",
];
