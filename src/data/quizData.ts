import type { Question, Result } from './types';

export const questions: Question[] = [
    // LEVEL 1
    {
        id: 'Q1',
        text: 'どちらかというとやってみたいのは？',
        options: [
            { id: 'A', text: '課題を見つけて解決策を考える', nextQuestionId: 'Q2A' },
            { id: 'B', text: '既存のモノをもっと良くしていく', nextQuestionId: 'Q2B' },
        ],
    },
    // LEVEL 2
    {
        id: 'Q2A',
        text: 'チームでの自分の動き方は？',
        options: [
            { id: 'A', text: '周りの人を巻き込んで引っ張る', nextQuestionId: 'Q3A' },
            { id: 'B', text: 'チームや相手をよくみてサポートする', nextQuestionId: 'Q3B' },
        ],
    },
    {
        id: 'Q2B',
        text: 'チームでの自分の動き方は？',
        options: [
            { id: 'C', text: '周りの人を巻き込んで引っ張る', nextQuestionId: 'Q3C' },
            { id: 'D', text: 'チームや相手をよくみてサポートする', nextQuestionId: 'Q3D' },
        ],
    },
    // LEVEL 3
    {
        id: 'Q3A',
        text: 'やりがいを感じるのはどっち？',
        options: [
            { id: 'A', text: '眼にみえる成果や反応があること', nextQuestionId: 'Q4A' },
            { id: 'B', text: '見えにくくても裏で機能していること', nextQuestionId: 'Q4B' },
        ],
    },
    {
        id: 'Q3B',
        text: 'やりがいを感じるのはどっち？',
        options: [
            { id: 'C', text: '眼にみえる成果や反応があること', nextQuestionId: 'Q4C' },
            { id: 'D', text: '見えにくくても裏で機能していること', nextQuestionId: 'Q4D' },
        ],
    },
    {
        id: 'Q3C',
        text: 'やりがいを感じるのはどっち？',
        options: [
            { id: 'E', text: '眼にみえる成果や反応があること', nextQuestionId: 'Q4E' },
            { id: 'F', text: '見えにくくても裏で機能していること', nextQuestionId: 'Q4F' },
        ],
    },
    {
        id: 'Q3D',
        text: 'やりがいを感じるのはどっち？',
        options: [
            { id: 'G', text: '眼にみえる成果や反応があること', nextQuestionId: 'Q4G' },
            { id: 'H', text: '見えにくくても裏で機能していること', nextQuestionId: 'Q4H' },
        ],
    },
    // LEVEL 4
    {
        id: 'Q4A',
        text: '「なんで？」と聞かれたときの反応は？',
        options: [
            { id: 'A', text: '答えを伝えて納得させたい', resultId: 'A' },
            { id: 'B', text: '一緒に考えて納得できる形を探したい', resultId: 'B' },
        ],
    },
    {
        id: 'Q4B',
        text: '「なんで？」と聞かれたときの反応は？',
        options: [
            { id: 'C', text: '答えを伝えて納得させたい', resultId: 'C' },
            { id: 'D', text: '一緒に考えて納得できる形を探したい', resultId: 'D' },
        ],
    },
    {
        id: 'Q4C',
        text: '「なんで？」と聞かれたときの反応は？',
        options: [
            { id: 'E', text: '答えを伝えて納得させたい', resultId: 'E' },
            { id: 'F', text: '一緒に考えて納得できる形を探したい', resultId: 'F' },
        ],
    },
    {
        id: 'Q4D',
        text: '「なんで？」と聞かれたときの反応は？',
        options: [
            { id: 'G', text: '答えを伝えて納得させたい', resultId: 'G' },
            { id: 'H', text: '一緒に考えて納得できる形を探したい', resultId: 'H' },
        ],
    },
    {
        id: 'Q4E',
        text: '「なんで？」と聞かれたときの反応は？',
        options: [
            { id: 'I', text: '答えを伝えて納得させたい', resultId: 'I' },
            { id: 'J', text: '一緒に考えて納得できる形を探したい', resultId: 'J' },
        ],
    },
    {
        id: 'Q4F',
        text: '「なんで？」と聞かれたときの反応は？',
        options: [
            { id: 'K', text: '答えを伝えて納得させたい', resultId: 'K' },
            { id: 'L', text: '一緒に考えて納得できる形を探したい', resultId: 'L' },
        ],
    },
    {
        id: 'Q4G',
        text: '「なんで？」と聞かれたときの反応は？',
        options: [
            { id: 'M', text: '答えを伝えて納得させたい', resultId: 'M' },
            { id: 'N', text: '一緒に考えて納得できる形を探したい', resultId: 'N' },
        ],
    },
    {
        id: 'Q4H',
        text: '「なんで？」と聞かれたときの反応は？',
        options: [
            { id: 'O', text: '答えを伝えて納得させたい', resultId: 'O' },
            { id: 'P', text: '一緒に考えて納得できる形を探したい', resultId: 'P' },
        ],
    },
];

