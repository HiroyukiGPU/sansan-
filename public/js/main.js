// --- Data Definitions ---

const getSchedule = (roleType) => {
    switch (roleType) {
        case 'PdM':
            return [
                { time: '09:30', description: 'Slackチェック' },
                { time: '10:00', description: '開発チーム定例' },
                { time: '11:00', description: '要件定義・企画作成' },
                { time: '13:00', description: 'エンジニア・デザイナーとのMTG' },
                { time: '15:00', description: 'ユーザーヒアリング' },
                { time: '17:00', description: 'プロジェクト論点整理' }
            ];
        case 'Sales':
            return [
                { time: '09:00', description: '朝会' },
                { time: '10:00', description: '顧客商談' },
                { time: '13:00', description: '顧客商談' },
                { time: '17:00', description: '顧客対応' },
                { time: '18:00', description: '提案書作成・資料作成' }
            ];
        case 'Legal':
            return [
                { time: '09:30', description: '朝会' },
                { time: '10:00', description: 'メール・Slack確認' },
                { time: '11:00', description: '契約レビュー・依頼対応' },
                { time: '13:00', description: '事業部MTG' },
                { time: '15:00', description: '契約書作成' },
                { time: '16:00', description: '法令調査・相談対応' }
            ];
        case 'CS':
            return [
                { time: '09:00', description: '朝会' },
                { time: '10:00', description: '顧客アポイント・資料作成' },
                { time: '13:00', description: '顧客アポイント' },
                { time: '15:00', description: '顧客アポイント' },
                { time: '17:00', description: '社内MTG・資料作成' }
            ];
        case 'Marketing':
            return [
                { time: '09:30', description: '朝会' },
                { time: '10:00', description: 'メール対応・タスク整理' },
                { time: '11:00', description: '企画検討・資料作成' },
                { time: '13:00', description: '資料作成・MTG準備' },
                { time: '14:00', description: '社内MTG' },
                { time: '16:00', description: '作業タスク' },
                { time: '17:00', description: '社内レビュー' }
            ];
        case 'BX':
            return [
                { time: '10:00', description: '朝会' },
                { time: '10:30', description: '制作物すり合わせMTG' },
                { time: '11:30', description: '制作要件整理・デザイン作業' },
                { time: '13:00', description: '制作作業' },
                { time: '14:30', description: '社内MTG' },
                { time: '16:00', description: 'デザイン作業' }
            ];
        case 'DataOps':
            return [
                { time: '09:30', description: '朝会・サービス状況確認' },
                { time: '10:00', description: 'オペレーション改善検討' },
                { time: '11:00', description: 'メンバー1on1' },
                { time: '14:00', description: 'サービス状況MTG' },
                { time: '16:00', description: '運用改善議論' },
                { time: '17:30', description: '事業部戦略MTG' }
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
        case 'HR':
            return [
                { time: '09:30', description: '朝会' },
                { time: '10:00', description: '社内MTG・学生への連絡返信' },
                { time: '11:00', description: '学生面談' },
                { time: '13:00', description: '学生面談' },
                { time: '17:00', description: '定例ミーティング' },
                { time: '18:00', description: '1on1・翌日の面接準備' }
            ];
    }
};

const questions = [
    {
        id: 'Q1',
        text: 'Q1 課題への向き合い方\n\nどちらの仕事に魅力を感じますか？',
        options: [
            { id: 'A', text: '新しい課題を見つけ、解決策を考える', points: { PdM: 2, Sales: 2, Legal: 2, Marketing: 2 }, nextQuestionId: 'Q2' },
            { id: 'B', text: 'すでにある仕組みやサービスをより良くする', points: { CS: 2, BX: 2, Design: 2, DataOps: 2 }, nextQuestionId: 'Q2' },
        ],
    },
    {
        id: 'Q2',
        text: 'Q2 チームでの役割\n\nチームで動くときの自分はどちらに近いですか？',
        options: [
            { id: 'A', text: '周りを巻き込みながら方向性を決めていく', points: { Sales: 2, PdM: 2, Marketing: 2 }, nextQuestionId: 'Q3' },
            { id: 'B', text: 'メンバーや相手を見ながら支え、チームを前に進める', points: { CS: 2, Legal: 2, BX: 2, Design: 2, DataOps: 2 }, nextQuestionId: 'Q3' },
        ],
    },
    {
        id: 'Q3',
        text: 'Q3 やりがいを感じる瞬間\n\nどちらの瞬間にやりがいを感じますか？',
        options: [
            { id: 'A', text: '成果や反応が目に見えて返ってくるとき', points: { Sales: 2, Marketing: 2, BX: 2 }, nextQuestionId: 'Q4' },
            { id: 'B', text: '目立たなくても仕組みがうまく機能しているとき', points: { CS: 2, Legal: 2, DataOps: 2, PdM: 2 }, nextQuestionId: 'Q4' },
        ],
    },
    {
        id: 'Q4',
        text: 'Q4 「なんで？」と聞かれたときの反応\n\n誰かに理由を聞かれたとき、自分はどちらのタイプですか？',
        options: [
            { id: 'A', text: '理由やロジックを整理して説明する', points: { PdM: 2, Legal: 2, DataOps: 2 }, isLast: true },
            { id: 'B', text: '相手と一緒に考えながら納得できる答えを探す', points: { CS: 2, Marketing: 2, BX: 2, Design: 2, Sales: 2 }, isLast: true },
        ],
    },
];

const results = {
    Sales: {
        id: 'Sales',
        title: '営業部',
        description: '役割：顧客との対話を通じて顕在・潜在の課題を引き出し、事業成長につながる価値や解決策を提案する役割。',
        quote: '“顧客のまだ見えていない課題を見つけ、成長への道筋を提案する人”',
        tags: [],
        schedule: getSchedule('Sales'),
        sansanRashisa: '成果をSlackや社内の場で称え合う文化があり、自分が得た知識や成功事例をオープンにシェアする雰囲気が強い。',
        jobInterest: '顧客の課題を引き出して最適な提案につなげられること、数字や成果が見えやすいこと、0から価値を生み出す実感を得られることが魅力として挙げられていた。',
        sansanGrowth: '年齢に関係なく周囲を巻き込みながら動く力が身についたこと、知識共有や相互称賛の文化の中で主体的に動けるようになったことが特徴として語られていた。'
    },
    HR: {
        id: 'HR',
        title: '人事部',
        description: '役割：採用・育成・評価・制度設計など、「人」に関するすべてを担当。社員がいきいきと働ける環境をつくり、会社の成長を人の力で押し上げる。',
        quote: '“人と組織の可能性を切り開き、世界を変える人”',
        tags: [],
        schedule: getSchedule('HR'),
        sansanRashisa: '会議や定例の中で「その施策の意思意図は何か」「相手の体験を想像しているか」といった問いが自然に飛び交う。ミスが起きても感情的に責めるのではなく、「なぜそうなったのか」を深く考える文化がある。また、Valuesが社内の共通言語となっており、全員が同じ方向性を見て働いている。',
        jobInterest: '相手の課題を探りながら最適な提案につなげられること、リアルな声を改善に生かせられること、共感する仲間を増やすことで組織成長に直接貢献できることに面白さがある。',
        sansanGrowth: 'ロジカルさと熱量の両方を鍛えられる環境であり、変化への耐性がついた、日常的に「なぜ？」を考えるようになった、自分の意思を相手に伝えられるようになったという変化が挙げられていた。'
    },
    Marketing: {
        id: 'Marketing',
        title: 'マーケティング部',
        description: '役割：イベントやコンテンツを通じて、まだSansanを知らない企業との最初の接点をつくる仕事。',
        quote: '“まだ未開拓な領域に、新しい当たり前を届け世界を変える人”',
        tags: [],
        schedule: getSchedule('Marketing'),
        sansanRashisa: '全社会議で会社全体の方針を揃える機会があること、マーケだけでなくインサイドセールスや営業とも頻繁に連携すること、「意思意図」「体験を想像する」といった言葉が日常的に使われることが特徴。さらに、意思決定のスピードが速く、部長レビューの場で方針転換が起きることもある。',
        jobInterest: '多様なメンバーを巻き込みながらプロジェクトを進められること、ブランドやサービスの体験設計に深く関われること、0から価値をつくること、出会いの価値を広げる仕掛けを考えられることが魅力として挙がっていた。',
        sansanGrowth: '経験豊富な中途メンバーの知見を借りながら、大きなイベントのオーナーを任されるなど、挑戦しながら育つ環境がある。物事を多角的に捉える力や、チーム外も巻き込みながら複雑な仕事を進める力、変化に柔軟に対応する力が身についたという声が多かった。'
    },
    CS: {
        id: 'CS',
        title: 'カスタマーサクセス部（CS）',
        description: '役割：サービス導入後の顧客に伴走しながら変化する課題やニーズを捉え、プロダクトの価値を最大化できるよう活用支援や改善提案を行う役割。',
        quote: '“顧客の挑戦に伴走し、価値を最大化する人”',
        tags: [],
        schedule: getSchedule('CS'),
        sansanRashisa: '顧客ヒアリングを非常に多く行っており、その場にエンジニアやデザイナーが関心を持って参加することもある。営業やCSが協力してヒアリング機会をつくりやすい点も特徴。また、1つのアポイントで伝えられる価値を最大化するために事前準備や内容の密度が高い。',
        jobInterest: '顧客の課題を探り、改善に生かし、顧客の声と開発をつなぐ橋渡し役になれることが面白さとして挙げられていた。既存価値を1から10へ育てていく役割にも近い。',
        sansanGrowth: '高い基準とノウハウが共有されており、細かな研修資料や実践を通じて質の高い顧客対応を体得できる。また、UXリサーチやマーケティングリサーチを経てPdMへのキャリアチェンジにつながった例もあり、役割を広げやすい環境がある。'
    },
    PdM: {
        id: 'PdM',
        title: 'プロダクトマネージャー',
        description: '役割：顧客や社会の課題を踏まえ、本当に価値のある解決策かを考え抜き、エンジニア・デザイナー・営業など多くの関係者と協力しながらプロダクトとして実現し、その価値が顧客に届くまで牽引する役割。',
        quote: '“価値ある解決策を見極め、プロダクトの進化を牽引する人”',
        tags: [],
        schedule: getSchedule('PdM'),
        sansanRashisa: '徹底してユーザー体験を想像する文化があり、ユーザーの言葉だけでなく行動や状況まで深掘りして課題を言語化する。意思決定や変化のスピードも非常に速く、グローバルなチームとの連携も発生する。ユーザーの本質的課題を突き詰める姿勢が強い。',
        jobInterest: '顧客課題の発見、ユーザーの声の活用、開発との橋渡し、プロダクトの中心での意思決定、0から1、1から10の価値創出など、非常に広い面白さがあると語られていた。',
        sansanGrowth: '大規模プロダクトにおける「作る責任」と同時に「作らない責任」も学べること、変化の速い環境で意思決定力が磨かれること、複数事業や複数業界の課題に向き合えることが特徴。未来を信じて前進し続ける姿勢も大きな学びとして挙げられていた。'
    },
    BX: {
        id: 'BX',
        title: 'ブランドエクスペリエンス部（BX）',
        description: '役割：SansanやBill One、Contract Oneといったプロダクトを介した体験を作るクリエイターとして、クリエイティブを通してブランド体験からSansanの印象を作りあげること。あらゆる企業活動とその対象との間に生まれる体験から印象を作り上げ、事業活動を推し進める。',
        quote: '“プロダクトを通したブランド体験で、世界を変える人”',
        tags: [],
        schedule: getSchedule('BX'),
        sansanRashisa: 'どの部署の人も「いいものを作ろう」という姿勢を持っていて、言葉もデザインも含めて体験をよりよくしようとする文化がある。営業資料をつくる場合でも営業、マーケ、BXなど複数部署が最初から一緒に入りながら、意思決定は速く進む。',
        jobInterest: 'ブランドやサービスの体験設計に深く関われること、多様なメンバーと協働できること、アイデアや表現で出会いの価値を増幅できること、既存価値をさらに強くしていけることが魅力として挙げられていた。',
        sansanGrowth: '「Sansanのクリエイターはビジネスに強いクリエイター」という感覚があり、ビジネス視点の解像度が高まったという声があった。また、ブランディングを一度の施策ではなく、あらゆる接点で少しずつ積み重ねていくものとして捉えるようになったという変化も挙げられていた。'
    },
    Legal: {
        id: 'Legal',
        title: '法務部',
        description: '役割：契約やリスク管理だけでなく、事業部と早い段階から連携し、法律だけでなく会社の信頼や評判への影響も考えながら、ビジネスを前に進める仕組みや新たな価値を設計・提案する役割。',
        quote: '“事業を前に進めるルールと価値を設計する人”',
        tags: [],
        schedule: getSchedule('Legal'),
        sansanRashisa: '「明日やるか」ではなく「今日やれるか」を考えるスピード感があり、現場から直接相談が来てその場で解決し、受注につながることもある。法務でありながら、セミナー登壇、PoC提案、営業、新機能モック制作まで関わるケースもあり、職域が広い。また、個人情報保護士資格の取得が必須であることも特徴として挙げられていた。',
        jobInterest: '法的な視点から事業やプロジェクトを支援できるだけでなく、仕組みづくりや価値創出、プロダクトや企画の意思決定にも関われる点が面白さとして語られていた。法務でありながら事業を直接前に進めている実感が大きい。',
        sansanGrowth: '「NOと言わず、どうすれば合法的に実現できるかを考える」バランス感覚が養われたという声があった。また、会社の成長と自分の成長が同期しており、新規事業、海外子会社対応、インシデント対応など、想像以上に幅広い経験を積める環境であることが特徴として挙げられていた。'
    },
    DataOps: {
        id: 'DataOps',
        title: 'データ化オペレーションマネージャー',
        description: '役割：名刺などのアナログデータを、AIと人の力で正確なデータに変える仕組みを設計・管理する仕事。',
        quote: '“技術と人と仕組みで、価値の高いデータを安定して届け、世界を変える人”',
        tags: [],
        schedule: getSchedule('DataOps'),
        sansanRashisa: 'ノンエンジニアでもAIを活用しながら業務効率化や改善を推進できること、固定化されたオペレーション方針を短期間で大胆に見直すスピード感があることが特徴。不確実性が高い領域でも、見える範囲を整理した上で素早く意思決定していく文化がある。',
        jobInterest: '数値やデータを通じて成果を実感しやすく、運用改善が組織全体にインパクトを与えること、現場からプロダクトまで広く関われること、事業基盤を支えている実感が得られることが魅力として挙げられていた。',
        sansanGrowth: 'AIなど最新技術に触れながら仕事を進める力得られること、不確実性の中でリスクを洗い出し、ヘッジしながら推進する力が身につくこと、若いうちからスピード感ある意思決定を経験できることが大きな成長として挙げられていた。'
    },
    Design: {
        id: 'Design',
        title: 'プロダクトデザイングループ',
        description: '役割：プロダクトのUIや画面を設計するチーム。使いやすさ・わかりやすさを追求する。',
        quote: '“ユーザー体験を設計する”',
        tags: [],
        schedule: getSchedule('Design'),
        sansanRashisa: '徹底してユーザー体験を想像する文化があり、デザインだけでなく体験の質を追求する姿勢がある。',
        jobInterest: 'ユーザーの行動を観察し、本質的な課題を解決するプロダクトを設計することに面白さがある。',
        sansanGrowth: 'ビジネス視座を持ったデザイナーとして、プロダクトの成長を牽引する力が養われる。'
    }
};

// --- App Logic ---

let currentQuestionId = 'Q1';
let history = [];
let currentScores = {};

function initScores() {
    return {
        PdM: 0, Sales: 0, Legal: 0, Marketing: 0, CS: 0, BX: 0, DataOps: 0, Design: 0, HR: 0
    };
}

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
    details: document.getElementById('result-details'),
};

