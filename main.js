document.addEventListener("DOMContentLoaded", () => {
  // すべてのリストアイテム（li）を取得
  const listItems = document.querySelectorAll(".neko li");

  // 各リストアイテムに対してイベントリスナーを設定
  listItems.forEach((item) => {
    // マウスがアイテムに乗ったときの処理
    item.addEventListener("mouseenter", () => {
      // そのアイテム内の.cat-info要素を取得
      const catInfo = item.querySelector(".cat-info");
      if (catInfo) {
        // 'show-info' クラスを追加して表示
        catInfo.classList.add("show-info");
      }
    });

    // マウスがアイテムから離れたときの処理
    item.addEventListener("mouseleave", () => {
      // そのアイテム内の.cat-info要素を取得
      const catInfo = item.querySelector(".cat-info");
      if (catInfo) {
        // 'show-info' クラスを削除して非表示
        catInfo.classList.remove("show-info");
      }
    });
  });
});
