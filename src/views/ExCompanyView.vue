<template>
  <div class="modal bg-teal-50 backdrop-blur-xl">
    <div class="text-right">
      <router-link to="/">
        <span id="modalACloseMark"
          class="modalClose relative top-2 right-6 text-3xl">×</span>
      </router-link>
    </div>
    <div class="modal-inner flex justify-center items-center">
      <div class="mt-4 mb-12">
        <div class="mt-8">
          <section>
            <h1 class="mt-4 text-center text-4xl text-gray-500">企業概要</h1>
            <table class="companyInfo mx-auto mt-10">
              <tr class="">
                <th>会社名</th>
                <td>株式会社ASCOM</td>
              </tr>
              <tr>
                <th>英文社名</th>
                <td>Advanced system for communications Co., Ltd</td>
              </tr>
              <tr>
                <th>代表取締役</th>
                <td>Ben Mayo</td>
              </tr>
              <tr>
                <th>資本金</th>
                <td>1,000万円</td>
              </tr>
              <tr>
                <th>所在地</th>
                <td><span>〒</span>170-0013 東京都豊島区東池袋2-18-7 惠安ビル</td>
              </tr>
              <tr>
                <th>TEL</th>
                <td>03-5962-0807 / 03-5962-0808</td>
              </tr>
              <tr>
                <th>FAX</th>
                <td>03-6893-2541</td>
              </tr>
              <tr>
                <th>MAIL</th>
                <td>partner-it@a-s.com.co</td>
              </tr>
              <tr>
                <th>取引銀行</th>
                <td>みずほ銀行 / ゆうちょ銀行 / 巣鴨信用金庫</td>
              </tr>
              <tr>
                <th>事業内容</th>
                <td>IT人材アウトソーシング事業, 3DCGデザイン 他</td>
              </tr>
              <tr>
                <th>取引先</th>
                <td>
                  アイエックス・ナレッジ株式会社<br>
                  アイコムシステック株式会社<br>
                  アイソリューションズ株式会社<br>
                  アイブレインズ株式会社<br>
                  インターネットウェア株式会社（TCSホールディングスグループ）<br>
                  株式会社サンネット<br>
                  株式会社システナ（東京証券取引所市場第一部上場）<br>
                  株式会社JAC日本設計センター<br>
                  株式会社小学館ミュージック＆デジタル エンタテイメント<br>
                  情報技術開発株式会社<br>
                  Sky株式会社<br>
                  株式会社デジタル・メディア・ラボ（DML）<br>
                  日本ベストサポート株式会社<br>
                  パワープレイス株式会社（内田洋行グループ）<br>
                  富士ソフト株式会社（東証一部上場）<br>
                  ALH株式会社<br>
                  ハイテクシステム株式会社
                  <p>
                  その他 パートナー企業約700社
                  </p>
                </td>
              </tr>
              <tr>
                <th>所有資格</th>
                <td>有料職業紹介事業 許可番号：13－ユー312325
              </td>
              </tr>
                <tr>
                  <th>還元率</th>
                  <td>マージン率 → 32％（平均）</td>
                </tr>
            </table>
          </section>
          <section class="mt-12 mb-10">
            <h1 class="text-center text-4xl text-gray-500">アクセス</h1>
            <figure class="my-6 text-center">
              <div class="inline-block">
                <a target="_blank" rel="noopener"
                  class="hover:opacity-60 transition-opacity duration-300" href="">
                  <img class="mx-auto mb-4 max-w-xl w-11/12" src="" alt="map_image">
                </a>
              </div>
              <figcaption class="mx-auto max-w-lg text-left">
                <dl>
                  <div class="mb-2 px-3 pb-1" style="border-bottom: 2px solid azure;">
                    <dt></dt>
                    <dd>
                      山手線大塚駅南口 徒歩7分<br>
                      東京メトロ有楽町線東池袋駅6、7番出口 徒歩10分
                    </dd>
                  </div>
                  <div class="mb-2 px-3 pb-1" style="border-bottom: 2px solid azure;">
                    <dt></dt>
                    <dd>
                      〒170-0013 東京都豊島区東池袋2-18-7 恵安ビル5階
                    </dd>
                  </div>
                </dl>
              </figcaption>
            </figure>
          </section>
          <div class="mt-4 text-center">
            <router-link to="/">
              <button id="modalACloseBtn"
                class="text-gray-500 py-1 px-4 rounded bg-white
                  hover:opacity-70 transition-opacity duration-200">
                Close
              </button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>

</script>

<style>
  .companyInfo tr{
    height: 48px;
    border-bottom: 2px solid azure;
  }
  .companyInfo th{
    vertical-align: middle;
    padding: 8px 0 0;
  }
  .companyInfo td{
    vertical-align: middle;
    padding: 8px 0 4px 16px;
  }

</style>
