<template>
  <div class="bg-teal-50 backdrop-blur-xl pt-12 pb-10">
    <form action=""
      method="POST" target="transFrame"  v-on:submit="vOnSubmit">

      <div class="mx-auto pb-10 w-11/12 rounded-md bg-opacity-90
        bg-white flex flex-col items-center" stylr="min-width:264px;">
        <h1 class="mt-10 text-center text-4xl text-gray-500">お問合せ</h1>
        <div class="flex flex-col mt-10 max-w-xs text-xl" style="width:30vw; min-width:220px;">
          <label for="name">お名前
            <input id="name" type="text" name="entry.36152970" maxlength="30"
              class="h-10 mt-1 border border-solid rounded bg-gray-50 pl-3 text-xl text-gray-700">
        </label>
        </div>
        <div class="flex flex-col mt-4 max-w-xs text-xl" style="width:30vw; min-width:220px;">
          <label for="name">ふりがな
          <input id="name" type="text" name="entry.696094121" maxlength="30"
            class="h-10 mt-1 border border-solid rounded bg-gray-50 pl-3 text-xl text-gray-700">
          </label>
        </div>
        <div class="flex flex-col mt-4 max-w-xs text-xl" style="width:30vw; min-width:220px;">
          <label for="name">メールアドレス
          <input id="name" type="email" name="entry.1903078825" maxlength="30"
            class="h-10 mt-1 border border-solid rounded bg-gray-50 pl-3 text-xl text-gray-700">
          </label>
        </div>
        <div class="flex flex-col mt-4 max-w-xs text-xl" style="width:30vw; min-width:220px;">
          <label for="name">御社名
          <input id="name" type="text" name="entry.35718914" maxlength="30"
            class="h-10 mt-1 border border-solid rounded bg-gray-50 pl-3 text-xl text-gray-700">
          </label>
        </div>
        <div class="flex flex-col mt-4 max-w-xs text-xl" style="width:30vw; min-width:220px;">
          <label for="name">電話番号
          <input id="name" type="tel" name="entry.1898163739" maxlength="30"
            class="h-10 mt-1 border border-solid rounded bg-gray-50 pl-3 text-xl text-gray-700">
          </label>
        </div>
        <div class="flex flex-col mt-4 text-xl">
          <label for="name">お問い合わせ内容
          <textarea id="name" name="entry.273567010" maxlength="4000"
            style="width:58vw; min-height:136px;"
            class=" mt-1 max-w-lg border border-solid rounded bg-gray-50 pl-3
              text-xl text-gray-700">
          </textarea>
          </label>
        </div>
        <div class="my-4 mx-6 max-w-lg">
          <p>
            <a href="/contact-privacy" target="_blank" rel="noopener">
              <span class="text-teal-600">お問い合わせにおける個人情報の取り扱いについて</span>
            </a>
            をご確認の上、同意される場合は下記チェックをお願い致します。
          </p>
          <!-- <p class="mt-2 mx-3">※同意された場合のみ、送信可能です。</p> -->

          <div class="mt-3 mx-3">
            <label for="agree">個人情報の規約に同意する
              <input type="checkbox"  id="agree" v-model="agree"/>
            </label>
          </div>
        </div>
        <div class="mt-3">
          <input type="submit" name="btnRegister" value="送信する" v-bind:disabled="!agree"
            class="w-28 bg-teal-500 hover:enabled:bg-teal-400 text-white rounded
              px-4 py-2 rounded-md
              cursor-pointer disabled:opacity-30 disabled:cursor-default">
        </div>
      </div>
    </form>

    <div class="mt-12 text-center">
      <a href="/">
        <button class="text-gray-500 py-1 px-4 rounded bg-white hover:opacity-70
          transition-opacity duration-200">
          Topへ戻る
        </button>
      </a>
    </div>

    <!-- ↓フォーム送信後 遷移用 iframe -->
    <!-- <iframe name="transFrame" style="display:none" v-on:load="onIframeLoad"></iframe> -->

  </div>
</template>

<script>

</script>

<style>
  @media screen and (max-width: 768px) {
    #contactform{
      width: 85vw;
      min-width: 320px;
    }
  }
</style>
