import { useState } from 'react';
// コメント欄用の初期データ
const initialComments = [];
function CommentSection() {
  const [comments, setComments] = useState(initialComments);
  const [form, setForm] = useState({ name: '', body: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.body) return;
    setComments([
      { id: Date.now(), ...form },
      ...comments,
    ]);
    setForm({ name: '', body: '' });
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6 mt-16 mb-8">
      <h2 className="text-xl font-bold mb-4 text-purple-700 text-center drop-shadow">コメント欄</h2>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 mb-6">
        <input
          className="border rounded px-3 py-2 flex-1"
          name="name"
          placeholder="名前"
          value={form.name}
          onChange={handleChange}
          maxLength={20}
          required
        />
        <input
          className="border rounded px-3 py-2 flex-1"
          name="body"
          placeholder="コメント"
          value={form.body}
          onChange={handleChange}
          maxLength={200}
          required
        />
        <button type="submit" className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition">投稿</button>
      </form>
      <div className="space-y-4">
        {comments.length === 0 && <div className="text-gray-400 text-center">コメントはまだありません</div>}
        {comments.map((c) => (
          <div key={c.id} className="bg-purple-50 rounded p-3 shadow flex flex-col sm:flex-row gap-2 items-start">
            <span className="font-semibold text-purple-700 mr-2">{c.name}</span>
            <span className="text-gray-700 break-words">{c.body}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-50 py-8 px-2">
      {/* アドオン紹介セクション */}
      <div className="max-w-3xl mx-auto mb-10">
        <h2 className="text-3xl font-bold text-center text-purple-800 mb-6 drop-shadow">アドオン紹介</h2>
        <div className="min-w-0">
          {addons.map((addon, idx) => (
            <div key={idx} className={`bg-white rounded-xl shadow-md p-2 w-full hover:scale-[1.01] transition min-w-0 flex flex-row items-center${idx !== 0 ? ' mt-24' : ''}`} style={{marginTop: idx !== 0 ? '6rem' : undefined}}>
              <div className="relative mr-8 min-w-[120px] min-h-[120px] flex items-start">
                <img src={addon.icon} alt={addon.name} className="w-[120px] h-[120px] border border-purple-200 shadow block" />
                <span className="absolute top-0 left-[130px] font-bold text-lg text-purple-800 whitespace-nowrap">{addon.name}</span>
              </div>
              <div className="flex flex-col flex-1 min-w-0 items-center justify-center text-center">
                <div className="text-gray-700 text-base font-medium leading-relaxed">{addon.desc_ja || addon.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* コメント欄 */}
      <CommentSection />
    </div>
  );
}


import './App.css';

const addons = [
  {
    name: '[NEW] Enderite BP v1.0.2 FINAL',
    desc: 'normal mining speed + enderite ore fix | Realm reset deployment build.',
    desc_ja: 'エンドにエンデライト鉱石を追加。採掘前にTNTでひびを入れる必要がある。関連の道具・装備はマグマで燃えず、奈落で浮くのでロストする確率がすごく下がる！',
    icon: 'https://cdn-icons-png.flaticon.com/512/616/616408.png',
  },
  {
    name: '[NEW] Experience Storage B V1.0.1',
    desc: 'By Effect99 | Realm reset deployment build.',
    desc_ja: '経験値を貯められるタンク。経験値トラップなどで得た莫大な経験値を貯めてきれいなExpグリーンを鑑賞できる！レッドストーン回路とも接続できる。',
    icon: 'https://cdn-icons-png.flaticon.com/512/616/616408.png',
  },
  {
    name: 'GappleCows BP Complete v105',
    desc: 'Final behavior pack build',
    desc_ja: '金の牛が出る。更にエンチャントされた金の牛も出る。史上最高のアドオン。',
    icon: 'https://cdn-icons-png.flaticon.com/512/616/616408.png',
  },
  {
    name: '[NEW] More Geodes',
    desc: 'More Geodes add-on, by Marcos. | Realm reset deployment build.',
    desc_ja: 'アメジストジオードのようなきれいな結晶を他の鉱石でも育てられる！建材(シャンデリアなど)につかえるよ。一部鉱石はゲームバランスを保つために幸運のピッケルで破壊しても原石やクリスタルにならないように制限してます。',
    icon: 'https://cdn-icons-png.flaticon.com/512/616/616408.png',
  },
  {
    name: 'Pinenite Addon BP',
    desc: 'ピネナイトを追加するアドオン (BP)',
    desc_ja: '現状最強装備。苦労して手に入る。エンドコンテンツ。',
    icon: 'https://cdn-icons-png.flaticon.com/512/616/616408.png',
  },
  {
    name: '[NEW] System Crossbow Addon BP V1.1',
    desc: 'Made by SystemTv Twitter@SystemTv_ | Realm reset deployment build.',
    desc_ja: 'いろんな効果を持つクロスボウを追加！バニラのクロスボウに存在意義を持たせるために追加！爆弾クロスボウやテレポートクロスボウは使ってて楽しいしPvPで使えるね(^▽^)/',
    icon: 'https://cdn-icons-png.flaticon.com/512/616/616408.png',
  },
  {
    name: '村人エンチャント金牛懐妊システム 新版',
    desc: '村人交配時にGappleCowsのエンチャント金牛を発生させるスクリプト専用BP。',
    desc_ja: '村人が交配したとき、10％の確率でエンチャントされた金の牛を出生する。生まれた牛は、牛の意識ではなく人間の意識を持ってる。',
    icon: 'https://cdn-icons-png.flaticon.com/512/616/616408.png',
  },
  {
    name: '[NEW] Warden Netherite Drop BP',
    desc: 'Makes the Warden drop a Netherite Block. | Realm reset deployment build.',
    desc_ja: 'ウォーデンからネザライトをブロックするようにしました。',
    icon: 'https://cdn-icons-png.flaticon.com/512/616/616408.png',
  }
];

export default App;
