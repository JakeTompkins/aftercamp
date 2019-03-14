# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20190314015202) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "applications", force: :cascade do |t|
    t.string "cover_letter"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "employers", force: :cascade do |t|
    t.string "industry"
    t.string "company_name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "grads", force: :cascade do |t|
    t.string "camp"
    t.string "github"
    t.integer "target_salary"
    t.string "stack"
    t.date "graduation_date"
    t.string "cv"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "jobs", force: :cascade do |t|
    t.string "role"
    t.string "description"
    t.string "salary_range"
    t.bigint "employer_id"
    t.string "location"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["employer_id"], name: "index_jobs_on_employer_id"
  end

  create_table "offers", force: :cascade do |t|
    t.integer "salary"
    t.string "message"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "responses", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "job_id"
    t.string "responseable_type"
    t.bigint "responseable_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["job_id"], name: "index_responses_on_job_id"
    t.index ["responseable_type", "responseable_id"], name: "index_responses_on_responseable_type_and_responseable_id"
    t.index ["user_id"], name: "index_responses_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email"
    t.string "password_digest"
    t.string "location"
    t.string "linkedin"
    t.string "introduction"
    t.string "avatar"
    t.string "roleable_type"
    t.bigint "roleable_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["roleable_type", "roleable_id"], name: "index_users_on_roleable_type_and_roleable_id"
  end

  add_foreign_key "jobs", "employers"
  add_foreign_key "responses", "jobs"
  add_foreign_key "responses", "users"
end
