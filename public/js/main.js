// --- Data Definitions ---

const getSchedule = (roleType) => {
    switch (roleType) {
        case 'PdM':
            return [
                { time: '10:00', description: '開発チームとの朝会・進捗確認' },
                { time: '11:00', description: 'ユーザーインタビューの分析・要件定義' },
                { time: '13:00', description: 'ランチ（同僚と近くのカフェへ）' },
                { time: '14:00', description: '次期機能の仕様策定ミーティング' },
                { time: '16:00', description: 'デザイナーとのUI/UXレビュー' },
                { time: '18:00', description: '翌日のタスク整理・退社' }
            ];
        case 'Sales':
            return [
                { time: '09:30', description: 'メールチェック・訪問準備' },
                { time: '10:30', description: 'クライアント訪問（商談）' },
                { time: '12:00', description: '移動中にランチ' },
                { time: '13:30', description: 'オンラインでの製品デモ' },
                { time: '15:00', description: '社内会議・営業戦略の共有' },
                { time: '17:00', description: '提案資料の作成・顧客フォロー' }
            ];
        case 'Legal':
            return [
                { time: '10:00', description: '契約書のリーガルチェック' },
                { time: '11:30', description: '事業部からの法律相談対応' },
                { time: '13:00', description: 'ランチ' },
                { time: '14:00', description: '新規事業の法的リスク検討会' },
                { time: '16:00', description: '社内規定の改定作業' },
                { time: '18:00', description: '最新の法改正情報のキャッチアップ' }
            ];
        case 'CS':
            return [
                { time: '09:30', description: 'カスタマーサポート定例MTG' },
                { time: '10:30', description: '顧客からの問い合わせ対応' },
                { time: '12:00', description: 'ランチ' },
                { time: '13:00', description: 'オンボーディング支援（Web会議）' },
                { time: '15:00', description: '活用促進のための施策検討' },
                { time: '17:00', description: 'ユーザーの声（VOC）の集計・共有' }
            ];
        case 'Marketing':
            return [
                { time: '10:00', description: '広告運用の数値確認・分析' },
                { time: '11:00', description: 'イベント企画ミーティング' },
                { time: '13:00', description: 'ランチ' },
                { time: '14:00', description: 'コンテンツ記事の執筆・編集' },
                { time: '16:00', description: 'マーケティングオートメーションの設定' },
                { time: '18:00', description: 'キャンペーン効果測定レポート作成' }
            ];
        case 'BX':
            return [
                { time: '10:00', description: 'ブランドガイドラインの策定MTG' },
                { time: '11:30', description: 'ノベルティグッズのデザイン検討' },
                { time: '13:00', description: 'ランチ' },
                { time: '14:00', description: '社内報の取材・撮影' },
                { time: '16:00', description: 'オフィス空間のデザイン監修' },
                { time: '18:00', description: 'イベント設営の準備' }
            ];
        case 'DataOps':
            return [
                { time: '10:00', description: 'データ化進捗のモニタリング' },
                { time: '11:00', description: 'オペレーション改善の施策検討' },
                { time: '13:00', description: 'ランチ' },
                { time: '14:00', description: 'AIエンジニアとの連携MTG' },
                { time: '16:00', description: '品質管理レポートの作成' },
                { time: '18:00', description: 'オペレーター向けマニュアル更新' }
            ];
        case 'Design':
            return [
                { time: '10:00', description: 'デザイン定例・タスク確認' },
                { time: '11:00', description: '新規画面のUIデザイン作成' },
                { time: '13:00', description: 'ランチ' },
                { time: '14:00', description: 'プロトタイプ作成・ユーザーテスト' },
                { time: '16:00', description: 'エンジニアへのデザイン引き継ぎ' },
                { time: '18:00', description: 'デザインシステムの更新' }
            ];
    }
};

