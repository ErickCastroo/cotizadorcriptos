import { z } from 'zod'

import { CurrencySchema } from '@/schemas/CurrencySchema/index.schema'


export type Currency = z.infer<typeof CurrencySchema>;