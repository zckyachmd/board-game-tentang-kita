// Var temp
var excludeQuestion = '';

// Questions Array
var questions = [
  {
    type: 'Truth',
    question: 'Apa hal terberat yang pernah Anda rasakan dalam hubungan ini?',
  },
  {
    type: 'Truth',
    question:
      'Apa hal yang paling membuat Anda tertarik pada pasangan Anda saat pertama kali berkenalan?',
  },
  {
    type: 'Truth',
    question: 'Apakah Anda pernah merasa tidak puas dengan hubungan kami?',
  },
  {
    type: 'Truth',
    question: 'Apa harapan Anda untuk masa depan kami?',
  },
  {
    type: 'Truth',
    question:
      'Apa hal yang paling Anda sukai dalam diri pasangan Anda saat ini?',
  },
  {
    type: 'Truth',
    question: 'Apa hal yang paling Anda benci dalam diri pasangan Anda?',
  },
  {
    type: 'Truth',
    question: 'Siapa orang terdekat dalam hidup Anda selain pasangan Anda?',
  },
  {
    type: 'Truth',
    question:
      'Apakah Anda pernah berbohong pada pasangan Anda? Jika ya, tentang apa?',
  },
  {
    type: 'Truth',
    question:
      'Apa hal paling menakutkan yang pernah Anda lakukan dalam hidup Anda?',
  },
  {
    type: 'Truth',
    question: 'Apa hal yang paling membuat Anda tertawa dalam hidup Anda?',
  },
  {
    type: 'Truth',
    question: 'Apa hal yang paling membuat Anda sedih dalam hidup Anda?',
  },
  {
    type: 'Truth',
    question: 'Apa hal yang paling membuat Anda marah dalam hidup Anda?',
  },
  {
    type: 'Truth',
    question: 'Apa hal yang paling membuat Anda takut dalam hidup Anda?',
  },
  {
    type: 'Truth',
    question: 'Apa hal yang paling membuat Anda senang dalam hidup Anda?',
  },
  {
    type: 'Truth',
    question: 'Apa hal yang paling Anda rindukan dari masa lalu Anda?',
  },
  {
    type: 'Truth',
    question: 'Apa hal yang paling Anda benci dari masa lalu Anda?',
  },
  {
    type: 'Truth',
    question: 'Apa hal yang paling Anda sukai dari masa lalu Anda?',
  },
  {
    type: 'Truth',
    question: 'Apa hal yang paling Anda takutkan dari masa depan Anda?',
  },
  {
    type: 'Truth',
    question: 'Apa hal yang paling Anda harapkan dari masa depan Anda?',
  },
  {
    type: 'Truth',
    question: 'Apa hal yang paling Anda takutkan dari masa depan Anda?',
  },
  {
    type: 'Truth',
    question:
      'Apakah Anda memiliki rahasia yang belum Anda ceritakan pada pasangan Anda?',
  },
  {
    type: 'Dare',
    question: 'Berikan pujian terbaik untuk pasangan Anda di depan orang lain.',
  },
  {
    type: 'Dare',
    question:
      'Berikan pengakuan cinta untuk pasangan Anda melalui sebuah lagu.',
  },
  {
    type: 'Dare',
    question:
      'Berikan pengalaman baru untuk pasangan Anda yang tidak pernah mereka lakukan sebelumnya.',
  },
  {
    type: 'Dare',
    question:
      'Luapkan perasaan cinta Anda untuk pasangan Anda dalam sebuah puisi.',
  },
  {
    type: 'Dare',
    question: 'Buatlah tarian romantis untuk pasangan Anda.',
  },
  {
    type: 'Dare',
    question: 'Berikan pijatan untuk pasangan Anda selama 5 menit.',
  },
  {
    type: 'Dare',
    question: 'Berikan pijatan untuk pasangan Anda selama 10 menit.',
  },
  {
    type: 'Dare',
    question: 'Melakukan sebuah tarikan suara atau tarian di depan orang lain.',
  },
  {
    type: 'Dare',
    question: 'Berikan sebuah ciuman di bibir pasangan Anda.',
  },
  {
    type: 'Dare',
    question: 'Berikan sebuah ciuman di leher pasangan Anda.',
  },
  {
    type: 'Dare',
    question: 'Berikan sebuah ciuman di dada pasangan Anda.',
  },
  {
    type: 'Dare',
    question: 'Melakukan sebuah tarikan suara atau tarian di depan orang lain.',
  },
  {
    type: 'Dare',
    question:
      'Menelpon teman atau keluarga Anda dan berbicara dalam suara yang lucu atau aneh.',
  },
  {
    type: 'Dare',
    question: 'Bermain game truth or dare dengan teman atau keluarga Anda.',
  },
  {
    type: 'Dare',
    question: 'Mengunjungi tempat yang menakutkan bersama pasangan Anda.',
  },
  {
    type: 'Dare',
    question: 'Mengirim pesan teks ke teman atau keluarga Anda.',
  },
  {
    type: 'Dare',
    question: 'Berbicara dalam bahasa asing selama 5 menit.',
  },
];

var card = new Vue({
  el: '#card',
  data: {
    type: 'Type',
    question: 'Question',
  },
  methods: {
    getQuestion() {
      // Filter questions array from excludeQuestion
      const filterQuestions = questions.filter(
        (item) => item !== excludeQuestion
      );

      // Get random question from filterQuestions array
      const randomQuestion = Math.floor(Math.random() * filterQuestions.length);

      // Set excludeQuestion to question
      excludeQuestion = randomQuestion;

      // Set data to question and type
      this.type = questions[excludeQuestion].type;
      this.question = questions[excludeQuestion].question;
    },
  },
  mounted() {
    this.getQuestion();
  },
});