// Utils
function switchScreen(screenName) {
    Object.values(screens).forEach(screen => {
        screen.classList.add('hidden');
        screen.classList.remove('active');
    });
    screens[screenName].classList.remove('hidden');

    screens[screenName].style.opacity = 0;
    setTimeout(() => {
        screens[screenName].style.opacity = 1;
    }, 10);
}

function renderQuestion(questionId) {
    const question = questions.find(q => q.id === questionId);
    if (!question) return;

    questionElements.text.innerHTML = question.text.replace(/\n/g, '<br>');
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

    // Render detailed info
    if (resultElements.details) {
        resultElements.details.innerHTML = `
            <div class="detail-section">
                <h3 class="detail-title">Sansanらしさ</h3>
                <p class="detail-text">${result.sansanRashisa || ''}</p>
            </div>
            <div class="detail-section">
                <h3 class="detail-title">仕事の面白さ</h3>
                <p class="detail-text">${result.jobInterest || ''}</p>
            </div>
            <div class="detail-section">
                <h3 class="detail-title">Sansanだからこその成長</h3>
                <p class="detail-text">${result.sansanGrowth || ''}</p>
            </div>
        `;
    }

    resultElements.tags.innerHTML = '';
    if (result.tags && result.tags.length > 0) {
        result.tags.forEach(tag => {
            const span = document.createElement('span');
            span.className = 'tag';
            span.textContent = tag;
            resultElements.tags.appendChild(span);
        });
    }

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
            row.style.animationDelay = `${index * 0.1}s`;

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
    currentScores = initScores();
    renderQuestion(currentQuestionId);
    switchScreen('question');
}

function handleOptionSelect(option) {
    history.push({
        questionId: currentQuestionId,
        scores: { ...currentScores }
    });

    if (option.points) {
        for (const [role, points] of Object.entries(option.points)) {
            currentScores[role] = (currentScores[role] || 0) + points;
        }
    }

    if (option.isLast) {
        let maxScore = -1;
        let bestRole = 'Sales';
        for (const [role, score] of Object.entries(currentScores)) {
            if (score > maxScore) {
                maxScore = score;
                bestRole = role;
            }
        }
        renderResult(bestRole);
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
    const prevState = history.pop();
    currentQuestionId = prevState.questionId;
    currentScores = { ...prevState.scores };
    renderQuestion(currentQuestionId);
}

// Initial Setup
buttons.start.addEventListener('click', handleStart);
buttons.restart.addEventListener('click', handleStart);
buttons.back.addEventListener('click', handleBack);

// Start at start screen
switchScreen('start');
