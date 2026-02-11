export const createEvent = async (req, res) => {
    try {
        const { legacyCode, doctorName, approximateParticipants, audienceType } = req.body;
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}