const stages=[
['REACH & FREQUENCY','누구에게, 얼마나 노출됐는가?','노출 수는 도달한 사람 수와 다릅니다. 타깃과 반복 노출을 함께 확인합니다.'],
['CTR / CPC','노출이 관심으로 이어졌는가?','CTR = 클릭 ÷ 노출 × 100, CPC = 광고비 ÷ 클릭. 클릭 효율과 이후 행동을 함께 봅니다.'],
['ACQUISITION / ENGAGEMENT','유입 이후 어떤 행동을 했는가?','광고 클릭과 GA4 세션은 일치하지 않을 수 있습니다. 태깅, 동의 상태, 랜딩 경험을 함께 점검합니다.'],
['CVR / COST PER LEAD','실제 문의가 성공적으로 접수됐는가?','세션 기준 CVR = 문의가 발생한 세션 ÷ 전체 세션 × 100. 리드당 비용은 광고비 ÷ 유효 리드이며, 중복과 실제 접수 여부를 확인합니다.']
];
document.querySelectorAll('[data-stage]').forEach(button=>button.addEventListener('click',()=>{
 document.querySelectorAll('[data-stage]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
 const [metric,title,copy]=stages[Number(button.dataset.stage)];
 document.getElementById('funnel-metric').textContent=metric;document.getElementById('funnel-title').textContent=title;document.getElementById('funnel-copy').textContent=copy;
}));
document.getElementById('print-resume')?.addEventListener('click',()=>window.print());
