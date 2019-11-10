//受講結果確認画面
const answerSample1 = {
    template: (function() {/*
        <main>
            <div id = "inContent">
            <div v-if="questionObjects">
                <section class="answer-head">
                    <h3>テストお疲れ様でした！結果確認！！</h3>
                    <div class="result-message">
                        <p class="large">xxxxxxxxさん、{{questionCnt}}問中{{okCnt}}問正解です。</p>
                        <div v-if="questionCnt===okCnt"> 
                            <p class="small">おめでとうございます。資格を取得することができました。</p>
                            <p class="small">この資格は2xxx年xx月xx日まで有効です</p>
                        </div>
                        <div v-else>
                            <p class="small">全問正解すれば、資格を取得できます。</p>
                        </div>
                    </div>
                </section>
                <ul class="box">
                    <li class="answer-item" v-for="(questionObject,index) in questionObjects" :key="questionObject.questionId">
                        <div class="question-title">
                            <h2 class="question">Q{{index + 1}}.{{questionObject.question}}</h2>
                        </div>
                        <ul class="choises clear-fix">
                            <li v-for="(choise,index) in questionObject.choises" :key="index">
                                <label>{{choise}}</label>
                            </li>
                        </ul>
                        <p class="answer-main">解答・解説</p>
                        <p v-if="questionObject.usersAnswer.length !== 0"  class="answer-sentence">あなたの解答は
                            <span v-for="usersAnswer in questionObject.usersAnswer" :key="usersAnswer">
                                {{questionObject.choises[usersAnswer]}}
                            </span>
                        </p>
                        <p v-else class="answer-sentence">
                            制限時間オーバーで入力がありませんでした。
                        </p>
                        <p class="answer-sentence">正解は
                            <span v-for="answer in questionObject.answer" :key="answer">
                                {{questionObject.choises[answer]}}
                            </span>
                        </p>
                        <p class="answer-sentence">{{questionObject.answerSentence}}</p>
                    </li>
                </ul>
                <button id="send-answer" @click="restartClick">もう一度チャレンジ！！</button>
            </div>
            <div v-else>
                <section class="answer-head">
                    <h3>ErrorPage</h3>
                    <p>直接受講結果確認画面に遷移できません。必ず受講をしてください</p>
                </section>
                <button id="send-answer" @click="restartClick" style="margin-top:30px;">受講開始</button>
            </div>
            </div>
        </main>
    */}).toString().match(/(?:\/\*(?:[\s\S]*?)\*\/)/).pop().replace(/^\/\*/, "").replace(/\*\/$/, ""),
    data: function () {
        return {
            questionObjects: this.$route.params.questionObjects,//受講画面から受け取った問題オブジェクト
            questionCnt: questionObjects.length,//問題数
            okCnt: this.$route.params.okCnt,　//受講画面から受け取った正解数
        }
    },
    methods: {
        //受講画面に遷移する
        restartClick : function () {
            window.scrollTo(0,0)
            this.$router.push({name: 'questionSample1'})
        }
    }
}