import axios from 'axios';

// Map country codes to currency codes
const countryToCurrency = {
  US: 'USD',
  IN: 'INR',
  GB: 'GBP',
  CA: 'CAD',
  AU: 'AUD',
  EU: 'EUR',
  JP: 'JPY',
  CN: 'CNY',
  SG: 'SGD',
  AE: 'AED',
  ZA: 'ZAR',
  BR: 'BRL',
  RU: 'RUB',
  KR: 'KRW',
  MX: 'MXN',
  NG: 'NGN',
  NZ: 'NZD',
  CH: 'CHF',
  SE: 'SEK',
  // Add more as needed
};

/**
 * Detects user's country using IP and returns default currency code.
 * @returns {Promise<string>} A currency code like 'INR', 'USD', etc.
 */
export const detectUserCurrency = async () => {
  try {
    const response = await axios.get('https://ipapi.co/json/');
    const countryCode = response.data.country;

    const currency = countryToCurrency[countryCode] || 'USD'; // fallback to USD
    console.log(`Detected country: ${countryCode}, currency: ${currency}`);
    return currency;
  } catch (error) {
    console.error('Error detecting user currency:', error.message);
    return 'USD'; // fallback
  }
};
