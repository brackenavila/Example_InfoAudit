$(function(){
 i=0, w=[10,6], r=[0,-31,1,36.5], h=['<','>']
 igs=' DATEV_SINFOPAC_Audit_v2.0 Open_Audit_v1.0.4 PXServer_v2.29 Spiceworks_v1.0'.split(' ')
 hs=[,['datevsinfopac.com/category.php?id_category=31#label6','datevsinfopac.com/category.php?id_category=31'],
    ['community.opmantek.com/display/OA/Home#Home-HowTo','open-audit.org/downloads.php'],
    ['pxserver.com/WinAudit/contents.html','pxserver.com/WinAudit.htm'],
    ['youtu.be/KnEHr5hwWlA','spiceworks.com/free-software-inventory-audit-tool']]
 cp=[,'El software proporciona apoyo en todo el proceso de auditor\u00EDa con una excelente gesti\u00F3n de la documentaci\u00F3n, estructuras modernas, soluciones innovadoras y un sistema de referencia y archivo flexible para que el trabajo se haga como se debe.',
    'es una aplicacion que nos cuenta que es lo exactamente pasa en la red, como esta configurada y cuando cambia vigente para sistemas con linux y/o windows.',
    'PC Audita, revisa el iventario del software, licencias, seguridad, configuraciones.',
    'buscas una simple manera de administrar el inventario del software, no busques mas!, la administracion del inventario de Spiceworks y las herramientas de auditoria te ayudaran en cuanto a software y licencias se refiere.']
 while(i++<4)$('.A').append('<img src="img/'+(g=igs[i])+(i==3?'.pn':'.jp')+'g" title="'+g+'">'),
  $('<div><H3>'+igs[i]+'</H3><blockquote>'+cp[i]+'<nav><a href=http://'+(s=hs[i])[0]+' target=_blank>manual</a><br><a href=http://www.'+s[1]+' target=_blank>download</a></nav></blockquote></div>').appendTo('.B');i=0
 $('button').click(function(){$('.A').css('width',w[i]+'0%').siblings().css('right',r[i]+'em'), this.innerHTML=h[i], this.style.right=(r[3-(i=i==0?1:0)])+'%'})
 $('.A')[0].style.height=window.innerHeight+'px'
 $('.B div').each(function(){this.style.height=(window.innerHeight-35)+'px'})})
