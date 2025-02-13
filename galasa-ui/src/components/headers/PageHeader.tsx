/*
 * Copyright contributors to the Galasa project
 *
 * SPDX-License-Identifier: EPL-2.0
 */
'use client';

import { Header, HeaderName, SkipToContent, Theme, HeaderNavigation, HeaderMenuItem } from '@carbon/react';
import PageHeaderMenu from "./PageHeaderMenu";
import Image from 'next/image';
import galasaLogo from "@/assets/images/galasaLogo.png";
import Link from 'next/link';

export default function PageHeader({ galasaServiceName }: { galasaServiceName: string }) {

  return (
    <Theme theme="g90">
      <Header aria-label="Galasa Ecosystem">

        <SkipToContent />

        <Link href={"/"} style={{"paddingLeft" : "0.5rem"}}>
          <Image
            src={galasaLogo}
            width={28}
            height={28}
            alt='Galasa logo'
          />
        </Link>

        <HeaderName href="/" prefix="">Galasa</HeaderName>

        <HeaderNavigation>
          <HeaderMenuItem href="/users">Users</HeaderMenuItem>
        </HeaderNavigation>

        <PageHeaderMenu galasaServiceName={galasaServiceName} />

      </Header>
    </Theme>
  );

};