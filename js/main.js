const bad=['ÃƒÂ¤Ã‚Â¸ÃƒÂ§Ã‚Â½ÃƒÂ‘','ÃƒÂ¥Ã‚Â¤ÃƒÂœÃƒÂ¦Ã‚Â˜ÃƒÂŸ','縺薙ｓ縺ｫ縺｡縺ｯ','â€žâ˜†Ã‚Â¤'];
const game={id:Number(localStorage.getItem('visitor_id')||2407),progress:Number(localStorage.getItem('progress')||0),clues:JSON.parse(localStorage.getItem('discovered_clues')||'[]')};
if(game.id<2407){game.id=2407;localStorage.setItem('visitor_id',game.id)}
function saveGame(){localStorage.setItem('visitor_id',game.id);localStorage.setItem('progress',game.progress);localStorage.setItem('discovered_clues',JSON.stringify(game.clues))}
function solve(chapter,clue){game.progress=Math.max(game.progress,chapter);if(!game.clues.includes(clue))game.clues.push(clue);saveGame()}
function padded(n){return String(n).padStart(7,'0')}
function toggleMidi(){const s=document.getElementById('midi-status');if(s)s.textContent=s.textContent.includes('stopped')?'[ playing... ] untitled.mid':'[ stopped ] untitled.mid'}
function signGuestbook(){const n=(document.getElementById('guest-name').value||'anonymous').replace(/[<>]/g,'');const m=(document.getElementById('guest-msg').value||bad[Math.floor(Math.random()*bad.length)]).replace(/[<>]/g,'');document.getElementById('guest-log').innerHTML+='<br>'+n+': '+m;solve(1,'guestbook')}
function hasCookie(name){return document.cookie.split(';').some(part=>part.trim().startsWith(name+'='))}
function corruptHomepage(){
  document.documentElement.classList.add('afterlight-home');
  document.body.classList.add('afterlight-home');
  document.title='Triaï¿½s Sp_ce - RECOVERED';
  document.querySelector('.topline').innerHTML='My Sp_ce &nbsp; | &nbsp; Settï¿½ngs &nbsp; | &nbsp; H_lp &nbsp; | &nbsp; <span class="afterlight-red">STILL ACTIVE</span>';
  document.querySelector('.masthead h1').textContent='Triaï¿½s Sp_ce';
  document.querySelector('.masthead p').innerHTML='somewhere to dr<span class="afterlight-missing">aw</span>, li_ten, and br athe';
  document.querySelector('.profile-avatar').textContent='?';
  document.querySelector('.profile-name').innerHTML='Tr<span class="afterlight-red">ï¿½</span>a';
  document.querySelector('.profile-mood').innerHTML='Mood: <span class="afterlight-red">[not returned]</span><br>"Some places are only for <span class="afterlight-missing">breathing</span>."';
  document.querySelector('.welcome').innerHTML='<b class="afterlight-red">This space was recovered after power loss.</b><br>Some profile data is missing. The last writer had no author field.';
  document.querySelector('.status-strip').innerHTML='Status: <span class="afterlight-red">ACTIVE</span> &nbsp; | &nbsp; Weather: [NULL] &nbsp; | &nbsp; Last active: TODAY 00:18:54';
  document.querySelector('#album h2').innerHTML='My R<span class="afterlight-missing">oo</span>m Introduction';
  document.querySelector('#computer .log').textContent='encoding: UTF-8 / ANSI / [UNKNOWN]\nupload: incomplete\nfiles written: 1001\nfiles listed: 17\nauthor: [NULL]';
  document.querySelector('#computer .warning-record').innerHTML='<b>ERROR 00:18:54</b> reader returned before redirect<br><b>ERROR TODAY</b> afterlight cookie accepted<br><span class="afterlight-red">this homepage is not the cached copy</span>';
  const feed=document.createElement('div');
  feed.className='feed-item afterlight-feed';
  feed.innerHTML='<span class="feed-icon">?</span><b>[afterlight] is posting now</b><br><span class="afterlight-live-code">ÃƒÂ¤Ã‚Â¸ÃƒÂ§Ã‚Â½ÃƒÂ‘</span><div class="feed-time">TODAY &nbsp; source: cookie /afterlight_seen</div>';
  document.querySelector('#updates .inside').prepend(feed);
  document.getElementById('guest-log').insertAdjacentHTML('afterbegin','<span class="afterlight-red">[NULL]: you brought it back</span><br>');
  document.getElementById('counter-note').textContent='the reader returned';
  const live=feed.querySelector('.afterlight-live-code');
  const fragments=[
    'ÃƒÂ¤Ã‚Â¸ÃƒÂ§Ã‚Â½ÃƒÂ‘','縺薙ｓ縺ｫ縺｡縺ｯ','譁�蟄励′隕九▽縺九ｉ縺ｪ縺�',
    '0017 > 2407 > 0017','BEHIND_THE_WINDï¿½W','WHY_IS_HE_STILL_HERE',
    'TRIA\u0000[NULL]\u0000READER','00:18:54 / TODAY / --','your shoelace is untied'
  ];
  let fragment=0;
  setInterval(()=>{live.textContent=fragments[fragment++%fragments.length]},420);
}
function initHomepage(){
  const counter=document.getElementById('counter');if(!counter)return;
  counter.textContent=padded(game.id);
  const note=document.getElementById('counter-note');
  if(game.progress>=7)document.getElementById('guest-log').innerHTML+='<br><i>Tria: I did not write this.</i>';
  if(game.progress>=10)note.textContent='the window is still open';
  if(new URLSearchParams(location.search).get('debug')==='1'){const d=document.createElement('pre');d.className='tiny';d.textContent='ARG_INTERNAL\nchapter='+game.progress+'\nvisitor='+game.id+'\nclues='+game.clues.join(',');document.querySelector('.footer').appendChild(d)}
  const flicker=document.getElementById('flicker-clue');
  if(flicker){const show=()=>{flicker.hidden=false;setTimeout(()=>flicker.hidden=true,680)};setTimeout(show,4200);setInterval(()=>{if(Math.random()>.62)show()},17000)}
  if(hasCookie('afterlight_seen'))corruptHomepage();
}
document.addEventListener('mousemove',e=>{if(Math.random()>.96){const p=document.createElement('span');p.className='particle';p.textContent=bad[Math.floor(Math.random()*bad.length)];p.style.left=e.clientX+'px';p.style.top=e.clientY+'px';document.getElementById('glitches')?.appendChild(p);setTimeout(()=>p.remove(),900)}});
