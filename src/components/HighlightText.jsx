/**
 * Parses text with [highlighted] markers and renders them as <span className="highlight">.
 * Usage: <HighlightText text="Markanızı [Dijitalde] Zirveye Taşıyoruz" />
 */
function HighlightText({ text }) {
    const parts = text.split(/\[([^\]]+)\]/)

    return (
        <>
            {parts.map((part, index) =>
                index % 2 === 1 ? (
                    <span key={index} className="highlight">{part}</span>
                ) : (
                    <span key={index}>{part}</span>
                )
            )}
        </>
    )
}

export default HighlightText
