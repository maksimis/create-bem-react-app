import React from 'react';

// TODO: https://github.yandex-team.ru/lego/islands/pull/2304
import { decl } from 'islands/common.blocks/i-bem/i-bem.react.js';

import Header from 'b:header2';
import 'b:header2 e:logo m:size=m t:css';
import 'b:logo m:name=ys-ru-86x35|ys-en-87x35 t:css';

import Button from 'b:button2 m:type=check m:theme=clear m:size=m m:pale=yes';
import Icon from 'b:icon m:action=filter|settings|tableau';

import User from 'b:user2 m:fetch-accounts=yes';
import UserAccount from 'b:user-account';

const logoName = process.env.BEM_LANG === 'ru' ? 'ys-ru-86x35' : 'ys-en-87x35';

export default decl({
  block: 'app',
  elem: 'header',
  content() {
    return (
      <Header>
        <Header.Main>
          <Header.Logo name={logoName} size="m" url="//ya.ru" service />
          <Header.Right>
            <Button theme="clear" pale size="m" type="check">
              <Icon action="filter" />
            </Button>
            <Header.Gap />
            <Button theme="clear" pale size="m" type="check">
              <Icon action="settings" />
            </Button>
            <Header.Gap />
            <Button theme="clear" pale size="m" type="check">
              <Icon action="tableau" />
            </Button>
            <Header.Gap />
            <User
              uid="3480219871448714784"
              yu="v1.0_3480219871448714784:1487688256"
              retpath="https://yandex.ru"
              passportHost="https://passport.yandex.ru"
              name="Василий Логиневский"
              avatarId="21377/29991134-1569188"
              unreadCount={25}
            >
              <UserAccount
                pic
                avatarId="21377/28004787-1253930"
                name="Александр Баумгертнер"
                mix={{
                  block: 'user2',
                  elem: 'account',
                  js: { uid: 987654321 },
                }}
              />
              <UserAccount
                pic
                avatarId="0/0-0"
                name="Денис Кузнецов"
                mix={{
                  block: 'user2',
                  elem: 'account',
                  js: { uid: 123456789 },
                }}
              />
            </User>
          </Header.Right>
        </Header.Main>
      </Header>
    );
  },
});