const questions = [
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

const results = {
    A: {
        id: 'A',
        title: 'Product Manager (PdM)',
        description: '役割：プロダクトの新機能や機能変更を考える司令塔。顧客の課題とビジネス目標をつなぐ人。',
        quote: '“ユーザーと事業の間に立つ、意思決定の中心”',
        tags: ['創造型', 'リード型', '前線系', 'ロジック系'],
        schedule: getSchedule('PdM'),
    },
    B: {
        id: 'B',
        title: '営業部',
        description: '役割：企業にSansanを導入してもらうために提案・交渉を行う。顧客の課題を理解し、導入のきっかけをつくる。',
        quote: '”一番最初の出会いをつくる”',
        tags: ['創造型', 'リード型', '前線系', '共感系'],
        schedule: getSchedule('Sales'),
    },
    C: {
        id: 'C',
        title: '法務部',
        description: '役割：契約やリスク管理などを通じて、Sansanのビジネスを裏から支える。ルールとビジネスを両立させる仕事。',
        quote: '”攻めも守りもこなす、会社の番人”',
        tags: ['創造型', '伴走型', 'バックで支える系', 'ロジック系'],
        schedule: getSchedule('Legal'),
    },
    D: {
        id: 'D',
        title: 'カスタマーサクセス部（CS）',
        description: '役割：Sansanを導入した顧客に寄り添い、プロダクトの価値を最大化するための支援、伴走を行う',
        quote: '”顧客とゴールまで一緒に走るパートナー”',
        tags: ['創造型', '伴走型', 'バックで支える系', '共感系'],
        schedule: getSchedule('CS'),
    },
    E: {
        id: 'E',
        title: 'マーケティング部',
        description: '役割：イベントやコンテンツを通じてSansanを広め、興味を持ってもらうための最初の接点をつくる。',
        quote: '”まだ知らない誰かに届ける、Sansanの語り部”',
        tags: ['改善・洗練型', 'リード型', '前線系', 'ロジック系'],
        schedule: getSchedule('Marketing'),
    },
    F: {
        id: 'F',
        title: 'ブランドエクスペリエンス部（BX）',
        description: '役割：ノベルティやブランド表現など、Sansanを「見せる」部分を担当。対外的な印象や世界観をつくる。',
        quote: '”Sansanらしさをデザインで伝えるチーム”',
        tags: ['改善・洗練型', 'リード型', '前線系', '共感系'],
        schedule: getSchedule('BX'),
    },
    G: {
        id: 'G',
        title: 'データ化オペレーションマネージャー',
        description: '役割：名刺などの情報を正確にデータ化するプロセスを管理する仕事。AIと人をどう組み合わせるかを設計する。',
        quote: '“AIと人を最適配置する、データ化の設計者”',
        tags: ['改善・洗練型', 'リード型', 'バックで支える系', 'ロジック系'],
        schedule: getSchedule('DataOps'),
    },
    H: {
        id: 'H',
        title: 'プロダクトデザイングループ',
        description: '役割：プロダクトのUIや画面を設計するチーム。使いやすさ・わかりやすさを追求する。',
        quote: '“ユーザー体験を設計する”',
        tags: ['改善・洗練型', 'リード型', 'バックで支える系', '共感系'],
        schedule: getSchedule('Design'),
    },
    I: {
        id: 'I',
        title: 'Product Manager (PdM)',
        description: '役割：プロダクトの新機能や機能変更を考える司令塔。顧客の課題とビジネス目標をつなぐ人。',
        quote: '“ユーザーと事業の間に立つ、意思決定の中心”',
        tags: ['改善・洗練型', '伴走型', '前線系', 'ロジック系'],
        schedule: getSchedule('PdM'),
    },
    J: {
        id: 'J',
        title: 'マーケティング部',
        description: '役割：イベントやコンテンツを通じてSansanを広め、興味を持ってもらうための最初の接点をつくる。',
        quote: '”まだ知らない誰かに届ける、Sansanの語り部”',
        tags: ['改善・洗練型', '伴走型', '前線系', '共感系'],
        schedule: getSchedule('Marketing'),
    },
    K: {
        id: 'K',
        title: 'データ化オペレーションマネージャー',
        description: '役割：名刺などの情報を正確にデータ化するプロセスを管理する仕事。AIと人をどう組み合わせるかを設計する。',
        quote: '“AIと人を最適配置する、データ化の設計者”',
        tags: ['改善・洗練型', '伴走型', 'バックで支える系', 'ロジック系'],
        schedule: getSchedule('DataOps'),
    },
    L: {
        id: 'L',
        title: '法務部',
        description: '役割：契約やリスク管理などを通じて、Sansanのビジネスを裏から支える。ルールとビジネスを両立させる仕事。',
        quote: '”攻めも守りもこなす、会社の番人”',
        tags: ['改善・洗練型', '伴走型', 'バックで支える系', '共感系'],
        schedule: getSchedule('Legal'),
    },
    M: {
        id: 'M',
        title: '営業部',
        description: '役割：企業にSansanを導入してもらうために提案・交渉を行う。顧客の課題を理解し、導入のきっかけをつくる。',
        quote: '”一番最初の出会いをつくる”',
        tags: ['創造型', 'リード型', 'バックで支える系', 'ロジック系'],
        schedule: getSchedule('Sales'),
    },
    N: {
        id: 'N',
        title: 'ブランドエクスペリエンス部（BX）',
        description: '役割：ノベルティやブランド表現など、Sansanを「見せる」部分を担当。対外的な印象や世界観をつくる。',
        quote: '”Sansanらしさをデザインで伝えるチーム”',
        tags: [],
        schedule: getSchedule('BX'),
    },
    O: {
        id: 'O',
        title: 'プロダクトデザイングループ',
        description: '役割：プロダクトのUIや画面を設計するチーム。使いやすさ・わかりやすさを追求する。',
        quote: '“ユーザー体験を設計する”',
        tags: [],
        schedule: getSchedule('Design'),
    },
    P: {
        id: 'P',
        title: 'カスタマーサクセス部（CS）',
        description: '役割：Sansanを導入した顧客に寄り添い、プロダクトの価値を最大化するための支援、伴走を行う',
        quote: '”顧客とゴールまで一緒に走るパートナー”',
        tags: [],
        schedule: getSchedule('CS'),
    },
};

// --- App Logic ---

let currentQuestionId = 'Q1';
let history = [];

// DOM Elements
const screens = {
    start: document.getElementById('start-screen'),
    question: document.getElementById('question-screen'),
    result: document.getElementById('result-screen'),
};

const buttons = {
    start: document.getElementById('start-btn'),
    restart: document.getElementById('restart-btn'),
    back: document.getElementById('back-btn'),
};

const questionElements = {
    text: document.getElementById('question-text'),
    options: document.getElementById('options-container'),
};

const resultElements = {
    title: document.getElementById('result-title'),
    quote: document.getElementById('result-quote'),
    description: document.getElementById('result-description'),
    tags: document.getElementById('tags-container'),
    schedule: document.getElementById('schedule-wrapper'),
};

// Utils
function switchScreen(screenName) {
    Object.values(screens).forEach(screen => {
        screen.classList.add('hidden');
        screen.classList.remove('active'); // For any future CSS animations
    });
    screens[screenName].classList.remove('hidden');

    // Simple fade in effect
    screens[screenName].style.opacity = 0;
    setTimeout(() => {
        screens[screenName].style.opacity = 1;
    }, 10);
}

function renderQuestion(questionId) {
    const question = questions.find(q => q.id === questionId);
    if (!question) return;

    questionElements.text.textContent = question.text;
    questionElements.options.innerHTML = '';

    question.options.forEach(option => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerHTML = `
            <span class="option-label">${option.id}</span>
            <span class="option-text">${option.text}</span>
        `;
        btn.onclick = () => handleOptionSelect(option);
        questionElements.options.appendChild(btn);
    });

    // Show/Hide back button
    if (history.length > 0) {
        buttons.back.style.display = 'inline-flex';
    } else {
        buttons.back.style.display = 'none';
    }
}

