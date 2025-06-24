import React, { useRef } from 'react';
import { Flex, Button } from '@chakra-ui/react';
import { useReactToPrint } from 'react-to-print';
import { RiContactsBook3Fill } from 'react-icons/ri';
import { TiPrinter } from 'react-icons/ti';

import Profile from '../assets/imgs/profile_1.jpg';

import { Tooltip } from '../components/ui/tooltip';
import { personal_curriculumn_vitae } from '../constants/data';

import TemplateOne from '../layouts/TemplateOne';

export default function Index() {
	const printRef = useRef<HTMLDivElement>(null);

	const reactToPrintFn = useReactToPrint({
		contentRef: printRef,
	});

	const downloadContact = () => {
		const vcard = `
			BEGIN:VCARD
			VERSION:3.0
			N:${personal_curriculumn_vitae.first_name};${personal_curriculumn_vitae.last_name};;;
			FN:${personal_curriculumn_vitae.first_name}
			LN:${personal_curriculumn_vitae.last_name}
			TEL;TYPE=CELL:+855${personal_curriculumn_vitae.telephone.startsWith('0') ? personal_curriculumn_vitae.telephone.substring(1).replaceAll(' ', '') : personal_curriculumn_vitae.telephone.replaceAll(' ', '')
			}
			EMAIL:${personal_curriculumn_vitae.email}
			TITLE:${personal_curriculumn_vitae.work_experience[0].position}
			URL:${window.location.href}
			END:VCARD
			`.trim();

		const blob = new Blob([vcard], { type: 'text/vcard' });
		const url = URL.createObjectURL(blob);

		const a = document.createElement('a');
		a.href = url;
		a.download = 'John_Doe.vcf';
		a.click();

		URL.revokeObjectURL(url);
	};

	return (
		<Flex w='100%' justifyContent='start' alignItems='center' flexDirection={{ base: 'row', md: 'column' }} p='5' gapY={4}>
			<Tooltip showArrow content='Print' positioning={{ placement: 'left' }} openDelay={0} closeDelay={100}>
				<Button
					onClick={reactToPrintFn}
					display={{ base: 'none', sm: 'block' }}
					className='print-button'
					zIndex='2000'
					bgColor='#547792'
					shadow='2xl'
					position='fixed'
					h='3.5rem'
					w='3.5rem'
					borderRadius='50%'
					bottom='80px'
					right='15px'
				>
					<TiPrinter color='white' />
				</Button>
			</Tooltip>
			<Tooltip showArrow content='Save contact' positioning={{ placement: 'left' }} openDelay={0} closeDelay={100}>
				<Button
					onClick={downloadContact}
					className='contact-button'
					zIndex='2000'
					bgColor='#547792'
					shadow='2xl'
					position='fixed'
					h='3.5rem'
					w='3.5rem'
					borderRadius='50%'
					bottom='15px'
					right='15px'
				>
					<RiContactsBook3Fill color='white' />
				</Button>
			</Tooltip>
			<TemplateOne profile={Profile} personalData={personal_curriculumn_vitae} />
			<TemplateOne printRef={printRef} profile={Profile} personalData={personal_curriculumn_vitae} />
		</Flex>
	);
}
