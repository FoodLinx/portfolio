import util from 'util';
import { Schema } from 'mongoose';

export default function BaseSchema() {
    Schema.apply(this, arguments);

    this.add({
        createdAt: {
            type: Date,
            default: Date.now()
        },
        updatedAt: {
            type: Date,
            default: Date.now()
        }
    });
}
util.inherits(BaseSchema, Schema);
