import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

export const i18n = new VueI18n({
	locale: 'de',
	fallbackLocale: 'en',
	messages: {
		en: {
			subheadline: 'Just get IOTA',
			iota_is_free: 'IOTA is feeless!',
			tx_on_thetangle: 'Watch transaction on',
			how_it_works: 'How does the faucet work?',
			available_tokens: 'Available Tokens:',
			fill: 'Fill the Faucet',
			spend_iota: 'Get IOTAs',
			transaction_address: 'You can follow the transaction at',
			transaction_address1: '.',
			transaction_sent: 'Transaction sent:',
			data_without_token: 'Data can be sent without the possession of IOTA token!',
			send: 'Send',
			transaction_request_sent: 'Transaction is being sent...',
			curl: 'You can also use this curl command to get tokens (replace address and value):',
			form: {
				address_label: 'address',
				amount: 'amount',
				message: 'Message',
				message_placeholder: 'Message (optional)',
				err: {
					add_address: 'Please enter an IOTA address.',
					inv_address: 'This is not a valid IOTA address.',
					inv_checksum: 'Invalid checksum!',
					inv_value: 'Please enter a number as value.',
					max_val: 'Maximum is '
				}
			},
			about: {
				heading: 'The IOTA faucet explained',
				subheading: 'Just get IOTA tokens!',
				faucetlink: 'Faucet Code on Github.',
				modulelink1: 'The ',
				modulelink2: 'iota-payment module ',
				modulelink3: 'runs in the background.'
			},
			footer: {
				col_1: {
					title: 'Tangle Bay',
					link1: 'SWARM',
					link2: 'Entrynodes',
					link3: 'Local Snapshots',
					link4: 'Status'
				},
				col_2: {
					title: 'Partners',
					link1: 'einfachIOTA.de'
				},
				col_3: {
					title: 'IOTA',
					link1: 'Website',
					link2: 'Blog',
					link3: 'Status'
				},
				copyright: 'Provided with',
				imprint: 'Legal Notice',
				privacy: 'Privacy Policy'
			}
		},
		de: {
			subheadline: 'Erhalte einfach IOTA',
			iota_is_free: 'IOTA ist gebührenfrei!',
			tx_on_thetangle: 'Verfolge die Transaktion auf',
			how_it_works: 'Wie funktioniert das Faucet?',
			available_tokens: 'Verfügbare Tokens:',
			fill: 'Fülle das Faucet',
			spend_iota: 'nodeSpende IOTA',
			transaction_address: 'Du kannst die Transaktion auf',
			transaction_address1: 'verfolgen.',
			transaction_sent: 'Transaktion gesendet:',
			data_without_token: 'Daten können ohne den Besitz von IOTA Token versendet werden!',
			send: 'Sende',
			transaction_request_sent: 'Transaktion wird gesendet...',
			curl: 'Du kannst auch den curl Befehl benutzen um Tokens zu bekommen (ersetze die Adresse und den Wert):',
			form: {
				address_label: 'Adresse',
				amount: 'Menge',
				message: 'Nachricht',
				message_placeholder: 'Nachricht (optional)',
				err: {
					add_address: 'Bitte gib eine IOTA Adresse an.',
					inv_address: 'Dies ist keine gültige IOTA Adresse.',
					inv_checksum: 'Ungültige Checksumme!',
					inv_value: 'Bitte gib eine Zahl als Wert an.',
					max_val: 'Maximum ist '
				}
			},
			about: {
				heading: 'Das IOTA Faucet erklärt',
				subheading: 'Sende einfach IOTA Tokens!',
				faucetlink: 'Faucet Code auf Github.',
				modulelink1: 'Im Hintergrund läuft das',
				modulelink2: ' iota-payment Module',
				modulelink3: '.'
			},
			footer: {
				col_1: {
					title: 'Tangle Bay',
					link1: 'SWARM',
					link2: 'Entrynodes',
					link3: 'Local Snapshots',
					link4: 'Status'
				},
				col_2: {
					title: 'Partner',
					link1: 'einfachIOTA.de',
				},
				col_3: {
					title: 'IOTA',
					link1: 'Webseite',
					link2: 'Blog',
					link3: 'Status'
				},
				copyright: 'Betrieben mit',
				imprint: 'Impressum',
				privacy: 'Datenschutz'
			}
		}
	}
});