function renderResult(resultId) {
    const result = results[resultId];
    if (!result) return;

    resultElements.title.textContent = result.title;
    resultElements.quote.textContent = result.quote;
    resultElements.description.textContent = result.description;

    // Render tags
    resultElements.tags.innerHTML = '';
    if (result.tags) {
        result.tags.forEach(tag => {
            const span = document.createElement('span');
            span.className = 'tag';
            span.textContent = tag;
            resultElements.tags.appendChild(span);
        });
    }

    // Render schedule
    resultElements.schedule.innerHTML = '';
    if (result.schedule && result.schedule.length > 0) {
        const scheduleContainer = document.createElement('div');
        scheduleContainer.className = 'schedule-container';

        const scheduleTitle = document.createElement('h3');
        scheduleTitle.className = 'schedule-title';
        scheduleTitle.textContent = 'One Day Schedule';
        scheduleContainer.appendChild(scheduleTitle);

        const scheduleGrid = document.createElement('div');
        scheduleGrid.className = 'schedule-grid';

        result.schedule.forEach((item, index) => {
            const row = document.createElement('div');
            row.className = 'schedule-row';
            row.style.animationDelay = `${index * 0.1}s`; // Stagger animation

            row.innerHTML = `
                <div class="schedule-time">
                    <div class="time-sticky">
                        <span class="time-text">${item.time}</span>
                    </div>
                </div>
                <div class="schedule-content">
                    <p class="schedule-desc">${item.description}</p>
                </div>
            `;
            scheduleGrid.appendChild(row);
        });

        scheduleContainer.appendChild(scheduleGrid);
        resultElements.schedule.appendChild(scheduleContainer);
    }
}

// Event Handlers
function handleStart() {
    currentQuestionId = 'Q1';
    history = [];
    renderQuestion(currentQuestionId);
    switchScreen('question');
}

function handleOptionSelect(option) {
    history.push(currentQuestionId);

    if (option.resultId) {
        renderResult(option.resultId);
        switchScreen('result');
    } else if (option.nextQuestionId) {
        currentQuestionId = option.nextQuestionId;
        renderQuestion(currentQuestionId);
    }
}

function handleBack() {
    if (history.length === 0) {
        switchScreen('start');
        return;
    }
    const prevId = history.pop();
    currentQuestionId = prevId;
    renderQuestion(currentQuestionId);
}

// Initial Setup
buttons.start.addEventListener('click', handleStart);
buttons.restart.addEventListener('click', handleStart);
buttons.back.addEventListener('click', handleBack);

// Start at start screen
switchScreen('start');
