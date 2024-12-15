export const fetchQuestions = async () => {
    try {
      const res = await fetch('https://opentdb.com/api.php?amount=10&type=multiple');
      if (!res.ok) {
        throw new Error(`Error: ${res.status} - ${res.statusText}`);
      }
      const data = await res.json();
      return data.results; // Pastikan data.results tersedia
    } catch (error) {
      console.error("Failed to fetch questions:", error.message);
      return []; // Kembalikan array kosong jika gagal
    }
  };
  