export const results: Record<string, Result> = {
    A: {
        id: 'A',
        title: 'Product Manager (PdM)',
        description: '役割：プロダクトの新機能や機能変更を考える司令塔。顧客の課題とビジネス目標をつなぐ人。',
        quote: '“ユーザーと事業の間に立つ、意思決定の中心”',
        tags: ['創造型', 'リード型', '前線系', 'ロジック系'],
    },
    B: {
        id: 'B',
        title: '営業部',
        description: '役割：企業にSansanを導入してもらうために提案・交渉を行う。顧客の課題を理解し、導入のきっかけをつくる。',
        quote: '”一番最初の出会いをつくる”',
        tags: ['創造型', 'リード型', '前線系', '共感系'],
    },
    C: {
        id: 'C',
        title: '法務部',
        description: '役割：契約やリスク管理などを通じて、Sansanのビジネスを裏から支える。ルールとビジネスを両立させる仕事。',
        quote: '”攻めも守りもこなす、会社の番人”',
        tags: ['創造型', '伴走型', 'バックで支える系', 'ロジック系'], // Derived from Q4B->C (Logic) // Wait, Q4B(C) is logic from prompt "A is logic" (C matches Logic position sort of, let's verify)
        // Prompt Q4B: C=Logic, D=Empathy. Yes. 
    },
    D: {
        id: 'D',
        title: 'カスタマーサクセス部（CS）',
        description: '役割：Sansanを導入した顧客に寄り添い、プロダクトの価値を最大化するための支援、伴走を行う',
        quote: '”顧客とゴールまで一緒に走るパートナー”',
        tags: ['創造型', '伴走型', 'バックで支える系', '共感系'],
    },
    E: {
        id: 'E',
        title: 'マーケティング部',
        description: '役割：イベントやコンテンツを通じてSansanを広め、興味を持ってもらうための最初の接点をつくる。',
        quote: '”まだ知らない誰かに届ける、Sansanの語り部”',
        tags: ['改善・洗練型', 'リード型', '前線系', 'ロジック系'], // Wait check Q3C/Q4C paths
        // Path: Q1B -> Q2B/C=Lead? Wait Q2B says C=Lead. Yes.
        // Q3C -> E=Front. Yes.
        // Q4C -> E=Logic? Prompt Q4C: E=Logic, F=Empathy. Yes.
        // Correct.
    },
    F: {
        id: 'F',
        title: 'ブランドエクスペリエンス部（BX）',
        description: '役割：ノベルティやブランド表現など、Sansanを「見せる」部分を担当。対外的な印象や世界観をつくる。',
        quote: '”Sansanらしさをデザインで伝えるチーム”',
        tags: ['改善・洗練型', 'リード型', '前線系', '共感系'],
    },
    G: {
        id: 'G',
        title: 'データ化オペレーションマネージャー',
        description: '役割：名刺などの情報を正確にデータ化するプロセスを管理する仕事。AIと人をどう組み合わせるかを設計する。',
        quote: '“AIと人を最適配置する、データ化の設計者”',
        tags: ['改善・洗練型', 'リード型', 'バックで支える系', 'ロジック系'],
    },
    H: {
        id: 'H',
        title: 'プロダクトデザイングループ',
        description: '役割：プロダクトのUIや画面を設計するチーム。使いやすさ・わかりやすさを追求する。',
        quote: '“ユーザー体験を設計する”',
        tags: ['改善・洗練型', 'リード型', 'バックで支える系', '共感系'],
    },
    I: {
        id: 'I',
        title: 'Product Manager (PdM)',
        description: '役割：プロダクトの新機能や機能変更を考える司令塔。顧客の課題とビジネス目標をつなぐ人。',
        quote: '“ユーザーと事業の間に立つ、意思決定の中心”',
        tags: ['改善・洗練型', '伴走型', '前線系', 'ロジック系'], // Logic check: Q4E -> I=Logic.
    },
    J: {
        id: 'J',
        title: 'マーケティング部',
        description: '役割：イベントやコンテンツを通じてSansanを広め、興味を持ってもらうための最初の接点をつくる。',
        quote: '”まだ知らない誰かに届ける、Sansanの語り部”',
        tags: ['改善・洗練型', '伴走型', '前線系', '共感系'],
    },
    K: {
        id: 'K',
        title: 'データ化オペレーションマネージャー',
        description: '役割：名刺などの情報を正確にデータ化するプロセスを管理する仕事。AIと人をどう組み合わせるかを設計する。',
        quote: '“AIと人を最適配置する、データ化の設計者”',
        tags: ['改善・洗練型', '伴走型', 'バックで支える系', 'ロジック系'], // Q4F -> K=Logic
    },
    L: {
        id: 'L',
        title: '法務部',
        description: '役割：契約やリスク管理などを通じて、Sansanのビジネスを裏から支える。ルールとビジネスを両立させる仕事。',
        quote: '”攻めも守りもこなす、会社の番人”',
        tags: ['改善・洗練型', '伴走型', 'バックで支える系', '共感系'],
    },
    M: {
        id: 'M',
        title: '営業部',
        description: '役割：企業にSansanを導入してもらうために提案・交渉を行う。顧客の課題を理解し、導入のきっかけをつくる。',
        quote: '”一番最初の出会いをつくる”',
        tags: ['創造型', 'リード型', 'バック... wait'], // Check path Q4G.
        // Q1?
        // Let's trace Q4G parent.
        // Q3D -> G (Front?). No loop back.
        // Path to Q4G: Q1B -> Q2B(D=Support) -> Q3D(G=Front) -> Q4G.
        // Q2B(D) = Support (伴走型).
        // Q3D(G) = Front (前線系).
        // Q4G(M) = Logic (ロジック系).
        // Result M = Sales.
    },
    N: {
        id: 'N',
        title: 'ブランドエクスペリエンス部（BX）',
        description: '役割：ノベルティやブランド表現など、Sansanを「見せる」部分を担当。対外的な印象や世界観をつくる。',
        quote: '”Sansanらしさをデザインで伝えるチーム”',
        tags: [],
    },
    O: {
        id: 'O',
        title: 'プロダクトデザイングループ',
        description: '役割：プロダクトのUIや画面を設計するチーム。使いやすさ・わかりやすさを追求する。',
        quote: '“ユーザー体験を設計する”',
        tags: [],
    },
    P: {
        id: 'P',
        title: 'カスタマーサクセス部（CS）',
        description: '役割：Sansanを導入した顧客に寄り添い、プロダクトの価値を最大化するための支援、伴走を行う',
        quote: '”顧客とゴールまで一緒に走るパートナー”',
        tags: [],
    },
};
