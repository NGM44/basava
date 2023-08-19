import type { Metadata } from "next";
import KannadaBanner from "../component/KannadaBanner";


export const metadata: Metadata = {
  title: "ಬಸವ",
  description:
    "ಸಮಾನತೆ ಮತ್ತು ಅಹಿಂಸೆಯನ್ನು ಪ್ರತಿಪಾದಿಸಿದ 12 ನೇ ಶತಮಾನದ ಭಾರತೀಯ ತತ್ವಜ್ಞಾನಿ, ಕವಿ ಮತ್ತು ಸಮಾಜ ಸುಧಾರಕ ಬಸವ (ಬಸವೇಶ್ವರ/ಬಸವಣ್ಣ) ಅವರ ಜೀವನ ಮತ್ತು ಪರಂಪರೆಯನ್ನು ಅನ್ವೇಷಿಸಿ. ಶಿವಭಕ್ತಿ ಆಂದೋಲನದಲ್ಲಿ ಅವರ ಪಾತ್ರ ಮತ್ತು ಭಾರತೀಯ ಸಮಾಜದ ಮೇಲೆ ಶಾಶ್ವತವಾದ ಪ್ರಭಾವದ ಬಗ್ಗೆ ತಿಳಿಯಿರಿ.",
  keywords: [
    "ಬಸವ ಜಯಂತಿ",
    "basava jayanti",
    "ಬಸವ",
    "basava",
    "ನಮ್ಮ ಬಸವ",
    "ಬಸವಣ್ಣ",
    "ಬಸವಣ್ಣ ವಚನ",
    "ಕನ್ನಡದಲ್ಲಿ ಬಸವಣ್ಣ ವಚನಗಳು",
    "ಕನ್ನಡದಲ್ಲಿ ಚಿಕ್ಕ ಬಸವಣ್ಣ ವಚನಗಳು",
    "ಬಸವಣ್ಣ ಫೋಟೋ",
    "ಕನ್ನಡದಲ್ಲಿ ಬಸವಣ್ಣ ಮಾಹಿತಿ",
    "ಬಸವಣ್ಣ ಉಲ್ಲೇಖಿಸಿದ್ದಾರೆ",
    "ಬಸವಣ್ಣನವರ ವಚನ",
    "ಕನ್ನಡದಲ್ಲಿ ಬಸವಣ್ಣ ವಚನ",
    "ವಚನ",
    "ಕನ್ನಡದಲ್ಲಿ ವಚನ",
    "ಬಸವಣ್ಣ ವಚನ ಕನ್ನಡದಲ್ಲಿ",
    "ಲಿಂಗಾಯತ",
    "ಲಿಂಗಾಯತ ಜಾತಿ",
    "ವೀರಶೈವ ಲಿಂಗಾಯತ",
  ],
};

export default function KannadaLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      {children}
    </section>
  );
}
